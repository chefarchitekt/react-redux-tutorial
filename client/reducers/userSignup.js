import {
    SIGNUP_INPUT,
    SIGNUP_USER_PROGRESS,
    SIGNUP_USER_SUCCESS,
    SERVER_LOGIC_ERRORS,
    CLIENT_LOGIC_ERRORS
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    timezone: '',
    isLoading: false,
    input_errors: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        timezone: ''
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_INPUT:
            return { ...state, [action.payload.prop]: action.payload.value };
        case SIGNUP_USER_PROGRESS:
            return { ...state, isLoading: true };
        case CLIENT_LOGIC_ERRORS:
            return { ...state, input_errors: action.payload, isLoading: false, httpStatus: 'failed' };
        case SERVER_LOGIC_ERRORS:
            return { ...state, input_errors: action.payload, isLoading: false, httpStatus: 'failed' };
        case SIGNUP_USER_SUCCESS:
            return { ...INITIAL_STATE, isLoading: false, httpStatus: 'success' };
        default:
            return { ...state, isLoading: false };
    }
};
