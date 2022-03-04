import React, { useRef } from 'react';
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
  // ['w inter-', 'netach ???'],
  /*
  word "off" requires scpecial approach; normally "ff" overlap; 
  solution: separate letters with space and set TextVerse's props "letterSpacing"
  */
  ['p u r l y', 't a k e - o f f '],
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

const TextVersed_4 = ({ groupProps }) => {
  /*
  References
  */
  const groupOfTextVerse = useRef();
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
            letterSpacing={0.1}
            whiteSpace="nowrap" //'normal' "nowrap"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>
    </A11y>
  );
};
export default TextVersed_4;

/*
  useEffect Tests Section
  */
// useEffect(() => {
// let interval;
//_________________v2 rotate 360 deg
// if (canvasGlobalState.isYesNoSectionReadyToGlide) {
//   interval = setInterval(() => {
//     if (groupOfTextVerse.current.rotation.z < Math.PI * 2) {
//       groupOfTextVerse.current.rotation.z += 0.004;
//     }
//   }, 1);
// }
//_________________v3 error
// while (
//   canvasGlobalState.isYesNoSectionReadyToGlide &&
//   groupOfTextVerse.current.rotation.z < Math.PI * 2
// ) {
//   interval = setInterval(() => {
//     groupOfTextVerse.current.rotation.z += 0.005;
//   }, 1);
// }
// return () => clearInterval(interval);
// }, [canvasGlobalState.isYesNoSectionReadyToGlide]);
