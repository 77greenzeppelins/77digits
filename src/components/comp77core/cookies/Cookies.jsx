import React from 'react';
import { Link } from 'react-router-dom';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';

/*
--------------------------------------------------------------------------------
*/
const Cookies = () => {
  /*
  Global State Section
  canvasState = {userAteCookies: false, isCookiesPopUpMounted: false}
  */
  const globalCanvasState = useSnapshot(canvasState);

  const cookieToggler = () => {
    canvasState.isCookiesPopUpMounted = false;
    canvasState.isInitialOverlayMounted = false;
    canvasState.currentContainer = 'introContainer';
  };

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
    // delay: 200,
    // config: config.molasses,
  });
  /*
  ------------------------------------------------------------------
  Remarks:
  ___1. you can use object name like "styles" (it's just an example) or destructured version with particular property {opacity}
  */
  return transition(
    ({ opacity }, value) =>
      value && (
        <animated.aside
          className="cookies"
          style={{
            // display:
            //   globalCanvasState.currentContainer === 'initalContainer'
            //     ? 'box'
            //     : 'none',
            opacity: opacity,
          }}
        >
          <div className="cookies__container">
            <p
              className="cookies__text"
              style={{ letterSpacing: window.innerWidth > 800 && 2 }}
            >
              Używamy plików cookies. Wybierz opcję:{' '}
            </p>
            <button
              onClick={cookieToggler}
              className="cookies__button"
              style={{ letterSpacing: window.innerWidth > 800 && 2 }}
            >
              Akceptuję /
            </button>
            <button onClick={cookieToggler} className="cookies__button">
              Odrzucam /
            </button>
            <Link
              to="/cookies"
              className="cookies__link"
              style={{ letterSpacing: window.innerWidth > 800 && 2.5 }}
            >
              Więcej informacji
            </Link>
          </div>
        </animated.aside>
      )
  );
};

export default Cookies;
