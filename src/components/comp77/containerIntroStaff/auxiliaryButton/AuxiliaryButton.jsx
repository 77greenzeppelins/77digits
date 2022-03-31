import React from 'react';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
--------------------------------------------------------------------------
*/
const AuxiliaryButton = ({ id }) => {
  /*
  Global State Section
  canvasState = {startOfContainerIntroShow: false, ...}
  */
  // const canvasGlobalState = useSnapshot(canvasState);

  /*
  UserExperience Section
  */
  const onClickHandler = () => {
    if (id === 'auxiliary-button-top') {
      // console.log('auxiliary-button-top in acxtion....');
      canvasState.startOfContainerIntroShow = true;
    }
    if (id === 'auxiliary-button-bottom') {
      // console.log('auxiliary-button-bottom in acxtion....');
      canvasState.startOfContainerIntroShow = true;
    }
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <button
        onClick={onClickHandler}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AuxiliaryButton;
