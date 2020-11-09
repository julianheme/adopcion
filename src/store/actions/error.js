import * as ActionTypes from './ActionTypes';

const setError = (error) => {
    return {
        type: ActionTypes.SET_ERROR,
        payload:{
            error
        }
    }
}
const clearErr = () => {
    return {
        type: ActionTypes.CLEAR_ERROR
    }
}

export const saveError = error => {
    return dispatch => {
        dispatch(setError(error));
       
    }
};

export const clearError = () => {
    return dispatch => {
        dispatch(clearErr());
       
    }
};