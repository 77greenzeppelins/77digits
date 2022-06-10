import React from 'react';
import * as THREE from 'three';
// import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
/*
Components
*/
import PlaneForCanvas from '../_planeForCanvas/PlaneForCanvas';

/*
---------------------------------------------------------------------------
*/

const ImageCanvas = ({ meshProps, format, argsWidth, argsHeight, image }) => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [image]);
  // const [map] = useLoader(new TextureLoader(), [image]); //???

  /*
  JSX
  */
  return (
    <mesh {...meshProps}>
      <PlaneForCanvas
        format={format}
        argsWidth={argsWidth}
        argsHeight={argsHeight}
      />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

export default ImageCanvas;

//_____________________________
// opacity={true}
/*
if "THREE.DoubleSide if true" image is visible on both sides of "plane"; if (THREE.FrontSide is true) "backSide" is transparent and "plane" is transparent;
*/
// side={isDoubleSide ? THREE.DoubleSide : THREE.FrontSide}

// case 'banner':
//   planeWidth = bannerWidthSize + sizeFactor;
//   planeHeight = bannerHeightSize + sizeFactor;
//   break;
// case 'column':
//   planeWidth = columnWidthSize + sizeFactor;
//   planeHeight = columnHeightSize + sizeFactor;
//   break;
