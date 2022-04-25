import React, { useState } from 'react';
/*
Components
*/
import VenusInFrame from './venus/VenusInFrame';
// import ScrollBanner from './scrollBanner/ScrollBanner';
/*
Global State Section
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Gesture Staff
*/
import BasicMove from '../../../../../gestureHandlers/useMove/basicMove';
/*
Spring Staff
*/
import { a, useSpring } from '@react-spring/three';
/*
Basic Data
"tillFactor" for sake of "BasicMove"
*/
import { springConfig, basicMoveConfig } from './framedObjectsData';
/*

/*
------------------------------------------------------------------------
*/
const FramedObjects = ({ groupProps }) => {
  /*
  Component State
  */
  const [isDebiut, setIsDebiut] = useState(true);
  /*
  Global State Section
  canvasState = {endOfContainerIntro: false, startOfContainerIntroShow: false, ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gesture Section
  this animation response to mouse move and slightly rotates components
  */
  const [rotateWithMouseMove] = BasicMove({
    target: basicMoveConfig.target,
    tileFactor: basicMoveConfig.tillFactor,
  });
  /*
  Spring Animation Section
  */
  const { springPositionZ } = useSpring({
    springPositionZ:
      canvasGlobalState.currentContainer === 'introContainer'
        ? springConfig.positionEnd
        : springConfig.positionStart,
    config: springConfig.configBasic,
    delay: springConfig.delay,
    /*
    What onRest() does?
    Changing state we prevent a sort of odd behaviour; condition besed on ".currentCondition" triggered s-axis animation every time user changes continer; but we want only one such animation;
    */
    onRest: () => {
      setIsDebiut(false);
    },
  });
  /*
  JSX
  */
  return (
    <a.group
      {...groupProps}
      position={isDebiut ? springPositionZ : springConfig.positionEnd}
    >
      <a.group rotation={rotateWithMouseMove}>
        <VenusInFrame />
        {/* <ScrollBanner /> */}
      </a.group>
    </a.group>
  );
};

export default FramedObjects;
