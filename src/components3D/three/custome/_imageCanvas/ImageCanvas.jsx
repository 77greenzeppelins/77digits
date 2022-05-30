import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

import {
  bannerWidthSize,
  bannerHeightSize,
  portraitWidthSize,
  portraitHeightSize,
  columnWidthSize,
  columnHeightSize,
  verticalFormatWidthSize,
  verticalFormatHeightSize,
  sizeFactor,
} from '../../../../data/globalData';
/*
  Manipulation for planeGeometry's args
  */
let planeWidth;
let planeHeight;

/*
---------------------------------------------------------------------------
*/

const ImageCanvas = ({ meshProps, format, image }) => {
  /*
  Image Loader
  */
  const [map] = useLoader(THREE.TextureLoader, [image]);

  /*
  switch among formats
  */
  switch (format) {
    case 'portrait':
      planeWidth = portraitWidthSize + sizeFactor;
      planeHeight = portraitHeightSize + sizeFactor;
      break;
    case 'verticalFormat':
      planeWidth = verticalFormatWidthSize + sizeFactor;
      planeHeight = verticalFormatHeightSize + sizeFactor;
      break;
    default:
      planeWidth = 0;
      planeHeight = 0;
  }
  /*
  JSX
  */
  return (
    <mesh {...meshProps}>
      <planeGeometry args={[planeWidth, planeHeight, 1, 1]} />
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
