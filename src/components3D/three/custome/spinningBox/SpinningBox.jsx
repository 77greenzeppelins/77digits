import React, { Suspense } from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import SpinningBoxSide from './SpinningBoxSide';
import TextVerse from '../../../drei/text/textVerse/TextVerse';

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
Basic Data
*/
import { sidesData, useDragData } from './SpinningBoxData';

/*
----------------------------------------------------------------------
*/
const SpinningBox = () => {
  /*
  useThree() Staff
  */
  const { viewport } = useThree();
  /*
  Call this gesture!!!
  */
  const [rotateStepByStep, dragRotateStepByStep] = DragRotateStepByStep(
    /*
    it's a section of "custome args"; just send some settings to drag hook;
    */
    {
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
  JSX
  */
  return (
    <a.group
      name="GroupForGestureAnimation"
      {...dragRotateStepByStep()}
      rotation={rotateStepByStep}
    >
      {/*-----Panel Front----------------------------------------*/}
      <SpinningBoxSide groupProps={sidesData.sideFront} />

      {/*-----Panel Left----------------------------------------*/}

      <SpinningBoxSide groupProps={sidesData.sideLeft} />

      {/*-----Panel Right----------------------------------------*/}
      <SpinningBoxSide groupProps={sidesData.sideRight} />

      {/*-----Panel Back----------------------------------------*/}
      <SpinningBoxSide groupProps={sidesData.sideBack} />
    </a.group>
  );
};

export default SpinningBox;
