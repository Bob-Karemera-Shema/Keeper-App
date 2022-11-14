import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateNote from "./CreateNote";

function App(){

    let [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    return (<div>
        <Header/>
        <CreateNote onAdd={addNote}/>
        {notes.map( (note, index) => (<Note 
            key={index}
            title={note.title}
            content={note.content}
        />))}
        <Footer/>
    </div>);
}

export default App;