import React from 'react';
import { canvasState } from '../../../states/canvasState';
import { useSnapshot } from 'valtio';

const ContainerRaphael = () => {
  const x = useSnapshot(canvasState);
  const condition = x.currentContainer === 'raphaelContainer';
  /*
  ...
  */

  const goToIntro = () => {
    canvasState.currentContainer = 'introContainer';
    //___
    // canvasState.isTurboOverlayActive = 1;
    // setInterval(() => {
    //   canvasState.currentContainer = 'introContainer';
    //   canvasState.isTurboOverlayActive = 0;
    // }, 600);
    //___
    // canvasState.currentContainer = 'introContainer';
    // canvasState.isTurboOverlayActive = 0;
    // canvasState.currentContainer = 'none';
    // setInterval(() => {
    //   canvasState.currentContainer = 'menuContainer';
    //   canvasState.isTurboOverlayActive = 0;
    // }, 400);
  };

  /*
  JSX
  */
  return (
    condition && (
      <div
        style={{
          position: 'fixed',
          width: '100px',
          height: '100px',
        }}
      >
        <button
          onClick={goToIntro}
          style={{
            width: '100%',
            height: '100%',
            fontSize: '2rem',
            color: 'white',
            backgroundColor: 'red',
            //   ...style,
          }}
        >
          X
        </button>
      </div>
    )
  );
};

export default ContainerRaphael;
