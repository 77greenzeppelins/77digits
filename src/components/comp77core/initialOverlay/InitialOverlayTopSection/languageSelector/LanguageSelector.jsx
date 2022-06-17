import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/
import { animated } from '@react-spring/web';

/*
----------------------------------------------------------------------------
*/
const LanguageSelector = ({ springValue }) => {
  /*
  Global State Section
  canvasState = {languageVersion: 1,...}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  userExperience Section  
  */
  const onClickHandler = val => {
    switch (val) {
      case 'PL':
        canvasState.languageVersion = 1;
        break;
      case 'EN':
        canvasState.languageVersion = 0;
        break;
      default:
        console.log('default:', val);
        canvasState.languageVersion = 1;
        break;
    }
    // console.log('default:', val);
    // canvasState.languageVersion = Number(!canvasGlobalState.languageVersion);
  };
  /*
  JSX
  */
  return (
    <animated.div
      className="language-selector__wrapper"
      style={{ opacity: springValue }}
    >
      <button
        className="language-selector__button"
        onClick={() => onClickHandler('PL')}
        style={{ width: '50%', color: 'white', borderWidth: '0px 1px 0px 0px' }}
      >
        <p className="language-selector__button-label">PL</p>
      </button>
      {/* <div
        style={{ minHeight: '35px', width: '1px', backgroundColor: 'white' }}
      /> */}
      <button
        className="language-selector__button"
        style={{ width: '50%', color: 'white' }}
        onClick={() => onClickHandler('EN')}
      >
        <p className="language-selector__button-label">EN</p>
      </button>
    </animated.div>
  );
};

export default LanguageSelector;
