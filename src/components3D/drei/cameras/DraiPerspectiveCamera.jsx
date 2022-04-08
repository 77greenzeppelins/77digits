import React, { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';

/*
----------------------------------------------------------------------------
*/
const DraiPerspectiveCamera = () => {
  /*
  References
  */
  const cameraRef = useRef();
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useEffect Test Section
  */
  useEffect(() => {
    switch (canvasGlobalState.currentContainer) {
      case 'introContainer':
        cameraRef.current.position.set(
          ...canvasGlobalState.introContainerCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.introContainerPosition);
        break;

      case 'aboutContainer':
        cameraRef.current.position.set(
          ...canvasGlobalState.aboutContainerCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.aboutContainerPosition);
        break;

      case 'answerYesContainer':
        cameraRef.current.position.set(
          ...canvasGlobalState.answerYesContainerCameraPosition
        );
        cameraRef.current.lookAt(
          ...canvasGlobalState.answerYesContainerPosition
        );
        break;

      case 'answerNoContainer':
        cameraRef.current.position.set(
          ...canvasGlobalState.answerNoContainerCameraPosition
        );
        cameraRef.current.lookAt(
          ...canvasGlobalState.answerNoContainerPosition
        );
        break;

      case 'menuContainer':
        cameraRef.current.position.set(
          ...canvasGlobalState.menuContainerCameraPosition
        );
        cameraRef.current.lookAt(
          ...canvasGlobalState.menuContainerCameraPosition
        );
        break;

      default:
        cameraRef.current.position.set(
          ...canvasGlobalState.defaultContainerCameraPosition
        );
        cameraRef.current.lookAt(...canvasGlobalState.defaultContainerPosition);
        break;
    }
  }, [
    canvasGlobalState.currentContainer,
    canvasGlobalState.introContainerCameraPosition,
    canvasGlobalState.introContainerPosition,
    canvasGlobalState.aboutContainerCameraPosition,
    canvasGlobalState.aboutContainerPosition,
    canvasGlobalState.answerYesContainerCameraPosition,
    canvasGlobalState.answerYesContainerPosition,
    canvasGlobalState.answerNoContainerCameraPosition,
    canvasGlobalState.answerNoContainerPosition,
    canvasGlobalState.menuContainerCameraPosition,
    canvasGlobalState.menuContainerPosition,
    canvasGlobalState.defaultContainerCameraPosition,
    canvasGlobalState.defaultContainerPosition,
  ]);

  /*
  JSX
  */
  return (
    <PerspectiveCamera
      makeDefault
      //
      name="customePerspectiveCamera"
      ref={cameraRef}
      position={[0, 0, 2]}
      far={5} //_____comments belowe
      fov={45}
    />
  );
};

export default DraiPerspectiveCamera;

/*
Why "far={10}"??
I've tested "visibility" of <ContainerIntro" from <ContainerAbout> point of view (such test requires no fog of ourse); takeoff: no point in setting numbers like "100"...
*/
