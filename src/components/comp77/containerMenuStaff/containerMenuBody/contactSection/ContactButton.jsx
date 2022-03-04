import React, { useCallback } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Basic Data
*/
// const label = ['K', 'O', 'N', 'T', 'A', 'K', 'T'];
const label = ['C', 'O', 'N', 'T', 'A', 'C', 'T'];

/*
----------------------------------------------------------------------------
*/
const ContactButton = () => {
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
      console.log(
        'canvasState.isContactOverlayOpened:',
        canvasState.isContactOverlayOpened
      );
    }, 400);
  }, [
    canvasGlobalState.isContactOverlayOpened,
    canvasGlobalState.isLinksToContainersActive,
  ]);

  /*
  JSX
  */
  return (
    <div className="contact-button__wrapper">
      <button onClick={onClickHandler} className="contact-button__button">
        <div className="contact-button__bar" />
        {label.map((letter, index) => (
          <p key={index} className="contact-button__label">
            {letter}
          </p>
        ))}
      </button>
    </div>
  );
};

export default ContactButton;
