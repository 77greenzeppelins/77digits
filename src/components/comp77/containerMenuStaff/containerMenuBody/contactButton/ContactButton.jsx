import React, { useCallback } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSpring } from '@react-spring/web';
/*
Basic Data
*/
const label = ['K', 'O', 'N', 'T', 'A', 'K', 'T'];
// const label = ['C', 'O', 'N', 'T', 'A', 'C', 'T'];

/*
----------------------------------------------------------------------------
*/
const ContactButton = ({ isMobileOnly, specialColor }) => {
  /*
  Global State Section
  canvasState = {isContactOverlayOpened: 'false', isLinksToContainersActive: 'true'}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  User Experience Section
  */
  const onClickHandler = useCallback(() => {
    /* 
    First onClick handler task:"disactivate" <LinksToContainers> by the following settings: {opacity: 0, pointerEvents: 'none'}
    */
    canvasState.isLinksToContainersActive =
      !canvasGlobalState.isLinksToContainersActive;
    // console.log(
    //   'canvasState.isLinksToContainersActive:',
    //   canvasState.isLinksToContainersActive
    // );
    setTimeout(() => {
      /* 
      Second onClick handler task:open <LinksToContainers> by the following settings: {...}
      */
      canvasState.isContactOverlayOpened =
        !canvasGlobalState.isContactOverlayOpened;
      // console.log(
      //   'canvasState.isContactOverlayOpened:',
      //   canvasState.isContactOverlayOpened
      // );
    }, 400);
  }, [
    canvasGlobalState.isContactOverlayOpened,
    canvasGlobalState.isLinksToContainersActive,
  ]);
  /*
  Spring Section
  "animatedValue" application: allowes to "hide" <ContactButton> by the following sewttrings: {opacity: 0, pointerEvents: 'none'}
  */
  const { animatedValue } = useSpring({
    from: { springValue: 1 },
    to: {
      animatedValue: canvasGlobalState.isLinksToContainersActive ? 1 : 0,
    },
    delay: 200,
  });

  /*
  JSX
  */
  return (
    <animated.div
      className="contact-button__wrapper"
      style={{
        opacity: animatedValue,
        pointerEvents: canvasGlobalState.isLinksToContainersActive
          ? 'auto'
          : 'none',
      }}
    >
      <button onClick={onClickHandler} className="contact-button__button">
        <div
          className="contact-button__bar"
          style={{ backgroundColor: !isMobileOnly && specialColor }}
        />
        {label.map((letter, index) => (
          <p
            key={index}
            className="contact-button__label"
            style={{ color: !isMobileOnly && specialColor }}
          >
            {letter}
          </p>
        ))}
      </button>
    </animated.div>
  );
};

export default ContactButton;
