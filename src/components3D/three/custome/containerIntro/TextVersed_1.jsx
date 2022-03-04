import React, { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
/*
Drai Component
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
/*
Accesibility staff
*/
import { A11y } from '@react-three/a11y';
/*
 Basic Data
 */
const [
  text,
  topPositionY,
  reducePositionY,
  topPositionZ,
  reducePositionZ,
  fontSmall,
  fontMiddle,
  fontLarge,
] = [
  // ['Dziękuję,', 'że mnie', 'odwiedzasz!'],
  ['Thank', 'you', 'for visiting!'],
  0.32,
  -0.36,
  0,
  -0.4,
  /*
  fonts size depends on "viewport.width"
  */
  0.09,
  0.12,
  0.2,
];

/*
------------------------------------------------------------------------------
*/
const TextVersed1 = ({ groupProps }) => {
  /*
  useThree() Staff
  */
  const { viewport } = useThree();

  /*
  JSX
  */
  return (
    <A11y role="content" description="Thank you for your visit!">
      <group {...groupProps}>
        {text.map((word, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: [
                0,
                topPositionY + index * reducePositionY,
                topPositionZ + index * reducePositionZ,
              ],
            }}
            text={word}
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
        ))}
      </group>
    </A11y>
  );
};

export default TextVersed1;

/*
<meshBasicMaterial attach="material" color={[1, 1, 1]} /> 
<meshPhysicalMaterial attach="material" {...derivedMaterialProps} />
*/
