import {
    ADD_FLASH_MESSAGE
} from './types';

export const addFlashMessage = (message) => {
    return (dispatch) => {
        dispatch({
            type: ADD_FLASH_MESSAGE,
            payload: message
        });
    };
};
