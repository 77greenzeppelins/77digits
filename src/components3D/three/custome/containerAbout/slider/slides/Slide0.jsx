import React from 'react';
//, { useRef, useEffect }
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
import { a, useSpring, config } from '@react-spring/three';
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
const Slide0 = React.forwardRef(({ slideId }, ref) => {
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
  const springTextVerse = useSpring({
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
    // config: config.wobbly,
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

  /*
  JSX
  */
  return (
    <a.group
      ref={ref}
      // scale={[0,0,0]}
      position={springGroup.position}
    >
      <a.group position={springTextVerse.position}>
        <TextVerse
          // textProps={{
          //   position: [0, 0, 0],
          // }}
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
      </a.group>
      <a.group position={springTextVerse.position}>
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
    </a.group>
  );
});

export default Slide0;
