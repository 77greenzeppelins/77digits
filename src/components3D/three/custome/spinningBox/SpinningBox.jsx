import React, { useRef } from 'react';
/*
Components
*/
import SpinningBoxSide from './SpinningBoxSide';
/*
Gesture Section
*/
import DragRotateStepByStep from '../../../../gestureHandlers/useDrag/DragRotateStepByStep';
/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBox = ({
  /*
  props for <SpinningBox>'s main <group>; scale & position;
  */
  groupProps,
  /*
  props for <SpinningBox>'s gesture
  */
  isSideRotating,
  /*
  props for <SpinningBoxSide> layout and ...
  */
  spinningBoxConfig,
  /*
  props for <SpinningBoxSide>'s spring
  */
  springConfig,
}) => {
  /*
  References
  */
  const autorotatingGroup = useRef();
  /*
  Call this gesture!!!
  returned staf includes: rotateStepByStep,gestureCounter, dragRotateStepByStep
  */
  const [rotateStepByStep, dragRotateStepByStep] = DragRotateStepByStep({
    /*
    set axis that is active
    */
    axisLimitation: springConfig.axisLimitation,
  });

  /*
  JSX
  */
  return (
    <a.group
      {...groupProps}
      name="GroupForGestureAnimation"
      {...dragRotateStepByStep()}
      rotation={rotateStepByStep}
    >
      <a.group ref={autorotatingGroup}>
        {spinningBoxConfig.map(
          ({ sideProps, labelProps, canvasProps, frameProps }, index) => (
            <SpinningBoxSide
              key={index}
              databaseIndex={labelProps.imagesIndex}
              labelProps={labelProps}
              sideProps={sideProps}
              canvasProps={canvasProps}
              frameProps={frameProps}
              /*
              props for Spring
              */
              springConfig={springConfig}
              isSideRotating={isSideRotating}
            />
          )
        )}
      </a.group>
    </a.group>
  );
};

export default SpinningBox;
