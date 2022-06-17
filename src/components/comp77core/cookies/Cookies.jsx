import React from 'react';
/*
Componenents
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
import { animated, useSpring, config } from '@react-spring/web';

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
  */
  const { springValue } = useSpring({
    springValue: canvasGlobalState.isCookiesPopUpMounted ? 1 : 0,
    delay: 200,
    config: config.molasses,
  });

  /*
  JSX
  */

  return (
    <animated.aside className="cookies" style={{ opacity: springValue }}>
      <div className="cookies__content-wrapper">
        <CookiesBanner />
      </div>
    </animated.aside>
  );
};

export default Cookies;
