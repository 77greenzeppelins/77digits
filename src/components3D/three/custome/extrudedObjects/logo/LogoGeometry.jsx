import React from 'react';
import { Shape } from 'three';
/*
Basic Data
*/
import { logoCoordinates, logoExtrudeSettings } from './logoData';

/*
---------------------------------------------------------------
*/
const LogoGeometry = () => {
  /*
  Shape creator; requires array of points
  */
  const shape = new Shape(logoCoordinates);
  /*
  JSX
  */
  return <extrudeGeometry args={[shape, logoExtrudeSettings]} />;
};

export default LogoGeometry;
