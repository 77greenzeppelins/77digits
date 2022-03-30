import React from 'react';
import { Link } from 'react-router-dom';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
-------------------------------------------------------------------------
*/
const CookiesBanner = ({ mainText, button, link, language }) => {
  /*
  Global State Section
  canvasState = {userAteCookies: false, isCookiesPopUpMounted: false}
  */
  // const globalCanvasState = useSnapshot(canvasState);

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
    <div className="cookies-banner__container">
      <p className="cookies-banner__main-text">{mainText}</p>
      <div className="cookies-banner__buttons">
        <button onClick={cookieToggler} className="cookies-banner__button">
          <p className="cookies-banner__button-text"> {button}</p>
        </button>
        <div style={{ width: '20px' }} />
        <Link to="/cookies" className="cookies-banner__link">
          <p className="cookies-banner__button-text">{link}</p>
        </Link>
      </div>
    </div>
  );
};

export default CookiesBanner;
