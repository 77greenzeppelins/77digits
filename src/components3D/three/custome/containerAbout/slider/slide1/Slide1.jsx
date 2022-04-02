import React, { Suspense } from 'react';
/*
Components
*/
import SpinningBox from '../../../spinningBox/SpinningBox';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Spring data
*/
import { a, useSpring } from '@react-spring/three';
/*
Hook Staff
*/
import useWindowSize from '../../../../../../hooks/useWindowSize';
/*
 Basic Data
 */
import {
  slideSpring,
  slide1Box1Layout,
  slide1Box1DataForSides,
  slide1DataForSpring,
} from './slide1Data';

const minForTablet = 850;

/*
----------------------------------------------------------------------
*/

const Slide1 = ({ slideId }) => {
  /*
  Hook Section
  Why this hook?
  */
  const windowSize = useWindowSize();
  /*
  Global State Section
    {containerAboutSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  Spring for animation of "going from behind the scene"i.e on z-axis...
  */
  const springSlideContent = useSpring({
    from: { position: [0, 0, slideSpring.hiddenPositionZ] },
    to: {
      position: [
        0,
        0,
        /*
        in case of Slider1 this second condition is mandatory; otherwise slide is animated befor user enters "containerAbout"; i.e. user doesn't see how "frames" go from behind the scene;;
        */
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId === canvasGlobalState.containerAboutSlideIndex
          ? slideSpring.visiblePosition
          : slideId < canvasGlobalState.containerAboutSlideIndex
          ? slideSpring.visiblePosition
          : slideSpring.hiddenPositionZ,
      ],
    },
    config: { ...slideSpring.config },
  });

  /*
  Spring for animation entiled: "go away from here to top or left"it animates slide move on y-axis...
  */
  const springGroup = useSpring({
    from: { position: [0, 0, 0] },
    to: {
      position: [
        /*
        in case of "mobile" animation goes along the y-axis;
        */
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutSlideIndex &&
        windowSize.width < minForTablet
          ? slideSpring.hiddenPositionX
          : slideSpring.visiblePosition,
        /*
        in case of "tablet/desctop" animation goes along the y-axis;
        */
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutSlideIndex &&
        windowSize.width > minForTablet
          ? slideSpring.hiddenPositionY
          : slideSpring.visiblePosition,
        0,
      ],
    },
    config: { ...slideSpring.config },
  });

  /*
  JSX
  */
  return (
    <a.group
      name="GroupForAnimationLevelSlideOfSlide_0"
      position={springSlideContent.position}
    >
      {/*-----Body Section------------------------------------------*/}
      <Suspense fallback={null}>
        <a.group
          name="GroupForAnimationLevelSlideContentOfSlide_0"
          position={springGroup.position}
        >
          <SpinningBox
            groupProps={{
              name: 'groupForSpinningBox_slide_0_Box_1_Data',
              /*
              a bit of responsiveness based on data from "slide1Box1Layout"; 
              */
              scale:
                windowSize.width < minForTablet
                  ? slide1Box1Layout.mobile.scale
                  : slide1Box1Layout.desktop.scale,
              position:
                windowSize.width < minForTablet
                  ? slide1Box1Layout.mobile.position
                  : slide1Box1Layout.desktop.position,
              // ...slide0Box1Layout.mobile,
            }}
            /*
            array of props; using map() we get 4 <SpinningBoxSide>
            */
            spinningBoxConfig={slide1Box1DataForSides}
            springConfig={slide1DataForSpring}
            /*
            props for <SpinningBoxSide>'s spring;
            */
            isSlideVisible={
              slideId === canvasGlobalState.containerAboutSlideIndex
            }
            /*
            props for <SpinningBoxSide>'s spring; one of conditions that decide if side rotates; it chaneges within 2D <NavigationPanel> button;
            */
            isSideRotating={canvasGlobalState.slide1Rotation}
          />
        </a.group>
      </Suspense>
    </a.group>
  );
};

export default Slide1;
