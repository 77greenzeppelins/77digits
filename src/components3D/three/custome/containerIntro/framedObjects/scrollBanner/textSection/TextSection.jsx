import React from 'react';
/*
Components
*/
import FrontText from './texts/FrontText';
import LeftText from './texts/LeftText';
import RightText from './texts/RightText';

/*
-------------------------------------------------------------------------
*/
const TextSection = () => {
  return (
    <group>
      <FrontText />
      <LeftText />
      <RightText />
    </group>
  );
};

export default TextSection;
