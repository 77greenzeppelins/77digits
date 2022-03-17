import React from 'react';
/*
Components
*/
import CrescentArrow from '../../arrows/crescentArrow/CrescentArrow';
import SliderProgressIndicator from '../../progressIndicators/sliderProgressIndicator/SliderProgressIndicator';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
------------------------------------------------------------------------------
*/
const NavigationPanel = ({ slidesArrayNumber, orientation }) => {
  /*
  Global State Section
  canvasState = {containerAboutSlideIndex:0, containerAboutSlidingDirection: ,"none", ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  JSX
  */
  return (
    <div
      className="navigation-panel__container"
      style={{
        flexDirection: orientation && 'column-reverse',
      }}
    >
      <div
        className="navigation-panel__button-container left"
        style={{ transform: orientation && 'rotate(180deg)' }}
      >
        {/*-----Arrow down / backward--------------------------------*/}
        <CrescentArrow
          slidesArrayNumber={slidesArrayNumber}
          arrowDirection="arrow-down"
          /*
          initially and if user clicks to first slide, arrow shoud be "opaque"
          */
          arrowOpacity={
            canvasGlobalState.containerAboutSlideIndex === 0 ? 0.1 : 1
          }
          rotated="rotated"
          // frameSide="right"
          arrowSide={orientation && 'left'}
          // arrowSide="right"
        />
      </div>
      {/*-----progress indicator--------------------------------*/}
      <div
        className="navigation-panel__progress-indicator"
        style={{
          alignItems: orientation && 'center',
          transform: orientation && 'rotate(90deg)',
        }}
      >
        <SliderProgressIndicator slidesArrayNumber={slidesArrayNumber} />
      </div>

      <div
        className="navigation-panel__button-container right"
        style={{ transform: orientation && 'rotate(0deg)' }}
      >
        {/*-----Arrow up / forward----------------------------------*/}
        <CrescentArrow
          slidesArrayNumber={slidesArrayNumber}
          arrowDirection="arrow-up"
          /*
          if user clicks to final slide, arrow shoud be "opaque"
          */
          arrowOpacity={
            canvasGlobalState.containerAboutSlideIndex === slidesArrayNumber - 1
              ? 0.1
              : 1
          }
          // frameSide="left"
          arrowSide="right"
        />
      </div>
    </div>
  );
};

export default NavigationPanel;
