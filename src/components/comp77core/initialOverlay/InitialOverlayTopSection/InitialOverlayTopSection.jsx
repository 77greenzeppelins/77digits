import React from 'react';
/*
Components
*/
import FakeLoader from '../../../comp77/fakeLoader/FakeLoader';
import Cookies from '../../cookies/Cookies';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
----------------------------------------------------------------------------
*/
const InitialOverlayTopSection = () => {
  /*
  Global state
  */
  const canvasGlobalState = useSnapshot(canvasState);

  return (
    <div
      className="initial-overlay-top-section__container"
      style={{
        /*
          just to avoid css-efforts and symulate gap between "data-timer section" and bottom of viewport
          */
        paddingTop: canvasGlobalState.isCookiesPopUpMounted ? '3vh' : '0',
      }}
    >
      <div
        className="initial-overlay-top-section__fake-loader-container"
        style={{
          /*
          just to avoid css-efforts and center svgLogo
          */
          height: !canvasGlobalState.isCookiesPopUpMounted ? '100%' : '0%',
        }}
      >
        <FakeLoader />
      </div>
      <div className="initial-overlay-top-section__cookies-container">
        <Cookies />
      </div>
    </div>
  );
};

export default InitialOverlayTopSection;
