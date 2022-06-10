import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
/*
Global State Staff
*/
// import { canvasState } from '../../../../states/canvasState';
// import { useSnapshot } from 'valtio';
/*
Components
*/
import PlaneForCanvas from '../_planeForCanvas/PlaneForCanvas';
/*
Assets Staff
*/
import image from '../../../../assets/textures/andSign_3.webp';

/*
Shaders Section
*/
import { extend } from '@react-three/fiber';
import { PseudoFlagMaterial } from './PseudoFlagMaterial';
extend({ PseudoFlagMaterial });

/*
--------------------------------------------------------------------------
*/
const ImageAsFlag = ({
  /*
  valu for uniform that set alpha in: fragmentShader / gl_FragColor
  */
  uAlpha,
  /*
  boolean value for uniform that set uTime value 
  */
  uTimeCondition,
  /*
  props for <mesh>; mainly "scale" 
  */
  meshProps,
  /*
  props for <planeGeometry> in form of array like [1,1,16,16]
  */
  geometryArgs,
}) => {
  /*
  References
  */
  const shaderMaterial = useRef();
  /*
  Global State Section
  */
  // const canvasGlobalState = useSnapshot(canvasState);
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
    shaderMaterial.current.uTime = uTimeCondition ? clock.getElapsedTime() : 0;
  });
  /*
  JSX
  */
  return (
    <mesh {...meshProps}>
      <PlaneForCanvas
        argsWidth={geometryArgs[0]}
        argsHeight={geometryArgs[1]}
      />
      <pseudoFlagMaterial
        ref={shaderMaterial}
        attach="material"
        uAlpha={uAlpha}
        uTexture={texture}
        uTexture-encoding={THREE.sRGBEncoding}
        toneMapped={false}
        transparent={true}
      />
    </mesh>
  );
};

export default ImageAsFlag;

/*
used in: 
1__<Slide0> / <SpinningBilboard> / bilboardSides / BilboardSide3/ digitSide / <DigitSide3>
2__<Slide1>

<ImageAsFlag
          uAlpha={0.1}
          uTimeCondition={containerCondition && springCond ? 1 : 0}
           meshProps={{ scale: 0.7 }}
          geometryArgs={[1, 1, 16, 16]}
        />
*/
