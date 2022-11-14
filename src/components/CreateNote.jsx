import React, {useState} from "react";

function CreateNote(props) {

    let [note, setNote]=useState({
        title: "",
        content: ""
    });

    function updateNote(event){
        let {name, value} = event.target;

        setNote(prevNote => {
            return {
            ...prevNote,
            [name]: value
        }});
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
        setNote(() => {
            return{
                title: "",
                content: ""
            }
        });
    }

    return (
        <div>
            <form>
                <input onChange={updateNote} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={updateNote} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateNote;