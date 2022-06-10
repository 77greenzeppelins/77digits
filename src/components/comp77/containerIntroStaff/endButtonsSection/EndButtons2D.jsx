import React from 'react';
/*
Components
*/
import LinkToInstantContact from '../../links/linkToInstantContact/LinkToInstantContact';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { useTransition, animated } from '@react-spring/web';
/*
Hook Staff
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
BasicData
*/
import { useTransitionConfig, instContactButton } from './EndButtons2DData';

/*
------------------------------------------------------------------
*/
const EndButtons2D = () => {
  /*
  Global State Section
  canvasState={endOfContainerIntro: false,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Hook Section
  */
  const windowSize = useWindowSize();
  /*
  
  */
  const transitionCondition =
    canvasGlobalState.currentContainer === 'introContainer' &&
    canvasGlobalState.endOfContainerIntro;
  /*
  Spring Section
  */
  const mainTransition = useTransition(transitionCondition, {
    ...useTransitionConfig,
    /*
    "2000" is a time button requires to move on z-axis
    */
    delay: transitionCondition ? 2000 : 0,
  });

  /*
  JSX
  */
  return mainTransition(
    (styles, transitionCondition) =>
      transitionCondition && (
        <animated.div
          className="end-buttons2D__wrapper"
          style={{
            ...styles,
            width: windowSize.width,
          }}
        >
          <div
            className="end-buttons2D__buttons-container"
            style={{
              height: windowSize.height,
              width: windowSize.height * instContactButton.width,
            }}
          >
            <button
              className="end-buttons2D__phone-button"
              style={{
                height: windowSize.height * instContactButton.height,
                width: windowSize.height * instContactButton.width,
              }}
            >
              <LinkToInstantContact type="phone" />
            </button>

            <button
              className="end-buttons2D__email-button"
              style={{
                width: windowSize.height * instContactButton.width,
                height: windowSize.height * instContactButton.height,
              }}
            >
              <LinkToInstantContact type="mail" />
            </button>
          </div>
        </animated.div>
      )
  );
};

export default EndButtons2D;
