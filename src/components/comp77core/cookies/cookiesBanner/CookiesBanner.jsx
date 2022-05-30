import React from 'react';
import { Link } from 'react-router-dom';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition, config } from '@react-spring/web';

/*
-------------------------------------------------------------------------
*/
const CookiesBanner = ({
  mainTextPl,
  buttonYesPl,
  buttonNoPl,
  linkTextPl,
  mainTextEn,
  buttonYesEn,
  buttonNoEn,
  linkTextEn,
}) => {
  /*
  Global State Section
  canvasState = {languageVersion: 1,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const transition = useTransition(canvasGlobalState.languageVersion, {
    from: { opacity: 0, displayInline: 'none', displayFlex: 'none' },
    enter: { opacity: 1, displayInline: 'inline', displayFlex: 'flex' },
    leave: { opacity: 0, displayInline: 'none', displayFlex: 'none' },
    delay: 100,
    config: config.molasses,
    // config: { duration: 200 },
  });
  /*
  ...
  */
  const cookieToggler = e => {
    canvasState.isCookiesPopUpMounted = false;
    canvasState.isInitialOverlayMounted = false;
    // canvasState.currentPointerType = e.nativeEvent.pointerType;
    // console.log('e', e);
  };
  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.currentPointerType',
  //     canvasGlobalState.currentPointerType
  //   );
  // }, [canvasGlobalState.currentPointerType]);
  /*
  JSX
  */
  return transition(({ opacity, displayInline, displayFlex }, condition) =>
    condition ? (
      <animated.div
        className="cookies-banner__container"
        style={{ opacity: opacity, display: displayFlex }}
      >
        <animated.p
          className="cookies-banner__main-text"
          style={{ opacity: opacity, display: displayInline }}
        >
          {mainTextPl}
          <Link to="/cookies">
            <animated.span
              className="cookies-banner__main-text"
              style={{
                opacity: opacity,
                display: displayInline,
                textDecoration: 'underline',
              }}
            >
              {linkTextPl}
            </animated.span>
          </Link>
        </animated.p>

        <div className="cookies-banner__buttons">
          <button onClick={cookieToggler} className="cookies-banner__button">
            <animated.p
              className="cookies-banner__button-text"
              style={{ opacity: opacity, display: displayInline }}
            >
              {buttonYesPl}
            </animated.p>
          </button>
          <button onClick={cookieToggler} className="cookies-banner__button">
            <animated.p
              className="cookies-banner__button-text"
              style={{ opacity: opacity, display: displayInline }}
            >
              {buttonNoPl}
            </animated.p>
          </button>
        </div>
      </animated.div>
    ) : (
      <animated.div
        className="cookies-banner__container"
        style={{ opacity: opacity, display: displayFlex }}
      >
        <animated.p
          className="cookies-banner__main-text"
          style={{ opacity: opacity, display: displayInline }}
        >
          {mainTextEn}
          <Link to="/cookies">
            <animated.span
              className="cookies-banner__main-text"
              style={{
                opacity: opacity,
                display: displayInline,
                textDecoration: 'underline',
              }}
            >
              {linkTextEn}
            </animated.span>
          </Link>
        </animated.p>

        <div className="cookies-banner__buttons">
          <button onClick={cookieToggler} className="cookies-banner__button">
            <animated.p
              className="cookies-banner__button-text"
              style={{ opacity: opacity, display: displayInline }}
            >
              {buttonYesEn}
            </animated.p>
          </button>
          <button onClick={cookieToggler} className="cookies-banner__button">
            <animated.p
              className="cookies-banner__button-text"
              style={{ opacity: opacity, display: displayInline }}
            >
              {buttonNoEn}
            </animated.p>
          </button>
        </div>
      </animated.div>
    )
  );
};

export default CookiesBanner;
