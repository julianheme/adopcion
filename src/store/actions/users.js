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
		console.log("fetch");
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

export const addUser = (user, uid) => {
	return (dispatch) => {
		database.ref("Users/" + uid).set(user);
	};
};
