import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
//_____Global State Staff
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
//_____Gesture Section
import DragAndReturn from '../../../../../gestureHandlers/useDrag/DragAndReturn';
//_____Spring Section
import { a } from '@react-spring/three';

/*
Shaders Section
*/
import { LogoFlagShaderMaterial } from './logoFlagShader';
import { extend } from '@react-three/fiber';
extend({ LogoFlagShaderMaterial });

/*
-----------------------------------------------------------------------
*/
const LogoFlag = props => {
  const { meshProps, geometryProps, materialProps } = props;
  //_____Global State Section;
  //_____{containerPositionZ: 0,, mainLight: false, sideLights:0, wheelRange: 0, dragRange: 0,}
  const canvasGlobalState = useSnapshot(canvasState);

  //_____References
  const mesh = useRef();
  const shaderMaterial = useRef();

  //_____Image Loader
  const loadedLogo = useLoader(
    THREE.TextureLoader,
    './assets/textures/logo/77_6.png'
  );

  //_____Canvas Data Section
  /*
  _____1. Why "if" was used?
  I didn't use it when conditional rendering was in <PageMain>
  When I move conditional rendering here some errors occures and "if" turned out to be solution...
  */
  useFrame(({ clock }) => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  //_____Gesture Section
  // const [position, scale, dragAndReturn] = DragAndReturn({
  //   initialScale: 0.6,
  // });

  //_____
  useEffect(() => {
    console.log('<SevenSevenLogo> / useEffect / scale:');
  }, []);

  //_____JSX
  return (
    <>
      {/* {canvasGlobalState.containerPositionZ === true && ( */}
        <a.mesh
          ref={mesh}
          {...meshProps}
          // {...dragAndReturn()}
          // position={position}
          // scale={scale}
        >
          <planeBufferGeometry {...geometryProps} args={[1, 1, 16, 16]} />
          <logoFlagShaderMaterial
            {...materialProps}
            ref={shaderMaterial}
            attach="material"
            // blending={THREE.MultiplyBlending}
            // ref={shaderMaterial}
            uColor={'hotpink'}
            uTexture={loadedLogo}
            // uTexture={image}
          />
        </a.mesh>
      {/* )} */}
    </>
  );
};

export default LogoFlag;

/*
<Suspense fallback={null}>
              <SevenSevenLogo
                meshProps={{
                  position: [0, 0, 0],
                  name: '77',
                  scale: 0.65,
                }}
              />
</Suspense> 
*/
