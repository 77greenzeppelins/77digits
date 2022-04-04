import React from 'react';
// import * as THREE from 'three';
/*
Basic Data
*/
import { meshData, geometryData, materialData } from './techSphere';

const TechSphere = () => {
  return (
    <mesh {...meshData}>
      <sphereGeometry {...geometryData} />
      <meshBasicMaterial {...materialData} />
    </mesh>
  );
};

export default TechSphere;
