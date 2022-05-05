import React, { useEffect } from 'react';
/*
Components
*/
import LinkToInstantContact from '../../links/linkToInstantContact/LinkToInstantContact';
import ResetButton from '../resetButton/ResetButton';
import AuxiliaryButton from '../auxiliaryButton/AuxiliaryButton';
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
  auxiliaryButton,
} from './EndButtons2DData';
import { businessMail, businessPhone } from '../../../../data/instantContact';

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
    !canvasGlobalState.startOfContainerIntroShow;
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

  useEffect(() => {
    // canvasGlobalState.currentContainer === 'introContainer'
    //   ? (
    //   canvasGlobalState.endOfContainerIntro &&
    //   !canvasGlobalState.startOfContainerIntroShow
    // )
    //     ? console.log('first condition for ....')
    //     : (
    //   canvasGlobalState.endOfContainerIntro &&
    //   canvasGlobalState.startOfContainerIntroShow
    // ) ? console.log('second condition for ....') : null

    if (canvasGlobalState.currentContainer === 'introContainer') {
      if (
        canvasGlobalState.endOfContainerIntro &&
        !canvasGlobalState.startOfContainerIntroShow
      ) {
        console.log('first condition for .... ?');
      }
      if (
        canvasGlobalState.endOfContainerIntro &&
        canvasGlobalState.startOfContainerIntroShow
      ) {
        console.log('second condition for .... X');
      }
    }
  }, [
    canvasGlobalState.currentContainer,
    canvasGlobalState.endOfContainerIntro,
    canvasGlobalState.startOfContainerIntroShow,
  ]);

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
              <LinkToInstantContact
                contact={businessPhone}
                style={{ width: '100%', height: '100%' }}
              />
            </button>
            <div
              className="end-buttons2D__reset-button"
              style={{
                width: windowSize.height * resetButton.width,
                height: windowSize.height * resetButton.height,
              }}
            >
              <ResetButton toDo="reset" />
            </div>
            <button
              className="end-buttons2D__email-button"
              style={{
                width: windowSize.height * instContactButton.width,
                height: windowSize.height * instContactButton.height,
              }}
            >
              <LinkToInstantContact
                contact={businessMail}
                style={{ width: '100%', height: '100%' }}
              />
            </button>

            {/*-----auxiliart buttons--------------------------------*/}
            {/* <div
              className="instant-contacts__auxiliary-button-top"
              style={{
                height: windowSize.height * 0.35 * 0.25,
                width: windowSize.height * 0.27 * 0.21,
              }}
            >
              <AuxiliaryButton id="auxiliary-button-top" />
            </div> */}
            <div
              className="end-buttons2D__auxiliary-button-bottom"
              style={{
                width: windowSize.height * auxiliaryButton.width,
                height: windowSize.height * auxiliaryButton.height,
              }}
            >
              <AuxiliaryButton />
            </div>
          </div>
        </animated.div>
      )
  );
};

export default EndButtons2D;
