import React, { useCallback } from 'react';
/*
Global State
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../../states/canvasState';
/*
Basic Data
*/
import { LinksToContainersData } from '../../../containerMenuBodyData';
/*
---------------------------------------------------------------------------
*/
const LinksToContainers = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  User Experience Section
  */
  const onClickHandler = useCallback(destinationContainer => {
    canvasState.isTurboOverlayActive = 1;
    /*
    It's a kind of fake re-positioning; there are actually two stages;
    The very first stage takes place in "fakeContainer" that has no elements and plays role of "neutral / clean" background for <ContainerMenu2DStaff>'s transitions; we just want to see those transitions;
    why "600ms" is required?
    it's determined by "transition" of <ContainerMenu2DStaff>; when we change "currentContainer" to "none" we go to fake position within canvas and a proces of <ContainerMenu2DStaff>'s "transitioning" begins; as config is "gentle" it consumes about 1 second;
    */
    canvasState.currentContainer = 'none';
    setTimeout(() => {
      canvasState.currentContainer = destinationContainer;
      canvasState.isTurboOverlayActive = 0;
    }, 600);
  }, []);

  /*
  JSX
  */
  return (
    <div className="links-to-containers__wrapper">
      {LinksToContainersData.map(
        ({ id, destinationContainer, labelPl, labelEn }, i) => (
          <div key={id} className="link-to-container__button-wrapper">
            <button
              className="link-to-container__button"
              onClick={() => onClickHandler(destinationContainer)}
            >
              <p className="link-to-container__button-label">
                {canvasGlobalState.languageVersion ? labelPl : labelEn}
              </p>
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default LinksToContainers;
