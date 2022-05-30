import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import InstantContactButton from './instantContactButton/InstantContactButton';
/*
Global State Staff
*/
import { canvasState } from '../../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Gesture Section
*/
import IntroWheelGesture from '../../../../../gestureHandlers/useGesture/IntroWheelGesture';
import IntroDragGesture from '../../../../../gestureHandlers/useGesture/IntroDragGesture';
/*
Spring Section
*/
import { a, useSpring, config } from '@react-spring/three';
/*
react-device-detect Staff
*/
import { isMobileOnly } from 'react-device-detect';
/*
Basic Data
*/
import {
  instantContactButtonsData,
  introScale,
  menuScale,
  posZ,
  posXMenuPhone,
  posXMenuEmail,
  posYMenuEnd,
  posYMenuStart,
} from './instantContactPanelData';

/*
------------------------------------------------------------------------------
*/
const InstantContactsPanel = () => {
  /*
  References
  */
  const phoneButton = useRef();
  const emailButton = useRef();

  /*
  Global State section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  const isIntro = canvasGlobalState.currentContainer === 'introContainer';
  const isMenu = canvasGlobalState.currentContainer === 'menuContainer';
  const isWheeling = canvasGlobalState.introContainerEventType === 'wheeling';
  /*
  UseGesture Section
  */
  const { fallDownDrag, riseUpDrag } = IntroDragGesture();
  const { fallDownWheel, riseUpWheel } = IntroWheelGesture();

  // const calcmenuPosY = ()=>{
  // }
  const scale =
    canvasGlobalState.currentContainer === 'introContainer'
      ? introScale
      : menuScale;
  /*
  <InstantContactsPanel> in <ContainerIntro>
  */
  const fallDownY = isWheeling ? fallDownWheel : fallDownDrag;
  const riseUpY = isWheeling ? riseUpWheel : riseUpDrag;
  /*
  <InstantContactsPanel> in <ContainerMenu> / only in mobile...
  */
  const { menuPosY } = useSpring({
    menuPosY: isMenu && isMobileOnly ? posYMenuEnd : posYMenuStart,
    config: config.molasses,
  });
  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (isIntro || isMenu) {
      phoneButton.current.rotation.y = Math.cos(time * 0.4) * 0.4;
      phoneButton.current.rotation.z = Math.sin(time * 0.4) * 0.1;
      emailButton.current.rotation.y = -Math.cos(time * 0.4) * 0.4;
      emailButton.current.rotation.z = -Math.sin(time * 0.4) * 0.1;
    }
  });

  /*
  JSX
  */
  return (
    (canvasGlobalState.currentContainer === 'introContainer' ||
      canvasGlobalState.currentContainer === 'menuContainer') && (
      <>
        <a.group
          ref={phoneButton}
          position-x={isMenu && posXMenuPhone}
          position-y={isIntro ? fallDownY : menuPosY}
          position-z={posZ}
          scale={scale}
        >
          <InstantContactButton
            canvasProps={instantContactButtonsData.phoneButton}
          />
        </a.group>
        <a.group
          ref={emailButton}
          position-x={isMenu && posXMenuEmail}
          position-y={isIntro ? riseUpY : menuPosY}
          position-z={posZ}
          scale={scale}
        >
          <InstantContactButton
            canvasProps={instantContactButtonsData.emailButton}
          />
        </a.group>
      </>
    )
  );
};

export default InstantContactsPanel;
