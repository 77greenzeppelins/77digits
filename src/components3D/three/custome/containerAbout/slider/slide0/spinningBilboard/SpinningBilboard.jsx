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
Global State Staff
*/
import { canvasState } from '../../../../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Gesture Staff
*/
import SpinningBilboardGestures from '../../../../../../../gestureHandlers/useGesture/SpinningBilboardGest';
/*
Spring Section
*/
import { a, config, useSpring } from '@react-spring/three';
/*
Basic Data
*/
const basicData = {
  groupScale: 0.32,
};

/*
-----------------------------------------------------------------------------
*/
const SpinningBilboard = () =>
  /*
  springValue from "ContAboutGesture.js"
  */
  {
    /*
  Global State Section
  {containerAboutVisibleSlideIndex: 0,...}
  */
    const canvasGlobalState = useSnapshot(canvasState);
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
      // promptRotation,
      /*
      main event registrator
      */
      spinningBilboardGestures,
    } = SpinningBilboardGestures();

    const indicatorGesture = useMemo(() => {
      return [number1, number2, number3, number4, number77];
    }, [number1, number2, number3, number4, number77]);

    // const promptGesture = useMemo(() => {
    //   return promptRotation;
    // }, [promptRotation]);

    const [{ switcher, visibility }] = useSpring(
      () => ({
        switcher:
          canvasGlobalState.containerAboutVisibleSlideIndex === 0
            ? basicData.groupScale
            : 0,
        visibility:
          canvasGlobalState.containerAboutVisibleSlideIndex === 0
            ? true
            : false,
        // config: { duration: 400 },
        config:
          canvasGlobalState.containerAboutVisibleSlideIndex === 0
            ? config.molasses
            : { duration: 400 },

        delay:
          canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 150 : 0,
      }),
      [canvasGlobalState.containerAboutVisibleSlideIndex]
    );

    const opacity = switcher.to([], []);

    /*
  JSX
  */
    return (
      <group {...spinningBilboardGestures()}>
        <a.group
          name="groupForSpinningBilboard"
          scale={switcher}
          rotation={rotateStepByStep}
        >
          <BilboardSide1 gesturesForSidesRotations={sideFrontRotation} />
          <BilboardSide2 gesturesForSidesRotations={sideLeftRotation} />
          <BilboardSide3 gesturesForSidesRotations={sideBackRotation} />
          <BilboardSide4 gesturesForSidesRotations={sideRightRotation} />
        </a.group>

        {/* <SpinningBilboarIndicator indicatorGesture={indicatorGesture} />

        <SpinningBilboardGesturePrompt promptGesture={promptGesture} /> */}
      </group>
    );
  };

export default SpinningBilboard;
