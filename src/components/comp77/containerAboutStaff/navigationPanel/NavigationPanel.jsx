import React, { useCallback, useEffect } from 'react';
/*
Components
*/
import BasicArrrow from '../../arrows/basicArrow/BasicArrow';
import SliderProgressIndicator from '../../progressIndicators/sliderProgressIndicator/SliderProgressIndicator';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
------------------------------------------------------------------------------
*/
const NavigationPanel = ({ slidesArrayNumber }) => {
  /*
  Global State Section
  canvasState = {containerAboutSlideIndex:0, containerAboutSlidingDirection: ,"none", ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  /*
  onClick Handlers
  */
  /*
  userExperience Section
  This clickHandler works as pseudo-changer of "slide index"; there is no any array that contains these slides though...
  */
  const goForward = useCallback(() => {
    if (canvasGlobalState.containerAboutSlideIndex < slidesArrayNumber - 1) {
      canvasState.containerAboutSlideIndex += 1;
      canvasState.containerAboutSlidingDirection = 'forward';
    }
  }, [canvasGlobalState.containerAboutSlideIndex, slidesArrayNumber]);

  const goBackward = useCallback(() => {
    if (
      /*
      this condition means: "do nothing if index === 0, work only if index > 0"
      */
      canvasGlobalState.containerAboutSlideIndex > 0
    ) {
      canvasState.containerAboutSlideIndex -= 1;
      canvasState.containerAboutSlidingDirection = 'backward';
    }
  }, [canvasGlobalState.containerAboutSlideIndex]);

  /*
  useEffect for Tests
  */
  useEffect(() => {
    if (canvasGlobalState.containerAboutSlidingDirection === 'forward') {
      console.log(
        'canvasGlobalState.containerAboutSlideIndex:',
        canvasGlobalState.containerAboutSlideIndex
      );
      console.log(
        'canvasGlobalState.containerAboutSlidingDirection:',
        canvasGlobalState.containerAboutSlidingDirection
      );
    }
  }, [
    canvasGlobalState.containerAboutSlidingDirection,
    canvasGlobalState.containerAboutSlideIndex,
  ]);

  /*
  JSX
  */
  return (
    <div className="navigation-panel__container">
      <div className="navigation-panel__button-container left">
        <BasicArrrow
          arrowDirection={'arrow-up'}
          onClick={goForward}
          arrowOpacity={
            canvasGlobalState.containerAboutSlideIndex === slidesArrayNumber - 1
              ? 0.1
              : 1
          }
        />
      </div>

      <div className="navigation-panel__progress-indicator">
        <SliderProgressIndicator slidesArrayNumber={slidesArrayNumber} />
      </div>
      <div className="navigation-panel__button-container right">
        <BasicArrrow
          arrowDirection={'arrow-down'}
          onClick={goBackward}
          arrowOpacity={
            canvasGlobalState.containerAboutSlideIndex === 0 ? 0.1 : 1
          }
        />
      </div>
    </div>
  );
};

export default NavigationPanel;
