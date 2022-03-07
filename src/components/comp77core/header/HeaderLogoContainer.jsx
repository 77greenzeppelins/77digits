import React from 'react';
/*
GlobalState
*/
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, config } from '@react-spring/web';
/*
Gesture Section
*/
import ButtonHover from '../../../gestureHandlers/useHover/ButtonsHover';
import { useSnapshot } from 'valtio';

/*
---------------------------------------------------------------------------
*/
const HeaderLogoContainer = ({ onClickHandler }) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
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
      onClick={event => onClickHandler(event, 'logoButton', 'aboutContainer')}
      className="header-button-container"
      {...buttonHover()}
      style={{
        scale: scaleValue,
        /*
        case: user is in "aboutContainer" and clicks "77digitsButton"; it should be untouchable;
        */
        opacity:
          canvasGlobalState.currentContainer === 'aboutContainer' ? 0 : 1,
        pointerEvents:
          canvasGlobalState.currentContainer === 'aboutContainer'
            ? 'none'
            : 'auto',
      }}
    >
      <p id="logoButton" className="header-button-container__label">
        77digits
      </p>
    </animated.button>
  );
};

export default React.memo(HeaderLogoContainer);
