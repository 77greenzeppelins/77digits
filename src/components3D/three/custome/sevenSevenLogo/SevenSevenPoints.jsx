import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { extend, useFrame, useLoader } from '@react-three/fiber';
//_____Shaders Staff
import { SevenSevenPointsShaderMaterial } from './SevenSevenPointsShaderMaterial';
extend({ SevenSevenPointsShaderMaterial });

const SevenSevenPoints = ({ meshProps }) => {
  //_____
  const mesh = useRef();

  //_____Image Loader
  const loadedLogo = useLoader(
    THREE.TextureLoader,
    './assets/textures/logo/70_50.png' //logo in public folder not src
  );
  //   const loadedLogo = useLoader(
  //   THREE.TextureLoader,
  //   './assets/textures/aben.jpg' //logo in public folder not src
  // );

  //_____

  const frameSize = 100;
  // const pointsNumber = columnsRowsNumber * columnsRowsNumber; // 512*512=250.000!!!
  // const half = columnsRowsNumber / 2;

  //_____
  const [positions, coordinates] = useMemo(() => {
    const positions = [];
    const coordinates = [];

    for (let i = 0; i < frameSize; i++) {
      const posX = (i - frameSize / 2)/frameSize;
      // const posX = (i - frameSize) / 2;

      for (let j = 0; j < frameSize; j++) {
        const posY = (j - frameSize / 2)/frameSize;
        // const posY = (j - frameSize) / 2;

        positions.push(posX , posY , 0);
        // positions.push(posX*0.01 , posY*0.01 , 0);

        coordinates.push(i, j, 0);
      }
    }

    return [new Float32Array(positions), new Float32Array(coordinates)];
  }, []);

  //_____
  useEffect(() => {
    console.log('<SevenSevenPoints>/positions:', positions);
    console.log('<SevenSevenPoints>/coordinates:', coordinates);

  }, [positions]);
  /*
  JSX
  */
  return (
    <points ref={mesh} {...meshProps}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'aCoordinates']}
          array={coordinates}
          count={coordinates.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <sevenSevenPointsShaderMaterial
        transparent={true}
        depthTest={false}
        // depthWrite={false}
        uframeSize={frameSize}
        uTexture={loadedLogo}
        uPixelRatio={Math.min(window.devicePixelRatio, 2)}
      />
    </points>
  );
};

export default SevenSevenPoints;

/*
_____check  

<points ref={mesh} {...meshProps}>
      <planeGeometry args={[0.2, 0.2, 2, 2]} />
      <pointsMaterial side={THREE.DoubleSide} size={0.2} />
    </points>

*/
