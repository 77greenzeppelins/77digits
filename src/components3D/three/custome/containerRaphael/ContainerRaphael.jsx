import React, { Suspense } from 'react';
/*
Components
*/
import RaphaelSection from './raphaelSection/RaphaelSection';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';
import { useSnapshot } from 'valtio';
import { globalPositionData } from '../../../../data/globalData';

/*
-----------------------------------------------------------------------------
*/
const ContainerRaphael = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'raphaelContainer' && (
      <group position={globalPositionData.raphaelContainerPosition}>
        <Suspense fallback={null}>
          <RaphaelSection />
        </Suspense>
      </group>
    )
  );
};

export default ContainerRaphael;
