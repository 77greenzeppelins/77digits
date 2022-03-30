import React, { Suspense } from 'react';
import { useThree } from '@react-three/fiber';
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
HOOK
*/
// import useWindowSize from '../../../../hooks/useWindowSize';
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
  useThree Section
  */
  const { viewport } = useThree();

  /*
 JSX
 */
  return isMobileOnly &&
    canvasGlobalState.currentContainer === 'menuContainer' ? (
    <group
      name="BasicGroupOfMenuContainerMobile"
      position={canvasGlobalState.menuContainerPosition}
    >
      <Suspense fallback={null}>
        <InstantContactsSection />
      </Suspense>

      <mesh position={[0, 0, 0]}>
        <planeGeometry
          args={[viewport.width * 0.25, viewport.height * 0.25, 1, 1]}
        />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
    </group>
  ) : null;
};

export default ContainerMenu;
