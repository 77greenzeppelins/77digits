import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
/*
Drei Satff
*/
// import { Text } from '@react-three/drei';
import TextVerse from '../../../drei/text/textVerse/TextVerse';
/*
Basic Data
*/
const text = 'slide2';
/*
-----------------------------------------------------------------------------
*/

const ContainerAboutSlide_2 = ({ groupProps, geometry, thisMaterial }) => {
  /*
  References
  */
  const group = useRef();
  return (
    <group ref={group} {...groupProps}>
      <mesh position={[0, 0, -0]} geometry={geometry} material={thisMaterial} />
      <TextVerse text={text} font="garamont" />
    </group>
  );
};

export default ContainerAboutSlide_2;
