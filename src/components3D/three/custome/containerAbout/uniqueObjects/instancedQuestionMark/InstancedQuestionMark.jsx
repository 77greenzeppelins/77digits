import React from 'react';
/*
Components
*/
import AnimatedInstancedMesh from '../../../instancedMeshes/AnimatedInstancedMesh';
import BasicTextGeometry from '../../../text3D/BasicTextGeometry';
import BasicUseMatcapTexture from '../../../matcapMaterials/BasicUseMatcapTexture';
/*
Basic Data
*/
import {
  instancedQuestionMarkData,
  basicTextGeometryDate,
} from './instancedQuestionMarkData';

/*
----------------------------------------------------------------------------
*/
const InstancedQuestionMark = () => {
  /*
  JSX
  */
  return (
    <AnimatedInstancedMesh
      geometry={<BasicTextGeometry {...basicTextGeometryDate} />}
      material={<BasicUseMatcapTexture />}
      layoutData={instancedQuestionMarkData}
    />
  );
};

export default InstancedQuestionMark;

/*
<BasicInstancedMesh geometry={} material={} layoutData={instancedMusicNotesData}
*/
