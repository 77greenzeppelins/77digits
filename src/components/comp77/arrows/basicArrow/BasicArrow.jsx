import React from 'react';
/*
Spring Staff
*/
import { animated } from '@react-spring/web';
/*
Gesture Section
*/
import ButtonHover from '../../../../gestureHandlers/useHover/ButtonsHover';
/*
----------------------------------------------------------------------
*/
const BasicArrow = React.forwardRef(
  ({ arrowDirection, onClick, arrowOpacity }, ref) => {
    /*
  Gesture Handler
  */
    const { opacityValue, scaleValue, buttonHover } = ButtonHover({
      opacityEnter: 1,
      opacityLeave: 0.2,
      scaleEnter: 1.2,
      scaleLeave: 1,
    });
    /*
    JSX
    */
    return (
      <div className="basic-arrow__container" onClick={onClick}>
        <animated.div
          className="basic-arrow__frame"
          {...buttonHover()}
          /*
        this "stylisation" is triggered when user hovers over "button-frame" 
        */
          style={{
            opacity: opacityValue,
            scale: scaleValue,
          }}
        />
        <div
          className={`basic-arrow__${arrowDirection}`}
          style={{ opacity: arrowOpacity }}
          /*
          we need to call/spread buttonHover() on arrow as well; why? if not call/spread, when user hover over arrow, scale of "button-frame" goes down!
          */
          {...buttonHover()}
        />
      </div>
    );
  }
);

export default BasicArrow;
