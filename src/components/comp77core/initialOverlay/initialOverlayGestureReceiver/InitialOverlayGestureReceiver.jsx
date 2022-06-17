import React from 'react';
/*
Spring Staff
*/
import { useSpring, animated } from '@react-spring/web';
/*
Gesture Staff
*/
import { useDrag } from '@use-gesture/react';

const InitialOverlayGestureReceiver = () => {
  /*
  ...
  */
  // const onClickHandler = () => {
  //   console.log('InitialOverlayGestureReceiver');
  // };
  /*
  Spring Section
  */
  const [{ springValue, displayValue, displayValue2 }, api] = useSpring(() => ({
    springValue: 0,
    displayValue: 'none',
    displayValue2: 0,
    config: { duration: 600 },
  }));
  /*
  Gesture Section
  */
  const gestureListener = useDrag(({ down, elapsedTime }) => {
    // console.log('elapsedTime:', elapsedTime);
    api.start({
      springValue: down ? 1 : 0,
      displayValue: elapsedTime < 1000 ? 'none' : 'flex',
      displayValue2: elapsedTime < 1000 ? 0 : 1,
    });
  });
  /*
  JSX
  */
  return (
    <animated.div
      {...gestureListener()}
      style={{
        backgroundColor: 'black',
        opacity: springValue,
        touchAction: 'none', //prompt from browser's DevTool
      }}
      // onClick={onClickHandler}
      className="initial-overlay-gesture-receiver"
    >
      <animated.div
        style={{
          display: displayValue,
          opacity: displayValue2,
          width: '500px',
          height: '500px',
          backgroundColor: 'red',
        }}
      />
    </animated.div>
  );
};

export default InitialOverlayGestureReceiver;
