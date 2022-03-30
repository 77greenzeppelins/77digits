import React from 'react';
/*
Components
*/
import Slider from './slider/Slider';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
------------------------------------------------------------------------
 */
const ContainerAbout = () => {
  /*
  Global State Section
  canvasState = {...,aboutContainerPosition: , isContainerAboutIntroductionClosed: false,}
 */
  const canvasGlobalState = useSnapshot(canvasState);

  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <group
        name="GroupForContainerAbout"
        position={canvasGlobalState.aboutContainerPosition}
      >
        {/*-----Slider Section-----------------------------------*/}
        <Slider />
      </group>
    )
  );
};

export default ContainerAbout;
