import React, { useMemo } from 'react';
/*
Components
*/
import BilboardSide1 from './bilboardSides/bilboardSide_1/BilboardSide_1';
import BilboardSide2 from './bilboardSides/bilboardSide_2/BilboardSide_2';
import BilboardSide3 from './bilboardSides/bilboardSide_3/BilboardSide_3';
import BilboardSide4 from './bilboardSides/bilboardSide_4/BilboardSide_4';
import SpinningBilboarIndicator from '../spinningBilboarIndicator/SpinningBilboarIndicator';
import SpinningBilboardGesturePrompt from '../spinningBilboardGesturePrompt/SpinningBilboardGesturePrompt';
/*
Gesture Staff
*/
import SpinningBilboardGestures from '../../../../../../../gestureHandlers/useGesture/SpinningBilboardGest';
/*
Spring Section
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
const basicData = {
  groupScale: [0.32, 0.32, 0.32],
};

/*
-----------------------------------------------------------------------------
*/
const SpinningBilboard = () =>
  // {
  /*
  springValue from "ContAboutGesture.js"
  */
  // gestureForBilboardRotation,
  // gesturesForSidesRotations,
  // }
  {
    /*
    Gesture Section 
    */
    const {
      /*
      springValue for rotation of the whole <SpinningBilboard>
      */
      rotateStepByStep,
      /*
      springValues for rotation of each individual <SB>'s sides
      */
      sideFrontRotation,
      sideLeftRotation,
      sideBackRotation,
      sideRightRotation,
      /*
      springValues for SpinningBilboardSideIndicator>
      */
      number1,
      number2,
      number3,
      number4,
      number77,
      /*
      for <SpinningBilboardGesturePrompt>
      */
      promptRotation,
      /*
      main event registrator
      */
      spinningBilboardGestures,
    } = SpinningBilboardGestures();

    const indicatorGesture = useMemo(() => {
      return [number1, number2, number3, number4, number77];
    }, [number1, number2, number3, number4, number77]);

    const promptGesture = useMemo(() => {
      return promptRotation;
    }, [promptRotation]);

    /*
  JSX
  */
    return (
      <group {...spinningBilboardGestures()}>
        <a.group
          name="groupForSpinningBilboard"
          scale={basicData.groupScale}
          rotation={rotateStepByStep}
        >
          <BilboardSide1 gesturesForSidesRotations={sideFrontRotation} />
          <BilboardSide2 gesturesForSidesRotations={sideLeftRotation} />
          <BilboardSide3 gesturesForSidesRotations={sideBackRotation} />
          <BilboardSide4 gesturesForSidesRotations={sideRightRotation} />
        </a.group>

        <SpinningBilboarIndicator indicatorGesture={indicatorGesture} />

        <SpinningBilboardGesturePrompt promptGesture={promptGesture} />
      </group>
    );
  };

export default SpinningBilboard;
