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
  // ['Jestem', 'programistą'],
  ["I'm", 'web', 'developer'],
  0.34,
  -0.37,
  0,
  -0.5,
  //fonts
  0.09,
  0.12,
  0.2,
];

/*
------------------------------------------------------------------------------
*/
const TextVersed2 = ({ groupProps }) => {
  /*
  useThree() Staff
  */
  const { viewport } = useThree();
  /*
  JSX
  */
  return (
    <A11y role="content" description="I'm web developer">
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

export default TextVersed2;
