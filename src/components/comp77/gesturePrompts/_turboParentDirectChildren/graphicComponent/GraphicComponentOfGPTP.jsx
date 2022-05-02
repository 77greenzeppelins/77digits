import React from 'react';
/*

*/
import { animated } from '@react-spring/web';

/*
-----------------------------------------------------------------------
*/
const GraphicComponentOfGPTP = ({ spring, graphicComponentData }) => {
  // useEffect(() => {
  //   console.log('graphicComponentData', graphicComponentData);
  // });
  /*
  JSX
  */
  return (
    <div
      className="graphic-component-of-GPTP__holder"
      style={
        graphicComponentData && {
          ...graphicComponentData.classHolderCSS,
        }
      }
    >
      <animated.div
        className="graphic-component-of-GPTP__line"
        style={spring}
      />
    </div>
  );
};

export default GraphicComponentOfGPTP;
