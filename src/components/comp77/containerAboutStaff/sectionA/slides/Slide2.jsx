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
Basic Data
*/
const minForTablet = 850;
const paragraph1Text =
  'Kimkolwiek jesteś, to dobry moment, aby połączyć nasza potencjały';

/*
------------------------------------------------------------------------
*/
const Slide2 = ({ slideId, windowSize }) => {
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
  //     'Slide2 / canvasGlobalState.containerAboutSlidingDirection:',
  //     canvasGlobalState.containerAboutSlidingDirection
  //   );
  //   console.log('Slide2 / condition:', condition);
  // }, [canvasGlobalState.containerAboutSlidingDirection, condition]);

  /*
  JSX
  */
  return transition(
    ({ opacity }, item) =>
      item && (
        <div className="slide2__container">
          <animated.h1
            className="slide2__label-h"
            style={{
              opacity: opacity.to({
                range: [0.0, 0.5, 1.0],
                output: [0, 0.2, 1],
              }),
            }}
          >
            <span>Ty </span> <span> &amp; Ja</span>
          </animated.h1>

          {windowSize.width < minForTablet ? (
            <animated.p
              className="slide2__label-p"
              style={{
                opacity: opacity.to({
                  range: [0.0, 0.5, 1.0],
                  output: [0, 0.2, 1],
                }),
              }}
            >
              {paragraph1Text}
            </animated.p>
          ) : null}
        </div>
      )
  );
};

export default Slide2;
