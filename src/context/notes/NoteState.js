import React, { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "s5g1f5151f3515135f115f1",
            "user": "sd5f15sd1f51516543515",
            "title": "MKS",
            "description": "Hey I am MKS",
            "tag": "personal",
            "date": "05-12-2021",
            "_v": 0
        },
        {
            "_id": "515s1515151d51515151c15",
            "user": "53fg51351g3512g153d135",
            "title": "Sniper",
            "description": "Hey I am Sniper",
            "tag": "react",
            "date": "07-12-2021",
            "_v": 0
        },
        {
            "_id": "s5g1f5151f3515d135f115f1",
            "user": "sd5f15sd1f51516543515",
            "title": "MKS",
            "description": "Hey I am MKS",
            "tag": "personal",
            "date": "05-12-2021",
            "_v": 0
        },
        {
            "_id": "515s1515151d5n1515151c15",
            "user": "53fg51351g3512g153d135",
            "title": "Sniper",
            "description": "Hey I am Sniper",
            "tag": "react",
            "date": "07-12-2021",
            "_v": 0
        },
        {
            "_id": "s5g1f5151f351s5135f115f1",
            "user": "sd5f15sd1f51516543515",
            "title": "MKS",
            "description": "Hey I am MKS",
            "tag": "personal",
            "date": "05-12-2021",
            "_v": 0
        },
        {
            "_id": "515s1515151d515h15151c15",
            "user": "53fg51351g3512g153d135",
            "title": "Sniper",
            "description": "Hey I am Sniper",
            "tag": "react",
            "date": "07-12-2021",
            "_v": 0
        },
        {
            "_id": "s5g1f5151f35151r35f115f1",
            "user": "sd5f15sd1f51516543515",
            "title": "MKS",
            "description": "Hey I am MKS",
            "tag": "personal",
            "date": "05-12-2021",
            "_v": 0
        },
        {
            "_id": "515s1515151d515d15151c15",
            "user": "53fg51351g3512g153d135",
            "title": "Sniper",
            "description": "Hey I am Sniper",
            "tag": "react",
            "date": "07-12-2021",
            "_v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title,description,tag) =>{
        // Todo: API call
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
    const deleteNote = (id) =>{
        // Todo: API call
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
    }

    // Edit a Note
    const editNote = (id,title,description,tag) =>{
        
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;