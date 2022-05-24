import React from 'react';
/*
Components
*/
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import DigitsSide2Canvas from './DigitsSide2Canvas';
/*
Basic Data
*/
import { bilboardSide2Data } from '../bilboardSide_2_Data';

/*
----------------------------------------------------------------------------
*/
const DigitSide2 = () => {
  return (
    <>
      <DigitsSide2Canvas />
      <DreiText
        textConfig={bilboardSide2Data.digitsSideProps.textConfigHeader}
      />
    </>
  );
};

export default DigitSide2;
