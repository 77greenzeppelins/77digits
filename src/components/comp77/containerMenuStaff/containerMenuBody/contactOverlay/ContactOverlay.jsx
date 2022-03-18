import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Components
*/
import MarqueeHelloWorld from './MarqueeHelloWorld';
/*
Spring Staff
*/
import {
  animated,
  config,
  useTransition,
  useSpring,
  useChain,
  useSpringRef,
} from '@react-spring/web';
/*

*/
import useWindowSize from '../../../../../hooks/useWindowSize';

/*
-----------------------------------------------------------------------
*/
const ContactOverlay = ({ isMobileOnly, specialColor, specialBgColor }) => {
  /*
  Global State Section
  canvasState = { isContactOverlayOpened: 'false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
Hook section
  */
  const windowSize = useWindowSize();
  /*
  Spring Section
  Global State's values that trigger changes of CSS's properties are managed within two onClickHandlers; one is in <ContactOverlay> and the second is in <ContactButton>
  */
  const springRef = useSpringRef();
  const { springValue } = useSpring({
    ref: springRef,
    from: { springValue: 'none' },
    to: {
      springValue: canvasGlobalState.isContactOverlayOpened ? 'flex' : 'none',
    },
  });
  const transitionRef = useSpringRef();
  const transition = useTransition(canvasGlobalState.isContactOverlayOpened, {
    ref: transitionRef,
    from: { animatedValue: 0 },
    enter: { animatedValue: 1 },
    leave: { animatedValue: 0 },
    config: config.molasses,
  });

  useChain(
    canvasGlobalState.isContactOverlayOpened
      ? [springRef, transitionRef]
      : [transitionRef, springRef],
    [0, canvasGlobalState.isContactOverlayOpened ? 0.4 : 0.6]
  );
  /*
  User Experience Section
  */
  const onClickHandler = () => {
    /* 
    First onClick handler task:close <LinksToContainers> by the following settings: {...}
    */
    canvasState.isContactOverlayOpened =
      !canvasGlobalState.isContactOverlayOpened;

    setTimeout(() => {
      /* 
      Second onClick handler task:"activate" <LinksToContainers> by the following settings: {opacity: 1, pointerEvents: 'auto'}
      */
      canvasState.isLinksToContainersActive =
        !canvasGlobalState.isLinksToContainersActive;
    }, 600);
  };
  /*
  JSX
  */
  return (
    <animated.div
      className="contact-overlay__wrapper"
      style={{
        display: springValue,
      }}
    >
      {transition(
        ({ animatedValue }, transitionCondition) =>
          transitionCondition && (
            <>
              <div
                className="contact-overlay__marquee-container"
                style={{ width: windowSize.width }}
              >
                <MarqueeHelloWorld
                  isMobileOnly={isMobileOnly}
                  specialColor={specialColor}
                  specialBgColor={specialBgColor}
                />
              </div>

              <animated.div
                className="contact-overlay__content"
                style={{ opacity: animatedValue }}
              >
                {/*-----------*/}
                <animated.button
                  className="contact-overlay__close-button"
                  onClick={onClickHandler}
                  style={{ scale: animatedValue }}
                >
                  <div
                    className="contact-overlay__button-bar left"
                    style={{ backgroundColor: !isMobileOnly && specialColor }}
                  />
                  <div
                    className="contact-overlay__button-bar right"
                    style={{ backgroundColor: !isMobileOnly && specialColor }}
                  />
                </animated.button>
                <div className="contact-overlay__close-button-separator" />
                {/*-----------*/}
                <ul className="contact-overlay__contacts">
                  <li className="contact-overlay__contact-block">
                    <p
                      className="contact-overlay__contact mobile-label"
                      style={{ color: !isMobileOnly && specialColor }}
                    >
                      mobile:
                    </p>
                    <p
                      className="contact-overlay__contact mobile-number"
                      style={{ color: !isMobileOnly && specialColor }}
                    >
                      798905550
                    </p>
                  </li>
                  {/* <li className="contact-overlay__contact-separator" /> */}
                  <li className="contact-overlay__contact-block">
                    <p
                      className="contact-overlay__contact email-label"
                      style={{ color: !isMobileOnly && specialColor }}
                    >
                      e-mail:
                    </p>
                    <p
                      className="contact-overlay__contact email-address"
                      style={{ color: !isMobileOnly && specialColor }}
                    >
                      77digits@77digits.com
                    </p>
                  </li>
                </ul>
              </animated.div>
            </>
          )
      )}
    </animated.div>
  );
};

export default ContactOverlay;
