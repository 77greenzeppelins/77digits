import React from 'react';
/*
Components
*/
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import ClientSide1Canvas from './ClientSide1Canvas';
import Stars from './uniqueObject/Stars';
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
      <Stars />
      <DreiText
        textConfig={bilboardSide1Data.clientSideProps.textConfigHeader}
      />
    </>
  );
};

export default ClientSide1;
