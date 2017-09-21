import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = (data) => {
    const errors = {};
    
        if (validator.isEmpty(data.username)) {
            errors.username = 'This field is required';
        }
    
        if (validator.isEmpty(data.email)) {
            errors.email = 'This field is required';
        }
    
        if (!validator.isEmail(data.email)) {
            errors.email = 'Email is invalid';
        }
    
        if (validator.isEmpty(data.password)) {
            errors.password = 'This field is required';
        }
    
        if (validator.isEmpty(data.passwordConfirmation)) {
            errors.passwordConfirmation = 'This field is required';
        }
    
        if (!validator.equals(data.password, data.passwordConfirmation)) {
            errors.passwordConfirmation = 'password must match';
        }
    
        if (validator.isEmpty(data.timezone)) {
            errors.timezone = 'This field is required';
        }
    
        return {
            errors, //shorthand of errors: errors
            isValid: isEmpty(errors)
        };
};

export default validateInput;
