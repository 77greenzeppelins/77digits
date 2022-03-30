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
  slide0Box1Layout,
  slide0Box1Data,
  slide0Box2Layout,
  slide0Box2Data,
  slide0Box1DataForSpring,
  slide0Box2DataForSpring,
} from './slidesData';

const minForTablet = 850;

/*
----------------------------------------------------------------------
*/
const Slide0 = ({ slideId }) => {
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
  What is "GroupForAnimationLevelSlide"?
  What is "GroupForAnimationLevelSlideContent"
  */
  return (
    <a.group
      name="GroupForAnimationLevelSlideOfSlide_0"
      position={springGroup.position}
    >
      {/*-----Body Section------------------------------------------*/}
      <Suspense fallback={null}>
        <a.group
          name="GroupForAnimationLevelSlideContentOfSlide_0"
          position={springSlideContent.position}
        >
          <SpinningBox
            groupProps={{
              name: 'groupForSpinningBox_slide_0_Box_1_Data',
              /*
              a bit of responsiveness; 
              */
              scale:
                windowSize.width < minForTablet
                  ? slide0Box1Layout.mobile.scale
                  : slide0Box1Layout.desktop.scale,
              position:
                windowSize.width < minForTablet
                  ? slide0Box1Layout.mobile.position
                  : slide0Box1Layout.desktop.position,
            }}
            /*
            "spinningBoxConfig" is an array with configObjects as items; using map() we get 4 <SpinningBoxSide>
            */
            spinningBoxConfig={slide0Box1Data}
            springConfig={slide0Box1DataForSpring}
            isSideRotating={
              slideId === canvasGlobalState.containerAboutSlideIndex
            }
          />

          <SpinningBox
            groupProps={{
              name: 'groupForSpinningBox_slide_0_Box_2_Data',
              /*
              a bit of responsiveness; 
              */
              scale:
                windowSize.width < minForTablet
                  ? slide0Box2Layout.mobile.scale
                  : slide0Box2Layout.desktop.scale,
              position:
                windowSize.width < minForTablet
                  ? slide0Box2Layout.mobile.position
                  : slide0Box2Layout.desktop.position,
            }}
            /*
            "spinningBoxConfig" is an array with configObjects as items; using map() we get 4 <SpinningBoxSide>
            */
            spinningBoxConfig={slide0Box2Data}
            springConfig={slide0Box2DataForSpring}
            isSideRotating={
              slideId === canvasGlobalState.containerAboutSlideIndex
            }
          />
        </a.group>
      </Suspense>
    </a.group>
  );
};

export default Slide0;

/*
  useEffect Test
  */
// useEffect(() => {
//   console.log('slideId:', slideId);
//   console.log(
//     'canvasGlobalState.containerAboutSlideIndex:',
//     canvasGlobalState.containerAboutSlideIndex
//   );
//   console.log(
//     'canvasGlobalState.currentContainer:',
//     canvasGlobalState.currentContainer
//   );
// }, [
//   slideId,
//   canvasGlobalState.containerAboutSlideIndex,
//   canvasGlobalState.currentContainer,
// ]);
// console.log('textHeader.position:', textHeader.position);
