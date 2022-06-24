import React from 'react';
import { Link } from 'react-router-dom';

/*
Componenents
*/
// import CookiesBanner from './cookiesBanner/CookiesBanner';
/*
Global State Staff
 */
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSpring, useTransition, config } from '@react-spring/web';
/*
Gesture Staff
*/

/*
Basic Data
*/
import {
  mainTextPl,
  buttonYesPl,
  buttonNoPl,
  linkTextPl,
  mainTextEn,
  buttonYesEn,
  buttonNoEn,
  linkTextEn,
} from './cookiesData';
/*
--------------------------------------------------------------------------------
*/
const Cookies = ({ translateUp, fakeOpacity }) => {
  /*
  Global State Section
  canvasState = {userAteCookies: false, isCookiesPopUpMounted: false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Staff
  */
  const { springValue } = useSpring({
    springValue: canvasGlobalState.isCookiesPopUpMounted ? 1 : 0,
    delay: 200,
    config: config.molasses,
  });

  /*
  Spring Section; useTransition() for language versions
  */
  const transition = useTransition(canvasGlobalState.languageVersion, {
    from: {
      opacity: 0,
      position: 'absolute',
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
  });
  /*
  ...
  */
  const cookieToggler = e => {
    canvasState.isInitialOverlayMounted = false;
  };
  /*
  Gesture Staff
  */

  /*
  ...
  */
  const textCreator = (textPL, textEn, spanClass, styleConfig) => {
    return transition(({ opacity }, condition) =>
      condition ? (
        <animated.span
          className={spanClass}
          style={{
            ...styleConfig,
            opacity: opacity,
          }}
        >
          {textPL}
        </animated.span>
      ) : (
        <animated.span
          className={spanClass}
          style={{
            ...styleConfig,
            opacity: opacity,
          }}
        >
          {textEn}
        </animated.span>
      )
    );
  };

  /*
  JSX
  */

  return (
    <animated.aside
      className="cookies"
      style={{
        opacity: springValue,
        zIndex: canvasGlobalState.isCookiesPopUpMounted ? 952 : 0,
        display: canvasGlobalState.isCookiesPopUpMounted ? 'flex' : 'none',
        transform: translateUp,
      }}
    >
      <animated.div
        className="cookies__container"
        style={{ opacity: fakeOpacity }}
      >
        <div
          className="cookies__main-text-wrapper"
          // style={{ opacity: fakeOpacity }}
        >
          <p className="cookies__main-text">
            {textCreator(mainTextPl, mainTextEn, 'cookies__main-text-label')}
          </p>
        </div>

        <div className="cookies__buttons">
          <div className="cookies__button-container">
            <button
              type="button"
              onClick={cookieToggler}
              className="cookies__button "
            >
              <p className="cookies__button-text">
                {textCreator(
                  buttonYesPl,
                  buttonYesEn,
                  'cookies__button-text-label'
                )}
              </p>
            </button>
          </div>

          <div className="cookies__button-container">
            <button
              type="button"
              onClick={cookieToggler}
              className="cookies__button "
            >
              <p className="cookies__button-text">
                {textCreator(
                  buttonNoPl,
                  buttonNoEn,
                  'cookies__button-text-label'
                  // { whiteSpace: 'normal' }
                )}
              </p>
            </button>
          </div>

          <div className="cookies__button-container">
            <Link to="/cookies" className="cookies__button link">
              <p className="cookies__button-text">
                {textCreator(
                  linkTextPl,
                  linkTextEn,
                  'cookies__button-text-label'
                )}
              </p>
            </Link>
          </div>
        </div>
      </animated.div>
    </animated.aside>
  );
};

export default Cookies;
