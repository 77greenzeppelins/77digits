import React from 'react';
/*
Components
*/
import DreiText from '../../../../../../../../../drei/text/dreiText/DreiText';
import DigitsSide3Canvas from './DigitsSide3Canvas';
import CircledPath from './uniqueObject/CircledPath';
/*
Basic Data
*/
import { bilboardSide3Data } from '../bilboardSide_3_Data';

/*
----------------------------------------------------------------------------
*/
const DigitSide3 = () => {
  return (
    <>
      <DigitsSide3Canvas />
      <DreiText
        textConfig={bilboardSide3Data.digitsSideProps.textConfigHeader}
      />
      {bilboardSide3Data.digitsSideProps.paragraphs.map((paragraph, i) => (
        <DreiText key={i} textConfig={paragraph.textConfig} />
      ))}
      <CircledPath />
    </>
  );
};

export default DigitSide3;
