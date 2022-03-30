import React, { useEffect } from 'react';
/*
Components
*/
import InstantContactsSection from './instantContactsSection/InstantContactsSection';
import AuxiliaryButtonSection from './auxiliaryButtonSection/AuxiliaryButtonSection';
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import TextSlide from '../../textSlides/textSlide/TextSlide';

/*
Global State Section
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
/*
Spring data
*/
import { a, useSpring } from '@react-spring/three';
/*
Basic Data
*/
import {
  springConfig,
  //_____
  resetButtonFrame,
  resetButtonTextSlide,
} from './endButtonsData';

/*
-----------------------------------------------------------------------------
*/
const EndButtons = () => {
  /*
  Global State Section
  canvasState = {endOfContainerIntro: false, startOfContainerIntroShow: false, ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Animation Section
  */
  const { springPositionZ } = useSpring({
    /*
    this animation happens when user scrolls to the end of container
    */
    springPositionZ: canvasGlobalState.endOfContainerIntro
      ? springConfig.positionZEnd
      : springConfig.positionZStart,
    config: springConfig.configBasic,
    delay: springConfig.delay,
  });
  const { springPositionY } = useSpring({
    /*
    this animation happens when clicks any of auxiliary button: it's actually the very firs part of larger animation where the cesond part referce to "Platon&Aristotles";
    */
    springPositionY: canvasGlobalState.startOfContainerIntroShow
      ? springConfig.positionYEnd
      : springConfig.positionYStart,
    // config: config.molasses,
    config: springConfig.configBasic,
    delay: springConfig.delay,
  });

  useEffect(() => {
    console.log(
      'EndButtons / canvasGlobalState.startOfContainerIntroShow:',
      canvasGlobalState.startOfContainerIntroShow
    );
  }, [canvasGlobalState.startOfContainerIntroShow]);
  /*
  JSX
  */
  return (
    <a.group position={springPositionY}>
      <a.group position={springPositionZ}>
        {/*-----Instant Contact Buttons-------------------------------*/}
        <InstantContactsSection />
        {/*-----Reset Button------------------------------------------*/}
        <group {...resetButtonFrame.groupProps}>
          <UniversalFrame {...resetButtonFrame.frameProps} />
          <TextSlide
            groupProps={resetButtonTextSlide.groupProps}
            textProps={resetButtonTextSlide.textProps}
            font={resetButtonTextSlide.font}
            fontSize={resetButtonTextSlide.fontSize}
            textLinePl={resetButtonTextSlide.textLinePl}
            textLineEn={resetButtonTextSlide.textLineEn}
          />
        </group>
        {/*-----Auxiliary Buttons-----------------------------------*/}
        <AuxiliaryButtonSection />
      </a.group>
    </a.group>
  );
};

export default EndButtons;
