import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
/*
Basic Data
*/
import { bilboardSide3Data } from '../bilboardSide_3_Data';

/*
-----------------------------------------------------------
*/
const ClientSide3 = () => {
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide3Data.clientSideProps.canvasProps.meshProps}
        format={bilboardSide3Data.clientSideProps.canvasProps.format}
        image={bilboardSide3Data.clientSideProps.canvasProps.image}
      />
      <DreiText
        textConfig={bilboardSide3Data.clientSideProps.textConfigHeader}
      />
      {bilboardSide3Data.clientSideProps.paragraphs.map((paragraph, i) => (
        <DreiText key={i} textConfig={paragraph.textConfig} />
      ))}
    </>
  );
};

export default ClientSide3;
