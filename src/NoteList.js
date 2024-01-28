import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, onSelectNote, selectedNoteIndex }) => {
  return (
    <div className="noteListContainer">
      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            onClick={() => onSelectNote(index)}
            className={index === selectedNoteIndex ? 'activeNote' : ''}
          >
            {note.title.startsWith('.') ? note.title.slice(1) : note.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
