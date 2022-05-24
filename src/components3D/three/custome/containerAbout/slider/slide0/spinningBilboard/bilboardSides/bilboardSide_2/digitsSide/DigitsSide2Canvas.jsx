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
const DigitsSide2Canvas = () => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [
    bilboardSide2Data.digitsSideProps.canvasProps.image,
  ]);
  /*
  JSX
  */
  return (
    <mesh {...bilboardSide2Data.digitsSideProps.canvasProps.meshProps}>
      <PlaneForCanvas
        format={bilboardSide2Data.digitsSideProps.canvasProps.format}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default DigitsSide2Canvas;
