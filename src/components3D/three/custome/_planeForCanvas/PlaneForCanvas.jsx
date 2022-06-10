import React from 'react';
import {
  portraitWidthSize,
  portraitHeightSize,
  verticalFormatWidthSize,
  verticalFormatHeightSize,
  sizeFactor,
} from '../../../../data/globalData';

/*
---------------------------------------------------------------------------
*/
const PlaneForCanvas = ({ format, argsWidth, argsHeight }) => {
  /*
  Manipulation for planeGeometry's args
  */
  let planeWidth;
  let planeHeight;

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
    <planeGeometry
      args={[argsWidth || planeWidth, argsHeight || planeHeight, 1, 1]}
    />
  );
};

export default PlaneForCanvas;
/*
used in <ImageCanvas>, <ImageAsFlag>
*/
