import React from 'react';
/*
Components
*/
import InitialOverlayTopSection from './InitialOverlayTopSection/InitialOverlayTopSection';
import InitialOverlayBottomSection from './InitialOverlayBottomSection/InitialOverlayBottomSection';
/*
React-router-dom Staf
*/
import { useLocation } from 'react-router-dom';
/*
Spring Staff
*/
import { useTransition, animated as a } from '@react-spring/web';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';

const InitialOverlay = () => {
  /*
  Global State Section
  appState = {isInitialOverlayMounted: true,}; is set to false in <Loader>...,isCookiesPopUpMounted : false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useLocation Section
  Why useLocation is employed? 
  it allowes restrict appearing of <InitialOverlay> only to <MainPage> => page that has the following URL: "/"; without this condition when <CookiesPage> is refreshed <IO> covers the screen and make it 100% black...
  */
  const location = useLocation();

  /*
  Spring stuff for ".initial-overlay"
  */
  const parentTransition = useTransition(
    canvasGlobalState.isInitialOverlayMounted && location.pathname === '/',
    {
      from: { opacity: 1 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: canvasGlobalState.isCookiesPopUpMounted ? 600 : 600 },
      delay: canvasGlobalState.isCookiesPopUpMounted ? 100 : 0,
    }
  );
  /*
  Spring stuff for ".initial-overlay__container"
  */
  const childTransition = useTransition(
    canvasGlobalState.isInitialOverlayMounted,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: canvasGlobalState.isCookiesPopUpMounted ? 600 : 400 },
      delay: canvasGlobalState.isCookiesPopUpMounted ? 100 : 100,
    }
  );
  /*
  JSX
  */
  return parentTransition(
    ({ opacity }, item) =>
      item && (
        <a.div
          className="initial-overlay"
          style={{
            opacity: opacity,
          }}
        >
          <div
            /* it's a simple overlay that initially covers "canvas staff", due to "position:absolute" it doesn't effect "initial-overlay__container"
             */
            className="initial-overlay__cover"
          />
          {childTransition(
            (styles, item) =>
              item && (
                <a.div className="initial-overlay__container" style={styles}>
                  <a.div className="initial-overlay__top-section-container">
                    <InitialOverlayTopSection />
                  </a.div>
                  <div className="initial-overlay__bottom-section-container">
                    <InitialOverlayBottomSection />
                  </div>
                </a.div>
              )
          )}
        </a.div>
      )
  );
};

export default InitialOverlay;
