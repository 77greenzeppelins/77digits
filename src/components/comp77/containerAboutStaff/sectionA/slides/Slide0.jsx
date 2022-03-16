import React, { useEffect, useState } from 'react';
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
const Slide0 = ({ slideId }) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Component State Section
  Purpose: set initial value that changes at the end of "initial animation", within onRest(); then this value play no other role
  */
  const [initialValue, setInitialValue] = useState(true);
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
      duration: initialValue
        ? 600
        : canvasGlobalState.containerAboutSlidingDirection === 'forward'
        ? 0
        : 600,
    },
    delay: initialValue
      ? 1000
      : canvasGlobalState.containerAboutSlidingDirection === 'forward'
      ? 0
      : 200,
    onRest: () => setInitialValue(false),
  });

  /*
  useEffect
  */
  // useEffect(() => {
  //   if (condition) {
  //     console.log(
  //       'Slide0 / canvasGlobalState.containerAboutSlidingDirection:',
  //       canvasGlobalState.containerAboutSlidingDirection
  //     );
  //     console.log('Slide0 / condition:', condition);
  //   }
  //   console.log('Slide0 / slideId:', slideId);
  // }, [canvasGlobalState.containerAboutSlidingDirection, condition, slideId]);

  /*
  JSX
  */
  return transition(
    ({ opacity }, transitionCondition) =>
      transitionCondition && (
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
            <span>Jesteś</span> <span>Ty</span>
          </animated.h1>
        </animated.div>
      )
  );
};

export default Slide0;
