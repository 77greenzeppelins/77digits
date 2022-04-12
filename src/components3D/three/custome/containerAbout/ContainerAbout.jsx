import React from 'react';
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
  //     'ContainerAbout / canvasGlobalState.containerAboutVisibleSlideIndex:',
  //     canvasGlobalState.containerAboutVisibleSlideIndex
  //   );
  //   console.log(
  //     'LimitedPseudoScrolling / .introContainerEventType:',
  //     canvasGlobalState.containerAboutGestureType
  //   );
  // }, [
  //   canvasGlobalState.containerAboutVisibleSlideIndex,
  //   canvasGlobalState.containerAboutGestureType,
  // ]);
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

      {/*-----Interactive Panel Section------------------------*/}
      {canvasGlobalState.currentContainer === 'aboutContainer' && (
        <>
          <GesturePrompt scena={'caDragSpinningBox'} springsNumber={3} />
          {/* <GesturePrompt scena={'caJustScroll'} /> */}
        </>
      )}
      {/* <NavigationPanel /> */}
    </group>
  );
  // );
};

export default ContainerAbout;
