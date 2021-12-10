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


// ROUTE 3: Update an existing Note using: PUT "/api/auth/updatenote"  Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        // Create a newNote Object
        const newNote = {};
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Check if this note belongs to the requested user
        if (req.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Notes.findByIdAndUpdate(req.param.id, { $set: newNote }, { new: true });
        res.json({ note });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})


// ROUTE 3: Delete an existing Note using: DELETE "/api/auth/deletenote"  Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {
        // find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (req.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Notes.findByIdAndDelete(req.param.in);
        res.json({ "Success": "Note has been deleted" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;