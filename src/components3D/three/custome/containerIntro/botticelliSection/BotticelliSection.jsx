import React, { useState, useEffect } from 'react';
/*
Global State Section
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Components
*/
import ImageCanvas from '../../_imageCanvas/ImageCanvas';
import Frame1 from '../../_glbComponents/frame/Frame_1';
import Logo from '../../_77logo/Logo';
import DreiText from '../../../../drei/text/dreiText/DreiText';
/*
Gesture Staff
*/
import BasicMove from '../../../../../gestureHandlers/useMove/basicMove';
import DragRotateReturn from '../../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a, useSpring, config } from '@react-spring/three';
/*
Basic Data
"tillFactor" for sake of "BasicMove"
*/
import {
  basicMoveConfig,
  springConfig,
  venusPaintingData,
  venusLeftSideTextConfig,
  venusGestureConfig,
  logoConfig,
} from './botticelliSectionData';

/*
---------------------------------------------------------------------
*/
const BotticelliSection = ({ groupProps }) => {
  /*
  Component State
  */
  const [isDebiut, setIsDebiut] = useState(true);
  /*
  Global State Section
  canvasState = { canvasGlobalState.currentContainer === 'none', ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gesture Section
  this animation response to mouse move and slightly rotates components
  */
  const [rotateWithMouseMove] = BasicMove({
    target: basicMoveConfig.target,
    //___
    tileFactorX: basicMoveConfig.tillFactorX,
    tileFactorY: basicMoveConfig.tillFactorY,
  });
  /*
  Gesture Section
  this animation allowes semi-rotation animation of venus painting
  */
  const { orbitImitation, dragRotateReturn } = DragRotateReturn(
    /*
    it's a section of "custome args"
    */
    {
      /*
      set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
      */
      rightDragLimitX: venusGestureConfig.rightDragLimitX,
      leftDragLimitX: venusGestureConfig.leftDragLimitX,
      /*
      set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
      */
      rightDragLimitY: venusGestureConfig.rightDragLimitY,
      leftDragLimitY: venusGestureConfig.leftDragLimitY,
    }
  );
  /*
  Spring Animation Section
  */
  const { springPosition, springRotation, springScale } = useSpring({
    springPosition:
      canvasGlobalState.currentContainer === 'introContainer'
        ? springConfig.positionEnd
        : springConfig.positionStart,

    springScale:
      canvasGlobalState.currentContainer === 'introContainer' &&
      canvasGlobalState.isInitialOverlayMounted
        ? springConfig.scaleStart
        : springConfig.scaleEnd,

    springRotation:
      canvasGlobalState.currentContainer === 'introContainer'
        ? springConfig.rotationEnd
        : springConfig.rotationStart,
    // config: springConfig.configBasic,
    config: config.molasses,
    delay: springConfig.delay,
    /*
    What does onRest() do?
    Changing state we prevent a sort of odd behaviour; condition besed on ".currentCondition" triggers animation every time user changes container; but we want only one such animation;
    */
    onRest: () => {
      !canvasGlobalState.isInitialOverlayMounted && setIsDebiut(false);
    },
  });

  const botticelliLayout = () => {
    if (isDebiut === false) {
      return { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] };
    }
    if (isDebiut) {
      if (canvasGlobalState.isCookiesPopUpMounted) {
        return {
          position: springPosition,
          rotation: springRotation,
          scale: springScale,
        };
      }
    }
  };

  useEffect(() => {
    console.log('BotticelliSection / isDebiut:', isDebiut);
  }, [isDebiut]);

  /*
  JSX
  */
  return (
    <a.group {...groupProps} {...botticelliLayout()}>
      <a.group rotation={rotateWithMouseMove}>
        <a.group
          {...venusPaintingData.groupProps}
          {...dragRotateReturn()}
          rotation={orbitImitation}
        >
          {/*-----Boticelli Painting------------------------------*/}
          <Frame1 meshProps={{ scale: [0.86, 1, 1.13] }} />
          <ImageCanvas
            meshProps={venusPaintingData.meshProps}
            format={venusPaintingData.format}
            // argsWidth, argsHeight,
            image={venusPaintingData.image}
          />
          {/*-----77 Logo-----------------------------------------*/}
          <Logo meshProps={logoConfig} />
          {/*----------Funny Text Thanks for Sandro---------------*/}
          <DreiText textConfig={venusLeftSideTextConfig} />
        </a.group>
      </a.group>
    </a.group>
  );
};

export default BotticelliSection;
