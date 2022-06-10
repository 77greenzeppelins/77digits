import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import MedicineDetail from './uniqueObject/MedicineDetail';
/*
Basic Data
*/
import { bilboardSide4Data } from '../bilboardSide_4_Data';

/*
-----------------------------------------------------------
*/
const ClientSide4 = () => {
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide4Data.clientSideProps.canvasProps.meshProps}
        format={bilboardSide4Data.clientSideProps.canvasProps.format}
        image={bilboardSide4Data.clientSideProps.canvasProps.image}
      />
      <MedicineDetail />
      <DreiText
        textConfig={bilboardSide4Data.clientSideProps.textConfigHeader}
      />
      {bilboardSide4Data.clientSideProps.paragraphs.map((paragraph, i) => (
        <DreiText key={i} textConfig={paragraph.textConfig} />
      ))}
    </>
  );
};

export default ClientSide4;
