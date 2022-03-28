import React from 'react';
/*
Components
*/
import Cookies from '../cookies/Cookies';
import FakeLoader from '../../comp77/loaders/FakeLoader';
import Clock from '../../comp77/clock/Clock';
import DateDisplayer from '../../comp77/date/DateDisplayer';
/*
React-router-dom Staf
*/
import { useLocation } from 'react-router-dom';
/*
Spring Staff
*/
import { useTransition, useSpring, animated as a } from '@react-spring/web';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';

const InitialOverlay = () => {
  /*
  Global State Section
  appState = {isInitialOverlayMounted: true,}; is set to false in <Loader>...
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
      // from: { opacity: 1 },
      // enter: { opacity: 1 },
      // leave: { opacity: 0 },
      // config: { duration: 200 },

      from: { display: 'block' },
      enter: { display: 'block' },
      leave: { display: 'none' },
      // delay: 400,
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
      config: { duration: 400 },
    }
  );
  const { springValue } = useSpring({
    springValue: canvasGlobalState.isCookiesPopUpMounted === true ? 0.5 : 1,
    duration: 600,
  });
  /*
  JSX
  */
  return parentTransition(
    ({ display }, item) =>
      item && (
        <a.div
          className="initial-overlay"
          style={{
            display: display,
          }}
        >
          {childTransition(
            (styles, item) =>
              item && (
                <a.div className="initial-overlay__container" style={styles}>
                  <a.div className="initial-overlay__top">
                    <div className="initial-overlay__top-foreground">
                      <FakeLoader />
                      <Cookies />
                    </div>
                    <a.div
                      className="initial-overlay__top-background"
                      style={{ opacity: springValue }}
                    />
                  </a.div>
                  <div className="initial-overlay__bottom">
                    <div className="initial-overlay__clocks">
                      <Clock
                        city={'Dzierżoniów'}
                        timeZone={'Europe/Warsaw'}
                        style={{ paddingBottom: '20px' }}
                      />
                      <Clock
                        city={'Washington DC'}
                        timeZone={'America/New_York'}
                        style={{ paddingBottom: '20px' }}
                      />
                      <Clock
                        city={'Beijing'}
                        timeZone={'Asia/Shanghai'}
                        style={{ paddingBottom: '20px' }}
                      />
                    </div>
                    <div className="initial-overlay__date">
                      <DateDisplayer />
                    </div>
                  </div>
                </a.div>
              )
          )}
        </a.div>
      )
  );
};

export default InitialOverlay;
