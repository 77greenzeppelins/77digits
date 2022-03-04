import React from 'react';
import { useThree } from '@react-three/fiber';
/*
Drai Component
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
/*
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
  // ['w inter-', 'netach ???'],
  ['on the', 'internet ???'],
  0.3,
  -0.37,
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

const TextVersed_5 = ({ groupProps }) => {
  /*
  useThree() Staff
  */
  const { viewport } = useThree();
  /*
  JSX
  */
  return (
    <A11y role="content" description="on the internet ???">
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
            thisMaterial={<meshBasicMaterial color={[1, 1, 1]} />}
          />
        ))}
      </group>
    </A11y>
  );
};

export default TextVersed_5;
