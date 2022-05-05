import React, { useEffect } from 'react';
/*
Gesture Section
*/
// import IntroDragGesture from '../../../../gestureHandlers/useGesture/IntroDragGesture';
import IntroWheelGesture from '../../../../gestureHandlers/useGesture/IntroWheelGesture';
import { animated } from '@react-spring/web';
/*
Basic Data
*/
const containerLengtZ = 3550;
/*
-----------------------------------------------------------------------
*/
const ProgressIndicator = () => {
  /*
  UseGesture Section
  */
  //   const [draggedPositionZ] = IntroDragGesture();
  const { someValue } = IntroWheelGesture();
  const x = someValue.to(x => {
    let tempX = (x / containerLengtZ) * 100;
    // console.log('ProgressIndicator / x:', x);
    return tempX.toFixed(0);
  });
  /*
   */
  useEffect(() => {
    console.log('ProgressIndicator / x:', x);
  }, [x]);
  /*
  JSX
  */
  return (
    <div className="progress-indicator">
      <animated.p className="progress-indicator__number">{x}</animated.p>
      <p className="progress-indicator__percentage">%</p>
    </div>
  );
};

export default ProgressIndicator;
