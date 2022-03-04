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
    // opacityEnter: 1,
    // opacityLeave: 0.2,
    scaleEnter: 1.05,
    scaleLeave: 1,
    thisConfig: config.gentle,
  });

  /*
  JSX
  */
  return (
    <animated.button
      className="header-button-container"
      {...buttonHover()}
      style={{ scale: scaleValue }}
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
