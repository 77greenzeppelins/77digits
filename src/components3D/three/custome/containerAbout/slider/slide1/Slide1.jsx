import React, { useEffect } from 'react';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Components
*/
import DreiText from '../../../../../drei/text/dreiText/DreiText';
/*
Basic Data
*/
import { textConfig } from './slide1Data';
/*
----------------------------------------------------------------------
*/

const Slide1 = ({ slideId }) => {
  /*
  Hook Section
  Why this hook?
  */
  /*
  Global State Section
    {containerAboutVisibleSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  // useEffect(() => {
  //   console.log(
  //     'Slide1 / canvasGlobalState.containerAboutVisibleSlideIndex:',
  //     canvasGlobalState.containerAboutVisibleSlideIndex
  //   );
  //   console.log('Slide1 / slideId:', slideId);
  // }, [canvasGlobalState.containerAboutVisibleSlideIndex, slideId]);

  /*
  JSX
  */
  return (
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId && (
      <DreiText textConfig={textConfig} />
      // <TextVerse text="TextVerse" />
    )
  );
};

export default Slide1;
