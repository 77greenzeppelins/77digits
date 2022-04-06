import React from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend } from '@react-three/fiber';
import fontGaramont from '../../../../assets/fonts/sansSerif/EB Garamond Medium_Regular.json';
/*
The extend function increase three-fibers catalogue of JSX elements
*/
extend({ TextGeometry });
/*
----------------------------------------------------------------------
*/
const Text3D = ({
  meshProps,
  materialProps,
  customeMaterial,
  textGeometryProps,
  text,
}) => {
  /*
  Font Loader
  */
  const font = new FontLoader().parse(fontGaramont);
  /*
  JSX
  */
  return (
    <mesh {...meshProps}>
      <textGeometry args={[text, { font, ...textGeometryProps }]} />
      {customeMaterial || <meshBasicMaterial {...materialProps} />}
    </mesh>
  );
};

export default Text3D;
