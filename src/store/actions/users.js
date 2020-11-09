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

export const addUser = (user, uid) => {
	return (dispatch) => {
		database.ref("Users/" + uid).set(user);
	};
};

export const addPet = (petId, pet, uid) => {
	return (dispatch) => {
		database.ref("Users/" + uid + "/Pets/" + petId + "/").set(pet);
	};
};

export const rmPet = (petId, uid) => {
	return (dispatch) => {
		database.ref("Users/" + uid + "/Pets/" + petId).remove();
	};
};
