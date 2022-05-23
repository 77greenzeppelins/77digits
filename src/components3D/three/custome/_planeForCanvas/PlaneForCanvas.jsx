import React from 'react';

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
---------------------------------------------------------------------------
*/
const PlaneForCanvas = ({ format }) => {
  /*
    Manipulation for planeGeometry's args
    */
  // let format = banner || portrait || customeFormat;
  let planeWidth;
  let planeHeight;

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
  return <planeGeometry args={[planeWidth, planeHeight, 1, 1]} />;
};

export default PlaneForCanvas;
