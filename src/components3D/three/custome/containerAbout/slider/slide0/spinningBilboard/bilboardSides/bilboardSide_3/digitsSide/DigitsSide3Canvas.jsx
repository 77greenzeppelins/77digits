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
const DigitsSide3Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide3Data.digitsSideProps.canvasProps.image,
  ]);
  /*
  JSX
  */
  return (
    <mesh {...bilboardSide3Data.digitsSideProps.canvasProps.meshProps}>
      <PlaneForCanvas
        format={bilboardSide3Data.digitsSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default DigitsSide3Canvas;