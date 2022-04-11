import React, { useEffect } from 'react';
/*
Components
*/
import Slider from './slider/Slider';
import NavigationPanel from './navigationPanel/NavigationPanel';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Gesture Staff
*/
import LimitedPseudoScrolling from '../../../../gestureHandlers/useGesture/LimitedPseudoScrolling';
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
  LimitedPseudoScrolling({ numberOfSlides: 5 });

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
      scale={[1, 1, 1]}
      name="GroupForContainerAbout"
      position={canvasGlobalState.aboutContainerPosition}
    >
      {/*-----Slider Section-----------------------------------*/}
      <Slider />
      <NavigationPanel />
    </group>
  );
  // );
};

export default ContainerAbout;
