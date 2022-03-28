import React from 'react';
import { Link } from 'react-router-dom';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
-------------------------------------------------------------------------
*/
const CookiesBanner = ({ mainText, button, link, language }) => {
  /*
  Global State Section
  canvasState = {userAteCookies: false, isCookiesPopUpMounted: false}
  */
  const globalCanvasState = useSnapshot(canvasState);

  const cookieToggler = () => {
    canvasState.isCookiesPopUpMounted = false;
    canvasState.isInitialOverlayMounted = false;
    if (language === 'en') canvasState.languageVersion = 'en';
    // canvasState.currentContainer = 'introContainer';
  };

  /*
  JSX
  */
  return (
    <div className="cookies-banner__container" onClick={cookieToggler}>
      <p
        className="cookies-banner__text"
        // style={{ letterSpacing: window.innerWidth > 800 && 2 }}
      >
        {mainText}
      </p>
      <div className="cookies-banner__buttons">
        <button
          // onClick={cookieToggler}
          className="cookies-banner__button"
          // style={{ letterSpacing: window.innerWidth > 800 && 2 }}
        >
          {button}
        </button>
        <div style={{ width: '20px' }} />
        <Link
          to="/cookies"
          className="cookies-banner__link"
          // style={{ letterSpacing: window.innerWidth > 800 && 2.5 }}
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default CookiesBanner;
