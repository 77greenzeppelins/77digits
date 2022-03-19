import React from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../../../drei/text/textVerse/TextVerse';
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import UniversalCanvasWithoutMap from '../../../matcapFrames/UniversalCanvasWithoutMap';
/*
Gesture Staff
"DragRotateReturn" works as pseudoOrbitController; it just rotate obiect along with defined axis;
*/
import DragRotateReturn from '../../../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
/*
Basic variables
*/
const [
  mainText,
  leftText,
  rightText,
  topPositionY,
  reducePositionY,
  fontSmall,
  fontMiddle,
  fontLarge,
  /*
  for gestur
  */
  rightDragLimitX,
  leftDragLimitX,
  rightDragLimitY,
  leftDragLimitY,
] = [
  // ['last line', 'to explore', 'scroll or drag'],
  ['scroll or drag', 'to explore'],
  [
    { line: 'scroll', position: [-0.04, 0.09, 0] },
    { line: 'on', position: [-0.09, 0, 0] },
    { line: 'desktop', position: [0, -0.09, 0] },
  ],
  [
    { line: 'drag', position: [-0.05, 0.09, 0] },
    { line: 'on', position: [-0.08, 0, 0] },
    { line: 'mobile', position: [0, -0.09, 0] },
  ],

  0.06,
  -0.1,
  /*
  font sizes
  */
  0.05,
  0.06,
  0.065,
  /*
  gesture
  */
  -0.25,
  -0.25,
  1,
  -1,
];

/*
--------------------------------------------------------------------------
*/
const ScrollBaner = ({ groupProps }) => {
  /*
  extracting data from useThree()
  */
  const { viewport } = useThree();
  /*
  Gesture Section
  */
  const [orbitImitation, dragRotateReturn] = DragRotateReturn({
    /*
    set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
    */
    rightDragLimitX: rightDragLimitX,
    leftDragLimitX: leftDragLimitX,
    /*
    set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
    */
    rightDragLimitY: rightDragLimitY,
    leftDragLimitY: leftDragLimitY,
  });
  /*
  JSX
  */
  return (
    <a.group {...groupProps} {...dragRotateReturn()} rotation={orbitImitation}>
      <UniversalFrame
        groupProps={{ name: 'groupForMediumFrame' }}
        banner={true}
        format="banner"
      />
      <UniversalCanvasWithoutMap
        banner={true}
        format="banner"
        bgColor={[0x000000]}
      />

      {/*-----Main Text: scroll or drag------------------------------*/}
      <group name="GroupForScrollOrDrag" position={[0, 0, 0.02]}>
        {mainText.map((line, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: [0, topPositionY + index * reducePositionY, 0],
              name: 'Text_ScrollOrDragToExplore',
            }}
            text={line}
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSmall
                : viewport.width < 5.5
                ? fontMiddle
                : fontLarge
            }
            letterSpacing={0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>

      {/*-----Left Text: scroll on desktop------------------------------*/}
      <group
        name="GroupForScrollOnDesktop"
        position={[-0.5, 0, -0.18]}
        rotation={[-Math.PI * 0.5, -Math.PI * 0.5, -Math.PI * 0.5]}
      >
        {leftText.map(({ line, position }, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: position,
              name: 'Text_ScrollOnDesktop',
            }}
            text={line}
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSmall
                : viewport.width < 5.5
                ? fontMiddle
                : fontLarge
            }
            letterSpacing={0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            textAlign="left"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>

      {/*-----Right Text: drag on mobile------------------------------*/}
      <group
        name="GroupForDragOnMobile"
        position={[0.5, 0, -0.18]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        {rightText.map(({ line, position }, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: position,
              name: 'Text_DragOnMobile',
            }}
            text={line}
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSmall
                : viewport.width < 5.5
                ? fontMiddle
                : fontLarge
            }
            letterSpacing={0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            textAlign="left"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>
    </a.group>
  );
};

export default ScrollBaner;
