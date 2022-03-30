import React from 'react';
/*

*/
import CookiesBanner from './cookiesBanner/CookiesBanner';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition, config } from '@react-spring/web';
/*
Basic Data
*/
import {
  mainTextPl,
  buttonPl,
  linkPl,
  mainTextEn,
  buttonEn,
  linkEn,
} from './cookiesData';

/*
--------------------------------------------------------------------------------
*/
const Cookies = () => {
  /*
  Global State Section
  canvasState = {userAteCookies: false, isCookiesPopUpMounted: false}
  */
  const globalCanvasState = useSnapshot(canvasState);
  /*
  Spring Staff
  How it works?
  if "isCookiesPopUpMounted" === false <Cookies> are unmounted
  value of "isCookiesPopUpMounted" is changed in <FakeLoader> and "cookieToggler" above
  */
  const transition = useTransition(globalCanvasState.isCookiesPopUpMounted, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  });
  /*
  ------------------------------------------------------------------
  Remarks:
  ___1. you can use object name like "styles" (it's just an example) or destructured version with particular property {opacity}
  */
  return transition(
    ({ opacity }, value) =>
      value && (
        <animated.aside className="cookies" style={{ opacity: opacity }}>
          <div className="cookies__container">
            <div className="cookies__cookie-banner-wrapper">
              <CookiesBanner
                mainText={mainTextPl}
                button={buttonPl}
                link={linkPl}
                language="pl"
              />
            </div>
            <div className="cookies__separator" />
            <div className="cookies__cookie-banner-wrapper">
              <CookiesBanner
                mainText={mainTextEn}
                button={buttonEn}
                link={linkEn}
                language="en"
              />
            </div>
          </div>
        </animated.aside>
      )
  );
};

export default Cookies;
