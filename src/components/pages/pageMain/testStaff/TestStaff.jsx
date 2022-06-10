import React, { useEffect } from 'react';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';
import { useSnapshot } from 'valtio';

/*
------------------------------------------------------------------------------
*/
const TestStaff = () => {
  /*
  ...
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  ...
  */
  useEffect(() => {}, []);

  const onClick = () => {
    if (canvasGlobalState.currentContainer === 'introContainer') {
      console.log('.....TestStaff in introContainer');
    }
    if (canvasGlobalState.currentContainer === 'aboutContainer') {
      console.log('.....TestStaff in aboutContainer');
    }
  };
  /*
  JSX
  */
  return (
    <>
      <div
        onClick={onClick}
        style={{
          //   position: 'fixed',
          position: 'absolute',

          bottom: 0,
          left: 0,
          height: '90vh',
          width: '100vw',
          backgroundColor: 'black',
          opacity: 0.5,
          zIndex: 9999,
          //   pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default TestStaff;
