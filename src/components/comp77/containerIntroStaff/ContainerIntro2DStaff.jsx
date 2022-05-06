import React from 'react';
/*
Components
*/
import IntroGesturePrompt from '../gesturePrompts/1_contIntroPrompts/a_FirstGesturePrompt/IntroGesturePrompt';
import ResetButton from './resetButton/ResetButton';
import EndButtons2D from './endButtonsSection/EndButtons2D';
import RaphaelSectionToggler from './raphaelSectionToggler/RaphaelSectionToggler';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Hook Staff
*/
import useWindowSize from '../../../hooks/useWindowSize';

/*
----------------------------------------------------------------------
*/
const ContainerIntro2DStaff = () => {
  /*
  Global State Section
  canvasState={endOfContainerIntro: false,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Hook Section
  */
  const windowSize = useWindowSize();

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
      {/* <InstantContacts /> */}
      <EndButtons2D />

      <RaphaelSectionToggler />

      {
        /*
        this second piece of JS have a logic that specifies layout of mask for pseudo-button of <RaphaelSection>
        */
        // canvasGlobalState.startOfContainerIntroShow && (
        //   <div
        //     className="container-intro-paintings__wrapper"
        //     style={{
        //       width: windowSize.width,
        //     }}
        //   >
        //     <div
        //       className="container-intro-paintings__button-wrapper"
        //       style={{
        //         height: windowSize.height * 0.1,
        //         width: windowSize.height * 0.2,
        //         top: -windowSize.height * 0.1,
        //       }}
        //     >
        //       <ResetButton toDo="close" />
        //     </div>
        //   </div>
        // )
      }
    </>
  );
};

export default ContainerIntro2DStaff;
