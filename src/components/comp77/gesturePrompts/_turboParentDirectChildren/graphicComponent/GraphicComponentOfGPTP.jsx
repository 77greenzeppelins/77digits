import React from 'react';
/*

*/
import { animated } from '@react-spring/web';

/*
-----------------------------------------------------------------------
*/
const GraphicComponentOfGPTP = ({ spring }) => {
  return (
    <div className="graphic-component-of-GPTP__holder">
      <animated.div
        className="graphic-component-of-GPTP__line"
        style={spring}
      />
    </div>
  );
};

export default GraphicComponentOfGPTP;
