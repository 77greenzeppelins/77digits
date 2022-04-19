import React, { useEffect, useMemo } from 'react';
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
import { a } from '@react-spring/three';
/*
Gesture Staff
*/
import ContainerAboutGestures from '../../../../gestureHandlers/useGesture/ContainerAboutGestures';
/*
Basic Data
*/
import { navPanelGroupData } from './containerAbout';
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
    rotateSpinningBoxSide,
    sideFrontRotation,
    sideLeftRotation,
    sideBackRotation,
    sideRightRotation,
    positionNavPanel,
    containerAboutGestures,
  } = ContainerAboutGestures({
    /*
    set axis that is active
    */
    axisLimitation: 'x',
    rotationInitVal: [0, 0, 0],
  });

  //_________
  useEffect(() => {
    console.log('ContainerAbout / sideFrontRotation:', sideFrontRotation);
    console.log(
      'ContainerAbout / rotateSpinningBoxSide:',
      rotateSpinningBoxSide
    );
  }, [sideFrontRotation, rotateSpinningBoxSide]);
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
  */
  return (
    // canvasGlobalState.currentContainer === 'aboutContainer' && (
    <group
      scale={[1, 1, 1]}
      name="GroupForContainerAbout"
      position={canvasGlobalState.aboutContainerPosition}
      {...containerAboutGestures()}
    >
      {/*-----Slider Section-----------------------------------*/}
      <Slider
        rotateStepByStep={rotateStepByStep}
        gesturesForSidesRotations={gesturesForSidesRotations}
      />

      {/*-----Navigation Panel Section------------------------*/}
      {/* {canvasGlobalState.isNavPanelOpened && (
        <a.group
          //  position={positionNavPanel}
          position={navPanelGroupData.position}
        > */}
      <NavigationPanel />
      {/* </a.group>
      )} */}

      {/*-----Interactive Panel Section------------------------*/}
      {/* {canvasGlobalState.currentContainer === 'aboutContainer' && (
        <InteractivePanel />
      )} */}

      {/*-----Interactive Panel Section------------------------*/}
      {/* {canvasGlobalState.currentContainer === 'aboutContainer' &&
        canvasGlobalState.spinningBoxRotation === 0 && (
          <>
            <GesturePrompt scena="caDragSpinningBox" springsNumber={3} />
            
          </>
        )} */}
      {/* <NavigationPanel /> */}
    </group>
  );
  // );
};

export default ContainerAbout;
