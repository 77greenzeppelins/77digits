import React, { useState, useEffect } from 'react';
import {
  gesturePromtBasicData,
  caRotateSpinningBox,
} from './gesturePromptData';
/*
Spring Section
*/
import { a, useSpring } from '@react-spring/three';
/*
Gesture Staff
*/
// import DragRotateStepByStep from '../../../../gestureHandlers/useDrag/DragRotateStepByStep';
/*
Basic Data
*/
let aPositionX;
let aPositionY;
let aScale;
let movesNumber = 2;

/*
----------------------------------------------------------------------
*/
const GesturePrompt = ({ groupProps, scena }) => {
  /*
  Component State Section
  */
  const [value, setValue] = useState(0);

  /*
  useEffect exclusivelly for "stateSetter"
  */
  useEffect(() => {
    const interval = setInterval(() => {
      value < movesNumber && setValue(value => value + 1);
      // console.log('value', value);
    }, 1000);
    return () => {
      clearInterval(interval);
      // console.log('GesturePrompt was dismounted');
    };
  }, [value]);
  // useEffect(() => {
  //   console.log('GesturePrompt / value', value);
  // }, [value]);
  /*
  Spring Sectiona
  */
  const [{ springValue }] = useSpring(
    {
      /*
      "springValue" has value 0 or 1 depending on interval; using "%" we cen convert "value" that is intiger into only-two-value-falsy staff
      */
      springValue: value % 2,
      config: caRotateSpinningBox.config,
    },
    [value]
  );
  /*
  Switcher; in case we want to reuse it...
  */
  switch (scena) {
    case 'caDragSpinningBox':
      /*
      "aPositionX" is a sort of "interpolator" / predefined interpolation;
      */
      aPositionX = springValue.to([0, 1], caRotateSpinningBox.valueX);

      aScale = springValue.to(
        caRotateSpinningBox.scaleRange,
        caRotateSpinningBox.scaleValues
      );
      aPositionY = springValue.to(
        caRotateSpinningBox.aPositionYRange,
        caRotateSpinningBox.valueX
      );
      break;
    case 'ciJustScroll':
      // aPositionY = springValue.to([0, 1], caRotateSpinningBox.valueX);
      break;
    default:
      break;
  }
  /*
  JSX
  */
  return (
    <a.group {...groupProps}>
      <a.mesh
        position-x={aPositionX}
        position-y={-0.01}
        position-z={0}
        scale={aScale || 1}
      >
        <circleGeometry {...gesturePromtBasicData.circleGeometry} />
        <meshBasicMaterial />
      </a.mesh>
    </a.group>
  );
};

export default GesturePrompt;
/*
Constructor
CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
radius — Radius of the circle, default = 1.
segments — Number of segments (triangles), minimum = 3, default = 8.
thetaStart — Start angle for first segment, default = 0 (three o'clock position).
thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
*/

/*

  const springs = useSprings(
    springsArray.length,
    springsArray.map(({ id, ...configObj }) => configObj)
  );

  return (
    <>
      {springs.map((spring, index) => (
        <a.mesh key={caDragSpinningBoxArray[index].id} {...spring}>
          <circleGeometry
            //    args={[1, 4]}
            {...gesturePromtBasicData.circleGeometry}
          />
          <meshBasicMaterial />
        </a.mesh>
      ))}
    </>
  );

*/
