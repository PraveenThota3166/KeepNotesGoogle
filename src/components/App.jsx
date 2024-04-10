import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }
  function giveNote(a) {
    return <Note title={a.title} content={a.content} />;
  }
  function deleteNote(a) {
    setNotes((prev, ind) => {
      return prev.filter((noteItem, ind) => {
        return ind !== a;
      });
    });

    //event.preventDefault();
    //console.log("delete");
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem, ind) => {
        return (
          <Note
            key={ind}
            id={ind}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={deleteNote}
          />
        );
      })}
      
      <Footer />
    </div>
  );
}

export default App;
