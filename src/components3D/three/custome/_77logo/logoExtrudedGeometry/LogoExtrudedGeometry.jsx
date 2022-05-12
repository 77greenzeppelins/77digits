import React from 'react';
import { Shape } from 'three';
/*
Basic Data
*/
import {
  logoCoordinates,
  logoExtrudeSettings,
} from './logoExtrudedGeometryData';

/*
---------------------------------------------------------------
*/
const LogoExtrudedGeometry = () => {
  /*
  Shape creator; requires array of points
  */
  const shape = new Shape(logoCoordinates);
  /*
  JSX
  */
  return <extrudeGeometry args={[shape, logoExtrudeSettings]} />;
};

export default LogoExtrudedGeometry;
