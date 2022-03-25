import React from 'react';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

const ResetButton = ({ toDo }) => {
  /*
  Global State Section
  canvasState={endOfContainerIntro: false,...}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  User Experiences onClick 
  */
  const resetOnClick = e => {
    if (toDo === 'reset') canvasState.endOfContainerIntro = false;
    if (toDo === 'close') canvasState.startOfContainerIntroShow = false;

    // console.log('ResetButton / e', e);
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
