import React from 'react';
/*
Componenents
*/
import CookiesBanner from './cookiesBanner/CookiesBanner';
import LanguageSelector from './languageSelector/LanguageSelector';
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
  /*
  for <CookiesBanner>
  */
  mainTextPl,
  buttonYesPl,
  buttonNoPl,
  linkTextPl,
  mainTextEn,
  buttonYesEn,
  buttonNoEn,
  linkTextEn,
  /*
  for <LanguageSelector>
  */
  languageSelectionTextPl,
  languageSelectionButtonTextPl,
  languageSelectionTextEn,
  languageSelectionButtonTextEn,
} from './cookiesData';

/*
--------------------------------------------------------------------------------
*/
const Cookies = () => {
  /*
  Global State Section
  canvasState = {userAteCookies: false, isCookiesPopUpMounted: false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Staff
  How it works?
  if "isCookiesPopUpMounted" === false <Cookies> are unmounted
  value of "isCookiesPopUpMounted" is changed in <FakeLoader> and "cookieToggler" above
  */
  const transition = useTransition(canvasGlobalState.isCookiesPopUpMounted, {
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
          <div className="cookies__content-wrapper">
            <CookiesBanner
              mainTextPl={mainTextPl}
              buttonYesPl={buttonYesPl}
              buttonNoPl={buttonNoPl}
              linkTextPl={linkTextPl}
              mainTextEn={mainTextEn}
              buttonYesEn={buttonYesEn}
              buttonNoEn={buttonNoEn}
              linkTextEn={linkTextEn}
            />
            <LanguageSelector
              languageSelectionTextPl={languageSelectionTextPl}
              languageSelectionButtonTextPl={languageSelectionButtonTextPl}
              languageSelectionTextEn={languageSelectionTextEn}
              languageSelectionButtonTextEn={languageSelectionButtonTextEn}
            />
          </div>
        </animated.aside>
      )
  );
};

export default Cookies;
