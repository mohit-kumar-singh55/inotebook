import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

export const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { note } = props;
    const { deleteNote } = context;

    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa fa-trash-alt mx-2" aria-hidden="true" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa fa-edit mx-2" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
