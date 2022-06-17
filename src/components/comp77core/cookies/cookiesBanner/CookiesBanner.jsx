import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';
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
} from '../cookiesData';

/*
-------------------------------------------------------------------------
*/
const CookiesBanner = () => {
  /*
  References
  */
  const text = useRef();
  const container = useRef();
  /*
  Global State Section
  canvasState = {languageVersion: 1,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
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
  // useEffect(() => {
  //   console.log('text.current.clientHeight', text.current?.clientHeight);
  //   console.log(
  //     'container.current.clientWidth',
  //     container.current?.clientWidth
  //   );
  // }, []);

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
    <animated.div ref={container} className="cookies-banner__container">
      <animated.div ref={text} className="cookies-banner__main-text-wrapper">
        <p className="cookies-banner__main-text">
          {textCreator(
            mainTextPl,
            mainTextEn,
            'cookies-banner__main-text-label'
          )}
        </p>
      </animated.div>

      <div className="cookies-banner__buttons">
        <button onClick={cookieToggler} className="cookies-banner__button ">
          <p className="cookies-banner__button-text">
            {textCreator(
              buttonYesPl,
              buttonYesEn,
              'cookies-banner__button-text-label'
            )}
          </p>
        </button>
        <button
          onClick={cookieToggler}
          className="cookies-banner__button middle"
        >
          <p className="cookies-banner__button-text">
            {textCreator(
              buttonNoPl,
              buttonNoEn,
              'cookies-banner__button-text-label'
              // { whiteSpace: 'normal' }
            )}
          </p>
        </button>

        <Link to="/cookies" className="cookies-banner__button">
          <p className="cookies-banner__button-text">
            {textCreator(
              linkTextPl,
              linkTextEn,
              'cookies-banner__button-text-label'
            )}
          </p>
        </Link>
      </div>
    </animated.div>
  );
};

export default CookiesBanner;
