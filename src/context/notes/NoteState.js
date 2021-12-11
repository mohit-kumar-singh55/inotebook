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
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;