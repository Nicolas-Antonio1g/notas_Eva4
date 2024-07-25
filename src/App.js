import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    const addNote = (note) => {
        const newNotes = [...notes, note];
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Sticky Notes</h1>
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
};

export default App;