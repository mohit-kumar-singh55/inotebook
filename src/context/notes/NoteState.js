import React, { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiNjA0OTIyZWEzYzBhZGM3ZTcxNTU5In0sImlhdCI6MTYzOTMxOTc4Mn0.40XHCCxlm1P0nzZpuoaRf5VrtUhjHoIAKV2lk3A3TaE'
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiNjA0OTIyZWEzYzBhZGM3ZTcxNTU5In0sImlhdCI6MTYzOTMxOTc4Mn0.40XHCCxlm1P0nzZpuoaRf5VrtUhjHoIAKV2lk3A3TaE'
            },
            body: JSON.stringify({ title, description, tag })
        });

        let note = {
            "_id": "515s1515fh151d515d15151c15",
            "user": "53fg51351g3512g153d135",
            "title": title,
            "description": description,
            "tag": "react",
            "date": "07-12-2021",
            "_v": 0
        };
        setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiNjA0OTIyZWEzYzBhZGM3ZTcxNTU5In0sImlhdCI6MTYzOTMxOTc4Mn0.40XHCCxlm1P0nzZpuoaRf5VrtUhjHoIAKV2lk3A3TaE'
            }
        });
        const json = response.json();
        console.log(json);

        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiNjA0OTIyZWEzYzBhZGM3ZTcxNTU5In0sImlhdCI6MTYzOTMxOTc4Mn0.40XHCCxlm1P0nzZpuoaRf5VrtUhjHoIAKV2lk3A3TaE'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;