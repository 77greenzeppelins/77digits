import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

const SliderProgressIndicator = ({ slidesArrayNumber }) => {
  /*
  Global State Staff
  canvasState ={containerAboutSlideIndex: 0,}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Reset Indicator;
  If user changes container indicator is reset to 0;
  But it doesn't work here...I've replaced it into <ContainerAbout2DStaff>;
  Is this a metter of refreshing???
  */
  // if (canvasGlobalState.currentContainer !== 'aboutContainer') {
  //   canvasState.containerAboutSlideIndex = 0;
  // }
  /*
  JSX
  */
  return (
    <div className="slider-progres-indicator__wrapper">
      <p className="slider-progres-indicator__label">
        {`${
          canvasGlobalState.containerAboutVisibleSlideIndex + 1
        }/${slidesArrayNumber}`}
      </p>
    </div>
  );
};

export default SliderProgressIndicator;
