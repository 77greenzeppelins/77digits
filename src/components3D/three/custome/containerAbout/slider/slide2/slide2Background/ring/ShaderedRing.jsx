import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
/*
Global State Staff
*/
import { canvasState } from '../../../../../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Shader Staff
*/
import { extend } from '@react-three/fiber';
import { ShaderedRingMaterial } from './shaderedRingMaterial';
extend({ ShaderedRingMaterial });
/*
BasicData
*/
const [planeWidth, planeHeight] = [0.2, 0.2];

/*
-----------------------------------------------------------------------
*/
const ShaderedRing = () => {
  /*
  References
  */
  const shaderMaterial = useRef();
  /*
  Global State Staff
  */
  const canvasGlobalState = useSnapshot(canvasState);
  const uTimeCondition =
    canvasGlobalState.currentContainer === 'aboutContainer';
  /*
  ...
  */
  useFrame(({ clock }) => {
    shaderMaterial.current.uTime = uTimeCondition && clock.getElapsedTime();
    shaderMaterial.current.uAspect = planeWidth / planeHeight;
  });
  /*
  ...
  */
  const state = useThree();
  useEffect(() => {
    console.log('ShaderedRing / state', state);
    console.log('ShaderedRing / state.clock', state.clock);
    console.log('ShaderedRing / state.viewport', state.viewport.aspect);
  }, [state]);
  /*
  JSX
  */
  return (
    <mesh>
      <planeGeometry args={[planeWidth, planeHeight, 1, 1]} />
      {/* <meshBasicMaterial /> */}
      <shaderedRingMaterial ref={shaderMaterial} transparent={true} />
    </mesh>
  );
};

export default ShaderedRing;
