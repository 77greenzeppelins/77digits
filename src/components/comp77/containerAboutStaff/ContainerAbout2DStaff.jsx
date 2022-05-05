import React from 'react';
/*
Components
*/
import Slader2D from './slider2D/Slider2D';
import SlidesProgressIndicator from './slidesProgressIndicator/SlidesProgressIndicator';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Gesture Staff
*/
import SpinningBoxGesturePrompt from '../gesturePrompts/2_contAboutPrompts/a_SpinningBoxGesturePrompt/SpinningBoxGesturePrompt';
import SlidesGesturePrompt from '../gesturePrompts/2_contAboutPrompts/b_SlidesGesturePrompts/SlidesGesturePrompt';

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
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      /*
      ".wrapper-empty-class" nas no CSS style; used only to oganize devTool;
      */
      <div className="container-about__wrapper-empty-class">
        {/*
        Gestiure prompt that inform what to do with <SpoinningBox>;
        has internal "useTransition()"-based concept of mounting;
        */}
        <SpinningBoxGesturePrompt />
        <SlidesGesturePrompt />
        {/*
        <Slider2D >'s slides have internal ...
        */}
        <Slader2D />
        {/*
        <SlidesProgressIndicator/> has internal "useTransition()"-based concept of mounting;
        */}
        <SlidesProgressIndicator />
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
