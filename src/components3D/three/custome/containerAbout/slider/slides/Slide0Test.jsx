import React, { Suspense } from 'react';
//, { useRef, useEffect }
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../../../drei/text/textVerse/TextVerse';
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
 Basic Data
 */
const [textHeader, fontSmall, fontMiddle, fontLarge] = [
  { text: 'JESTEŚ TY', position: [0, 0.2, 0] },
  /*
  fonts size depends on "viewport.width"
  */
  0.025,
  0.035,
  0.045,
];

/*
----------------------------------------------------------------------
*/
const Slide0Test = React.forwardRef(({ slideId }, ref) => {
  /*
  References
  */
  // const group = useRef();
  /*
  Global State Section
    {containerAboutSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useThree() Staff
  */
  const { viewport } = useThree();

  /*
  Spring for TextVerses
  */
  const springSlideContent = useSpring({
    from: { position: [0, 0, -2] },
    to: {
      position: [
        0,
        0,
        /*
        test for y-axis
        */
        // canvasGlobalState.currentContainer === 'aboutContainer' &&
        // slideId < canvasGlobalState.containerAboutSlideIndex
        //   ? 1
        //   : 0,
        /*
        in case of Slider1 this second condition is mandatory; otherwise slide is animated befor user enters "containerAbout";
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
  Spring for main group
  */
  const springGroup = useSpring({
    from: { position: [0, 0, 0] },
    to: {
      position: [
        0,
        /*
        in case of Slider1 this second condition is mandatory; otherwise slide is animated befor user enters "containerAbout";
        */
        // canvasGlobalState.currentContainer === 'aboutContainer' &&
        // slideId === canvasGlobalState.containerAboutSlideIndex
        //   ? 0
        //   : slideId < canvasGlobalState.containerAboutSlideIndex
        //   ? 5
        //   : 0,
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutSlideIndex
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
      name="GroupForAnimationLevelSlide"
      ref={ref}
      // scale={[0,0,0]}
      position={springGroup.position}
    >
      {/*-----Header Text----------------------------------------------*/}
      {/* <a.group position={springSlideContent.position}>
        <TextVerse
          textProps={{
            // position: [0, 0.09, 0],
            position: textHeader.position,
          }}
          text={textHeader.text}
          font="garamont"
          fontResponsiveness={
            viewport.width < 3.0
              ? fontSmall
              : viewport.width < 5.5
              ? fontMiddle
              : fontLarge
          }
          whiteSpace="nowrap" //'normal' "nowrap"
          maxWidth={viewport.width / 9}
        />
      </a.group> */}

      {/*-----Body Section------------------------------------------
      Thera are several <grup> 
      "GroupForAnimationLevelSlider" it's a sort of "high-top-animation"; refers to slide content behaviour; 
      */}
      <Suspense fallback={null}>
        <a.group
          name="GroupForAnimationLevelSlideContent"
          position={springSlideContent.position}
        >
          <group
            name="GroupForImportedSpinningBoxLayout"
            scale={[0.3, 0.3, 0.3]}
            position={[0, -0.05, 0]}
          >
            <SpinningBox />
          </group>
        </a.group>
      </Suspense>
    </a.group>
  );
});

export default Slide0Test;

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
