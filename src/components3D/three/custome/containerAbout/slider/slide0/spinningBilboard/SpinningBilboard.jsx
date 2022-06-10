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
Spring Staff
*/
import { a, config, useSpring } from '@react-spring/three';
/*
Gesture Staff
*/
import BasicMove from '../../../../../../../gestureHandlers/useMove/basicMove';
/*
Basic Data
*/
const basicData = {
  groupScale: 0.32,
  tileFactorX: 0.2,
  tileFactorY: 0.2,
};

/*
-----------------------------------------------------------------------------
*/
const SpinningBilboard = () => {
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
  Spring for animations that happen when slides changes
  */
  const containerCondition =
    canvasGlobalState.currentContainer === 'aboutContainer';
  const springCond = canvasGlobalState.containerAboutVisibleSlideIndex === 0;

  const [{ bilboardScale, bilboardPosY, indicatorsPosition }] = useSpring(
    {
      bilboardScale: springCond ? basicData.groupScale : 0,
      bilboardPosY: springCond ? 0 : 0.2,

      indicatorsPosition: springCond ? 0 : -0.1,
      //___
      config: springCond
        ? config.molasses //from <Slide1> to <Slide0>
        : { duration: 600 }, //from <Slide0> to <Slide1>
      delay: springCond
        ? 150 //from <Slide1> to <Slide0>; required!; must be longer then "120"; if 0 uswer can see <SB> starts its animation;
        : 0,
      /*
      This onRest must be in each slide! Either on 3D side or 2D side; in cese of <Slide1> there is only 3D side though...
      */
      // onRest: () => {
      //   canvasState.isSlideComplete = true;
      // },
    },
    [canvasGlobalState.containerAboutVisibleSlideIndex]
  );
  /*
  Gesture Section
  this animation response to mouse move and slightly rotates components
  */
  const [rotateWithMouseMove] = BasicMove({
    // target: ,
    tileFactorX: basicData.tileFactorX,
    tileFactorY: basicData.tileFactorY,
  });
  /*
  ...
  */
  // useEffect(() => {
  //   console.log('SpinningBilboard / mesh.current:', mesh.current);
  // }, []);

  /*
  JSX
  */
  return (
    <group>
      <a.group rotation={rotateWithMouseMove}>
        <a.group
          {...spinningBilboardGestures()}
          name="groupForSpinningBilboard"
          scale={bilboardScale}
          rotation={rotateStepByStep}
          position-y={bilboardPosY}
        >
          <BilboardSide1 gesturesForSidesRotations={sideFrontRotation} />
          <BilboardSide2 gesturesForSidesRotations={sideLeftRotation} />
          <BilboardSide3 gesturesForSidesRotations={sideBackRotation} />
          <BilboardSide4 gesturesForSidesRotations={sideRightRotation} />
        </a.group>
      </a.group>
      <a.group position-y={indicatorsPosition}>
        <SpinningBilboarIndicator indicatorGesture={indicatorGesture} />
        <SpinningBilboardGesturePrompt promptGesture={promptGesture} />
      </a.group>
    </group>
  );
};

export default SpinningBilboard;

/* <a.mesh
          ref={mesh}
          position={[-0.4, 0, -0.4]}
          scale={scaleInterpol}
          // scale={1}

          // {...basicMove()} //doesn't work
        >
          <planeGeometry args={[1, 1, 1, 1]} />
          <meshBasicMaterial color={[0.05, 0.05, 0.05]} />
        </a.mesh> */

// Chain of animation...doesn't work in that case...
// const [{ scale, indicatorsPosition }] = useSpring(
//   {
//     from: {
//       scale: canvasGlobalState.containerAboutVisibleSlideIndex === 0 && 0.32,
//       indicatorsPosition: 0,
//     },
//     to: [
//       {
//         scale:
//           canvasGlobalState.containerAboutVisibleSlideIndex === 0
//             ? 0.32
//             : 0.29,
//         indicatorsPosition:
//           canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 0 : -0.1,
//       },
//       {
//         scale:
//           canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 0.32 : 0,
//       },
//     ],

//     //___
//     config:
//       canvasGlobalState.containerAboutVisibleSlideIndex === 0
//         ? config.molasses
//         : { duration: 400 },
//     delay: canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 150 : 0,
//   },
//   [canvasGlobalState.containerAboutVisibleSlideIndex]
// );

//alyernative syntax...
// const [{ bilboardScale, bilboardPosY, indicatorsPosition }] = useSpring(
//   () => ({
//     bilboardScale:
//       canvasGlobalState.containerAboutVisibleSlideIndex === 0
//         ? basicData.groupScale
//         : 0,
//     bilboardPosY:
//       canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 0 : 0.5,
//     indicatorsPosition:
//       canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 0 : -0.1,
//     //___
//     config:
//       canvasGlobalState.containerAboutVisibleSlideIndex === 0
//         ? config.molasses
//         : { duration: 400 },
//     delay: canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 150 : 0,
//   }),
//   [canvasGlobalState.containerAboutVisibleSlideIndex]
// );
