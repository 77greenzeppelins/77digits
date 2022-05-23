import React from 'react';
/*
Components
*/
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import ClientSide1Canvas from './ClientSide1Canvas';
/*
Basic Data
*/
import { bilboardSide1Data } from '../bilboardSide_1_Data';

/*
-----------------------------------------------------------
*/
const ClientSide1 = () => {
  return (
    <>
      <ClientSide1Canvas />
      <DreiText
        textConfig={bilboardSide1Data.clientSideProps.textConfigHeader}
      />
    </>
  );
};

export default ClientSide1;
