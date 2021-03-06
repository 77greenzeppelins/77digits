import React from 'react';
/*
Components
*/
import Slader2D from './slider2D/Slider2D';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Components
*/
// import SpinningBilboardGesturePrompt from '../gesturePrompts/2_contAboutPrompts/SpinningBilboardGesturePrompt/SpinningBilboardGesturePrompt';
import SlidesGesturePrompt from '../gesturePrompts/2_contAboutPrompts/b_SlidesGesturePrompts/SlidesGesturePrompt';
/*
Spring Staff
*/
import { animated, useSpring, config } from '@react-spring/web';
/*
-------------------------------------------------------------------------------
*/
const ContainerAbout2DStaff = () => {
  /*
  Global State Section
  canvasState = {currentContainer: 'none',...}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  const [{ opacityValue, progressValue }] = useSpring(
    {
      opacityValue:
        canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 1 : 0.3,
      progressValue:
        (canvasGlobalState.containerAboutVisibleSlideIndex / (5 - 1)) * 100,
      config: config.molasses,
    },
    [canvasGlobalState.containerAboutVisibleSlideIndex]
  );

  /*
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      /*
      ".wrapper-empty-class" nas no CSS style; used only to oganize devTool;
      */
      <div className="container-about__wrapper-empty-class">
        {/*
        Gesture prompt based on <GesturePromptTurboParent>; it informs what to do with <SpinningBox>; has internal "useTransition()"-based concept of mounting;
        */}
        {/* <SpinningBoxGesturePrompt /> */}

        {/*
        Gesture prompt that inform what is going on in  <Slader2D>;
        has internal "useTransition()"-based concept of mounting;
        */}

        <SlidesGesturePrompt
          opacityValue={opacityValue}
          progressValue={progressValue}
        />
        {/*
        <Slider2D >'s slides have internal ...
        */}
        <Slader2D />

        {/*----for  T E S T  sake-------------------------------------- */}
        {/* {canvasGlobalState.currentContainer === 'aboutContainer' && ( */}
        {/* <>
          <animated.div
            style={{
              position: 'fixed',
              bottom: 0,
              right: 0,
              width: '100px',
              height: '100px',
              backgroundColor: 'green',
              opacity: opacityValue,
            }}
          >
            {progressValue.to(x => x.toFixed())}
          </animated.div>
        </> */}
        {/* )} */}
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
