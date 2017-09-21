import express from 'express';

import validateInput from '../validations/validateInput';

const router = express.Router();
router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body); //return isValid or errors

    if (!isValid) {
        console.log(errors);
        res.status(400).json(errors);
    }

    console.log(req.body);
});

export default router;
