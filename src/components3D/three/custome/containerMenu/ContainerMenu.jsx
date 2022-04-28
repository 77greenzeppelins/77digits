import React, { Suspense } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import InstantContactsSection from './instantContactsSection/InstantContactsSection';
/*
react-device-detect Staff
*/
import { isMobileOnly } from 'react-device-detect';
/*
Assets
*/

/*
------------------------------------------------------------------------
*/
const ContainerMenu = () => {
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
 JSX
 */
  return (
    isMobileOnly &&
    canvasGlobalState.currentContainer === 'menuContainer' && (
      <group
        name="BasicGroupOfMenuContainerMobile"
        position={canvasGlobalState.menuContainerPosition}
      >
        <Suspense fallback={null}>
          <InstantContactsSection />
        </Suspense>
      </group>
    )
  );
};

export default ContainerMenu;
