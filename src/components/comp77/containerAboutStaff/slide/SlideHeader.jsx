import React, { useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';

/** */
const SlideHeader = ({ slideId, header }) => {
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
  
  */
  useEffect(() => {
    console.log('slideId', slideId);
    console.log('header', header);
  }, [slideId, header]);

  /*
  JSX
  */
  return transition(
    ({ opacity }, transitionCondition) =>
      transitionCondition && (
        <animated.h1
          className="slide__header"
          style={{
            opacity: opacity.to({
              range: [0.0, 0.5, 1.0],
              output: [0, 0.2, 1],
            }),
          }}
        >
          {/* <span>Ty </span> <span> &amp; Ja</span> */}
          {header && header.map((item, i) => <span key={i}>{item}</span>)}
        </animated.h1>
      )
  );
};

export default SlideHeader;
