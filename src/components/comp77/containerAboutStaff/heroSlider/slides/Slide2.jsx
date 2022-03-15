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
------------------------------------------------------------------------
*/
const Slide2 = ({ slideId }) => {
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
      'Slide2 / canvasGlobalState.containerAboutSlidingDirection:',
      canvasGlobalState.containerAboutSlidingDirection
    );
    console.log('Slide2 / condition:', condition);
  }, [canvasGlobalState.containerAboutSlidingDirection, condition]);

  /*
  JSX
  */
  return transition(
    (styles, item) =>
      item && (
        <animated.div className="slide2__container">
          <animated.h1 className="slide2__label-h" style={styles}>
            Ty &amp; Ja
          </animated.h1>
          {/* <animated.p
            className="slide2__label-p"
            style={styles}
            // style={{
            //   opacity: animatedValue.to([0, 0.5, 1], [0, 0.2, 1]),
            //   scale: animatedValue.to([0, 0.5, 1], [0, 0.2, 1]),
            //   color: animatedValue.to([0, 1], ['#7fffd4', '#c70f46']),
            // }}
          >
            Kimkolwiek jesteś, to dobry moment, aby połączyć nasza potencjały
          </animated.p> */}
        </animated.div>
      )
  );
};

export default Slide2;
