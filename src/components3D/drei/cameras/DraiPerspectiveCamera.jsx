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
      far={100}
      fov={45}
    ></PerspectiveCamera>
  );
};

export default DraiPerspectiveCamera;
