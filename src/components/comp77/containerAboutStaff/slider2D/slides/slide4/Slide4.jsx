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
        <animated.div style={styles} className="slide__container">
          <p
            style={{ color: 'green', fontSize: '5rem', zIndex: '999' }}
            className="slide__text"
          >
            Slide4
          </p>
        </animated.div>
      )
  );
};

export default Slide4;
