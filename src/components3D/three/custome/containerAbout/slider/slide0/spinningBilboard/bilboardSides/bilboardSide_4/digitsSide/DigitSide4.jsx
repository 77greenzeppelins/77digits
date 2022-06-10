import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';

/*
Basic Data
*/
import { bilboardSide4Data } from '../bilboardSide_4_Data';

/*
----------------------------------------------------------------------------
*/
const DigitSide4 = () => {
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide4Data.digitsSideProps.canvasProps.meshProps}
        format={bilboardSide4Data.digitsSideProps.canvasProps.format}
        image={bilboardSide4Data.digitsSideProps.canvasProps.image}
      />
      <DreiText
        textConfig={bilboardSide4Data.digitsSideProps.textConfigHeader}
      />
      {bilboardSide4Data.digitsSideProps.paragraphs.map((paragraph, i) => (
        <DreiText key={i} textConfig={paragraph.textConfig} />
      ))}
    </>
  );
};

export default DigitSide4;
