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

  // useEffect(() => {
  //   console.log(
  //     'canvasState.isCookiesPopUpMounted',
  //     canvasGlobalState.isCookiesPopUpMounted
  //   );
  // }, [canvasGlobalState.isCookiesPopUpMounted]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.introContainerEventType',
  //     canvasGlobalState.introContainerEventType
  //   );
  // }, [canvasGlobalState.introContainerEventType]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.endOfContainerIntro',
  //     canvasGlobalState.endOfContainerIntro
  //   );
  // }, [canvasGlobalState.endOfContainerIntro]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.startOfContainerIntroShow',
  //     canvasGlobalState.startOfContainerIntroShow
  //   );
  // }, [canvasGlobalState.startOfContainerIntroShow]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.isRaphaelVisible',
  //     canvasGlobalState.isRaphaelVisible
  //   );
  // }, [canvasGlobalState.isRaphaelVisible]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.isSlideComplete:',
  //     canvasGlobalState.isSlideComplete
  //   );
  // }, [canvasGlobalState.isSlideComplete]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.sliderIsReady:',
  //     canvasGlobalState.sliderIsReady
  //   );
  // }, [canvasGlobalState.sliderIsReady]);

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.sliderIsReady:',
  //     canvasGlobalState.sliderIsReady
  //   );
  // }, [canvasGlobalState.sliderIsReady]);

  return null;
};

export default CanvasGlobalState;
