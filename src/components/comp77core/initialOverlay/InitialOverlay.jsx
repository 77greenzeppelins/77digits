import React from 'react';
/*
Components
*/
import FakeLoader from '../../comp77/fakeLoader/FakeLoader';
// import Cookies from '../cookies/Cookies';
import Cookies from './cookies/Cookies';
import InitialOverlayMessage from './initialOverlayMessage/InitialOverlayMessage';
import InitialCalendar from './initialCalendar/InitialCalendar';
import LanguageSelector from './languageSelector/LanguageSelector';
/*
React-router-dom Staf
*/
import { useLocation } from 'react-router-dom';
/*
Spring Staff
*/
import { useTransition, animated as a } from '@react-spring/web';
/*
...
*/
import InitialOverlayGest from '../../../gestureHandlers/useGesture/InitialOverlayGest';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';

/*
-----------------------------------------------------------------------------
*/
const InitialOverlay = () => {
  /*
  Global State Section
  canvasState = {isInitialOverlayMounted: true,}; is set to false in <Loader>;
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
  const transition = useTransition(
    canvasGlobalState.isInitialOverlayMounted && location.pathname === '/',
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 600 },
      delay: 100,
    }
  );
  /*
  Gesture Section
  */
  const {
    overlayOpacity,
    messageOpacity,
    translateUp,
    translateDown,
    fakeOpacity,
    initialOverlayGestListener,
  } = InitialOverlayGest();

  /*
  JSX
  */
  return transition(
    ({ opacity }, item) =>
      item && (
        <a.div
          className="initial-overlay"
          style={{
            opacity: opacity,
          }}
          {...initialOverlayGestListener()}
        >
          <InitialOverlayMessage
            overlayOpacity={overlayOpacity}
            messageOpacity={messageOpacity}
          />
          <div className="initial-overlay__container">
            <div className="initial-overlay__framer">
              <div className="initial-overlay__top-section-container">
                <Cookies translateUp={translateUp} fakeOpacity={fakeOpacity} />
                <FakeLoader />
              </div>
              <div className="initial-overlay__bottom-section-container">
                <InitialCalendar />
                <LanguageSelector
                  translate={translateDown}
                  fakeOpacity={fakeOpacity}
                />
              </div>
            </div>
          </div>
        </a.div>
      )
  );
};

export default InitialOverlay;
