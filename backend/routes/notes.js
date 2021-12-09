const express = require("express");
const { body, validationResult } = require('express-validator');
const Notes = require("../models/Notes");
const fetchuser = require('../middleware/fetchuser');

const router = express.Router();

// ROUTE 1: Get  all the Notes using: GET "/api/auth/fetchallnotes"  Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})


// ROUTE 2: Add a new Note using: POST "/api/auth/addnote"  Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be at least 6 characters').isLength({ min: 6 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // if there are error returrn bad request and the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();

        res.json(savedNote);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;