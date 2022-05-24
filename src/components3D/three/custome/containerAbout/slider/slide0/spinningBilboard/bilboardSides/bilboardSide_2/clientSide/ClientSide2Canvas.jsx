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
import { bilboardSide2Data } from '../bilboardSide_2_Data';
/*
---------------------------------------------------------------------
*/
const ClientSide2Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide2Data.clientSideProps.canvasProps.image,
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
        format={bilboardSide2Data.clientSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default ClientSide2Canvas;
