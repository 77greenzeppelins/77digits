import React from 'react';
import useDate from '../../../hooks/useDate';

const DateDisplayer = () => {
  const { today, dayNumber, month, year } = useDate();
  return (
    <div className="date-displayer">
      <div className="date-displayer__line day">{today}</div>
      <div className="date-displayer__line month">
        <span>{dayNumber}</span> <span>{month}</span>
      </div>
      <div className="date-displayer__line year">{year}</div>
    </div>
  );
};

export default DateDisplayer;
