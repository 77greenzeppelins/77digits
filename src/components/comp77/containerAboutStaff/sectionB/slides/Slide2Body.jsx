import React from 'react';
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
BasicData
*/
const paragraph1Text =
  'Kimkolwiek jesteś, to dobry moment, aby połączyć nasza potencjały';

/*
------------------------------------------------------------------------
*/
const Slide2Body = ({ slideId }) => {
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
  JSX
  */
  return transition(
    ({ opacity }, transitionCondition) =>
      transitionCondition && (
        <div className="slide2__body">
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
        </div>
      )
  );
};

export default Slide2Body;
