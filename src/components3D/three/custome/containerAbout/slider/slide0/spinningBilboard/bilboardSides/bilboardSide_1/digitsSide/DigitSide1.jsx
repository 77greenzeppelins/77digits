import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
/*
Basic Data
*/
import { bilboardSide1Data } from '../bilboardSide_1_Data';

/*
----------------------------------------------------------------------------
*/
const DigitSide1 = () => {
  /*
  JSX
  */
  return (
    <ImageCanvas
      meshProps={bilboardSide1Data.digitsSideProps.canvasProps.meshProps}
      format={bilboardSide1Data.digitsSideProps.canvasProps.format}
      image={bilboardSide1Data.digitsSideProps.canvasProps.image}
    />
  );
};

export default DigitSide1;
