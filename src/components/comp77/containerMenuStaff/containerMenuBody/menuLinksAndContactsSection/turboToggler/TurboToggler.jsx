import React, { useCallback } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition, config } from '@react-spring/web';
/*
Basic Data
*/
import { TurboTogglerData } from '../../containerMenuBodyData';

/*
----------------------------------------------------------------------
*/
const TurboToggler = ({ buttonState, setButtonState }) => {
  /*
  Global State Section
  canvasState={}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  userExperience Section
  */
  const onClickHandler = useCallback(() => {
    setButtonState(Number(!buttonState));

    console.log('TurboToggler / buttonState:', buttonState);
  }, [buttonState, setButtonState]);

  /*
  Additional Functions
  */
  const averseLabel = () => {
    return canvasGlobalState.languageVersion
      ? TurboTogglerData.averseLabelPl.map((letter, index) => (
          <p key={index} className="turbo-toggler__label">
            {letter}
          </p>
        ))
      : TurboTogglerData.averseLabelEn.map((letter, index) => (
          <p key={index} className="turbo-toggler__label">
            {letter}
          </p>
        ));
  };

  const reverseLabel = () => {
    return canvasGlobalState.languageVersion
      ? TurboTogglerData.reverseLabelPl.map((letter, index) => (
          <p key={index} className="turbo-toggler__label">
            {letter}
          </p>
        ))
      : TurboTogglerData.reverseLabelEn.map((letter, index) => (
          <p key={index} className="turbo-toggler__label">
            {letter}
          </p>
        ));
  };

  /*
  Spring Section
  */
  const transition = useTransition(buttonState, {
    from: { opacity: 0, display: 'none', scale: 0 },
    enter: { opacity: 1, display: 'flex', scale: 1 },
    leave: { opacity: 0, display: 'none', scale: 0 },
    delay: 100,
    // config: { duration: 400 },
    config: config.molasses,
  });

  /*
  JSX
  */
  return (
    <button className="turbo-toggler__wrapper" onClick={onClickHandler}>
      {transition((styles, condition) =>
        condition ? (
          <animated.div className="turbo-toggler__label-wrapper" style={styles}>
            {averseLabel()}
          </animated.div>
        ) : (
          <animated.div className="turbo-toggler__label-wrapper" style={styles}>
            {reverseLabel()}
          </animated.div>
        )
      )}

      {/* <animated.div>{averseLabel()}</animated.div> */}
      {/* <animated.div>{reverseLabel()}</animated.div> */}
    </button>
  );
};

export default TurboToggler;

// {
//   label.map((letter, index) => (
//     <p
//       key={index}
//       className="contact-button__label"
//       style={{ color: !isMobileOnly && specialColor }}
//     >
//       {letter}
//     </p>
//   ));
// }
