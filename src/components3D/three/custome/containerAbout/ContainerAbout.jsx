import React, { useEffect, useMemo, Suspense } from 'react';
/*
Components
*/
import Slider from './slider/Slider';
// import InteractivePanel from './interactivePanel/InteractivePanel';
import NavigationPanel from './navigationPanel/NavigationPanel';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
// import { a } from '@react-spring/three';
/*
Gesture Staff
*/
import ContAboutGest from '../../../../gestureHandlers/useGesture/ContAboutGest';
/*
Basic Data
*/
// import { navPanelGroupData } from './containerAbout';
/*
------------------------------------------------------------------------
 */
const ContainerAbout = () => {
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gesture Section 
  */
  const {
    rotateStepByStep,
    sideFrontRotation,
    sideLeftRotation,
    sideBackRotation,
    sideRightRotation,
    positionNavPanel,
    arrowPromptGroupRotation,
    containerAboutGestures,
  } = ContAboutGest({
    /*
    set axis that is active
    */
    axisLimitation: 'x',
    rotationInitVal: [0, 0, 0],
  });

  //_________
  // useEffect(() => {
  //   // console.log('ContainerAbout / sideFrontRotation:', sideFrontRotation);
  //   console.log(
  //     'ContainerAbout / arrowPromptGroupRotation:',
  //     arrowPromptGroupRotation
  //   );
  // }, [arrowPromptGroupRotation]);
  //_____

  const gesturesForSidesRotations = useMemo(() => {
    return [
      sideFrontRotation,
      sideLeftRotation,
      sideBackRotation,
      sideRightRotation,
    ];
  }, [
    sideFrontRotation,
    sideLeftRotation,
    sideBackRotation,
    sideRightRotation,
  ]);

  /*
  JSX
  Remarks:
  (1) initial concpet ... 
  */
  return (
    <group
      scale={[1, 1, 1]}
      name="GroupForContainerAbout"
      position={canvasGlobalState.aboutContainerPosition}
      {...containerAboutGestures()}
    >
      <Suspense fallback={null}>
        {/*-----Slider Section-----------------------------------
      "rotateStepByStep" gestures for <SpinningBox>
      "gesturesForSidesRotations" gestures for <SpinningBoxSide>
      */}
        <Slider
          rotateStepByStep={rotateStepByStep}
          gesturesForSidesRotations={gesturesForSidesRotations}
          /*
          for <Slider> / <Slide0> / <ArrowPrompt> 
          */
          arrowPromptGroupRotation={arrowPromptGroupRotation}
        />
        {/*-----Navigation Panel Section------------------------*/}
        <NavigationPanel positionNavPanel={positionNavPanel} />
      </Suspense>
    </group>
  );
};

export default ContainerAbout;
