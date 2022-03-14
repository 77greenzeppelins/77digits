import React from 'react';
/*
Components
*/
import Slider0 from './slides/Slide0';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
----------------------------------------------------------------------------
*/
const HeroSlider = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
    JSX
    */
  return (
    <>
      <Slider0 slideId={0} />
    </>
  );
};

export default HeroSlider;
