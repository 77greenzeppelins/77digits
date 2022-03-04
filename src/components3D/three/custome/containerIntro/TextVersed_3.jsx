import React from 'react';
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
  // ['Masz', 'ochotę', 'na...'],
  ['Are you', 'in a mood', 'to...'],
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
const TextVersed3 = ({ groupProps }) => {
  /*
  useThree() Staff
  */
  const { viewport } = useThree();

  /*
  JSX
  */
  return (
    <A11y role="content" description="Are you in a mood to...">
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

export default TextVersed3;

/*
Below: how I'he tried to animate fade-away of the component / text 
*/
// const a = clock.getElapsedTime();
// group.current.rotation.z = a;
// group.current.position.z += a * 0.0001;
// console.log('a....', a);

// group.current.position.z += Math.sin(clock.getElapsedTime()) * 0.001;
// console.log('group.current.rotation.z', group.current.rotation.z);
// console.log('group.current.position.z', group.current.position.z);
// const x = clock.getElapsedTime() - clock.getElapsedTime() * 0.9;
// const y = clock.getElapsedTime() - x;
// console.log('x....', x);
// console.log('y....', y);
// console.log('clock.getElapsedTime()....', clock.getElapsedTime());
// console.log('clock.getDelta()...', clock.getDelta());
// console.log('clock...........', clock);
// console.log('clock.elapsedTime....', clock.elapsedTime);
// console.log('clock.oldTime....', clock.oldTime * 0.001);
// let hardcore = clock.oldTime * 0.001 - clock.elapsedTime;
// console.log('clock.oldTime - elapsedTime....', hardcore);
// group.current.rotation.z += Math.cos(hardcore);
// console.log('clock.getElapsedTime()....', clock.getElapsedTime());
// }
// if (group.current.position.z > -7.5) {
//   console.log('turn of the light....');
// }
// });

/*
  COMMENTS TO "useFrame"
  _____1
  This animation starts when user scroll / drag to wheelBounds / dragBounds
  It is condition of the very first "if" 
  _____2
  Factor -7.75 specify how  'far / long' element should by repositioned / rotated
  */
// useFrame(() => {
//   if (
//     canvasGlobalState.wheelRange === canvasGlobalState.wheelBounds.bottom ||
//     canvasGlobalState.dragRange === canvasGlobalState.dragBounds.top
//   ) {
//     if (group.current.position.z < endPosition) {
//       group.current.rotation.z = startRotation -= 0.005;
//       group.current.position.z = startPosition += 0.004;
//       // console.log('group.current.position.z....', group.current.position.z);
//     }
//     if (group.current.position.z > endPosition) {
//       canvasState.mainLight = false;
//       // console.log('canvasGlobalState.mainLight', canvasGlobalState.mainLight);
//     }
//   }
// });

// let rotator = groupOfTextVerse.current.rotation.z;
// while (canvasGlobalState.isCanvasScrollableContainerGliding) {
//   rotator += 0.5;
//   console.log(
//     '<TextVersed3> / groupOfTextVerse.current.rotation.z',
//     groupOfTextVerse.current.rotation.z
//   );
//   if (rotator === 1) {
//     break;
//   }
// }

// groupOfTextVerse.current.rotation.z = 0;
// while (canvasGlobalState.isCanvasScrollableContainerGliding) {
//   groupOfTextVerse.current.rotation.z += 0.2;
//   console.log(
//     '<TextVersed3> / groupOfTextVerse.current.rotation.z',
//     groupOfTextVerse.current.rotation.z
//   );
//   if (groupOfTextVerse.current.rotation.z === 1) {
//     break;
//   }
// }

// if (canvasGlobalState.isCanvasScrollableContainerGliding) {
//   console.log(
//     '<TextVersed3> / is gliding',
//     canvasGlobalState.isCanvasScrollableContainerGliding
//   );
// }
// if (groupOfTextVerse.current.rotation.z < Math.PI * 2) {
//   console.log(
//     '<TextVersed3> / is rotating',
//     groupOfTextVerse.current.rotation.z
//   );
// }
