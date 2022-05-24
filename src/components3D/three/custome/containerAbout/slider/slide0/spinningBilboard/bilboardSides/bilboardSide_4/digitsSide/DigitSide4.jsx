import React from 'react';
/*
Components
*/
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import DigitsSide4Canvas from './DigitsSide4Canvas';
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
      <DigitsSide4Canvas />
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
