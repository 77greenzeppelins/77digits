import React from 'react';
/*
Components
*/
import LogoExtrudedGeometry from './logoExtrudedGeometry/LogoExtrudedGeometry';
import BasicUseMatcapTexture from '../matcapMaterials/BasicUseMatcapTexture';

const Logo = ({ meshProps }) => {
  return (
    <mesh {...meshProps}>
      <LogoExtrudedGeometry />
      <BasicUseMatcapTexture />
    </mesh>
  );
};

export default Logo;
