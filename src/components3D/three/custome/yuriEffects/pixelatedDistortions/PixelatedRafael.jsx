import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';

//_____Shaders Section
import { PixelatedRafaelShaderMaterial } from './PixelatedRafaelShaderMaterial.js';
import { extend } from '@react-three/fiber';
extend({ PixelatedRafaelShaderMaterial });

const PixelatedRafael = ({ meshProps, planeArgs, materialProps }) => {
  //
  //_____References
  const mesh = useRef();
  const shaderMaterial = useRef();

  //_____Image Loader
  const loadedImage = useLoader(
    THREE.TextureLoader,
    './assets/textures/PlatoAndAristotelesBlack.jpg'
  );
  //_____Animation Section

  useFrame(({ clock, mouse }) => {
    /*
  _____1. Why "if" was used?
  I didn't use it when conditional rendering was in <PageMain>
  When I move conditional rendering here some errors occures and "if" turned out to be solution...
  */
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
    }

    //_____
    // mouseTracker(mouse);
    // console.log('useFrame / mouse.x', mouse.x);
    // console.log('useFrame / mouse.y', mouse.y);
  });

  //_____Tests Section
  //   const { mouse } = useThree();
  //   useEffect(() => {
  //     console.log('useEffect / mouse', mouse);
  //   }, [mouse]);

  const mouseTracker = mouse => {
    let mouseX = mouse.x;
    let mouseY = mouse.y;
    console.log('mouseTracker / mouseX', mouseX);
    console.log('mouseTracker / mouseY', mouseY);
  };

  //_____DataTexture Section

  const dataTexture = useMemo(() => {
    const width = 391 * 0.2;
    const height = 512 * 0.2;
    //
    // const width = 32;
    // const height = 32;
    const size = width * height;

    const data = new Float32Array(3 * size);

    for (let i = 0; i < size; i++) {
      const randomColor = Math.random();
      const stride = i * 3;
      data[stride] = randomColor;
      data[stride + 1] = randomColor;
      data[stride + 2] = randomColor;
    }

    const dataTexture = new THREE.DataTexture(
      data,
      width,
      height,
      THREE.RGBFormat,
      THREE.FloatType
    );

    dataTexture.magFilter = dataTexture.minFilter = THREE.NearestFilter;

    return dataTexture;
  }, []);

  return (
    <mesh ref={mesh} {...meshProps}>
      <planeGeometry {...planeArgs} />
      <pixelatedRafaelShaderMaterial
        {...materialProps}
        ref={shaderMaterial}
        attach="material"
        // blending={THREE.MultiplyBlending}
        // ref={shaderMaterial}
        uColor={'hotpink'}
        uTexture={loadedImage}
        uDataTexture={dataTexture}

        // uTexture={image}
      />
    </mesh>
  );
};

export default PixelatedRafael;

/* <Suspense fallback={null}>
              <PixelatedRafael
                meshProps={{ scale: 0.8 }}
                planeArgs={{ args: [1, 1.3, 1, 1] }}
              />
      </Suspense> */
