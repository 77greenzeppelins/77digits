import React from 'react';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';

/*
----------------------------------------------------------------------------
*/
const ResetButton = () => {
  /*
  JSX
  */
  return (
    <>
      <button
        style={{ width: '100%', height: '100%' }}
        onClick={() => {
          canvasState.endOfContainerIntro = false;
        }}
      />
    </>
  );
};

export default ResetButton;
