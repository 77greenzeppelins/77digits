import React from 'react';
/*
Components
*/
import Cookies from '../cookies/Cookies';
import FakeLoader from '../../comp77/loader/FakeLoader';
import Clock from '../../comp77/clock/Clock';
import DateDisplayer from '../../comp77/date/DateDisplayer';
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
  appState = {isInitialOverlayMounted: true,}; is set to false in <Loader>...
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useLocation Section
  why? it allowes restrict appearing of <InitialOverlay> only to <MainPage> => page that has the following URL: "/"; without this condition when <CookiesPage> is refreshed <IO> covers the screen and make it 100% black...
  */
  const location = useLocation();

  /*
  Spring stuff for ".initial-overlay__container"
  */
  const parentTransition = useTransition(
    canvasGlobalState.isInitialOverlayMounted && location.pathname === '/',
    {
      from: { opacity: 1 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 200 },
    }
  );

  const childTransition = useTransition(
    canvasGlobalState.isInitialOverlayMounted && location.pathname === '/',
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 200 },
    }
  );
  /*
  JSX
  */
  return parentTransition(
    (styles, item) =>
      item && (
        <a.div className="initial-overlay" style={styles}>
          {childTransition(
            (styles, item) =>
              item && (
                <a.div className="initial-overlay__container" style={styles}>
                  <div className="initial-overlay__top">
                    <FakeLoader />
                    <Cookies />
                  </div>
                  <div
                    style={{ paddingBottom: '40px' }}
                    className="initial-overlay__bottom"
                  >
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
