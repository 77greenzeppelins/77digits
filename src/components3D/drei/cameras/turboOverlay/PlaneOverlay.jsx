import React, { useRef, useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
...
*/
import ContAboutNavGest from '../../../../gestureHandlers/useGesture/ContAboutNavGest';
/*
Spring Section
*/
import { a } from '@react-spring/three';
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
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  Gestures Section
  */
  const { turboOverlayOpacity, fake, springValue, xxx } = ContAboutNavGest();
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
      <a.mesh
        ref={mesh}
        position={[0, 0, -0.11]}
        scale={1}
        // scale={springValue}
        rotation-z={fake}
      >
        <planeGeometry args={[0.03, 0.03, 1, 1]} />
        <a.meshBasicMaterial color={[0, 0.1, 0.1]} transparent opacity={1} />
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
