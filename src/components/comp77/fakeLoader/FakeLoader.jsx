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
  Firstly, springValue effects "opacity: 0" of ".fake-loader__container" and fakeLoader smoothly disappears;
  Secondly, onChange() has a potential to dismount "fakeLoader" as it changes it's "condition of rendering" that is ".fakeLoaderCounter"
  */
  const { springValue } = useSpring({
    springValue: val ? 1 : 0,
    delay: 400,
    onRest: () => {
      canvasState.isCookiesPopUpMounted = true;
      canvasState.currentContainer = 'introContainer';
      canvasState.fakeLoaderCounter = 1;
      canvasState.isInitialCalendarMounted = false;
      canvasState.isLanguadeSelectorMounted = true;
    },
  });

  return (
    /*
    What this condition "canvasGlobalState.fakeLoaderCounter === 0" does??
    There was an issue: <Cookies> is mounted; user click "więcej informacji" and goes to <CookiesPage>; then click browser "backward arrow" or mouse "left side button" and went back to <MainPage>; what user can see are <FakeLoader> buring animation and <Cookies>; both components overlap...
    Solution: restrict <FakeLoader> animation to only one "show" during initil page loading + value "fakeLoaderCounter === 1" is set in useSpring() above;
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
