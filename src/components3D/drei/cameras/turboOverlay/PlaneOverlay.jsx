import React, { useRef, useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Section
*/
import { a, useSpring } from '@react-spring/three';
/*
-----------------------------------------------------------------------------
*/
const PlaneOverlay = () => {
  /*
  ...
  */
  const mesh = useRef();
  /*
  Global State Section
  {sliderToggler:0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ togglerValue }] = useSpring(
    () => ({
      togglerValue: canvasGlobalState.sliderToggler ? 1 : 0,
      config: { duration: 600 },
    }),
    [canvasGlobalState.sliderToggler]
  );

  const opacity = togglerValue.to([0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  /*
  ...
  */
  // useEffect(() => {
  //   if (canvasGlobalState.currentContainer === 'aboutContainer') {
  //     console.log('PlaneOverlay / fake', fake);
  //     console.log('PlaneOverlay / mesh.current', mesh.current);
  //   }
  // }, [canvasGlobalState.currentContainer, turboOverlayOpacity, fake]);

  /*
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <a.mesh ref={mesh} position={[0, 0, -0.11]} scale={1}>
        <planeGeometry args={[0.9, 0.9, 1, 1]} />
        <a.meshBasicMaterial color={[0, 0, 0]} transparent opacity={opacity} />
      </a.mesh>
    )
  );
};

export default PlaneOverlay;

/*
  JSX creator

const createJSX = () => {
    return (
      canvasGlobalState.currentContainer === 'aboutContainer' && (
        <mesh
          position={[0, 0, -0.11]}
          //  rotation-z={fake}
        >
          <planeGeometry args={[0.05, 0.05, 1, 1]} />
          <meshBasicMaterial
            color={[0, springValue, 0]}
            transparent
            opacity={0.7}
            // opacity={turboOverlayOpacity}
          />
        </mesh>
      )
    );
  };


  */
