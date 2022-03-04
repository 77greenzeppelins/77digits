import React, { useRef } from 'react';
// import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Shaders Staff
*/

/*
------------------------------------------------------------------------
*/
const ContainerAnswerYes = ({ meshProps }) => {
  /*
  References
  */
  const geometry = useRef();

  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useThree Section
  */
  const { viewport } = useThree();
  /*

  /*
 JSX
 */
  return (
    <group
      name="GroupForContainerAnswerYes"
      position={canvasGlobalState.answerYesContainerPosition}
    >
      <mesh {...meshProps}>
        <planeGeometry
          ref={geometry}
          //  {...planeArgs}
          // args={[1, 1, 1, 1]}
          // args={[2, 2, 1, 1]}
          // args={[size.width * 0.002, size.height * 0.002, 1, 1]}
          args={[viewport.width * 0.25, viewport.height * 0.25, 1, 1]}

          //   args={[size.width < 1000 ? viewport.width * desktopWidthFactor : mobileWidthFactor,
          // viewport.height * highFactor, 128, 128]}
          // args={[ viewport.width * widthFactor ,
          // viewport.height * highFactor, 128, 128]}
        />
        <meshBasicMaterial />
        {/* <backgroundShaderMaterial
          ref={material}
          // uResolution={[size.width, size.height]}
          uBigWaveElevation={0.2}
          uBigWaveFrequency={[4, 1.5]}
          uBigWaveSpeed={0.75}
          // uDepthColor = {0x0000ff}
          // uSurfaceColor = {0x8888ff}
          // uDepthColor = {0x000000}
          // uSurfaceColor = {0xffffff}
          uDepthColor={0xc9d60f}
          uSurfaceColor={0x88e9ff}
          uColorOffset={0.15}
          uColorMultiplier={2.8}
        /> */}
      </mesh>
    </group>
  );
};

export default ContainerAnswerYes;

/*
------------------------------------------------------------------------
<A11y
        role="button"
        description="Przenosi do poprzedniej sekcji"
        actionCall={() => onClick()}
      >
        <TextVerse
          textProps={{
            position: [0, 0, 0.5],
          }}
          text="powrót z ContainerAnswerYes"
          font="garamont"
          fontResponsiveness={
            viewport.width < 3.0
              ? fontSmall
              : viewport.width < 5.5
              ? fontMedium
              : fontLarge
          }
          whiteSpace="normal" //'normal' "nowrap"
          materialProps={{ color: [0, 0, 1] }}
        />
      </A11y>
*/

// if (canvasGlobalState.hasComponentOrbitController === true) {
// camera.position.set(...initialSectionCameraPosition);
// camera.lookAt(...initialSectionPosition);
// camera.position.set(0, 0, 2);
// camera.lookAt(0, 0, 0);
// camera.updateProjectionMatrix();
//   canvasState.isOrbitControlEnabled = false;
// }
// camera.position.set(...initialSectionCameraPosition);
// camera.lookAt(...initialSectionPosition);
// canvasState.isOrbitControlEnabled = false;

// canvasState.cameraDestinationPosition =
//   canvasGlobalState.answerYesContainerButtonition;
// canvasState.cameraPreviousState =
//   canvasGlobalState.answerYesContainerPosition;
//____________________________
// canvasState.cameraDestinationPosition = 'previousPosition';
// canvasState.cameraPreviousState =
//   canvasGlobalState.answerYesContainerPosition;
//____________________________

/*
        check is "brother-sendTo-button" was clicked from "orbit-sensitive" component; <AnsverYes> is "orbit-sensitive" and when User decided to go forward <AY> lost its "orbit-sensitiveness", now we want to give it to it back;
        !!! it can be written withou "if" as well 
        */
// if (canvasGlobalState.hasComponentOrbitController === true) {
//   canvasState.isOrbitControlEnabled = true;
// }
