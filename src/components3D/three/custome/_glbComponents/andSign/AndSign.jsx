import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
/*
Components
*/
import BasicUseMatcapTexture from '../../matcapMaterials/BasicUseMatcapTexture';

/*
-----------------------------------------------------------------------------
*/
const AndSign = ({ meshProps }) => {
  /*
  References
  */
  const group = useRef();
  /*
  useGLTF Section
  */
  const { nodes } = useGLTF('/assets/glTF/and_2_draco.glb');

  return (
    <mesh
      ref={group}
      dispose={null}
      geometry={nodes.Plane.geometry}
      {...meshProps}
      position={[-6, -2, 15]}
      rotation={[Math.PI / 2, 0, Math.PI * 0.2]}
      scale={[-0.12, 1, 0.4]}
    >
      <BasicUseMatcapTexture textureIndex={1} />
    </mesh>
  );
};

export default AndSign;
