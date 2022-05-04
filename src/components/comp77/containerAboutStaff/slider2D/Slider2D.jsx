import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import Slide1 from './slides/slide1/Slide1';
import Slide2 from './slides/slide2/Slide2';
/*
Hooks
*/
import useWindowSize from '../../../../hooks/useWindowSize';

/*
----------------------------------------------------------------------
*/
const Slider2D = () => {
  /*
  Global State Staff
  canvasState={slide1Part:0}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Hook Section
  */
  const windowSize = useWindowSize();

  /*
  JSX
  */
  return (
    // canvasGlobalState.containerAboutVisibleSlideIndex > 0 && (
    <div
      className="slider-2D__container"
      style={{
        height: windowSize.height,
        width: windowSize.width,
      }}
    >
      <Slide1
        slideId={1}
        visibleSlideIndex={canvasGlobalState.containerAboutVisibleSlideIndex}
        language={canvasGlobalState.languageVersion}
      />
      <Slide2
        slideId={2}
        visibleSlideIndex={canvasGlobalState.containerAboutVisibleSlideIndex}
        language={canvasGlobalState.languageVersion}
      />
    </div>
    // )
  );
};

export default Slider2D;
