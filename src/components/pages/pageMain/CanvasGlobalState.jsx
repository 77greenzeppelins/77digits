import { useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';

/*
-------------------------------------------------------------------
*/
const CanvasGlobalState = () => {
  /*
Global State Section
*/
  const canvasGlobalState = useSnapshot(canvasState);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.isInitialOverlayMounted:',
  //     canvasGlobalState.isInitialOverlayMounted
  //   );
  // }, [canvasGlobalState.isInitialOverlayMounted]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.fakeLoaderCounter:',
  //     canvasGlobalState.fakeLoaderCounter
  //   );
  // }, [canvasGlobalState.fakeLoaderCounter]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.languageVersion:',
  //     canvasGlobalState.languageVersion
  //   );
  // }, [canvasGlobalState.languageVersion]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.currentContainer:',
  //     canvasGlobalState.currentContainer
  //   );
  // }, [canvasGlobalState.currentContainer]);

  useEffect(() => {
    console.log(
      'canvasGlobalState.isSlideComplete:',
      canvasGlobalState.isSlideComplete
    );
  }, [canvasGlobalState.isSlideComplete]);

  return null;
};

export default CanvasGlobalState;
