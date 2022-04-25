import React from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend } from '@react-three/fiber';
/*
Font
*/
import fontGaramont from '../../../../assets/fonts/sansSerif/EB Garamond Medium_Regular.json';
/*
The extend function increase three-fibers catalogue of JSX elements
TextGeometry is a sort of extruded object
*/
extend({ TextGeometry });

/*
----------------------------------------------------------------------
*/
const BasicTextGeometry = ({ textGeometryProps, text }) => {
  /*
  Font Loader
  "parse()" is required as we use json file
  */
  const font = new FontLoader().parse(fontGaramont);
  /*
  JSX
  */
  return <textGeometry args={[text, { font, ...textGeometryProps }]} />;
};

export default BasicTextGeometry;

/*
<BasicTextGeometry 
    textGeometryProps = {{
        size: 0.2,
        height: 0.03,
        // curveSegments: 2,
        bevelThickness: 0.01,
        bevelSize: 0.005,
        bevelEnabled: true,
    }} 
    text = '?' 
/>
*/
