import React, { Suspense, useRef } from 'react';
/*
Components
*/
import Slider from './slider/Slider';
// import InteractivePanel from './interactivePanel/InteractivePanel';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Basic Data
*/
// import { contAboutSlidesNumber } from '../../../../data/globalData';
/*
------------------------------------------------------------------------
 */
const ContainerAbout = () => {
  /*
  References
  */
  const group = useRef();
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  JSX 
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <group
        ref={group}
        scale={[1, 1, 1]}
        name="GroupForContainerAbout"
        position={canvasGlobalState.aboutContainerPosition}
      >
        {/* <InteractivePanel
          meshProps={{ name: 'PanelForContainerAbout' }}
          slidesNumber={contAboutSlidesNumber}
        /> */}
        <Suspense fallback={null}>
          {/*
          Slider Section
          */}
          <Slider />
        </Suspense>
      </group>
    )
  );
};

export default ContainerAbout;
