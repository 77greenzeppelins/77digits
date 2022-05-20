import React from 'react';
/*
Components
*/
import Slader2D from './slider2D/Slider2D';
// import SlidesProgressIndicator from './slidesProgressIndicator/SlidesProgressIndicator';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Components
*/
import SpinningBoxGesturePrompt from '../gesturePrompts/2_contAboutPrompts/a_SpinningBoxGesturePrompt/SpinningBoxGesturePrompt';
import SlidesGesturePrompt from '../gesturePrompts/2_contAboutPrompts/b_SlidesGesturePrompts/SlidesGesturePrompt';

/*
 ----for  T E S T  sake--------------------------------------
 */
import ContAboutNavGest from '../../../gestureHandlers/useGesture/ContAboutNavGest';
import { animated } from '@react-spring/web';
/*
-------------------------------------------------------------------------------
*/
const ContainerAbout2DStaff = () => {
  /*
  Global State Section
  canvasState = {currentContainer: 'none',...}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
 ----for  T E S T  sake--------------------------------------
 */
  const { springValue, progressValue } = ContAboutNavGest();
  /*
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      /*
      ".wrapper-empty-class" nas no CSS style; used only to oganize devTool;
      */
      <div className="container-about__wrapper-empty-class">
        {/*----for  T E S T  sake-------------------------------------- */}
        {/* {canvasGlobalState.currentContainer === 'aboutContainer' && (
          <animated.div
            style={{
              position: 'fixed',
              bottom: 0,
              right: 0,
              width: '100px',
              height: '100px',
              backgroundColor: 'green',
              opacity: springValue,
            }}
          >
            {progressValue.to(x => x.toFixed())}
          </animated.div>
        )} */}

        {/*
        Gesture prompt based on <GesturePromptTurboParent>; it informs what to do with <SpinningBox>; has internal "useTransition()"-based concept of mounting;
        */}
        {/* <SpinningBoxGesturePrompt /> */}
        {/*
        Gesture prompt that inform what is going on in  <Slader2D>;
        has internal "useTransition()"-based concept of mounting;
        */}
        <SlidesGesturePrompt />
        {/*
        <Slider2D >'s slides have internal ...
        */}
        <Slader2D />
        {/*
        <SlidesProgressIndicator/> has internal "useTransition()"-based concept of mounting;
        */}
        {/* <SlidesProgressIndicator /> */}
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
