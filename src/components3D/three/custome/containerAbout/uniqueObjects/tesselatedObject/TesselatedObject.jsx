import React from 'react';
import * as THREE from 'three';
/*
Components
*/
import TesselateModifierCreator from '../../../../native/tesselated/TesselateModifierCreator';
import BasicUseMatcapTexture from '../../../matcapMaterials/BasicUseMatcapTexture';
/*
----------------------------------------------------------------------------
*/
const TesselatedObject = () => {
  return (
    <TesselateModifierCreator
      meshProps={{
        position: [-0.1, -0.2, 0.1],
        rotation: [0, 0, 0.25 * Math.PI],
        scale: [0.2, 0.2, 0.2],
        name: 'TesselateModifierCreator',
      }}
      geometry={new THREE.BoxGeometry(0.5, 0.5, 0.5)}
      customeMaterial={<BasicUseMatcapTexture />}
    />
  );
};

export default TesselatedObject;
