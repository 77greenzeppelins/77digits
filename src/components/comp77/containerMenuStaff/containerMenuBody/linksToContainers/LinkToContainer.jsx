import React from 'react';
/*
Global State Staff
*/
import { canvasState } from '../../../../../states/canvasState';

const LinkToContainer = ({ label, destinationContainer }) => {
  /*
  User Experience Section
  */
  const onClickHandlers = () => {
    canvasState.isTurboOverlayActive = 1;
    /*
    It's a kind of fake re-positioning; there are actually two stages; 
    The very first stage takes place in "fakeContainer" that has no elements and plays role of "neutral / clean" background for <ContainerMenu2DStaff>'s transitions; we just want to see those transitions;
    why "1000ms" is required?
    it's determined by "transition" of <ContainerMenu2DStaff>; when we change "currentContainer" to "none" we go to fake position within canvas and a proces of <ContainerMenu2DStaff>'s "transitioning" begins; as config is "gentle" it consumes about 1 second; 
    */
    canvasState.currentContainer = 'none';
    setTimeout(() => {
      canvasState.currentContainer = destinationContainer;
      canvasState.isTurboOverlayActive = 0;
    }, 600);
  };
  return (
    <button className="link-to-container" onClick={onClickHandlers}>
      <p className="link-to-container__label">{label}</p>
    </button>
  );
};

export default LinkToContainer;

/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
/*
  Global State Section
  canvasState = {currentSection: "initialSection", }
 */
// const canvasGlobalState = useSnapshot(canvasState);
