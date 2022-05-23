import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
/*
Components
*/
import BasicUseMatcapTexture from '../../matcapMaterials/BasicUseMatcapTexture';

/*
-------------------------------------------------------------------------
*/
const Frame_1 = ({ meshProps }) => {
  /*
  References
  */
  const group = useRef();
  /*
  useGLTF Section
  */
  const { nodes } = useGLTF('/assets/glTF/frame_4_draco.glb');

  /*
 JSX
 */
  return (
    <mesh
      ref={group}
      dispose={null}
      geometry={nodes.Plane001.geometry}
      {...meshProps}
      rotation={[Math.PI / 2, 0, 0]}
      //   {...frameMeshProps}
    >
      <BasicUseMatcapTexture textureIndex={1} />
    </mesh>
  );
};

export default Frame_1;
