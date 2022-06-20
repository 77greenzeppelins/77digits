import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSpring, useTransition, config } from '@react-spring/web';

/*
----------------------------------------------------------------------------
*/
const LanguageSelector = ({ translate, fakeOpacity }) => {
  /*
  Global State Section
  canvasState = {languageVersion: 1, isLanguadeSelectorMounted: false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  userExperience Section  
  */
  const onClickHandler = () => {
    canvasState.languageVersion = Number(!canvasGlobalState.languageVersion);
  };
  /*
  Spring Section
  */
  const { springOpacity } = useSpring({
    springOpacity: canvasGlobalState.isLanguadeSelectorMounted ? 1 : 0,
    delay: 400,
    config: config.molasses,
  });

  const transition = useTransition(!canvasGlobalState.languageVersion, {
    from: {
      opacity: 0,
      position: 'absolute',
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
  });

  /*
  JSX
  */
  return (
    <animated.div
      className="language-selector__wrapper"
      style={{ opacity: springOpacity }}
    >
      <animated.button
        className="language-selector__button"
        onClick={onClickHandler}
        style={{ transform: translate, opacity: fakeOpacity }}
      >
        {transition(({ opacity }, condition) =>
          condition ? (
            <animated.p
              className="language-selector__button-label"
              style={{ opacity: opacity }}
            >
              PL
            </animated.p>
          ) : (
            <animated.p
              className="language-selector__button-label"
              style={{ opacity: opacity }}
            >
              EN
            </animated.p>
          )
        )}
      </animated.button>
    </animated.div>
  );
};

export default LanguageSelector;
