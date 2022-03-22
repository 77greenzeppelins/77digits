import React, { Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
// import TestingPlane from './TestingPlane';
//_____77
// import LogoFlag from '../sevenSevenLogo/logoFlag/LogoFlag'
// import LogoExtrudedShape from '../sevenSevenLogo/sevenSevenShape/LogoExtrudedShape';
//_____
import FramedObjects from './framedObjects/FramedObjects';
import TextVersed1 from './TextVersed_1';
import TextVersed2 from './TextVersed_2';
import TextVersed3 from './TextVersed_3';
import TextVersed4 from './TextVersed_4';
import AnimatedUnivers from '../animatedUnivers/AnimatedUniverse';
import TextVersed5 from './TextVersed_5';
import YesNoSection from '../yesNoSection/YesNoSection';
/*
Globals State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Gesture Section
*/
import IntroDragGesture from '../../../../gestureHandlers/useGesture/IntroDragGesture';
import IntroWheelGesture from '../../../../gestureHandlers/useGesture/IntroWheelGesture';
import { a } from '@react-spring/three';

/*
------------------------------------------------------------------------
 */
const ContainerIntroContent = React.forwardRef(({ groupProps }, ref) => {
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
    if (ref.current.position.z > 11.5 && ref.current.position.z < 13.7) {
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
      {...groupProps}
      ref={ref}
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

      {/*-----Dziękuję, że mnie odwiedzasz--------------------*/}
      <TextVersed1
        groupProps={{
          position: [0, -0.15, -2.3],
          rotation: [Math.PI * 0.1, 0, 0],
          name: 'TextVersedGroup_1',
        }}
      />

      {/*-----Jestem Web Developerem--------------------------*/}
      <TextVersed2
        groupProps={{
          position: [0, -0.15, -5.65],
          rotation: [Math.PI * 0.1, 0, 0],
          name: 'TextVersedGroup_2',
        }}
      />

      {/*-----Masz ochotę na----------------------------------------*/}
      <TextVersed3
        groupProps={{
          position: [0, -0.15, -8.8],
          rotation: [Math.PI * 0.1, 0, 0],
          name: 'TextVersedGroup_3',
        }}
      />

      {/*-----odlot----------------------------------------*/}
      {/* <TextVersed4
        groupProps={{
          position: [0, -0.15, -12.0],
          rotation: [Math.PI * 0.1, 0, 0],
          name: 'TextVersedGroup_4',
        }}
      /> */}
      {canvasGlobalState.currentContainer === 'introContainer' && (
        <AnimatedUnivers
          groupProps={{
            position: [0, -0.15, -12.1],
            name: 'GroupForAnimatedUniverse',
          }}
        />
      )}

      {/*-----w internetach----------------------------------------*/}
      {/* <TextVersed5
        groupProps={{
          position: [0, -0.15, -14.8],
          rotation: [Math.PI * 0.1, 0, 0],
          name: 'TextVersedGroup_5',
        }}
      /> */}

      <Suspense fallback={null}>
        <YesNoSection
          groupProps={{
            position: [0, -0.15, -17.9],
            // scale: [1.05, 1.05, 1.05],
            rotation: [Math.PI * -0.2, 0, 0],
            scale: [1, 1, 1],
            name: 'YesNoSection',
          }}
          /*
          What "rotationX" does? Why is separated from other groupProps?
          This props is designe to work in some useGesture animation;

          */
          rotationX={-Math.PI * 0.2}
        />
      </Suspense>
    </a.group>
  );
});

export default ContainerIntroContent;
