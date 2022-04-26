import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition, config } from '@react-spring/web';

/*
--------------------------------------------------------------------------
*/
const LanguageSelector = ({
  languageSelectionTextPl,
  languageSelectionTextEn,
  languageSelectionButtonTextPl,
  languageSelectionButtonTextEn,
}) => {
  /*
  Global State Section
  canvasState = {languageVersion: 1,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const transition = useTransition(canvasGlobalState.languageVersion, {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'flex' },
    leave: { opacity: 0, display: 'none' },
    delay: 100,
    config: config.molasses,
    // config: { duration: 200 },
  });
  /*
  userExperience Section  
  */
  const onClickHandler = () => {
    canvasState.languageVersion = Number(!canvasGlobalState.languageVersion);
  };
  /*
  JSX  
  */
  return (
    <div className="language-selector__container">
      {/* <p className="language-selector__main-text">{languageSelectionText}</p> */}

      {transition((styles, condition) =>
        condition ? (
          <animated.p className="language-selector__main-text" style={styles}>
            {languageSelectionTextEn}
          </animated.p>
        ) : (
          <animated.p className="language-selector__main-text" style={styles}>
            {languageSelectionTextPl}
          </animated.p>
        )
      )}

      <div className="language-selector__button-container">
        <button onClick={onClickHandler} className="language-selector__button">
          {transition((styles, condition) =>
            condition ? (
              <animated.p
                className="language-selector__button-text"
                style={styles}
              >
                {languageSelectionButtonTextEn}
              </animated.p>
            ) : (
              <animated.p
                className="language-selector__button-text"
                style={styles}
              >
                {languageSelectionButtonTextPl}
              </animated.p>
            )
          )}

          {/* <p className="language-selector__button-text">
            {languageSelectionButtonText} / {canvasGlobalState.languageVersion}
          </p> */}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
