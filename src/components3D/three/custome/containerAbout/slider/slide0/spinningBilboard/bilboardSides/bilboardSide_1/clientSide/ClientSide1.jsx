import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import Stars from './uniqueObject/Stars';
/*
Basic Data
*/
import { bilboardSide1Data } from '../bilboardSide_1_Data';

/*
-----------------------------------------------------------
*/
const ClientSide1 = () => {
  /*
  JSX
  */
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide1Data.clientSideProps.canvasProps.meshProps}
        format={bilboardSide1Data.clientSideProps.canvasProps.format}
        image={bilboardSide1Data.clientSideProps.canvasProps.image}
      />
      <Stars />
      <DreiText
        textConfig={bilboardSide1Data.clientSideProps.textConfigHeader}
      />
    </>
  );
};

export default ClientSide1;
