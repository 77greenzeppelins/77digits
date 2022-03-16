import React, { useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/

import { animated, useTransition, config } from '@react-spring/web';

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
    config: condition
      ? config.molasses
      : canvasGlobalState.containerAboutSlidingDirection === 'forward'
      ? config.stiff
      : config.stiff,
    delay: condition
      ? 200
      : canvasGlobalState.containerAboutSlidingDirection === 'forward'
      ? 0
      : 0,
  });

  /*
  useEffect
  */
  // useEffect(() => {
  //   console.log(
  //     'Slide1 / canvasGlobalState.containerAboutSlidingDirection:',
  //     canvasGlobalState.containerAboutSlidingDirection
  //   );
  //   console.log('Slide1 / condition:', condition);
  // }, [canvasGlobalState.containerAboutSlidingDirection, condition]);

  /*
  JSX
  */
  return transition(
    ({ opacity }, item) =>
      item && (
        <animated.div className="slide__container">
          <animated.h1
            className="slide__label"
            style={{
              opacity: opacity.to({
                range: [0.0, 0.5, 1.0],
                output: [0, 0.2, 1],
              }),
            }}
          >
            Jestem Ja
          </animated.h1>
        </animated.div>
      )
  );
};

export default Slide1;
