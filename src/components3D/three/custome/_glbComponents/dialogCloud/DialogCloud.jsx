import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
/*
Components
*/
import BasicUseMatcapTexture from '../../matcapMaterials/BasicUseMatcapTexture';

/*
-----------------------------------------------------------------------------
*/
const DialogCloud = ({ meshProps }) => {
  /*
  References
  */
  const group = useRef();
  /*
  useGLTF Section
  */
  const { nodes } = useGLTF('/assets/glTF/dialogCloud_2_draco.glb');

  return (
    <mesh
      ref={group}
      dispose={null}
      geometry={nodes.BezierCircle.geometry}
      {...meshProps}
      // rotation={[Math.PI / 2, 0, 0]}
      //   {...frameMeshProps}
    >
      <BasicUseMatcapTexture textureIndex={1} />
    </mesh>
  );
};

export default DialogCloud;
