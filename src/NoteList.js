import React from 'react';

const NoteList = ({ notes }) => {
    return (
        <div className="row">
            {notes.map((note, index) => (
                <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-12 mb-4"
                >
                    <div className={`note p-3 rounded ${note.important ? 'important' : ''}`}>
                        <h5>{note.title || 'Sin Título'}</h5>
                        <p>{note.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
