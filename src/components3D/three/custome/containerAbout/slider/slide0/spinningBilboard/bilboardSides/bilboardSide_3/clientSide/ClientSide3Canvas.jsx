import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
/*
Components
*/
import PlaneForCanvas from '../../../../../../../_planeForCanvas/PlaneForCanvas';
/*
Basic Data
*/
import { bilboardSide3Data } from '../bilboardSide_3_Data';
/*
---------------------------------------------------------------------
*/
const ClientSide3Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide3Data.clientSideProps.canvasProps.image,
  ]);
  // console.log(
  //   'bilboardSide2Data',
  //   bilboardSide2Data.clientSideProps.canvasProps.format
  // );
  /*
  JSX
  */
  return (
    <mesh>
      <PlaneForCanvas
        format={bilboardSide3Data.clientSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default ClientSide3Canvas;
