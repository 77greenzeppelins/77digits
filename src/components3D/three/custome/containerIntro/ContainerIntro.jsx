import React, { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Global State staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
// import ContainerIntroContent from './ContainerIntroContent';
import FramedObjects from './framedObjects/FramedObjects';
import TextSection from './textSection/TextSection';
import AnimatedUnivers from '../animatedUnivers/AnimatedUniverse';
import InstantContact from './contactSection/InstantContact';
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
const ContainerIntro = ({ onClickCameraSetter }) => {
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
  /*
  useFrame Section
  */
  useFrame(() => {
    /*
    What this if statemen does? What is the concept?
    It works as a kind of switcher that should turn on / turn off visibility of "odlot background"; it's necessary as background's plane with shader is visible as only "containerInitial" is visible/mounted/ahed of camera/;
    */
    if (
      introContainer.current.position.z > 11.5 &&
      introContainer.current.position.z < 13.7
    ) {
      canvasState.isOdlotBackgroundVisible = true;
    } else {
      canvasState.isOdlotBackgroundVisible = false;
    }
  });

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
    >
      {/*-----77-----------------------------------------------*/}
      <Suspense fallback={null}>
        <FramedObjects
          groupProps={{
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            name: 'groupForFramedObjects',
          }}
        />
      </Suspense>

      {/*-----77-----------------------------------------------*/}
      <TextSection />

      {/*-----Instant Contact--------------------------------------------*/}
      <Suspense fallback={null}>
        <InstantContact />
      </Suspense>

      {/* {canvasGlobalState.currentContainer === 'introContainer' && (
        <AnimatedUnivers
          groupProps={{
            position: [0, -0.15, -10],
            name: 'GroupForAnimatedUniverse',
          }}
        />
      )} */}

      {/*-------------------------------------------------------
      <ContainerIntroContent
        ref={introContainer}
        groupProps={{
          name: 'GroupForIntroContainerConntent',
        }}
      /> */}
    </a.group>
  );
};

export default ContainerIntro;
