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
const DigitsSide4Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide4Data.digitsSideProps.canvasProps.image,
  ]);
  /*
  JSX
  */
  return (
    <mesh {...bilboardSide4Data.digitsSideProps.canvasProps.meshProps}>
      <PlaneForCanvas
        format={bilboardSide4Data.digitsSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default DigitsSide4Canvas;
