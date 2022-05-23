import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
/*
Global State Staff
*/
import { canvasState } from '../../../../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Assets Staff
*/
import image from '../../../../../../../assets/textures/containerAbout_Slide0_braveClients_2.webp';
/*
BasicData
*/
import { config } from './BraveClientsPictureOnPlaneData';

/*
Shaders Section
*/
import { extend } from '@react-three/fiber';
import { BraveClientsPictureOnPlaneShaderMaterial } from './braveClientsPictureOnPlaneShaders';
extend({ BraveClientsPictureOnPlaneShaderMaterial });

/*
--------------------------------------------------------------------------
*/
const BraveClientsPictureOnPlane = () => {
  /*
  References
  */
  const mesh = useRef();
  const shaderMaterial = useRef();
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Image Loader
  */
  const [texture] = useLoader(THREE.TextureLoader, [image]);
  /*
  Effect
  */
  //   useEffect(() => {
  //     console.log('mesh.current', mesh.current);
  //   }, []);
  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    shaderMaterial.current.uTime =
      canvasGlobalState.currentContainer === 'aboutContainer'
        ? clock.getElapsedTime()
        : 0;
  });
  /*
  JSX
  */
  return (
    <mesh ref={mesh} {...config.meshProps}>
      <planeGeometry args={config.geometryArgs} />
      <braveClientsPictureOnPlaneShaderMaterial
        ref={shaderMaterial}
        attach="material"
        uColor={[0.0, 0.5, 0.5]}
        uTexture={texture}
        uTexture-encoding={THREE.sRGBEncoding}
        toneMapped={false}
      />
    </mesh>
  );
};

export default BraveClientsPictureOnPlane;
