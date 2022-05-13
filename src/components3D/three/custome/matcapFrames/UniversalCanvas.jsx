import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
/*
Basic Data
neccesary for calculations of planeGeometry's args
*/
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
} from '../matcapFrames/UniversalFramesFormats';

/*
----------------------------------------------------------------------------
*/

const UniversalCanvas = React.memo(
  ({
    meshProps,
    format,
    image,
    bgColor,
    // isDoubleSide,
  }) => {
    /*
    Image Loader
    */
    const [map] = useLoader(THREE.TextureLoader, [image]);
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
        <meshBasicMaterial
          color={bgColor || 0xffffff}
          map={map}
          // opacity={true}
          /*
          if "THREE.DoubleSide if true" image is visible on both sides of "plane"; if (THREE.FrontSide is true) "backSide" is transparent and "plane" is transparent;
          */
          // side={isDoubleSide ? THREE.DoubleSide : THREE.FrontSide}
        />
      </mesh>
    );
  }
);

export default UniversalCanvas;

// useEffect(() => {
//   if (banner) {
//     console.log('UniversalCanvas / format = banner');
//   }
//   if (portrait) {
//     console.log('UniversalCanvas / format = portrait');
//   }
//   if (customeFormat) {
//     console.log('UniversalCanvas / format = customeFormat');
//   }
// }, [banner, portrait, customeFormat]);
