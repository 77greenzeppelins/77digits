import React from 'react';
/*
Components
*/
import ExtrudedObject from '../ExtrudedObject';
import BasicUseMatcapTexture from '../../matcapMaterials/BasicUseMatcapTexture';
/*
Basic Data
*/
import { logoCoordinates, logoExtrudeSettings } from './logoData';

const Logo = ({ meshProps, materialProps }) => {
  return (
    <>
      <ExtrudedObject
        meshProps={{ ...meshProps }}
        materialProps={{ ...materialProps }}
        customeMaterial={<BasicUseMatcapTexture />}
        pointsCoordinatesArray={logoCoordinates}
        extrudeSettings={logoExtrudeSettings}
      />
    </>
  );
};

export default Logo;
