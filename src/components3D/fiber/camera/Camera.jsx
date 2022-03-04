/*
taken from :
 https://github.com/pmndrs/react-three-fiber/blob/master/markdown/recipes.md#using-your-own-camera-rig
 */

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';

/*
--------------------------------------------------------------------------
*/
const Camera = ({ refToOrbitController }) => {
  /*
  Global State Section; {containerPositionZ: true, cameraNear: 1.2,,mainLight: false, sideLights:0, wheelRange: 0, dragRange: 0, is77digitsButtonActive: 0,}
   */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  References
  */
  const cameraRef = useRef();
  /*
 https://codesandbox.io/s/use-gesture-test-i3n9o?file=/src/App.js:1705-1706
 */
  const { set, size } = useThree();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size]);

  useEffect(() => {
    set({ camera: cameraRef.current });
  }, [set]);

  useEffect(() => {
    switch (canvasGlobalState.cameraDestinationPosition) {
      /*
      for "brother-sendTo-button" in <HeaderLogoContainer>
      */
      case '77digitsButton':
        cameraRef.current.position.set(
          ...canvasGlobalState.aboutSectionCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.aboutSectionPosition);
        break;
      /*
      for "brother-sendTo-button" in <HeaderLogoContainer>
      */
      case 'aboutSectionButton':
        cameraRef.current.position.set(
          ...canvasGlobalState.initialSectionCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.initialSectionPosition);
        refToOrbitController.update(); //??????????????????

        break;
      /*
      for "brother-sendTo-button" in <AnsverYes>
      */
      case 'answerYesButton':
        cameraRef.current.position.set(
          ...canvasGlobalState.answerYesSectionCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.answerYesSectionPosition);

        break;
      /*
      for "brother-return-button" in <AnswerYesSection>
      */
      case 'answerYesSectionButton':
        cameraRef.current.position.set(
          ...canvasGlobalState.answerYesCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.answerYesPosition);
        refToOrbitController.update();

        break;
      /*
      for "brother-sendTo-button" in <AnsverNo>
      */
      case 'answerNo':
        cameraRef.current.position.set(
          ...canvasGlobalState.answerNoSectionCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.answerNoSectionPosition);

        break;
      /*
      for "brother-return-button "
      */
      case 'previousPosition':
        cameraRef.current.position.set(
          ...canvasGlobalState.initialSectionCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.initialSectionPosition);

        break;
      case 'previousNestedPosition':
        cameraRef.current.position.set(
          ...canvasGlobalState.cameraCurrentPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.componentCurrentPosition);

        break;
      default:
        cameraRef.current.position.set(
          ...canvasGlobalState.initialSectionCameraPosition
        );
    }
  }, [
    // canvasGlobalState.aboutSectionPosition,

    //
    canvasGlobalState.answerYesCameraPosition,
    canvasGlobalState.answerYesPosition,
    //_____
    canvasGlobalState.aboutSectionCameraPosition,
    canvasGlobalState.aboutSectionPosition,
    canvasGlobalState.answerYesSectionCameraPosition,
    canvasGlobalState.answerYesSectionPosition,
    canvasGlobalState.answerNoSectionCameraPosition,
    canvasGlobalState.answerNoSectionPosition,
    //_____
    canvasGlobalState.cameraDestinationPosition,
    canvasGlobalState.cameraPreviousPosition,
    canvasGlobalState.initialSectionCameraPosition,
    canvasGlobalState.initialSectionPosition,
    canvasGlobalState.cameraCurrentPosition,
    canvasGlobalState.componentCurrentPosition,
    refToOrbitController,
    // cameraPositionSetter,
  ]);
  /*
  useEffect Tests
  */
  // useEffect(() => {
  //   console.log('<Camera> / refToOrbitController:', refToOrbitController);
  //   // console.log('<Camera> /  camera.near:', cameraRef.current.near);
  // }, [refToOrbitController]);

  //_____JSX
  return (
    <perspectiveCamera
      name="customePerspectiveCamera"
      ref={cameraRef}
      position={[0, 0, 2]}
      // near={canvasGlobalState.containerPositionZ ? 1.2 : 0.1}
      far={1000}
      fov={45}
    />
  );
};

export default Camera;

/*
alternative approach
*/
// const set = useThree(state => state.set);

// // Make the camera known to the system
// useEffect(() => {
//   void set({ camera: cameraRef.current });
// }, []);

// // Update camera every frame
// useFrame(() => cameraRef.current.updateMatrixWorld());

//_____nie działa....
// useFrame(
//   ({ camera }) => {
//     if (canvasGlobalState.containerPositionZ) {
//       camera.near = 1.5;
//     } else {
//       camera.near = 0.1;
//     }
//   }
//   // (camera.near = canvasGlobalState.containerPositionZ ? 1.5 : 0.2)
// );

/*
    some small handler
    */
// const cameraPositionSetter = () => {
//   if (refToOrbitController) {
//     /*
//     disables orbitController after onClick() in <AnswerNo> / <AnswerYes>
//     */
//     refToOrbitController.enable = false;
//     console.log(
//       '<Camera> / refToOrbitController.enable:',
//       refToOrbitController.enable
//     );
//     cameraRef.current.position.set(0, -6, 2);
//     cameraRef.current.lookAt(0, -6, 0);

//     // refToOrbitController.update(); //???????????????????
//   }
// };
// console.log(
//   '<Camera> / canvasGlobalState.cameraDestinationPosition:',
//   canvasGlobalState.cameraDestinationPosition
// );
// console.log(
//   '<Camera> / cameraRef.current.position:',
//   cameraRef.current.position
// );

/*
  Basic constants
  */
// const [
//   aboutSectionCameraPosition,
//   aboutSectionPosition,
//   answerYesSectionCameraPosition,
//   answerYesSectionPosition,
//   answerNoSectionCameraPosition,
//   answerNoSectionPosition,
// ] = useMemo(() => {
//   return [
//     [0, -3, 2],
//     [0, -3, 0],
//     [0, -6, 2],
//     [0, -6, 0],
//     [0, -9, 2],
//     [0, -9, 0],
//   ];
// }, []);
