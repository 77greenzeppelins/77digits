import React, { useRef, Suspense } from 'react';
/*
Global State staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import FramedObjects from './framedObjects/FramedObjects';
import TextSection from './textSection/TextSection';
import StillLifeSection from './stillLifeSection/StillLifeSection';
import EndButtons from './endButtonsSection/EndButtons';
import RaphaelSection from './raphaelSection/RaphaelSection';
import IntroScrollSection from './scrollSections/IntroScrollSection';
// import TestingPlane from './TestingPlane';
/*
Gesture Section
*/
import IntroDragGesture from '../../../../gestureHandlers/useGesture/IntroDragGesture';
import IntroWheelGesture from '../../../../gestureHandlers/useGesture/IntroWheelGesture';

import ContIntroGest from '../../../../gestureHandlers/useGesture/ContIntroGest';
/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
------------------------------------------------------------------------
 */
const ContainerIntro = () => {
  /*
  References
  */
  const introContainer = useRef();
  /*
  Global State Section
  canvasState = {introContainerEventType: "none", isOdlotBackgroundVisible: "false", ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  UseGesture Section
  */
  const [draggedPositionZ] = IntroDragGesture();
  const { wheeledPositionZ } = IntroWheelGesture();

  // const { positionZ } = ContIntroGest();

  /*
  JSX
  */
  return (
    <a.group
      ref={introContainer}
      name="GroupForContainerIntro"
      position-z={
        canvasGlobalState.introContainerEventType === 'dragging'
          ? draggedPositionZ.to(draggedPositionZ => draggedPositionZ)
          : wheeledPositionZ.to(wheeledPositionZ => wheeledPositionZ)
      }
      // position-z={positionZ}
    >
      {/*-----Text Slides------------------------------------------*/}
      <TextSection />
      <Suspense fallback={null}>
        {/* <TestingPlane /> */}
        {/*-----77-------------------------------------------------*/}
        <FramedObjects />
        {/*-----ScrollPromptSection--------------------------------*/}
        <IntroScrollSection />
        {/*-----StillLifeSection-----------------------------------*/}
        <StillLifeSection />
        {/*-----EndButtons-----------------------------------------*/}
        {canvasGlobalState.currentContainer === 'introContainer' && (
          <EndButtons />
        )}
        {/*-----RaphaelSection-------------------------------------*/}
        {canvasGlobalState.currentContainer === 'introContainer' && (
          <RaphaelSection />
        )}
      </Suspense>
    </a.group>
  );
};

export default ContainerIntro;
