import React, { useState } from 'react';
/*
Components
*/
import LogoIn13PartsParent from '../svgComponents/svgLogo/LogoIn13PartsParent';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useSpring } from '@react-spring/web';

/*
// --------------------------------------------------------------------------
*/
const FakeLoader = () => {
  /*
  Components State 
  */
  const [val, setVal] = useState(true);
  /*
  Global State Section
  appState = {isInitialOverlay: true, loaderCookisLink: "loaderVisible"}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useSpring Section
  Final result is "opacity: 0" of ".fake-loader__container"
  It's short-term solution i.e. in final version the whole <FakeLoader>'s parent must get "display: none" or dismount... 
  */
  const { springValue } = useSpring({
    springValue: val ? 1 : 0,
    /*
    Why "delay" ?
    This spring wait until useSprings() ends; it's a sort of "primitive hardcoding" approach;
    */
    delay: 800,
    /*
    How onRest() work? 
    My guess: after all animation this method is evaluated; 
    */
    onRest: () => {
      canvasState.isCookiesPopUpMounted = true;
      canvasState.currentContainer = 'introContainer';
      canvasState.fakeLoaderCounter = 1;
    },
  });

  return (
    /*
    What this condition "canvasGlobalState.fakeLoaderCounter === 0" does??
    There was an issue: <Cookies> is mounted; user click "więcej informacji" and goes to <CookiesPage>; then click browser "backward arrow" or mouse "left side button" and went back to <MainPage>; what user can see are <FakeLoader> buring animation and <Cookies>; both components overlap...
    Solution: restrict <FakeLoader> animation to only one "show" during initila page loading + value "fakeLoaderCounter === 1" is set in useSpring() above;
    */
    canvasGlobalState.fakeLoaderCounter === 0 && (
      <animated.div
        className="fake-loader__container"
        style={{ opacity: springValue }}
      >
        <LogoIn13PartsParent fakeLoaderStateSetter={setVal} />
      </animated.div>
    )
  );
};

export default FakeLoader;
