import React from 'react';
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

const UniversalCanvasWithoutMap = ({ bgColor, banner }) => {
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
      <meshBasicMaterial color={bgColor || 0xffffff} opacity={true} />
    </mesh>
    //   </A11y>
    // </>
  );
};

export default UniversalCanvasWithoutMap;
