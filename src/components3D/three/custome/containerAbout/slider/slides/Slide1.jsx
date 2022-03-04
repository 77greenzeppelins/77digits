import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../../../drei/text/textVerse/TextVerse';
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
const [fontSmall, fontMiddle, fontLarge] = [
  /*
  fonts size depends on "viewport.width"
  */
  0.025, 0.035, 0.045,
];

/*
----------------------------------------------------------------------
*/
const Slide1 = ({ slideId }) => {
  /*
  References
  */
  const group = useRef();
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
  Spring Section
  */

  const spring = useSpring({
    from: { position: [0, 0, -1] },
    to: {
      position: [
        0,
        0,
        slideId === canvasGlobalState.containerAboutSlideIndex &&
        /*
        in case of Slider1 this second condition is mandatory; otherwise slide is animated befor user enters "containerAbout";
        */
        canvasGlobalState.currentContainer === 'aboutContainer'
          ? 0
          : -2,
      ],
    },
  });
  /*
  useEffect Test
  */
  useEffect(() => {
    console.log('slideId:', slideId);
    console.log(
      'canvasGlobalState.containerAboutSlideIndex:',
      canvasGlobalState.containerAboutSlideIndex
    );
    console.log(
      'canvasGlobalState.currentContainer:',
      canvasGlobalState.currentContainer
    );
  }, [
    slideId,
    canvasGlobalState.containerAboutSlideIndex,
    canvasGlobalState.currentContainer,
  ]);

  /*
  JSX
  */
  return (
    <a.group ref={group} position={spring.position}>
      <TextVerse
        textProps={{
          position: [
            0, 0, 0,
            //     0, 0, 0,
            //   topPositionY + index * reducePositionY,
            //   topPositionZ + index * reducePositionZ,
          ],
        }}
        text="SLIDE 0"
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
      <TextVerse
        textProps={{
          position: [
            0, -0.05, 0,
            //     0, 0, 0,
            //   topPositionY + index * reducePositionY,
            //   topPositionZ + index * reducePositionZ,
          ],
        }}
        text="content of slide 0"
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
  );
};

export default Slide1;
