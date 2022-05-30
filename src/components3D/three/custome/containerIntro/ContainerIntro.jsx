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
// import EndButtons from './endButtonsSection/EndButtons';
import RaphaelSection from './raphaelSection/RaphaelSection';
// import TestingPlane from './_testingPlane/TestingPlane';
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
  ...
  */
  // useEffect(() => {
  //   canvasGlobalState.endOfContainerIntro
  //     ? canvasGlobalState.isRaphaelVisible
  //       ? console.log('render <RaphaelSection>')
  //       : console.log('render <EndButtons>')
  //     : console.log('canvasGlobalState.endOfContainerIntro is false');
  // }, [
  //   canvasGlobalState.endOfContainerIntro,
  //   canvasGlobalState.isRaphaelVisible,
  // ]);

  // const transitionCondition = canvasGlobalState.endOfContainerIntro
  //   ? canvasGlobalState.isRaphaelVisible
  //     ? true // render <RaphaelSection>
  //     : false // render <EndButtons>
  //   : null;

  // const transitionCondition = canvasGlobalState.isRaphaelVisible
  //   ? true // render <RaphaelSection>
  //   : false; // render <EndButtons>

  // const transition = useTransition(transitionCondition, {
  //   from: { raphaelStart: 2, buttonsStart: -2, zRaphael: -21 },
  //   enter: { raphaelStart: 0, buttonsStart: 0, zRaphael: -19.64 },
  //   leave: { raphaelStart: 2, buttonsStart: -2, zRaphael: -21 },
  //   config: config.molasses,
  //   delay: 400,
  // });

  /*
  JSX
  */
  return (
    <a.group
      ref={introContainer}
      name="GroupForContainerIntro"
      position-z={
        canvasGlobalState.introContainerEventType === 'wheeling'
          ? // canvasGlobalState.currentPointerType === 'mouse'
            wheeledPositionZ
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
        {/*-----RaphaelSection / has its own useTransition()-------*/}
        {/* {canvasGlobalState.currentContainer === 'introContainer' &&
          canvasGlobalState.endOfContainerIntro && <RaphaelSection />} */}
        {/* <RaphaelSection /> */}
        {/*-----for  T E S T S  sake-------*/}
        {/* <TestingPlane meshProps={{ position: [0, 0, 0.5] }} /> */}
      </Suspense>
    </a.group>
  );
};

export default ContainerIntro;
