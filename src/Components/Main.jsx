import React, { useState } from "react";
import "../App.css";

function Main() {
  const [list, setList] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addTask = (e) => {
   
    if (e.target.parentElement.firstElementChild.value === "") {
      alert("Enter the NOTE ");
    } else {
      setList([...list, {  note: newNote, complated: false }]);
      setNewNote("");
    }
  };

  
  

  return (
    <main className="container">
      <section className="input">
        <nav className="input-text-box">
          <input
            autoFocus
            type="text"
            name="text"
            id="input-text"
            required
            onChange={(e) => setNewNote(e.target.value)}
            value={newNote}
            ref={(input) => input && input.focus()}
            onKeyDown={(e) => e.key === "Enter" && addTask(e)}
         
          />
          <button id="add" className="add" onClick={addTask} type="submit">
            Add
          </button>

         



        </nav>
      </section>

      <section className="list-container">
      
         
          <nav className="card-body">
            <ul id="list">
              {list.map((item) => (
                <li
                  key={item.id}
                  
                  className={item.complated ? "fixed" : ""}
                >
                  {item.note}
                </li>
              ))}
            </ul>
          </nav>
      
      </section>
    </main>
  );
}

export default Main;
