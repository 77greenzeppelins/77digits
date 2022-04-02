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
  props for <SpinningBoxSide> layout and its children
  */
  spinningBoxConfig,
  /*
  props for <SpinningBoxSide>'s spring
  */
  springConfig,
  isSlideVisible,
  isSideRotating,
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
              labelProps={labelProps}
              sideProps={sideProps}
              canvasProps={canvasProps}
              frameProps={frameProps}
              /*
              props for <SpinningBoxSide>'s springAnimation;
              */
              springConfig={springConfig}
              isSlideVisible={isSlideVisible}
              isSideRotating={isSideRotating}
            />
          )
        )}
      </a.group>
    </a.group>
  );
};

export default SpinningBox;
