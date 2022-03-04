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
-----------------------------------------------------------------------
*/
const ContactOverlay = () => {
  /*
  Global State Section
  canvasState = { isContactOverlayOpened: 'false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
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
    from: { opacity: 0, animatedValue: 0 },
    enter: { opacity: 1, animatedValue: 1 },
    leave: { opacity: 0, animatedValue: 0 },
    // delay: 200,
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
        ({ opacity, animatedValue }, value) =>
          value && (
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
                <div className="contact-overlay__bar left" />
                <div className="contact-overlay__bar right" />
              </animated.button>

              {/*-----------*/}
              <div className="contact-overlay__contacts">
                <div>
                  <p className="contact-overlay__contact mobile-label">
                    mobile:
                  </p>
                  <p className="contact-overlay__contact mobile-number">
                    798905550
                  </p>
                </div>
                <div className="contact-overlay__contact-separator" />
                <div>
                  <p className="contact-overlay__contact email-label">
                    e-mail:
                  </p>
                  <p className="contact-overlay__contact email-address">
                    77digits@77digits.com
                  </p>
                </div>
              </div>
              {/*-----------*/}
              <div className="contact-overlay__marquee-container">
                <MarqueeHelloWorld />
              </div>
            </animated.div>
          )
      )}
    </animated.div>
  );
};

export default ContactOverlay;
