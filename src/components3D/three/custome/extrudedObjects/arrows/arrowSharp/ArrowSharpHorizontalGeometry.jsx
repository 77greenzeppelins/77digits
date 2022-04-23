import React from 'react';
import { Shape } from 'three';
/*
Basic Data
*/
import {
  sharpArrowHorizontalCoordinatesData,
  arrowExtrudeSettings,
} from '../arrowsData';

/*
--------------------------------------------------------------------------
*/
const ArrowSharpHorizontalGeometry = () => {
  /*
  Shape creator; requires array of points
  */
  const shape = new Shape(sharpArrowHorizontalCoordinatesData);

  /*
  JSX
  */
  return <extrudeGeometry args={[shape, arrowExtrudeSettings]} />;
};

export default ArrowSharpHorizontalGeometry;
