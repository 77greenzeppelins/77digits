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
import DragRotateStepByStep from '../../../../gestureHandlers/useDrag/DragRotateStepByStep';
/*
Basic Data
*/
let aPositionX;
let positionX;
let aPositionY;
let positionY;
let aScale;

/*
----------------------------------------------------------------------
*/
const GesturePrompt = ({ scena }) => {
  /*
  Component State Section
  */
  const [value, setValue] = useState(0);
  /*
  useEffect exclusivelly for "stateSetet"
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value => Number(!value));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  /*
  Spring Section
  */
  const [{ springValue }] = useSpring(
    {
      springValue: value,
      // config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
      config: caRotateSpinningBox.config,
    },
    [value]
  );
  /*
  Gesture Section
  */
  /*
    Call this gesture!!!
    returned staf includes: rotateStepByStep,gestureCounter, dragRotateStepByStep
    */
  const { rotateStepByStep, gesturePromptPosition, fakeBoolean } =
    DragRotateStepByStep({
      /*
    set axis that is active
    */
      axisLimitation: 'x',
    });
  useEffect(() => {
    console.log('rotateStepByStep', rotateStepByStep);
    console.log('gesturePromptPosition', gesturePromptPosition);
    console.log('fakeBoolean.current', fakeBoolean.current);
  }, [rotateStepByStep, gesturePromptPosition, fakeBoolean]);

  /*
  
  */
  switch (scena) {
    case 'caDragSpinningBox':
      aPositionX = springValue.to([0, 1], caRotateSpinningBox.valueX);
      positionY = caRotateSpinningBox.positionY;
      aScale = springValue.to(
        caRotateSpinningBox.scaleRange,
        caRotateSpinningBox.scaleValues
      );
      break;
    case 'ciJustScroll':
      aPositionY = springValue.to([0, 1], caRotateSpinningBox.valueX);
      break;
    default:
      break;
  }
  /*
  JSX
  */
  return (
    <a.group
      // rotation={rotateStepByStep}
      position-x={0}
      position-y={fakeBoolean.current ? -0.4 : -0.33}
      position-z={0}
      // position={[0, -0.33, 0]}
    >
      <a.mesh
        position-x={aPositionX || 0}
        // position-y={aPositionY || positionY}
        // position-x={0}
        position-y={0}
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
