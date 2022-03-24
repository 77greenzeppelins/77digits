import React from 'react';
/*
Components
*/
import VenusInFrame from './venus/VenusInFrame';
import ScrollBanner from './scrollBanner/ScrollBanner';
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
import {
  springConfig,
  venusInFrameData,
  scrollBannerData,
} from './framedObjectsData';
const tillFactor = 0.03;
/*

/*
------------------------------------------------------------------------
*/
const FramedObjects = ({ groupProps }) => {
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
    target: window,
    tileFactor: tillFactor,
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
    delay: 400,
  });

  /*
  JSX
  */
  return (
    <a.group {...groupProps} position={springPositionZ}>
      <a.group rotation={rotateWithMouseMove}>
        <VenusInFrame groupProps={venusInFrameData.groupProps} />
        <ScrollBanner groupProps={scrollBannerData.groupProps} />
      </a.group>
    </a.group>
  );
};

export default FramedObjects;
