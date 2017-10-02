
import axios from 'axios';

import { 
    SIGNUP_USER_PROGRESS,
    SIGNUP_USER_SUCCESS,
    SIGNUP_INPUT,
    SERVER_LOGIC_ERRORS,
    CLIENT_LOGIC_ERRORS,
    HTTP_ERRORS,
    ADD_FLASH_MESSAGE
} from './types';

export const signupUserInput = ({ prop, value }) => {
    return ({ //no need for dispatch as it is not asynch
        type: SIGNUP_INPUT,
        payload: { prop, value }
    });
};


export const signupUserInputError = (errors) => {
    return ({
        type: CLIENT_LOGIC_ERRORS,
        payload: errors
    });
};

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

export const userSignupRequest = ({ 
                username, 
                email, 
                password, 
                passwordConfirmation, 
                timezone
            }, context) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER_PROGRESS });
        return axios.post('api/users', { 
                username, 
                email, 
                password, 
                passwordConfirmation, 
                timezone
            })
        .then((response) => {
            signupUserSuccess(dispatch, response, context);
            addFlashMessage(dispatch);
        })
        .catch((error) => {
            console.log(JSON.stringify(error.response.data));
            httpErrorDetail(dispatch, error.response);
            signupUserFailed(dispatch, error.response.data);
        });
    };
};


const signupUserSuccess = (dispatch, responseData, context) => {
   dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: responseData
    });
    
    //router action
    context.router.push('/');
};

const addFlashMessage = (dispatch) => {
    dispatch({
        type: ADD_FLASH_MESSAGE,
        payload: {
            type: 'success',
            text: 'Successful signup'
        }
    });
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

