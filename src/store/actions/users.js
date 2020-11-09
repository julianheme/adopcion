import * as ActionTypes from "./ActionTypes";
import firebase from "../../instances/firebase";

const database = firebase.database();

const getUser = (user) => {
	return {
		type: ActionTypes.GET_USER,
		payload: {
			user,
		},
	};
};

const getPets = (pets) => {
	return {
		type: ActionTypes.GET_PETS,
		payload: {
			pets,
		},
	};
};

const addUsuario = (user) => {
	return {
		type: ActionTypes.ADD_USER,
		payload: {
			user,
		},
	};
};

export const fetchUser = (uid) => {
	return (dispatch) => {
		var ref = database.ref(`Users/${uid}`);
		let user = {
			uid,
		};
		ref.once(
			"value",
			function (snapshot) {
				user = {
					...user,
					...snapshot.val(),
				};
				dispatch(getUser(user));
			},
			function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			}
		);
	};
};

export const getMascotas = (uid) => {
	return (dispatch) => {
		var ref = database.ref(`Users/${uid}/Pets`);
		ref.once(
			"value",
			function (snapshot) {
				let pets = {
					...snapshot.val(),
				};
				console.log(pets);
				dispatch(getPets(pets));
			},
			function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			}
		);
	};
};

export const addUser = (user, uid) => {
	return (dispatch) => {
		database.ref("Users/" + uid).set(user);
	};
};

export const addPet = (petId, pet, uid) => {
	console.log(uid);
	return (dispatch) => {
		database.ref("Users/" + uid + "/Pets/" + petId + "/").set(pet);
	};
};
