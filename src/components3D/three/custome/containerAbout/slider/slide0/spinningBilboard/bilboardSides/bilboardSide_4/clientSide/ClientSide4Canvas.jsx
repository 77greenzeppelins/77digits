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
import { bilboardSide4Data } from '../bilboardSide_4_Data';
/*
---------------------------------------------------------------------
*/
const ClientSide4Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide4Data.clientSideProps.canvasProps.image,
  ]);
  /*
  JSX
  */
  return (
    <mesh>
      <PlaneForCanvas
        format={bilboardSide4Data.clientSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default ClientSide4Canvas;
