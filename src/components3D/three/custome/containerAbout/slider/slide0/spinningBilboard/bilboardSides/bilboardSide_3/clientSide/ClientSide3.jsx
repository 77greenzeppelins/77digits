import React from 'react';
/*
Components
*/
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import ClientSide3Canvas from './ClientSide3Canvas';
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
      <ClientSide3Canvas />
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
