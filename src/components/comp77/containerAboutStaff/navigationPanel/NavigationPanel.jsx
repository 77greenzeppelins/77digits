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
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';
/*
BasicData
*/
import { mainGroupSpringData } from '../../../../components3D/three/custome/containerAbout/navigationPanel/navigationPanelData';
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
  Spring Section
  */
  const transition = useTransition(
    /*
    condition
    */
    canvasGlobalState.currentContainer === 'aboutContainer' &&
      canvasState.isNavPanelOpened === true,
    /*
    configObj  
    */
    {
      // from: { display: 'none' },
      // enter: { display: 'flex' },
      // leave: { display: 'none' },
      from: { scale: 0 },
      enter: { scale: 1 },
      leave: { scale: 0 },
      delay: mainGroupSpringData.delay2D,
      config: mainGroupSpringData.config,
    }
  );

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

  useEffect(() => {
    if (
      canvasGlobalState.currentContainer === 'aboutContainer' &&
      canvasGlobalState.isNavPanelOpened === true
    ) {
      console.log('............transition');
    }
  }, [canvasGlobalState.currentContainer, canvasGlobalState.isNavPanelOpened]);

  /*
  JSX
  */
  return transition(
    ({ scale }, condition) =>
      condition && (
        <animated.div
          className="navigation-panel__container"
          style={{ scale: scale }}
        >
          <button onClick={goBackward} className="navigation-panel__button" />
          <div className="navigation-panel__special_wrapper">
            <button className="navigation-panel__rotate-button"></button>
            <div className="navigation-panel__progress-indicator">
              <SliderProgressIndicator slidesArrayNumber={slidesArrayNumber} />
            </div>
          </div>
          <button onClick={goForward} className="navigation-panel__button" />
        </animated.div>
      )
  );
};

export default NavigationPanel;

// const rotateBox = debounce(() => {
//   canvasState.facetOfSpinningBoxSide = Number(
//     !canvasGlobalState.facetOfSpinningBoxSide
//   );
//   // switch (canvasGlobalState.containerAboutSlideIndex) {
//   //   case 0:
//   //     canvasState.slide0Rotation = !canvasGlobalState.slide0Rotation;
//   //     break;
//   //   // case 1:
//   //   //   canvasState.slide1Rotation = !canvasGlobalState.slide1Rotation;
//   //   //   break;
//   //   default:
//   //     canvasGlobalState.slide0Rotation = false;
//   //     canvasGlobalState.slide1Rotation = false;
//   //     break;
//   // }
// }, 400);
