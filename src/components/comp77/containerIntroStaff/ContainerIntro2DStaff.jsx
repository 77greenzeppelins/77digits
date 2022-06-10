import React from 'react';
/*
Components
*/
import IntroGesturePrompt from '../gesturePrompts/1_contIntroPrompts/a_FirstGesturePrompt/IntroGesturePrompt';
import EndButtons2D from './endButtonsSection/EndButtons2D';

/*
----------------------------------------------------------------------
*/
const ContainerIntro2DStaff = () => {
  /*
  JSX
  */
  return (
    <>
      <IntroGesturePrompt
      /*
      Gesture Prompts that suggest to scroll / drag "down" when <Containerintro> has been mounted
      */
      />
      <EndButtons2D />
    </>
  );
};

export default ContainerIntro2DStaff;
