import * as ActionTypes from "../actions/ActionTypes";
import updateObject from "../utility";

const initialState = {
	isUserLoggedIn: false,
	user: {
		userName: "",
		idToken: "",
		uid: "",
	},
	loadingAuth: false,
};
const logOut = (state, action) => {
	return updateObject(state, {
		isUserLoggedIn: false,
		user: {
			userName: "",
			idToken: "",
			uid: "",
		},
	});
};
const login = (state, action) => {
	const { payload } = action;
	return updateObject(state, {
		isUserLoggedIn: true,
		user: {
			userName: payload.userName,
			idToken: payload.idToken,
			uid: payload.uid,
		},
	});
};

const signUp = (state, action) => {
	return updateObject(state, {
		isUserLoggedIn: true,
		userLoggedIn: {
			userName: action.payload.userName,
			idToken: action.payload.idToken,
			uid: action.payload.uid,
		},
	});
};

const startLoading = (state, action) => {
	return updateObject(state, { loadingAuth: true });
};

const endLoading = (state, action) => {
	return updateObject(state, { loadingAuth: false });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.LOGIN:
			return login(state, action);
		case ActionTypes.SIGN_UP:
			return signUp(state, action);
		case ActionTypes.LOG_OUT:
			return logOut(state, action);
		case ActionTypes.START_LOADING_AUTH:
			return startLoading(state, action);
		case ActionTypes.END_LOADING_AUTH:
			return endLoading(state, action);
		default:
			return state;
	}
};

export default reducer;
