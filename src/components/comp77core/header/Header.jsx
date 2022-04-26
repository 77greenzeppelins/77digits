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
    /*
    Why conditional rendering?
    First condition explanation: "canvasGlobalState.currentContainer !== 'none'"; It's a metter of navigation among containers;
    When user clicks on the following buttons: "77digits", "menu", "links in menu Container" camera goes to "noneContainer" so <header> is hidden;
    Second condition explanation: "canvasGlobalState.isInitialOverlayMounted === false"; I just don't want <H> to be displayed when <InitialOverlay> is mounted;
    */
    canvasGlobalState.currentContainer !== 'none' &&
    canvasGlobalState.isInitialOverlayMounted === false && (
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
        <ul className="header__container">
          <li>
            <HeaderLogoContainer onClickHandler={onClickHandler} />
          </li>

          <li>
            <HeaderButtonContainer onClickHandler={onClickHandler} />
          </li>
        </ul>
      </header>
    )
  );
};

export default Header;
