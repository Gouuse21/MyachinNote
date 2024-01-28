// NoteEditor.js
import React from 'react';
import './NoteEditor.css';

const NoteEditor = ({ note, onChangeNote, onSaveNote }) => {
  const handleTitleChange = (e) => {
    onChangeNote({
      ...note,
      title: e.target.value,
    });
  };

  const handleContentChange = (e) => {
    onChangeNote({
      ...note,
      content: e.target.value,
    });
  };

  return (
    <div className="noteEditor">
      <div className="noteDetails">
        <div className="UpName">
          <input
            type="text"
            value={note.title}
            onChange={handleTitleChange}
            placeholder="Введите название заметки"
            className="noteTitleInput"
          />
          <button onClick={onSaveNote} className="saveNoteButton">
            Сохранить
          </button>
        </div>
        <textarea
          value={note.content}
          onChange={handleContentChange}
          placeholder="Введите текст заметки" //код писал Мячин Никита
          className="noteContentInput"
        />
      </div>
    </div>
  );
};

export default NoteEditor;
