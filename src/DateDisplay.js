// DateDisplay.js
import React from 'react';
import './DateDisplay.css'; // Подключаем стили

const DateDisplay = ({ date }) => {
  return (
    <div className="dateDisplay">
      Последнее изменение: {date}
    </div>
  );
};

export default DateDisplay;
