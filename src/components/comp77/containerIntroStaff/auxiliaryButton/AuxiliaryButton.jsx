import React from 'react';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
--------------------------------------------------------------------------
*/
const AuxiliaryButton = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <button
        onClick={() => {
          canvasState.isRaphaelVisible = true;
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AuxiliaryButton;
