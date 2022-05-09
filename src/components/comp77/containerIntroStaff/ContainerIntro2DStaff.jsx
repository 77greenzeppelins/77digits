import React from 'react';
/*
Components
*/
import IntroGesturePrompt from '../gesturePrompts/1_contIntroPrompts/a_FirstGesturePrompt/IntroGesturePrompt';
import EndButtons2D from './endButtonsSection/EndButtons2D';
import RaphaelSectionToggler from './raphaelSectionToggler/RaphaelSectionToggler';

/*
----------------------------------------------------------------------
*/
const ContainerIntro2DStaff = () => {
  /*
  JSX
  */
  return (
    <>
      {/*
      Gesture Prompts that suggest to scroll / drag "down" when <Containerintro> has been mounted
      */}
      <IntroGesturePrompt />
      {/*
      Components used bellow are used to map 3D "pseudo-buttons" in <Containerintro>
      */}
      <EndButtons2D />

      <RaphaelSectionToggler />
    </>
  );
};

export default ContainerIntro2DStaff;
