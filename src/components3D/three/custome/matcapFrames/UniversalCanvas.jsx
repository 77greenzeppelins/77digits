import React from 'react';
import * as THREE from 'three';
/*
Drai Staff
*/
import { useLoader } from '@react-three/fiber';
/*
Accesibility staff
*/
// import { A11y } from '@react-three/a11y';
/*
Basic Data
*/
import {
  bannerWidthSize,
  bannerHeightSize,
  portraitWidthSize,
  portraitHeightSize,
  sizeFactor,
} from '../matcapFrames/UniversalFramesFormats';

/*
----------------------------------------------------------------------------
*/
const UniversalCanvas = ({ image, bgColor, banner }) => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [image]);

  /*
  JSX
  */
  return (
    // <>
    // <A11y role="image" description="77digits logo">
    <mesh>
      <planeGeometry
        args={[
          banner
            ? bannerWidthSize + sizeFactor
            : portraitWidthSize + sizeFactor,
          banner
            ? bannerHeightSize + sizeFactor
            : portraitHeightSize + sizeFactor,
          1,
          1,
        ]}
      />
      <meshBasicMaterial color={bgColor || 0xffffff} map={map} opacity={true} />
    </mesh>
    // </A11y>
    // </>
  );
};

export default UniversalCanvas;
