import React from 'react';
/*
Components
*/
import FakeLoader from '../../../comp77/fakeLoader/FakeLoader';
import Cookies from '../../cookies/Cookies';
// import LanguageSelector from './languageSelector/LanguageSelector';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
// import { useSpring, config } from '@react-spring/web';

/*
----------------------------------------------------------------------------
*/
const InitialOverlayTopSection = () => {
  /*
  Global state
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Staff
  */
  // const { springValue } = useSpring({
  //   springValue: canvasGlobalState.isCookiesPopUpMounted ? 1 : 0,
  //   delay: 200,
  //   config: config.molasses,
  // });

  /*
  JSX
  */
  return (
    <div className="initial-overlay-top-section__container">
      <div
        className="initial-overlay-top-section__fake-loader-container"
        style={{
          height: !canvasGlobalState.isCookiesPopUpMounted ? '100%' : '0%',
        }}
      >
        <FakeLoader />
      </div>
      <div
        className="initial-overlay-top-section__options-container"
        style={{
          /*
          why "zIndex" is set here, not in CSS?
          choosing CSS-way of styling some strange line appears... 
          */
          zIndex: canvasGlobalState.isCookiesPopUpMounted ? 952 : 0,
        }}
      >
        {/* <LanguageSelector springValue={springValue} /> */}
        <Cookies />
      </div>
    </div>
  );
};

export default InitialOverlayTopSection;
