import React from 'react';
import * as THREE from 'three';
/*
Components
*/
import ExtrudedObject from '../ExtrudedObject';
import BasicUseMatcapTexture from '../../matcapMaterials/BasicUseMatcapTexture';
/*
Basic Data
*/
import { arrowCoordinates, arrowExtrudeSettings } from '../arrowsData';

/*
--------------------------------------------------------------------------
*/
const ArrowSemiRounded = ({ meshProps, materialProps }) => {
  /*
  Shape creator; requires array of points
  */
  const shape = new THREE.Shape();
  shape.moveTo(40, 40);
  shape.lineTo(40, 160);
  shape.absarc(60, 160, 20, Math.PI, 0, true);
  shape.lineTo(80, 40);
  shape.absarc(60, 40, 20, 2 * Math.PI, Math.PI, true);

  /*
   JSX
   */
  return (
    <>
      <ExtrudedObject
        meshProps={{ ...meshProps }}
        materialProps={{ ...materialProps }}
        customeMaterial={<BasicUseMatcapTexture />}
        extrudeSettings={arrowExtrudeSettings}
        customeShape={shape}
      />
    </>
  );
};

export default ArrowSemiRounded;
