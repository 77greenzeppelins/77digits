import React, { useEffect } from 'react';
import { debounce } from 'lodash';
/*
Components
*/
import SliderProgressIndicator from '../../progressIndicators/sliderProgressIndicator/SliderProgressIndicator';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
const slidesArrayNumber = 5;

/*
------------------------------------------------------------------------------
*/
const NavigationPanel = () => {
  /*
  Global State Section
  canvasState = {containerAboutSlideIndex:0, containerAboutSlidingDirection: ,"none", ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
    userExperience Section / onClick Handlers
    */
  const goForward = debounce(() => {
    if (canvasGlobalState.containerAboutSlideIndex < slidesArrayNumber - 1) {
      canvasState.containerAboutSlideIndex += 1;
      canvasState.containerAboutSlidingDirection = 'forward';
    }
  }, 200);

  const goBackward = debounce(() => {
    if (
      /*
        this condition means: "do nothing if index === 0, work only if index > 0"
        */
      canvasGlobalState.containerAboutSlideIndex > 0
    ) {
      canvasState.containerAboutSlideIndex -= 1;
      canvasState.containerAboutSlidingDirection = 'backward';
    }
  }, 200);

  const rotateBox = debounce(() => {
    switch (canvasGlobalState.containerAboutSlideIndex) {
      case 0:
        canvasState.slide0Rotation = !canvasGlobalState.slide0Rotation;
        break;
      case 1:
        canvasState.slide1Rotation = !canvasGlobalState.slide1Rotation;
        break;
      default:
        canvasGlobalState.slide0Rotation = false;
        canvasGlobalState.slide1Rotation = false;
        break;
    }
  }, 400);

  //____

  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.slide0Rotation',
  //     canvasGlobalState.slide0Rotation
  //   );
  //   console.log(
  //     'canvasGlobalState.slide1Rotation',
  //     canvasGlobalState.slide1Rotation
  //   );
  // }, [canvasGlobalState.slide1Rotation, canvasGlobalState.slide0Rotation]);

  /*
  JSX
  */
  return (
    <div className="navigation-panel__container">
      <button onClick={goBackward} className="navigation-panel__button" />
      <div onClick={rotateBox} className="navigation-panel__special_wrapper">
        <button className="navigation-panel__rotate-button"></button>
        <div className="navigation-panel__progress-indicator">
          <SliderProgressIndicator slidesArrayNumber={slidesArrayNumber} />
        </div>
      </div>
      <button onClick={goForward} className="navigation-panel__button" />
    </div>
  );
};

export default NavigationPanel;
