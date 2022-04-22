import React from 'react';
// import * as THREE from 'three';
/*
Components
*/
import ExtrudedObject from '../ExtrudedObject';
import BasicUseMatcapTexture from '../../matcapMaterials/BasicUseMatcapTexture';
import MatcapMaterialInMemo from '../../matcapMaterials/MatcapMaterialInMemo';
/*
Basic Data
*/
import { logoCoordinates, logoExtrudeSettings } from './logoData';

const Logo = ({ meshProps, materialProps }) => {
  /*
  Array of points for creating shape  
  */
  // const shape = new THREE.Shape(logoCoordinates);

  return (
    <>
      <ExtrudedObject
        meshProps={{ ...meshProps }}
        materialProps={{ ...materialProps }}
        customeMaterial={<BasicUseMatcapTexture />}
        matcapMaterialInMemo={MatcapMaterialInMemo}
        pointsCoordinatesArray={logoCoordinates}
        extrudeSettings={logoExtrudeSettings}
        // customeShape={shape}
      />
    </>
  );
};

export default Logo;
