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
  ###############
  */
  const onClickHandler = () => {
    console.log('..........click in <InitialOverlay>');
    canvasState.fakeLoaderCounter = 1;
    canvasState.isInitialCalendarMounted =
      !canvasGlobalState.isInitialCalendarMounted;
    console.log(
      '.isInitialCalendarMounted',
      canvasGlobalState.isInitialCalendarMounted
    );
  };
  /*
  ###############
  */

  /*
  Spring Section
  */
  // const [{ val1 }, api] = useSpring(() => ({
  //   val1: canvasState.isInitialCalendarMounted ? 1 : 0,
  // }));
  const { calendarOpacity, detailOpacity } = useSpring({
    calendarOpacity: canvasState.isInitialCalendarMounted ? 1 : 0,
    detailOpacity: canvasGlobalState.fakeLoaderCounter === 0 ? 1 : 0,
  });

  /*
  JSX
  */
  return (
    <animated.div className="initial-calendar__container">
      <button
        onClick={onClickHandler}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50px',
          height: '2px',
          backgroundColor: '#17d1fb',
          fontSize: '3rem',
          zIndex: 999,
        }}
      />

      <animated.div
        className="initial-calendar__calendar-content"
        style={{ opacity: calendarOpacity }}
        // style={{
        //   opacity: val1,
        // }}
      >
        <div className="initial-calendar__data clocks">
          <Clock
            style={{ opacity: detailOpacity }}
            city={'Washington DC'}
            timeZone={'America/New_York'}
          />
          <Clock
            style={{ opacity: detailOpacity }}
            city={'Beijing'}
            timeZone={'Asia/Shanghai'}
          />

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
