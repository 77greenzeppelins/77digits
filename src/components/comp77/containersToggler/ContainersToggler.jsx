import React, { useCallback } from 'react';
/*
Components
*/
import TogglerButton from './TogglerButton/TogglerButton';
/*
Global State Staff
*/
import { canvasState } from '../../../states/canvasState';
import { useSnapshot } from 'valtio';

/*
---------------------------------------------------------------------------
*/
const ContainersToggler = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  onClick Section
  */
  const onClickHandler = useCallback(e => {
    if (e.target.id === 'goToRaphael') {
      console.log('e:', e);

      console.log('should goToRaphael');
      canvasState.isTurboOverlayActive = 1;
      canvasState.currentContainer = 'none';
      setTimeout(() => {
        canvasState.currentContainer = 'raphaelContainer';
        canvasState.isTurboOverlayActive = 0;
      }, 400);
    } else {
      console.log('e:', e);
      canvasState.isTurboOverlayActive = 1;
      canvasState.currentContainer = 'none';
      setTimeout(() => {
        canvasState.currentContainer = 'introContainer';
        canvasState.isTurboOverlayActive = 0;
      }, 400);
    }
  }, []);

  /*
  JSX
  */
  return (
    <div className="containers-toggler__container">
      <div className="containers-toggler__inner-wrapper">
        <div className="containers-toggler__button-wrapper">
          <TogglerButton
            condition={
              canvasGlobalState.currentContainer === 'introContainer' &&
              canvasGlobalState.endOfContainerIntro
            }
            style={{ backgroundColor: 'green' }}
            onClickHandler={e => onClickHandler(e)}
            id="goToRaphael"
            text="?"
          />
          <TogglerButton
            condition={
              canvasGlobalState.currentContainer === 'raphaelContainer'
            }
            style={{ backgroundColor: 'red' }}
            onClickHandler={e => onClickHandler(e)}
            id="goToIntro"
            text="X"
          />
        </div>
      </div>
    </div>
  );
};

export default ContainersToggler;
