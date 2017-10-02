import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import userSignup from './userSignup';

export default combineReducers({
    flashMessages, //flashMessages: flashMessages
    userSignup
});

