import React from 'react';

/*
Components
*/
// import MediumFrame from '../../matcapFrames/MediumFrame';
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../../matcapFrames/UniversalCanvas';
/*
Drai Staff
*/
import { useThree } from '@react-three/fiber';
import TextVerse from '../../../../../drei/text/textVerse/TextVerse';
/*
Assets
*/
import venus from '../../../../../../assets/textures/venus_2.png';
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
Accesibility staff
*/
import { A11y } from '@react-three/a11y';
/*
Basic Data
*/
const [
  textLines,
  fontColor,
  rightDragLimitX,
  leftDragLimitX,
  rightDragLimitY,
  leftDragLimitY,
] = [
  /*
  for the sake of <TextVerse>
  */
  [
    { text: '"The  Birth  of  77digits"', position: [0, 0, 0] },
    { text: 'Thanks Sandro for inspiration...', position: [0.055, -0.05, 0] },
  ],
  // 0.1,
  [42, 102, 111], // darkslategray
  /*
  DragRotateReturn props
  */
  0.25,
  0.25,
  1,
  -1,
];

/*
--------------------------------------------------------------------------
*/
const VenusInFrame = ({ groupProps, rotationX }) => {
  /*
  extracting data from useThree()
  */
  const { viewport } = useThree();
  /*
  Gesture Section
  */
  const [orbitImitation, dragRotateReturn] = DragRotateReturn({
    /*
    set initial value of "rotation.z";
    */
    // rotationX: rotationX,
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
        portrait={true}
      />
      {/* <A11y role="image" description="Raphael. The School of Athens "> */}
      <UniversalCanvas image={venus} />
      {/* </A11y> */}

      {/*----------Funny Text to Plato & Aristotlees---------------*/}
      <A11y role="content" description="The Birth of 77digits">
        <group
          name="groupForTheBirthOf77digits"
          rotation={[0, -Math.PI * 0.45, -Math.PI * 0.5]}
          position={[-0.32, 0.1, -0.05]}
        >
          {textLines.map(({ text, position }, index) => (
            <TextVerse
              key={index}
              textProps={{
                position: position,
                name: 'TheBirthOf77digits',
              }}
              text={text}
              // font="garamont"
              fontResponsiveness={
                viewport.width < 3.0
                  ? 0.28
                  : viewport.width < 5.5
                  ? 0.03
                  : 0.035
              }
              whiteSpace="normal" //'normal' "nowrap
              letterSpacing={0.19}
              fontColor={fontColor}
            />
          ))}
        </group>
      </A11y>
    </a.group>
  );
};

export default VenusInFrame;
