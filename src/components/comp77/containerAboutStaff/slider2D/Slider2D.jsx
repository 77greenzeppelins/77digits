import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

const Slider2D = () => {
  /*
  Global State Staff
  canvasState={slide1Part:0}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  JSX
  */
  return (
    canvasGlobalState.containerAboutVisibleSlideIndex === 1 && (
      <div>
        <p style={{ color: 'red', fontSize: '5rem', zIndex: '999' }}>
          {canvasGlobalState.slide1Part}
        </p>
      </div>
    )
  );
};

export default Slider2D;
