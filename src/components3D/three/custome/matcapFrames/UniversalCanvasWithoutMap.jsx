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
  sizeFactor,
} from '../matcapFrames/UniversalFramesFormats';

/*
----------------------------------------------------------------------------
*/

const UniversalCanvasWithoutMap = ({ bgColor, banner, isDoubleSide }) => {
  /*
  JSX
  */
  return (
    // <>
    //   <A11y role="image" description="77digits logo">
    <mesh>
      <planeGeometry
        args={[
          banner
            ? bannerWidthSize + sizeFactor
            : portraitWidthSize + sizeFactor,
          banner
            ? bannerHeightSize + sizeFactor
            : portraitHeightSize + sizeFactor,
          1,
          1,
        ]}
      />
      <meshBasicMaterial
        color={bgColor || 0x000000}
        /*
        in case "canvas" should be visible from both side pass this boolean; used in: <SpinningBoxSide> because the side is pivotal
        */
        side={isDoubleSide ? THREE.DoubleSide : THREE.FrontSide}
      />
    </mesh>
    //   </A11y>
    // </>
  );
};

export default UniversalCanvasWithoutMap;
