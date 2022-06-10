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
/*
Spring Section
*/
import { a } from '@react-spring/three';
/*
Gestures Section
*/
import IntroWheelGesture from '../../../../gestureHandlers/useGesture/IntroWheelGesture';
import IntroDragGesture from '../../../../gestureHandlers/useGesture/IntroDragGesture';
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
  UseGesture Section for <ContainerIntro>
  */
  const { draggedPositionZ } = IntroDragGesture();
  const { wheeledPositionZ } = IntroWheelGesture();
  /*
  JSX
  */
  return (
    <a.group
      ref={introContainer}
      name="GroupForContainerIntro"
      position-z={
        canvasGlobalState.introContainerEventType === 'wheeling'
          ? wheeledPositionZ
          : draggedPositionZ
      }
    >
      {/*-----Text Slides------------------------------------------*/}
      {canvasGlobalState.currentContainer === 'introContainer' && (
        <TextSection />
      )}
      <Suspense fallback={null}>
        {/*-----77-------------------------------------------------*/}
        {canvasGlobalState.endOfContainerIntro === false && (
          <BotticelliSection />
        )}
      </Suspense>
    </a.group>
  );
};

export default ContainerIntro;
