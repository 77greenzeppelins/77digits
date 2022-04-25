import React from 'react';
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
import { businessMail, businessPhone } from '../../../../data/instantContact';

const InstantContacts = () => {
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
    from: { opacity: 0, pointerEvents: 'none' },
    enter: { opacity: 1, pointerEvents: 'auto' },
    leave: { opacity: 0, pointerEvents: 'none' },
    config: { duration: 100 },
    delay: transitionCondition ? 2000 : 0,
  });

  /*
  JSX
  */
  return mainTransition(
    (styles, transitionCondition) =>
      transitionCondition && (
        <animated.div
          className="container-intro__wrapper"
          style={{
            ...styles,
            width: windowSize.width,
          }}
        >
          <div
            className="container-intro__buttons-container"
            style={{
              height: windowSize.height,
              width: windowSize.height * 0.27,
            }}
          >
            <button
              className="container-intro__phone-button"
              style={{
                height: windowSize.height * 0.35,
                width: windowSize.height * 0.27,
              }}
            >
              <LinkToInstantContact
                contact={businessPhone}
                style={{ width: '100%', height: '100%' }}
              />
            </button>
            <div
              className="container-intro__reset-button"
              style={{
                height: windowSize.height * 0.1,
                width: windowSize.height * 0.22,
              }}
            >
              <ResetButton toDo="reset" />
            </div>
            <button
              className="container-intro__email-button"
              style={{
                height: windowSize.height * 0.35,
                width: windowSize.height * 0.27,
              }}
            >
              <LinkToInstantContact
                contact={businessMail}
                style={{ width: '100%', height: '100%' }}
              />
            </button>

            {/*-----auxiliart buttons--------------------------------*/}
            <div
              className="container-intro__auxiliary-button-top"
              style={{
                height: windowSize.height * 0.35 * 0.25,
                width: windowSize.height * 0.27 * 0.21,
              }}
            >
              <AuxiliaryButton id="auxiliary-button-top" />
            </div>
            <div
              className="container-intro__auxiliary-button-bottom"
              style={{
                height: windowSize.height * 0.35 * 0.25,
                width: windowSize.height * 0.27 * 0.21,
              }}
            >
              <AuxiliaryButton id="auxiliary-button-bottom" />
            </div>
          </div>
        </animated.div>
      )
  );
};

export default InstantContacts;
