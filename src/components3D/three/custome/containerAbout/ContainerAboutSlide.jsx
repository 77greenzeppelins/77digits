import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
/*
Drei Satff
*/
// import { Text } from '@react-three/drei';
import TextVerse from '../../../drei/text/textVerse/TextVerse';

/*
-----------------------------------------------------------------------------
*/
const ContainerAboutSlide = ({
  name,
  index,
  text,
  position,
  geometry,
  material,
  thisMaterial,
}) => {
  /*
    References
    */
  const group = useRef();
  /*
   useEffect Tests Section
   */
  useEffect(() => {
    console.log('<ContainerAboutSlide> / text:', Array.isArray(text));
  }, [text]);
  return (
    <group ref={group} name={name} position={position}>
      <mesh position={[0, 0, -0]} geometry={geometry} material={thisMaterial} />
      {/* <TextVerse text={text} font="garamont" /> */}
      {/* {text &&
        text.map(
          (line, index) => console.log(line)
          // <TextVerse key={index} text={line} font="garamont" />
        )} */}
    </group>
  );
};

export default ContainerAboutSlide;
