import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
/*
Global State staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import ContainerIntroContent from './ContainerIntroContent';

/*
------------------------------------------------------------------------
 */
const ContainerIntro = ({ onClickCameraSetter }) => {
  /*
  References
  */
  const introContainer = useRef();
  // const scrollStimulus = useRef();
  /*
Global State Section
canvasState = {isIntroSection1Playing: false, ...}
*/
  // const canvasGlobalState = useSnapshot(canvasState);

  /*
  useFrame Section
  */
  // useFrame(() => {
  //   /*
  //   Refers to : <IntroSectionContainer> and <ScrollStimulus?
  //   Description: "if condition" specifies same "point of toggling"; when  <introSectionContainer> has position.z < 1  <ScrollStimulus> is visible, otherwise is invisible
  //   */
  //   if (
  //     introContainer.current.position.x === 0 &&
  //     introContainer.current.position.y === 0 &&
  //     introContainer.current.position.z < positionZFactor
  //   ) {
  //     scrollStimulus.current.visible = true;
  //   } else {
  //     scrollStimulus.current.visible = false;
  //   }
  // });

  /*
  JSX
  */
  return (
    <group name="GroupForContainerIntro">
      <ContainerIntroContent
        ref={introContainer}
        groupProps={{
          name: 'GroupForIntroContainerConntent',
        }}
      />
      {/* <BackgroundForOdlot
        meshProps={{
          position: [0, 0, -0.6],
        }}
      /> */}
      {/* <ContainerIntroNavBar
        groupProps={{
          name: 'GroupForContainerIntroNavBar',
          position: [0, -0.6, 0],
        }}
      /> */}
      {/* <ScrollStimulus
        ref={scrollStimulus}
        groupProps={{
          name: 'scrollStimulus',
        }}
      /> */}
    </group>
  );
};

export default ContainerIntro;

/*
version with buttons
*/
/*
useFrame Section
*/

/*
for play button
*/
// useFrame(() => {
//   if (
//     canvasGlobalState.isIntroSection1Playing === true &&
//     introSection1.current.position.z <= 5 &&
//     introSection1.current.position.z >= 0
//   ) {
//     if (canvasGlobalState.glidingDirection === 'forward') {
//       introSection1.current.position.z += 0.005;
//     } else {
//       introSection1.current.position.z -= 0.005;
//     }
//     // }
//   }
// });

/*
for play button
*/
// useEffect(() => {
//   const interval = setInterval(() => {
//     if (
//       canvasGlobalState.isIntroSection1Playing === true &&
//       introSection1.current.position.z <= 5 &&
//       introSection1.current.position.z >= 0
//     ) {
//       if (canvasGlobalState.glidingDirection === 'forward') {
//         introSection1.current.position.z += 0.005;
//         console.log(
//           'introSection1.current.position.z',
//           introSection1.current.position.z
//         );
//       } else {
//         introSection1.current.position.z -= 0.005;
//       }
//     }
//   }, 0.001);
//   return () => clearInterval(interval);
// }, [
//   canvasGlobalState.isIntroSection1Playing,
//   canvasGlobalState.glidingDirection,
// ]);

/*
  for reset button
  */
// useEffect(() => {
//   if (canvasGlobalState.makeIntroSection1Reseted === true) {
//     introSection1.current.position.z = 0;
//   }
// }, [canvasGlobalState.makeIntroSection1Reseted]);

/*
-------------------------------------------------------------------------
old version
*/
// if (
//   canvasGlobalState.wheelRange === canvasGlobalState.wheelBounds.bottom ||
//   canvasGlobalState.dragRange === canvasGlobalState.dragBounds.top
// ) {
//   console.log('<IntroSection> / useEffect / time to disable header!!!!');
// }
// console.log(
//   '<IntroSection> / introSectionContainer.current......................',
//   introSectionContainer.current.children[3]
// );
// if (introSectionContainer.current.position.z > 12) {
//   canvasGlobalState.isRaphaelMoving = 0;
//   // console.log('<introSectionContainer> / group.current.position.z:', group.current.position.z);
// }
// console.log(
//   '<IntroSection> / introSectionContainer.current.position.z',
//   introSectionContainer.current.position.z
// );
