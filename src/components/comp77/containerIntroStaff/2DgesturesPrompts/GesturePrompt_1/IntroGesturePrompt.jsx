import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition, config } from '@react-spring/web';
/*
Basic Data
*/
import { IntroGesturePromptData } from '../../ContainerIntro2DStaffData';

/*
----------------------------------------------------------------------------
*/
const IntroGesturePrompt = ({ windowSize }) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  Spring Section
  */
  const transition = useTransition(
    !canvasGlobalState.isInitialOverlayMounted &&
      canvasGlobalState.introContainerEventType === 'none',
    {
      from: { opacity: 0, display: 'none', scale: 0 },
      enter: { opacity: 1, display: 'flex', scale: 1 },
      leave: { opacity: 0, display: 'none', scale: 0 },
      delay: 400,
      config: config.molasses,
    }
  );

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <animated.div
          style={styles}
          className="intro-gesture-prompt__container"
        >
          <div
            className="intro-gesture-prompt__prompt-wrapper"
            style={{
              height: windowSize.height * 0.15,
              width: windowSize.height * 0.3,
              top: -windowSize.height * 0.15,
            }}
          >
            <div className="intro-gesture-prompt__text-wrapper">
              {IntroGesturePromptData.map(({ wordPl, wordEn, id }) =>
                canvasGlobalState.languageVersion ? (
                  <p className="intro-gesture-prompt__text-word" key={id}>
                    {wordPl}
                  </p>
                ) : (
                  <p className="intro-gesture-prompt__text-word" key={id}>
                    {wordEn}
                  </p>
                )
              )}
            </div>
            <div className="intro-gesture-prompt__graphic-wrapper">
              <div className="intro-gesture-prompt__graphic-holder">
                <div className="intro-gesture-prompt__graphic-line" />
              </div>
            </div>
          </div>
        </animated.div>
      )
  );
};

export default IntroGesturePrompt;
