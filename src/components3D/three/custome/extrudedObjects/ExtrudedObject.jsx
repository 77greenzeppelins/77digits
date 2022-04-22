import React, { useMemo } from 'react';
import { Shape, MeshMatcapMaterial } from 'three';
/*
 useMatcapTexture Staff
 */
import { useMatcapTexture } from '@react-three/drei';
/*
Memoised Material
*/
// import MatcapMaterialInMemo from '../matcapMaterials/MatcapMaterialInMemo';

/*
-------------------------------------------------------------------------
*/
const ExtrudedObject = ({
  meshProps,
  materialProps,
  customeShape,
  customeMaterial,
  pointsCoordinatesArray,
  extrudeSettings,
}) => {
  /*
  Shape creator; requires array of points
  */
  const shape = new Shape(pointsCoordinatesArray);
  /*
  ...
  */
  // useEffect(() => {
  //   console.log('ExtrudedObject / MatcapMaterialInMemo:', MatcapMaterialInMemo);
  // }, []);
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
    <mesh
      {...meshProps}
      // material={MatcapMaterialInMemo}
      material={matcapMaterial}
    >
      <extrudeGeometry
        args={[pointsCoordinatesArray ? shape : customeShape, extrudeSettings]}
      />
      {/* {customeMaterial || <meshBasicMaterial {...materialProps} />} */}
    </mesh>
  );
};

export default ExtrudedObject;
