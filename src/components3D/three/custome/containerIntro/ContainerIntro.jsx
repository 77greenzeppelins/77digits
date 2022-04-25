import React, { useRef, Suspense } from 'react';
/*
Global State staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import BotticelliSection from './botticelliSection/BotticelliSection';
import TextSection from './textSection/TextSection';
import EndButtons from './endButtonsSection/EndButtons';
import RaphaelSection from './raphaelSection/RaphaelSection';
import IntroScrollSection from './scrollSections/IntroScrollSection';
/*
Gesture Section
*/
import IntroDragGesture from '../../../../gestureHandlers/useGesture/IntroDragGesture';
import IntroWheelGesture from '../../../../gestureHandlers/useGesture/IntroWheelGesture';
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
        <BotticelliSection />
        {/*-----ScrollPromptSection--------------------------------*/}
        <IntroScrollSection />
        {/*-----WyrfinowanySection-----------------------------------*/}
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
