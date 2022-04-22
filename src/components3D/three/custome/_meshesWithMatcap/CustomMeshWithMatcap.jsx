import React, { useMemo } from 'react';
import { MeshMatcapMaterial } from 'three';
/*
useMatcapTexture Staff
*/
import { useMatcapTexture } from '@react-three/drei';

/*
--------------------------------------------------------------------------
*/
const CustomMeshWithMatcap = props => {
  /*
  Material Section
  */
  const [matcapTexture] = useMatcapTexture(
    '434240_D3D3CF_898784_A4A49F', //silver-like
    // '2A2A2A_DBDBDB_6A6A6A_949494', //grey, high-gloss, !
    1024
  );

  const matcapMaterial = useMemo(() => {
    const matcapMaterial = new MeshMatcapMaterial({
      matcap: matcapTexture,
    });
    return matcapMaterial;
  }, [matcapTexture]);

  /*
  JSX
  */
  return (
    <mesh {...props.meshProps} material={matcapMaterial}>
      {props.children}
    </mesh>
  );
};

export default CustomMeshWithMatcap;
