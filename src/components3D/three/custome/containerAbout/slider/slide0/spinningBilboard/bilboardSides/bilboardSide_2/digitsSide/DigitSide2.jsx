import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
/*
Basic Data
*/
import { bilboardSide2Data } from '../bilboardSide_2_Data';

/*
----------------------------------------------------------------------------
*/
const DigitSide2 = () => {
  /*
  JSX
  */
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide2Data.digitsSideProps.canvasProps.meshProps}
        format={bilboardSide2Data.digitsSideProps.canvasProps.format}
        image={bilboardSide2Data.digitsSideProps.canvasProps.image}
      />
      <DreiText
        textConfig={bilboardSide2Data.digitsSideProps.textConfigHeader}
      />
    </>
  );
};

export default DigitSide2;
