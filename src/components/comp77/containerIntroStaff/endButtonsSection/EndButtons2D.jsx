import React from 'react';
/*
Components
*/
import LinkToInstantContact from '../../links/linkToInstantContact/LinkToInstantContact';
import ResetButton from '../resetButton/ResetButton';
// import AuxiliaryButton from '../auxiliaryButton/AuxiliaryButton';
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
import {
  useTransitionConfig,
  instContactButton,
  resetButton,
} from './EndButtons2DData';

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
    canvasGlobalState.endOfContainerIntro &&
    !canvasGlobalState.isRaphaelVisible;
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

  const onClickHandler = () => {
    canvasState.fake = !canvasGlobalState.fake;
  };

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
              onClick={onClickHandler}
              style={{
                width: '100px',
                height: '500px',
                backgroundColor: 'red',
                position: 'absolute',
                left: 0,
                color: 'white',
              }}
            >
              {canvasGlobalState.fake !== 'none'
                ? canvasGlobalState.fake
                  ? 'fake: is true'
                  : 'fake: false'
                : 'fake: none'}
              <br></br>
              {canvasGlobalState.endOfContainerIntro === true
                ? 'endOfContainerIntro: true'
                : 'endOfContainerIntro: false'}
            </button>

            <button
              className="end-buttons2D__phone-button"
              style={{
                height: windowSize.height * instContactButton.height,
                width: windowSize.height * instContactButton.width,
              }}
            >
              <LinkToInstantContact type="phone" />
            </button>
            <div
              className="end-buttons2D__reset-button"
              style={{
                width: windowSize.height * resetButton.width,
                height: windowSize.height * resetButton.height,
              }}
            >
              <ResetButton
              /*
              It's actually "fake-X-button"
              */
              />
            </div>
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
