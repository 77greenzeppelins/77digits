import React from 'react';
// import { TransformControls } from '@react-three/drei';
/*
Components
*/
import LogoExtrudedGeometry from './logoExtrudedGeometry/LogoExtrudedGeometry';
import BasicUseMatcapTexture from '../matcapMaterials/BasicUseMatcapTexture';

const Logo = ({ meshProps }) => {
  return (
    // <TransformControls mode="translate">
    <mesh {...meshProps}>
      <LogoExtrudedGeometry />
      <BasicUseMatcapTexture />
    </mesh>
    // </TransformControls>
  );
};

export default Logo;
