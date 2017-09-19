
import axios from 'axios';

import { 
    SIGNUP_USER_PROGRESS
} from './types';

export function userSignupRequest(userData) {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER_PROGRESS });
        return axios.post('api/users', userData);
    };
}

