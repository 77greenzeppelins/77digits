import React from 'react';
/*
Components
*/
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import ClientSide4Canvas from './ClientSide4Canvas';
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
      <ClientSide4Canvas />
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
