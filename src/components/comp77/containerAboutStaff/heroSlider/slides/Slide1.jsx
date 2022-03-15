import React, { useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/

import { animated, useTransition } from '@react-spring/web';

/*
-------------------------------------------------------------------------
*/

const Slide1 = ({ slideId }) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const condition =
    canvasGlobalState.currentContainer === 'aboutContainer' &&
    slideId === canvasGlobalState.containerAboutSlideIndex;

  const transition = useTransition(condition, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: condition
        ? 600
        : canvasGlobalState.containerAboutSlidingDirection === 'forward'
        ? 0
        : 0,
    },
    // config: config.molasses,
    delay: condition
      ? 200
      : canvasGlobalState.containerAboutSlidingDirection === 'forward'
      ? 0
      : 0,
  });

  /*
  useEffect
  */
  useEffect(() => {
    console.log(
      'Slide1 / canvasGlobalState.containerAboutSlidingDirection:',
      canvasGlobalState.containerAboutSlidingDirection
    );
    console.log('Slide1 / condition:', condition);
  }, [canvasGlobalState.containerAboutSlidingDirection, condition]);

  /*
  JSX
  */
  return transition(
    (styles, item) =>
      item && (
        <animated.div className="slide__container">
          <animated.h1 className="slide__label" style={styles}>
            Jestem Ja
          </animated.h1>
        </animated.div>
      )
  );
};

export default Slide1;
