import * as ActionTypes from "./ActionTypes";
import firebase from "../../instances/firebase";
import * as errors from "./error";
import * as users from "./users";

const startAuthLoading = () => {
	return {
		type: ActionTypes.START_LOADING_AUTH,
	};
};

const endAuthLoading = () => {
	return {
		type: ActionTypes.END_LOADING_AUTH,
	};
};

const saveSession = (userName, token, uid) => {
	return {
		type: ActionTypes.LOGIN,
		payload: {
			userName: userName,
			idToken: token,
			uid: uid,
		},
	};
};

const cerrarSesion = () => {
	return {
		type: ActionTypes.LOG_OUT,
	};
};

const SignUp = (userName, token, localId) => {
	return {
		type: ActionTypes.SIGN_UP,
		payload: {
			userName: userName,
			idToken: token,
			localId: localId,
		},
	};
};

export const signUp = (user, onSuccessCallback) => {
	return (dispatch) => {
		dispatch(startAuthLoading());
		const { email, password } = user;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function (response) {
				const uid = response.user.uid;
				const token = response.user.token;
				let userSession = {
					token,
					email,
					uid,
				};
				userSession = JSON.stringify(userSession);
				localStorage.setItem("userSession", userSession);

				dispatch(saveSession(email, token, uid));
				dispatch(users.addUser(user, uid));
				dispatch(endAuthLoading());
				if (onSuccessCallback) {
					onSuccessCallback();
				}
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				dispatch(errors.saveError(errorMessage));
				// ...
			});
	};
};

export const logIn = (authData, onSuccessCallback) => {
	return (dispatch) => {
		dispatch(startAuthLoading());
		const { email, password } = authData;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(function (result) {
				const uid = result.user.uid;
				const token = result.user.token;
				let userSession = {
					token,
					email,
					uid,
				};
				userSession = JSON.stringify(userSession);
				localStorage.setItem("userSession", userSession);

				dispatch(saveSession(email, token, uid));
				dispatch(endAuthLoading());
				if (onSuccessCallback) {
					onSuccessCallback();
				}
			})
			.catch(function (error) {
				// Handle Errors
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				dispatch(errors.saveError(errorMessage));
				dispatch(endAuthLoading());
			});
	};
};

export const logOut = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signOut()
			.then(function () {
				console.log("logout");
				localStorage.removeItem("userSession");
				dispatch(cerrarSesion());
			})
			.catch(function (error) {
				// An error happened.
				const errorMessage = error.message;
				console.log(errorMessage);
				dispatch(errors.saveError(errorMessage));
			});
	};
};

export const persistAuthentication = () => {
	return (dispatch) => {
		let userSession = localStorage.getItem("userSession");

		if (!userSession) {
			dispatch(logOut());
		} else {
			userSession = JSON.parse(userSession);

			dispatch(saveSession(userSession.email, userSession.token, userSession.uid));
		}
	};
};
