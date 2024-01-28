// NoteApp.js
import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './NoteApp.css'; // Подключаем стили

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Загрузка заметок из localStorage при монтировании компонента
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    // Сохранение заметок в localStorage при изменении
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index);
  };

  const handleChangeNote = (updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNoteIndex] = updatedNote;
    setNotes(updatedNotes);
  };

  const handleSaveNote = () => {
    setNotification('Заметка сохранена');
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const handleCreateNote = () => {
    const newNote = { title: 'Новая заметка', content: '' };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setSelectedNoteIndex(newNotes.length - 1);
  };

  return (
    <div className="noteAppContainer">
      <div className="Back">
        <div className="MyachinNote">Myachin <br /> Note</div>
        <div className="UpBack">
          <div className="UpName">
            <input
              type="text"
              placeholder="Введите название заметки"
              className="noteTitleInput"
            />
            <button onClick={handleSaveNote} className="saveNoteButton">
              Сохранить
            </button>
          </div>
          <NoteList
            notes={notes}
            onSelectNote={handleSelectNote}
            selectedNoteIndex={selectedNoteIndex}
          />
          {selectedNoteIndex !== null && (
            <NoteEditor
              note={notes[selectedNoteIndex]}
              onChangeNote={handleChangeNote}
              onSaveNote={handleSaveNote}
            />
          )}
          {notification && <div className="notification">{notification}</div>}
          <button onClick={handleCreateNote} className="createNoteButton">
            + новая заметка
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteApp;