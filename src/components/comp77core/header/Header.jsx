import React, { useCallback } from 'react';
/*
Components
*/
import HeaderLogoContainer from './HeaderLogoContainer';
import HeaderButtonContainer from './HeaderButtonContainer';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
-------------------------------------------------------------------------
*/
const Header = () => {
  /*
  Global State Section
  canvasState={...,isHeaderDisplayed: true,}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Callback Section
  */
  const onClickHandler = useCallback(
    (event, eventTargetId, destinationContainer) => {
      /*
      "eventTargetId" - as this hendler serve for two buttons we have to know which one was clicked;
      */
      if (event.target.id === eventTargetId) {
        canvasState.isTurboOverlayActive = 1;
        canvasState.currentContainer = 'none';
        setTimeout(() => {
          canvasState.currentContainer = destinationContainer;
          canvasState.isTurboOverlayActive = 0;
        }, 400);
      }
    },
    []
  );

  /*
  --------------------------------------------------------------------------
  */
  return (
    <header
      className="header"
      style={{
        display:
          /*
        This ternary operator disables <Header> in <Container
        Menu>; i.e. no header in menu
        */
          canvasGlobalState.currentContainer === 'menuContainer'
            ? 'none'
            : 'block',
      }}
    >
      {}
      <div className="header__container">
        <HeaderLogoContainer onClickHandler={onClickHandler} />
        <HeaderButtonContainer onClickHandler={onClickHandler} />
      </div>
    </header>
  );
};

export default Header;
