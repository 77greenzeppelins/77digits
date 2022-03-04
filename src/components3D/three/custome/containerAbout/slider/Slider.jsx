import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
// import TextVerse from '../../../../drei/text/textVerse/TextVerse';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring data
*/
import { a, useSpring } from '@react-spring/three';
/*
 Basic Data
 */
import { arrayOfSlides } from './sliderData';

const [fontSmall, fontMiddle, fontLarge] = [
  /*
  fonts size depends on "viewport.width"
  */
  0.025, 0.035, 0.045,
];

/*
-----------------------------------------------------------------
*/
const Slider = () => {
  /*
  References
  */
  const textGroup = useRef();
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
  useEffect Tests
  */
  //   useEffect(() => {
  //     console.log('Slider / arrayOfSlides ', arrayOfSlides);
  //     console.log('Slider / textGroup.current ', textGroup.current.myIndex);
  //     console.log(
  //       'Slider /canvasGlobalState.containerAboutSlideIndex ',
  //       canvasGlobalState.containerAboutSlideIndex
  //     );
  //   }, [canvasGlobalState.containerAboutSlideIndex]);
  /*
  Spring Section
  */

  //   const spring = useSpring({
  //     from: { position: [0, 0, -1] },
  //     to: {
  //       position: [
  //         0,
  //         0,
  //         textGroup.current
  //           ? textGroup.current.myIndex ===
  //             canvasGlobalState.containerAboutSlideIndex
  //             ? 0
  //             : -1
  //           : -1,
  //       ],
  //     },
  //   });

  /*
  JSX
  */
  return (
    <group>
      <Slide1 slideId={0} />
      <Slide2 slideId={1} />
    </group>
  );
  //   return null;
};

export default Slider;

/* <group>
      {arrayOfSlides.map(({ text }, index) => (
        <a.group
          ref={textGroup}
          key={index}
          //   position={[0, index * 0.1 + 0.1, -0.5]}
          position={spring.position}
          myIndex={index}
        >
          <TextVerse
            textProps={{
              position: [
                0, 0, 0,
                //     0, 0, 0,
                //   topPositionY + index * reducePositionY,
                //   topPositionZ + index * reducePositionZ,
              ],
            }}
            text={text}
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
        </a.group>
      ))}
    </group> */
