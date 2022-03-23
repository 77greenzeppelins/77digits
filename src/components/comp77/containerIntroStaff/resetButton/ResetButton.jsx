import React from 'react';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

const ResetButton = () => {
  /*
  Global State Section
  canvasState={endOfContainerIntro: false,...}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  User Experiences onClick 
  */
  const resetOnClick = () => {
    canvasState.endOfContainerIntro = false;
  };
  return (
    <>
      <button
        style={{ width: '100%', height: '100%' }}
        onClick={resetOnClick}
      />
    </>
  );
};

export default ResetButton;
