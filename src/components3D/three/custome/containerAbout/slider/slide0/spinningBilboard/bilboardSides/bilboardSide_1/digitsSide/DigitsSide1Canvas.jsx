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
const DigitsSide1Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide1Data.digitsSideProps.canvasProps.image,
  ]);
  /*
  JSX
  */
  return (
    <mesh {...bilboardSide1Data.digitsSideProps.canvasProps.meshProps}>
      <PlaneForCanvas
        format={bilboardSide1Data.digitsSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default DigitsSide1Canvas;
