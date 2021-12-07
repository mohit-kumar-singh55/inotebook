const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');        // express validator package for validation

const router = express.Router();                                    // Express having a built in route

// Create a user using: POST "/api/auth/"  Doesn't require Auth
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], (req, res) => {
    // copied this code from express validator docs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
    .catch(err => {console.log(err)
        res.json({error:'please enter unique value for email'})})
})

module.exports = router;