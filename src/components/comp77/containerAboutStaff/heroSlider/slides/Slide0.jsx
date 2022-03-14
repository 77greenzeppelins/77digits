import React, { useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/

import { animated, useSpring, config } from '@react-spring/web';

/*
-------------------------------------------------------------------------
*/
const Slide0 = ({ slideId }) => {
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
  // const { animatedValue } = useSpring({
  //   // from: { animatedValue: !condition && 0 },
  //   from: { animatedValue: !condition && 0 },
  //   to: { animatedValue: condition && 1 },
  //   config: config.molasses,
  //   delay: 500,
  // });
  // const [{ animatedValue }] = useSpring(
  //   {
  //     animatedValue: condition,
  //     config: config.molasses,
  //     delay: 1000,
  //   },
  //   [condition]
  // );
  // const { animatedValue } = useSpring({
  //   animatedValue:
  //     canvasGlobalState.currentContainer === 'aboutContainer' &&
  //     slideId === canvasGlobalState.containerAboutSlideIndex,
  //   config: config.molasses,
  //   delay: 1000,
  // });

  // const { animatedValue } = useSpring({
  //   animatedValue: 0,
  //   config: config.molasses,
  //   delay: 1000,
  // });

  const { opacity } = useSpring({
    // from: { animatedValue: !condition && 0 },
    from: { opacity: 0 },
    to: {
      opacity:
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId === canvasGlobalState.containerAboutSlideIndex &&
        1,
    },
    config: config.molasses,
    delay: 500,
  });

  /*
  useEffect
  */
  useEffect(() => {
    console.log('Slide0 / condition', condition);
  }, [condition]);

  /*
  JSX
  */
  return (
    <animated.div
      className="slide__container"
      // style={{
      //   opacity: animatedValue.to([0, 0.5, 1], [0, 0.2, 1]),
      //   scale: animatedValue.to([0, 0.5, 1], [0, 0.2, 1]),
      // }}
      style={{ opacity: opacity }}
    >
      <animated.h1
        className="slide__label"
        // style={{
        //   opacity: animatedValue.to([0, 0.5, 1], [0, 0.2, 1]),
        //   scale: animatedValue.to([0, 0.5, 1], [0, 0.2, 1]),
        //   color: animatedValue.to([0, 1], ['#7fffd4', '#c70f46']),
        // }}
      >
        Jesteś Ty
      </animated.h1>
    </animated.div>
  );
};

export default Slide0;
