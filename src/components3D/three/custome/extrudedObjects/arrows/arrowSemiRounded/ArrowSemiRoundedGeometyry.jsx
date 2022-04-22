import React from 'react';
import { Shape } from 'three';
/*
Basic Data
*/
import { arrowExtrudeSettings } from '../arrowsData';

/*
--------------------------------------------------------------------------
*/
const ArrowSemiRoundedGeometyry = () => {
  /*
  Shape creator; requires array of points
  */
  const shape = new Shape();
  //   shape.moveTo(0.3, -0.4);
  //   shape.lineTo(0.3, 0.4);
  //   shape.absarc(0.4, 0.4, 0.1, Math.PI, 0, true);
  //   shape.lineTo(0.5, -0.4);
  //   shape.absarc(0.4, -0.4, 0.1, 2 * Math.PI, Math.PI, true);
  shape.moveTo(40, 40);
  shape.lineTo(40, 160);
  shape.absarc(60, 160, 20, Math.PI, 0, true);
  shape.lineTo(80, 40);
  shape.absarc(60, 40, 20, 2 * Math.PI, Math.PI, true);

  /*
  JSX
  */
  return <extrudeGeometry args={[shape, arrowExtrudeSettings]} />;
};

export default ArrowSemiRoundedGeometyry;
