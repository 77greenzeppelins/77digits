import React from 'react';
// import * as THREE from 'three';
import BasicUseMatcapMaterial from '../../../matcapMaterials/BasicUseMatcapTexture';
/*
Basic Data
*/
import { meshData, geometryData, materialData } from './techSphereData';

const TechSphere = () => {
  return (
    <mesh {...meshData}>
      <sphereGeometry {...geometryData} />
      {/* <meshBasicMaterial {...materialData} /> */}
      <BasicUseMatcapMaterial />
    </mesh>
  );
};

export default TechSphere;
