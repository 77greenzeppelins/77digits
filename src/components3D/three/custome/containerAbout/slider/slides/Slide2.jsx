import React, { useRef } from 'react';
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

const Slide2 = ({ slideId }) => {
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
  const spring = useSpring({
    from: { position: [0, 0, -1] },
    to: {
      position: [
        0,
        0,
        slideId === canvasGlobalState.containerAboutSlideIndex ? 0 : -2,
        // textGroup.current
        //   ? textGroup.current.myIndex ===
        //     canvasGlobalState.containerAboutSlideIndex
        //     ? 0
        //     : -1
        //   : -1,
      ],
    },
  });

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
        text="SLIDE 1"
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
        text="content of slide 1"
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

export default Slide2;
