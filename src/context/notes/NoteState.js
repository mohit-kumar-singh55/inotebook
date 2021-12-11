import React, { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "MKS",
        "age": "18"
    }

    const [state, setstate] = useState(s1)

    const update = () => {
        setTimeout(() => {
            setstate({ "name": "Sniper", "age": "15" })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;