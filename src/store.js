import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./store/reducers/auth";
import errorReducer from "./store/reducers/error";
import userReducer from "./store/reducers/users";

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
	authStore: authReducer,
	errorStore: errorReducer,
	userStore: userReducer,
});
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
