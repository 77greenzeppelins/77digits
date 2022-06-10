import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';
/*
Basic Data
*/
import { slideTransitionConfig, slideDelay } from '../../slider2DData';

/*
-------------------------------------------------------------------------------
*/
const Slide4 = ({ slideId, visibleSlideIndex }) => {
  /*
  Global State Staff
  canvasState={slide1Part:0}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const transition = useTransition(
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId,
    {
      ...slideTransitionConfig,
      delay:
        canvasGlobalState.containerAboutVisibleSlideIndex === slideId
          ? slideDelay.enter
          : slideDelay.leave,
      onRest: () => {
        if (canvasGlobalState.containerAboutVisibleSlideIndex === slideId) {
          canvasState.isSlideComplete = true;
          // console.log(
          //   'Slide1 / onRest  canvasGlobalState.isSlideComplete:',
          //   canvasGlobalState.isSlideComplete
          // );
        }
      },
    }
  );

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <animated.div
          style={{ ...styles, height: '100%' }}
          className="testContainer"
        >
          <p
            style={{ color: '#FA58B6', fontSize: '5rem', zIndex: '999' }}
            className="slide__text-test"
          >
            Slide4
          </p>
        </animated.div>
      )
  );
};

export default Slide4;
