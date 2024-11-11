import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notes = () => {
  const [currentNote, setCurrentNote] = useState(null);
  const [newNoteShow, setNewNoteShow] = useState(false);
  const [title, setTitle] = useState("");
  const store = window.localStorage;

  const handleNewNote = () => {
    setNewNoteShow(true);
  };

  const handleNoteClick = (note) => {
    setCurrentNote(note);
  };

  const handleNewTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    store.setItem(title, "");
    setNewNoteShow(false);
    setCurrentNote([title, store.getItem(title)]);
  };

  const handleTextChange = (event) => {
    setCurrentNote([
      currentNote[0],
      store.setItem(currentNote[0], event.target.value),
    ]);
  };

  const handleNoteDelete = () => {
    store.removeItem(currentNote[0]);
    setCurrentNote(null);
  };

  return (
    <div className="notes-container">
      <div className="left-column">
        <div className="add-remove-btns">
          <div className="add-note">
            <FontAwesomeIcon onClick={handleNewNote} icon="plus-square" />
          </div>

          <div className="delete-note">
            <FontAwesomeIcon onClick={handleNoteDelete} icon="trash-alt" />
          </div>
        </div>

        <div className="headers-wrapper">
          {Object.entries(store).map((note) => (
            <div
              className="header"
              key={note[0]}
              onClick={() => handleNoteClick(note)}
            >
              <div className="note-title">{note[0]}</div>
              <div className="note-content">{note[1].slice(0, 10)}...</div>
            </div>
          ))}
        </div>
      </div>

      <div className="right-column">
        {currentNote === null || newNoteShow === true ? null : (
          <textarea
            onChange={handleTextChange}
            value={store.getItem(currentNote[0])}
          />
        )}

        {newNoteShow ? (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="new-note-title">
                <input
                  onChange={handleNewTitleChange}
                  type="text"
                  placeholder="Note title"
                />
              </div>

              <div className="new-note-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Notes;
