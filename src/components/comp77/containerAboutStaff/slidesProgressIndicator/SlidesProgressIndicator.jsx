import React from 'react';
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
Basic Datw
*/
import {
  slidesNumber,
  useTransitionConfig,
  slideDelay,
} from './slidesProgressIndicatorData';

/*
-----------------------------------------------------------------------
*/
const SlidesProgressIndicator = () => {
  /*
  Global State Section
  canvasState = {sliderIsReady: false,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  Spring Section
  */
  const transition = useTransition(canvasGlobalState.sliderIsReady, {
    ...useTransitionConfig,
    delay: canvasGlobalState.sliderIsReady
      ? slideDelay.enter
      : slideDelay.leave,
  });

  /*
  JSX
  */
  return transition(
    (style, condition) =>
      condition && (
        <animated.div
          className="slides-progress-indicator__container"
          style={style}
        >
          <div className="slides-progress-indicator__wrapper">
            <p className="slides-progress-indicator__text">
              {(canvasGlobalState.containerAboutVisibleSlideIndex /
                (slidesNumber - 1)) *
                100}
            </p>{' '}
            <p className="slides-progress-indicator__text"> %</p>
          </div>
        </animated.div>
      )
  );
};

export default SlidesProgressIndicator;
