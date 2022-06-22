import React from 'react';
/*
Spring Staff
*/
import { animated, useSpring, useTransition, config } from '@react-spring/web';
/*
----------------------------------------------------------------------
*/
const TogglerButton = ({ condition, onClickHandler, id, text }) => {
  /*
  Spring Section
  */

  const transition = useTransition(condition, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
  });
  /*
  JSX
  */
  return transition(
    ({ opacity }, condition) =>
      condition && (
        <animated.div
          style={{
            opacity: opacity,
          }}
          className="toggler-button__wrapper"
        >
          <button
            id={id}
            onClick={onClickHandler}
            className="toggler-button__button"
          >
            <p className="toggler-button__button-label">{text}</p>
          </button>
        </animated.div>
      )
  );
};

export default TogglerButton;
