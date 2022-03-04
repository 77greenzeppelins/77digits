import { useEffect } from 'react';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../states/canvasState';

/*
-------------------------------------------------------------------
*/
const CanvasGlobalState = () => {
  /*
Global State Section
*/
  // const canvasGlobalState = useSnapshot(canvasState);

  useEffect(
    () => {
      // console.log(
      //   'cameraPreviousPosition:',
      //   canvasGlobalState.cameraPreviousPosition
      // );
      // console.log(
      //   'cameraCurrentPosition:',
      //   canvasGlobalState.cameraCurrentPosition
      // );
      // console.log(
      //   'componentCurrentPosition:',
      //   canvasGlobalState.componentCurrentPosition
      // );
      // console.log(
      //   'cameraDestinationPosition:',
      //   canvasGlobalState.cameraDestinationPosition
      // );
      // console.log(
      //   '///isInitialSectionOrbitable:',
      //   canvasGlobalState.isInitialSectionOrbitable
      // );
      // console.log(
      //   '///isInitialSectionContainerScrollable:',
      //   canvasGlobalState.isInitialSectionContainerScrollable
      // );
      // console.log('///previousSection:', canvasGlobalState.previousSection);
      // console.log('///currentSection:', canvasGlobalState.currentSection);
      // console.log('///areSectionsVisible:', canvasGlobalState.areSectionsVisible);
      // console.log(
      //   '///fakeAboutSectionMovingAbility:',
      //   canvasGlobalState.fakeAboutSectionMovingAbility
      // );
      // console.log('///resetContainer:', canvasGlobalState.resetContainer);
      // console.log('_____________');
    },
    [
      // canvasGlobalState.cameraPreviousPosition,
      // canvasGlobalState.cameraCurrentPosition,
      // canvasGlobalState.componentCurrentPosition,
      // canvasGlobalState.cameraDestinationPosition,
      // canvasGlobalState.initialSectionCameraPosition,
      // canvasGlobalState.isInitialSectionOrbitable,
      // canvasGlobalState.isInitialSectionContainerScrollable,
      // canvasGlobalState.previousSection,
      // canvasGlobalState.currentSection,
      // canvasGlobalState.areSectionsVisible,
      // canvasGlobalState.fakeAboutSectionMovingAbility,
      // canvasGlobalState.resetContainer,
    ]
  );
  return null;
};

export default CanvasGlobalState;
