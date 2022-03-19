import React from 'react';
import * as THREE from 'three';
/*
Basic Data
*/
import {
  bannerWidthSize,
  bannerHeightSize,
  portraitWidthSize,
  portraitHeightSize,
  columnWidthSize,
  columnHeightSize,
  sizeFactor,
} from '../matcapFrames/UniversalFramesFormats';

/*
----------------------------------------------------------------------------
*/

const UniversalCanvasWithoutMap = ({
  bgColor,
  banner,
  portrait,
  customeFormat,
  format,
  isDoubleSide,
}) => {
  /*
    Manipulation for planeGeometry's args
    */
  // let format = banner || portrait || customeFormat;
  let planeWidth = null;
  let planeHeight = null;

  switch (format) {
    case 'banner':
      planeWidth = bannerWidthSize + sizeFactor;
      planeHeight = bannerHeightSize + sizeFactor;
      break;
    case 'portrait':
      planeWidth = portraitWidthSize + sizeFactor;
      planeHeight = portraitHeightSize + sizeFactor;
      break;
    case 'column':
      planeWidth = columnWidthSize + sizeFactor;
      planeHeight = columnHeightSize + sizeFactor;
      break;
    default:
      // console.log('UniversalCanvas / format = default');
      planeWidth = 0;
      planeHeight = 0;
  }
  /*
  JSX
  */
  return (
    <mesh>
      <planeGeometry args={[planeWidth, planeHeight, 1, 1]} />
      <meshBasicMaterial
        color={bgColor || 0x000000}
        // side={isDoubleSide ? THREE.DoubleSide : THREE.FrontSide}
      />
    </mesh>
  );
};

export default UniversalCanvasWithoutMap;
