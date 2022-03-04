import React from 'react';
import * as THREE from 'three';
/*
Components
*/
import UniversalFrame from '../matcapFrames/UniversalFrame';
import UniversalCanvas from '../matcapFrames/UniversalCanvas';
/*
Drai Staff
*/
import { useThree } from '@react-three/fiber';
import TextVerse from '../../../drei/text/textVerse/TextVerse';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Gesture Staff
*/
import BasicMove from '../../../../gestureHandlers/useMove/basicMove';
import { a } from '@react-spring/three';
/*
Accesibility staff
*/
import { A11y } from '@react-three/a11y';
/*
Assets
*/
import raphael from '../../../../assets/textures/PlatoAndAristoteles.jpg';
/*
Basic Data
*/
const [
  // tekstPoPolsku,
  textLines,
  gestureTillFactor,
  fontColor,
] = [
  /*
  for the sake of <TextVerse>
  */
  // [
  //   { text: 'Panowie Platon i Arystoteles', position: [0, 0, 0] },
  //   { text: 'liczę na waszą wyrozumiałość...', position: [0, -0.05, 0] },
  // ],
  [
    { text: 'Dear Plato and Aristotles', position: [0, 0, 0] },
    { text: 'I count on your understanding...', position: [0, -0.05, 0] },
  ],
  0.1,
  new THREE.Color(0xbd4f2f), //burlywood
  // '0x606060',
  // '0xd7d2cc',
  // [189,79,47], // siena
];

/*
------------------------------------------------------------------------
*/
const RaphaelPainting = ({ groupProps, matcapMaterial }) => {
  /*
  extracting data from useThree()
  */
  const { viewport } = useThree();
  /*
  Gesture Section
  "BasicMove" is responsive to mouse move / position;
  */
  const [rotation] = BasicMove({
    /*
    if you set "enabled" as below after suer action "DragRotateReturn" current effect disappears i.e user must scroll to the very end again to activate it
    */
    // enabled: canvasGlobalState.isYesNoButtonClickable,
    target: window,
    tileFactor: gestureTillFactor,
  });

  /*
  JSX
  */
  return (
    <a.group {...groupProps} rotation={rotation}>
      {/*----------Frame + Canvas--------------------------------------*/}
      <UniversalFrame
        groupProps={{ name: 'groupForMediumFrame' }}
        portrait={true}
      />
      <A11y role="image" description="Raphael. The School of Athens ">
        <UniversalCanvas image={raphael} />
      </A11y>

      {/*----------Funny Text to Plato & Aristotlees---------------*/}
      <A11y
        role="content"
        description="Dear Plato and Aristotles. I count on your understanding..."
      >
        <group
          name="groupForFunnyTextToPlatoAndAristotles"
          rotation={[0, 0, -Math.PI * 0.5]}
          position={[-0.23, 0, -0.25]}
        >
          {textLines.map(({ text, position }, index) => (
            <TextVerse
              key={index}
              textProps={{
                position: position,
                name: 'FunnyTextToPlatoAndAristotles',
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
              letterSpacing={0.15}
              fontColor={fontColor}
            />
          ))}
        </group>
      </A11y>
    </a.group>
  );
};

export default RaphaelPainting;

/* 
<meshPhongMaterial
          map={loadedImage}
          side={THREE.DoubleSide}
          color={0x555555}
          specular={0xffffff}
          shininess={500}
          // opacity={true}
        /> 
*/

/* 
<meshStandardMaterial
          receiveShadow
          map={loadedImage}
          // color={0x555555}
          metalness={0}
          roughness={0}
        /> 
*/
