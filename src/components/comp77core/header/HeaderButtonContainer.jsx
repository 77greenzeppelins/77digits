import React from 'react';
/*
Spring Staff
*/
import { animated, config } from '@react-spring/web';
/*
Gesture Section
*/
import ButtonHover from '../../../gestureHandlers/useHover/ButtonsHover';

/*
------------------------------------------------------------------------------
*/
const HeaderButtonContainer = ({ onClickHandler }) => {
  /*
  Gesture Handler
  */
  const { scaleValue, buttonHover } = ButtonHover({
    // opacityEnter: 0.5,
    // opacityLeave: 1,
    scaleEnter: 0.5,
    scaleLeave: 1,
    thisConfig: config.molasses,
  });

  /*
  JSX
  */
  return (
    <animated.button
      className="header-button-container"
      {...buttonHover()}
      style={{ opacity: scaleValue }}
    >
      <p
        id="menuButton"
        className="header-button-container__label"
        onClick={event => onClickHandler(event, 'menuButton', 'menuContainer')}
      >
        menu
      </p>
    </animated.button>
  );
};

export default React.memo(HeaderButtonContainer);

//___spring animation
// const [{ val }] = useSpring(
//   {
//     val: c3DState.initialAnimation,
//     config: config.slow,
//   },
//   [c3DState.initialAnimation]
// );
// const opacityAnimation = val.to([1, 0], [1, 0.5]);
