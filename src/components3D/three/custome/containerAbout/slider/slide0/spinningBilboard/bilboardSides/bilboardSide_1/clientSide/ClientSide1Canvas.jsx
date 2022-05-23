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
import { bilboardSide1Data } from '../bilboardSide_1_Data';
/*
---------------------------------------------------------------------
*/
const ClientSide1Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide1Data.clientSideProps.canvasProps.image,
  ]);
  /*
  JSX
  */
  return (
    <mesh>
      <PlaneForCanvas
        format={bilboardSide1Data.clientSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default ClientSide1Canvas;
