import React, { useState } from 'react';
import { validateDescription } from './Validaciones';
import './App.css';


const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [important, setImportant] = useState(false);
    const [descriptionError, setDescriptionError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const error = validateDescription(text);
        if (error) {
            setDescriptionError(error);
            return;
        }

        
        addNote({ title, text, important });
        setTitle('');
        setText('');
        setImportant(false);
        setDescriptionError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="titleInput"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="descriptionInput"
                            placeholder="Descripción"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                                setDescriptionError('');
                            }}
                        />
                        {descriptionError && <div className="text-danger">{descriptionError}</div>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="importantCheck"
                            checked={important}
                            onChange={(e) => setImportant(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="importantCheck">Importante</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button type="submit" className="btn btn-primary">Agregar Nota</button>
                </div>
            </div>
        </form>
    );
};

export default NoteForm;





