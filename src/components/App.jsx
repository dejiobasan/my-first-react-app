import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import  notes  from "../notes.js"


function createNotes(notesTerm) {
    return <Note 
        key = {notesTerm.id}
        title = {notesTerm.tilte}
        content = {notesTerm.content}
    />;
}

function App(){
    return (
    <div>
        <Header />
        {notes.map(createNotes)}
        <Footer />
    </div>
    );
}


export default App;