import React, { Suspense, useMemo } from 'react';
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
Assets
import images for <SpinningBox> / <SpinningBoxSide> / <UniversalCanvas> / image  
*/
import containerAbout_Slide0_box1_image1 from '../../../../../../assets/textures/containerAbout_Slide0_box1_image1.png';
import containerAbout_Slide0_box1_image2 from '../../../../../../assets/textures/containerAbout_Slide0_box1_image2.png';
import containerAbout_Slide0_box2_image1 from '../../../../../../assets/textures/containerAbout_Slide0_box2_image1.png';
import containerAbout_Slide0_box2_image2 from '../../../../../../assets/textures/containerAbout_Slide0_box2_image2.png';
/*
 Basic Data
 */
import {
  slide0Box1Layout,
  slide0Box1Data,
  slide0Box2Layout,
  slide0Box2Data,
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
  Arrays of images
  */
  const imagesPortrait = useMemo(
    () => [
      containerAbout_Slide0_box1_image1,
      containerAbout_Slide0_box1_image2,
      containerAbout_Slide0_box1_image1,
      containerAbout_Slide0_box1_image2,
    ],
    []
  );

  const imagesBanner = useMemo(
    () => [
      containerAbout_Slide0_box2_image1,
      containerAbout_Slide0_box2_image2,
      containerAbout_Slide0_box2_image1,
      containerAbout_Slide0_box2_image2,
    ],
    []
  );
  /*
  Spring for animation of "going from behind the scene"i.e on z-axis...
  */
  const springSlideContent = useSpring({
    from: { position: [0, 0, -2] },
    to: {
      position: [
        0,
        0,
        /*
        in case of Slider1 this second condition is mandatory; otherwise slide is animated befor user enters "containerAbout"; i.e. user doesn't see how "frames" go from behind the scene;;
        */
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId === canvasGlobalState.containerAboutSlideIndex
          ? 0
          : slideId < canvasGlobalState.containerAboutSlideIndex
          ? 0
          : -2,
      ],
    },
    config: { mass: 10, tension: 70, friction: 30 },
  });

  /*
  Spring for animation entiled: "go away from here to heven"it animates slide move on y-axis...
  */
  const springGroup = useSpring({
    from: { position: [0, 0, 0] },
    to: {
      position: [
        /*
        in case of mobile animation goes along the y-axis;
        */
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutSlideIndex &&
        windowSize.width < minForTablet
          ? -1
          : 0,
        /*
        in case of tablet/desctop animation goes along the y-axis;
        */
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutSlideIndex &&
        windowSize.width > minForTablet
          ? 1
          : 0,
        0,
      ],
    },
    config: { mass: 10, tension: 70, friction: 30 },
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
              // ...slide0Box1Layout.mobile,
            }}
            /*
            array of props; using map() we get 4 <SpinningBoxSide>
            */
            spinningBoxConfig={slide0Box1Data}
            /*
            array of images ultimately used in <UniversalCanvas>
            */
            images={imagesPortrait}
            /*
            prop for <UniversalFrame> & <UniversalCanvas>
            */
            portrait={true}
            /*
            set value of rotation generated by useFrame()
            */
            setRotationYSpeed={0.1}
            /*
            props for "DragRotateStepByStep"
            */
            setDragRotationX={0}
            axisLimitation="x"
            animationDelay={9000}
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
              // ...slide0Box1Layout.mobile,
            }}
            /*
            array of props; using map() we get 4 <SpinningBoxSide>
            */
            spinningBoxConfig={slide0Box2Data}
            /*
            array of images ultimately used in <UniversalCanvas>
            */
            images={imagesBanner}
            /*
            prop for <UniversalFrame> & <UniversalCanvas>
            */
            banner={true}
            /*
            set value of rotation generated by useFrame()
            */
            setRotationXSpeed={-0.1}
            /*
            props for "DragRotateStepByStep"
            */
            setDragRotationX={0}
            axisLimitation="y"
            animationDelay={11000}
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
