import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import BasicUseMatcapTexture from '../../../matcapMaterials/BasicUseMatcapTexture';
/*
Basic Data
*/
import { noteMeshProps } from './musicNoteData';

/*
External function
*/
// function NotesModel() {
//   const { nodes } = useGLTF('/assets/glTF/musicNoteDraco.glb');
//   return <primitive object={nodes.path830.geometry} />;
// }

/*
----------------------------------------------------------------------
*/
const MusicNote = () => {
  /*
  References
  */
  const group = useRef();

  const { nodes } = useGLTF('/assets/glTF/musicNoteDraco.glb');

  return (
    // <group ref={group} dispose={null}>
    <mesh
      ref={group}
      dispose={null}
      geometry={nodes.path830.geometry}
      {...noteMeshProps}
    >
      <BasicUseMatcapTexture textureIndex={9} />
    </mesh>
    // </group>
  );
};

export default MusicNote;
