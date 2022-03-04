import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useThree } from '@react-three/fiber';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import ContactFrame from './contactFrame/ContactFrame';
/*
react-device-detect Staff
*/
import { isMobileOnly } from 'react-device-detect';
/*
HOOK
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
Basic Data
*/
const iconMobile = [
  { line: "let's", position: [0, 0.09, 0] },
  { line: 'talk', position: [0, -0.09, 0] },
];
const iconEmail = [
  { line: "let's", position: [0, 0.09, 0] },
  { line: 'write', position: [0, -0.09, 0] },
];

/*
------------------------------------------------------------------------
*/
const ContainerMenu = () => {
  /*
  References
  */
  const geometry = useRef();
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Component State
  */
  // const [mobile, setMobile] = useState(isMobileOnly);
  /*
  useWindowSize Section
  */
  // const windowSize = useWindowSize();
  /*
  useThree Section
  for <planeGeometry> props
  */
  const { viewport } = useThree();
  /*
  useEffect Section
  */
  // useEffect(() => {
  //   setMobile(isMobileOnly);
  //   console.log('isMobileOnly:', isMobileOnly);
  //   console.log('mobile:', mobile);
  // }, [windowSize, mobile]);

  /*
 JSX
 */
  return (
    <group
      name="BasicGroupOfMenuContainer"
      position={canvasGlobalState.menuContainerPosition}
    >
      {isMobileOnly && (
        <Suspense fallback={null}>
          <ContactFrame
            groupProps={{
              name: 'GroupForLogoInFrame',
              position: [-0.2, -0.55, 0.1],
              scale: [0.4, 0.4, 0.4],
              rotation: [0, 0, 0],
            }}
            iconText={iconEmail}
            iconType="iconEmail"
          />
          <ContactFrame
            groupProps={{
              name: 'GroupForLogoInFrame',
              position: [0.2, -0.55, 0.1],
              scale: [0.4, 0.4, 0.4],
              rotation: [0, 0, 0],
            }}
            iconText={iconMobile}
            iconType="iconMobile"
          />
        </Suspense>
      )}

      <mesh position={[0, 0, 0]}>
        <planeGeometry
          ref={geometry}
          //  {...planeArgs}
          args={[viewport.width * 0.25, viewport.height * 0.25, 1, 1]}
          // args={[1, 1, 1, 1]}
          // args={[2, 2, 1, 1]}
          // args={[size.width * 0.002, size.height * 0.002, 1, 1]}
          // args={[size.width < 1000 ? viewport.width * desktopWidthFactor : mobileWidthFactor,
          // viewport.height * highFactor, 128, 128]}
          // args={[ viewport.width * widthFactor ,
          // viewport.height * highFactor, 128, 128]}
        />
        <meshBasicMaterial color={0x000000} />
      </mesh>
    </group>
  );
};

export default ContainerMenu;
