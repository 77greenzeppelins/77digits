import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import SpinningBoxSide from './SpinningBoxSide';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
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
  groupProps,
  spinningBoxConfig,
  setRotationYSpeed,
  setDragRotationX,
  //........... setHorizontalDragCounter,
  setDragComponentID,
  images,
  portrait,
  banner,
}) => {
  /*
  References
  */
  const autorotatingGroup = useRef();
  /*
  Global State
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useThree() Staff
  */
  // const { viewport } = useThree();
  /*
  Call this gesture!!!
  returned staf includes: rotateStepByStep,gestureCounter, dragRotateStepByStep
  */
  const [rotateStepByStep, gestureCounter, dragRotateStepByStep] =
    DragRotateStepByStep(
      /*
    it's a section of "custome args"; just send some settings to drag hook;
    */
      {
        /*
      
      */
        rotationX: setDragRotationX || 0,
        /*
      ........test
      */
        // setHorizontalDragCounter: setHorizontalDragCounter,
        componentID: setDragComponentID,
        /*
      set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
      */
        //   rightDragLimitX: useDragData.rightDragLimitX,
        //   leftDragLimitX: useDragData.leftDragLimitX,
        /*
      set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
      */
        //   rightDragLimitY: useDragData.rightDragLimitY,
        //   leftDragLimitY: useDragData.leftDragLimitY,
      }
    );
  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (canvasGlobalState.currentContainer === 'aboutContainer') {
      // autorotatingGroup.current.rotation.y = time * setRotationYSpeed || 0;
      // autorotatingGroup.current.rotation.y += 0.002;
      // autorotatingGroup.current.rotation.x = Math.sin(time * 0.1);
      // autorotatingGroup.current.rotation.y = Math.cos(time * 0.4) * 0.4;
      // autorotatingGroup.current.rotation.z = Math.sin(time * 0.4) * 0.5;
    }
  });

  /*
  useEffect Tests
  */

  /*
  JSX
  */
  return (
    <a.group
      {...groupProps}
      name="GroupForGestureAnimation"
      {...dragRotateStepByStep()}
      rotation={rotateStepByStep}
      // rotation={gestureCounter}
    >
      <a.group ref={autorotatingGroup}>
        {spinningBoxConfig.map(({ sideProps, labelProps }, index) => (
          <SpinningBoxSide
            groupSideProps={sideProps}
            labelProps={labelProps}
            key={index}
            /*
            We want to pass an image to some box's sides; to do this first check if congigObject of this particular "box side" has "textAwers"; if it hasn't i.e. the value is "false", choose some image instead text;
            "labelProps.textAwers" has impact on components rendered in <SpinningBoxSide>'s children,,,
            */
            image={!labelProps.textAwers && images[labelProps.imagesIndex]}
            portrait={portrait}
            banner={banner}
          />
        ))}
      </a.group>
    </a.group>
  );
};

export default SpinningBox;
