import React, { useEffect } from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
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
import { a, useSpring, config } from '@react-spring/three';
/*
Basic Data
*/
import {
  phoneButton,
  emailButton,
  resetButtonFrame,
  resetButtonTextSlide,
  auxiliaryTopButtonFrame,
  auxiliaryTopButtonTextSlide,
  auxiliaryBottomButtonFrame,
  auxiliaryBottomButtonTextSlide,
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
    springPositionZ: canvasGlobalState.endOfContainerIntro
      ? [0, 0, -18.64]
      : [0, 0, -20.64],
    // config: config.molasses,
    config: { mass: 10, tension: 70, friction: 30 },
    delay: 200,
    /*
    onRest() works correctly as switcher; 
    */
    // onRest: () =>
    //   (canvasState.startOfContainerIntroShow =
    //     !canvasGlobalState.startOfContainerIntroShow),
  });
  const { springPositionY } = useSpring({
    springPositionY: canvasGlobalState.startOfContainerIntroShow
      ? [0, 2, 0]
      : [0, 0, 0],
    // config: config.molasses,
    config: { mass: 10, tension: 70, friction: 30 },
    delay: 200,
    /*
    onRest() works correctly as switcher; 
    */
    // onRest: () =>
    //   (canvasState.startOfContainerIntroShow =
    //     !canvasGlobalState.startOfContainerIntroShow),
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
        {/*-----Phone Button------------------------------------------*/}
        <group {...phoneButton.groupProps}>
          <UniversalFrame {...phoneButton.frameProps} />
          <UniversalCanvas {...phoneButton.canvasProps} />
        </group>

        {/*-----Reset Button------------------------------------------*/}
        <group {...resetButtonFrame.groupProps}>
          <UniversalFrame {...resetButtonFrame.frameProps} />
          <TextSlide
            groupProps={resetButtonTextSlide.groupProps}
            textProps={resetButtonTextSlide.textProps}
            fontSize={resetButtonTextSlide.fontSize}
            textLinePl={resetButtonTextSlide.textLinePl}
            textLineEn={resetButtonTextSlide.textLineEn}
            // thisLetterSpacing ={resetButtonTextSlide.groupProps}
            // whiteSpace,
          />
        </group>

        {/*-----Email Button------------------------------------------*/}
        <group {...emailButton.groupProps}>
          <UniversalFrame {...emailButton.frameProps} />
          <UniversalCanvas {...emailButton.canvasProps} />
        </group>

        {/*-----Auxiliary Top Button---------------------------------*/}

        <group {...auxiliaryTopButtonFrame.groupProps}>
          <UniversalFrame {...auxiliaryTopButtonFrame.frameProps} />
          <TextSlide
            groupProps={auxiliaryTopButtonTextSlide.groupProps}
            textProps={auxiliaryTopButtonTextSlide.textProps}
            fontSize={auxiliaryTopButtonTextSlide.fontSize}
            textLinePl={auxiliaryTopButtonTextSlide.textLinePl}
            textLineEn={auxiliaryTopButtonTextSlide.textLineEn}
            // thisLetterSpacing ={resetButtonTextSlide.groupProps}
            // whiteSpace,
          />
        </group>
        <group {...auxiliaryBottomButtonFrame.groupProps}>
          <UniversalFrame {...auxiliaryBottomButtonFrame.frameProps} />
          <TextSlide
            groupProps={auxiliaryBottomButtonTextSlide.groupProps}
            textProps={auxiliaryBottomButtonTextSlide.textProps}
            fontSize={auxiliaryBottomButtonTextSlide.fontSize}
            textLinePl={auxiliaryBottomButtonTextSlide.textLinePl}
            textLineEn={auxiliaryBottomButtonTextSlide.textLineEn}
            // thisLetterSpacing ={resetButtonTextSlide.groupProps}
            // whiteSpace,
          />
        </group>
      </a.group>
    </a.group>
  );
};

export default EndButtons;
