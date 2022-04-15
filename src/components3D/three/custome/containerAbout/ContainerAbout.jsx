import React, { useEffect } from 'react';
/*
Components
*/
import Slider from './slider/Slider';
import InteractivePanel from './interactivePanel/InteractivePanel';
import GesturePrompt from '../gesturePrompt/GesturePrompt';
// import NavigationPanel from './navigationPanel/NavigationPanel';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Gesture Staff
*/
// import LimitedPseudoScrolling from '../../../../gestureHandlers/useGesture/LimitedPseudoScrolling';
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
  // const { pseudoScrollinGesture } = LimitedPseudoScrolling({
  //   numberOfSlides: 5,
  // });

  //_________
  // useEffect(() => {
  //   console.log(
  //     'ContainerAbout / canvasGlobalState.spinningBoxRotation:',
  //     canvasGlobalState.spinningBoxRotation
  //   );
  // }, [canvasGlobalState.spinningBoxRotation]);
  //_____

  return (
    // canvasGlobalState.currentContainer === 'aboutContainer' && (
    <group
      // {...pseudoScrollinGesture()}
      scale={[1, 1, 1]}
      name="GroupForContainerAbout"
      position={canvasGlobalState.aboutContainerPosition}
    >
      {/*-----Slider Section-----------------------------------*/}
      <Slider />

      {/*-----Interactive Panel Section------------------------*/}
      {canvasGlobalState.currentContainer === 'aboutContainer' && (
        <InteractivePanel />
      )}

      {/* {canvasGlobalState.currentContainer === 'aboutContainer' && (
        <GesturePrompt
          scena="caDragSpinningBox"
          groupProps={{
            position: [0, 0, 0.6],
          }}
        />
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
