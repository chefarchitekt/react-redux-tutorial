import express from 'express';
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const router = express.Router();

const validateInput = (data) => {
    const errors = {};

    if (validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
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

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body); //return isValida or errors

    if (!isValid) {
        res.status(400).json(errors);
    }

    console.log(req.body);
});

export default router;
