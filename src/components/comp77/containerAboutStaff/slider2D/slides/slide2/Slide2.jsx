import React from 'react';
/*
Components
*/
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
const Slide2 = ({ slideId, visibleSlideIndex }) => {
  /*
  Spring Section
  */
  const transition = useTransition(visibleSlideIndex === slideId, {
    ...slideTransitionConfig,
    delay: visibleSlideIndex === slideId ? slideDelay.enter : slideDelay.leave,
  });

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <animated.div style={styles} className="slide__container">
          <p
            style={{ color: 'blue', fontSize: '5rem', zIndex: '999' }}
            className="slide__text"
          >
            Slide2 ----- Slide2 ----- Slide2
          </p>
        </animated.div>
      )
  );
};

export default Slide2;
