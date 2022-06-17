import React, { useState, useEffect } from 'react';
/*
Spring Staff
*/
import { animated } from '@react-spring/web';

const Clock = ({ city, style, timeZone }) => {
  //
  let time = new Date().toLocaleTimeString('pl', { timeZone: timeZone });
  //_____
  const [currentTime, setCurrentTime] = useState(time);

  //_____
  useEffect(() => {
    const UpdateTime = () => {
      let time = new Date().toLocaleTimeString('pl', {
        timeZone: timeZone,
        setCurrentTime: 'medium',
        hourCycle: 'h24', // delats PM / AM
      });
      setCurrentTime(time);
    };
    const timeController = setInterval(UpdateTime, 1000);
    return () => clearInterval(timeController);
  }, [timeZone]);

  return (
    <animated.div style={{ ...style }} className="clock">
      <div className="clock__city">{city}</div>
      <div className="clock__digit">{currentTime}</div>
      {/* <div className="clock__colon">:</div>
      <div className="clock__digit minutes">00</div>
      <div className="clock__colon">:</div>
      <div className="clock__digit seconds">00</div>
      <div className="clock__period">am</div> */}
    </animated.div>
  );
};

export default Clock;
