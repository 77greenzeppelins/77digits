import React from 'react';
import { extend } from '@react-three/fiber';
/*
Spring Staff
*/
import { a, useSpring } from '@react-spring/three';
/*
Shader Material Staff
*/
import { CameraOverlayShaderMaterial } from './CameraOverlayShaderMaterial';
extend({ CameraOverlayShaderMaterial });

const CameraOverlay = ({ meshProps, planeArgs, materialProps }) => {
  return (
    <mesh {...meshProps}>
      <planeGeometry args={[3, 3, 1, 1]} {...planeArgs} />
      <a.meshBasicMaterial
        // color={[0, 0, 0]}
        // transparent={false}
        {...materialProps}
      />
      {/* <cameraOverlayShaderMaterial
        // wireframe
        uAlpha={0.5}
        transparent={true}
      /> */}
    </mesh>
  );
};

export default CameraOverlay;
