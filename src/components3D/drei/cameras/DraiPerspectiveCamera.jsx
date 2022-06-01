import React, { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Components
*/
import InstantContactsPanel from './navSection/instantContactsPanel/InstantContactsPanel';
import PlaneOverlay from './turboOverlay/PlaneOverlay';

/*
Basic Data
*/
import { globalPositionData } from '../../../data/globalData';
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
          ...globalPositionData.introContainerCameraPosition
        );
        cameraRef.current.lookAt(...globalPositionData.introContainerPosition);
        break;

      case 'aboutContainer':
        cameraRef.current.position.set(
          ...globalPositionData.aboutContainerCameraPosition
        );
        cameraRef.current.lookAt(...globalPositionData.aboutContainerPosition);
        break;

      case 'raphaelContainer':
        cameraRef.current.position.set(
          ...globalPositionData.raphaelContainerCameraPosition
        );
        cameraRef.current.lookAt(
          ...globalPositionData.raphaelContainerPosition
        );
        break;

      case 'menuContainer':
        cameraRef.current.position.set(
          ...globalPositionData.menuContainerCameraPosition
        );
        cameraRef.current.lookAt(
          ...globalPositionData.menuContainerCameraPosition
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
      far={5} //_____comments below
      fov={45}
    >
      <InstantContactsPanel />
      <PlaneOverlay />
    </PerspectiveCamera>
  );
};

export default DraiPerspectiveCamera;

/*
Why "far={10}"??
I've tested "visibility" of <ContainerIntro" from <ContainerAbout> point of view (such test requires no fog of ourse); takeoff: no point in setting numbers like "100"...
*/
