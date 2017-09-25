
import axios from 'axios';

import { 
    SIGNUP_USER_PROGRESS,
    SIGNUP_USER_SUCCESS,
    SERVER_LOGIC_ERRORS,
    HTTP_ERRORS
} from './types';

/*
export const userSignupRequest = (userData) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER_PROGRESS });
        return axios.post('api/users', userData)
        .then((response) => {
            dispatch(response);
        })
        .catch((error) => {
            console.log(JSON.stringify(error.response.data));
            dispatch(error.response.data);
        });
    };
};
*/

export const userSignupRequest = (userData) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER_PROGRESS });
        return axios.post('api/users', userData)
        .then((response) => {
            signupUserSuccess(dispatch, response);
        })
        .catch((error) => {
            console.log(JSON.stringify(error.response.data));
            signupUserFailed(dispatch, error.response.data);
            httpErrorDetail(dispatch, error.response);
        });
    };
};


const signupUserSuccess = (dispatch, responseData) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: responseData
    });
    
    //router action
};

const signupUserFailed = (dispatch, errorData) => {
    dispatch({
        type: SERVER_LOGIC_ERRORS,
        payload: errorData
    });
};

const httpErrorDetail = (dispatch, errorDetail) => {
    dispatch({
        type: HTTP_ERRORS,
        payload: errorDetail
    });
};

