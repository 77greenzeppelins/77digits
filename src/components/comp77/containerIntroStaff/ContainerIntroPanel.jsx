import React from 'react';
/*
Components 2D
*/
import ProgressIndicatior from '../progressIndicators/percentageProgressIndicator/ProgressIndicator';
import NavigationInformator from './NavigationInformator';
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
const ContainerIntroPanel = () => {
  /*
  Global State Section
  canvasState = {userAteCookies: false,}
  */
  const globalCanvasState = useSnapshot(canvasState);
  /*
  Spring Staff
  Remarks:
  ___1. "globalCanvasState.userAteCookies" can't be omitted; according to documentation this hook requires two argument; the very firs is for "items"; second embraces lifecycles
  */
  const transition = useTransition(globalCanvasState.userAteCookies, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,
    // config: config.molasses,
  });

  /*
  JSX
  Remark:
  1___"value" refers to "globalCanvasState.userAteCookies"; if it's "true" the very firs condition is fulfill to render <ContainerIntroPanel>;
  2___why expanded version of condition? because <ContainerIntroPanel> should be visible only when current container is <InitialContainer> , i.e. not when "menu" is open;
  */
  return transition(
    ({ opacity }, value) =>
      value &&
      globalCanvasState.currentContainer === 'introContainer' && (
        <animated.div
          className="container-intro-panel"
          style={{ opacity: opacity }}
        >
          <div className="container-intro-panel__wrapper">
            <ProgressIndicatior />
            <NavigationInformator />
          </div>
        </animated.div>
      )
  );
};

export default ContainerIntroPanel;
