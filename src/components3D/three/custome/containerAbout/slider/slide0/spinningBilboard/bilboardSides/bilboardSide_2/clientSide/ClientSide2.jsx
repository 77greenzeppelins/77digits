import React from 'react';
/*
Components
*/
import ImageCanvas from '../../../../../../../_imageCanvas/ImageCanvas';
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import TechPanel from './uniqueObject/TechPanel';
import TestingPlane from '../../../../../../../containerIntro/_testingPlane/TestingPlane';
/*
Basic Data
*/
import { bilboardSide2Data } from '../bilboardSide_2_Data';

/*
-----------------------------------------------------------
*/
const ClientSide2 = () => {
  return (
    <>
      <ImageCanvas
        meshProps={bilboardSide2Data.clientSideProps.canvasProps.meshProps}
        format={bilboardSide2Data.clientSideProps.canvasProps.format}
        image={bilboardSide2Data.clientSideProps.canvasProps.image}
      />
      <DreiText
        textConfig={bilboardSide2Data.clientSideProps.textConfigHeader}
      />
      <DreiText
        textConfig={bilboardSide2Data.clientSideProps.textConfigHeader}
      />
      {bilboardSide2Data.clientSideProps.paragraphs.map((paragraph, i) => (
        <DreiText key={i} textConfig={paragraph.textConfig} />
      ))}
      <TechPanel />
      <TestingPlane
        meshProps={{ scale: [1, 1, 1], position: [0.18, -0.25, 0.01] }}
      />
    </>
  );
};

export default ClientSide2;
