import React from 'react';
/*
Components
*/
import SpinningBoxGesturePrompt from '../gesturePrompts/2_contAboutPrompts/a_SpinningBoxGesturePrompt/SpinningBoxGesturePrompt';
import NavigationPanel from './navigationPanel/NavigationPanel2D';
import Slader2D from './slider2D/Slider2D';

/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Hooks
*/
import useWindowSize from '../../../hooks/useWindowSize';
/*
Basic Data
"slidesArrayNumber" is just a number for fakeSlider...
*/
// const minForTablet = 850;
import { containerAbout2DLayout } from './containerAbout2DStaffData';
const { navigationWrapper, topSectionWrapper } = containerAbout2DLayout;

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
  Reset Indicator;
  If user changes container indicator is reset to 0;
  */
  // if (canvasGlobalState.currentContainer !== 'aboutContainer') {
  //   canvasState.containerAboutSlideIndex = 0;
  //   canvasState.containerAboutSlidingDirection = 'none';
  // }
  /*
  Hook Section
  */
  const windowSize = useWindowSize();
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
        {/*
        <Slider2D > has internal ".containerAboutVisibleSlideIndex > 0 "-based concept of mounting;
        */}
        <Slader2D />

        <div
          className="container-about__bottom-wrapper"
          style={{
            width: windowSize.width,
          }}
        >
          <div
            className="container-about__navigation-wrapper"
            style={{
              height: windowSize.height * navigationWrapper.height,
              width: windowSize.height * navigationWrapper.width,
              top: -windowSize.height * navigationWrapper.height,
            }}
          >
            <NavigationPanel />
          </div>
        </div>
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
