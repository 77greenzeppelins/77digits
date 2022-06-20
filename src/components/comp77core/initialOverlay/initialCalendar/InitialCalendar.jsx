import React from 'react';
/*
Components
*/
import Clock from '../../../comp77/clock/Clock';
import DateDisplayer from '../../../comp77/date/DateDisplayer';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Spring Staff
*/
import { useSpring, animated } from '@react-spring/web';
/*
----------------------------------------------------------------------------
*/
const InitialCalendar = () => {
  /*
  Global State Section
  canvasState={isInitialCalendarMounted: true,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  // const [{ val1 }, api] = useSpring(() => ({
  //   val1: canvasState.isInitialCalendarMounted ? 1 : 0,
  // }));
  const { calendarOpacity } = useSpring({
    calendarOpacity: canvasGlobalState.isInitialCalendarMounted ? 1 : 0,
  });

  /*
  JSX
  */
  return (
    <animated.div className="initial-calendar__container">
      <animated.div
        className="initial-calendar__calendar-content"
        style={{ opacity: calendarOpacity }}
      >
        <div className="initial-calendar__data clocks">
          <Clock city={'Washington DC'} timeZone={'America/New_York'} />
          <Clock city={'Beijing'} timeZone={'Asia/Shanghai'} />

          <Clock city={'Dzierżoniów'} timeZone={'Europe/Warsaw'} />
        </div>
        <div className="initial-calendar__data date">
          <DateDisplayer />
        </div>
      </animated.div>
    </animated.div>
  );
};

export default InitialCalendar;
