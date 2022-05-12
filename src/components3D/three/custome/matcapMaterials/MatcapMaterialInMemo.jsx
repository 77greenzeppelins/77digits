import { useMemo } from 'react';
import { MeshMatcapMaterial } from 'three';
// import { MeshBasicMaterial } from 'three';
/*
 useMatcapTexture Staff
 */
import { useMatcapTexture } from '@react-three/drei';

/*
---------------------------------------------------------------------
*/
const MatcapMaterialInMemo = () => {
  /*
  MatcapMaterial Section
  */
  const [matcapTexture] = useMatcapTexture(
    '434240_D3D3CF_898784_A4A49F', //silver-like
    1024
  );

  const matcapMaterial = useMemo(
    () => new MeshMatcapMaterial({ matcap: matcapTexture }),
    [matcapTexture]
  );
  // const matcapMaterial = useMemo(() => {
  //   const matcapMaterial = new MeshMatcapMaterial({
  //     matcap: matcapTexture,
  //   });
  //   return matcapMaterial;
  // }, [matcapTexture]);
  /*
  Return Section
  */
  return matcapMaterial;
};

export default MatcapMaterialInMemo;

/*
.....from Paul: https://docs.pmnd.rs/react-three-fiber/advanced/pitfalls
const geom = useMemo(() => new BoxBufferGeometry(), [])
const mat = useMemo(() => new MeshBasicMaterial(), [])
return items.map(i => <mesh geometry={geom} material={mat} ...
*/
