import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
// import { extend, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// import muFont from '../../../../assets/fonts/sansSerif/jostCutted.json'

const TextGeometryPrimitive = () => {
  //   THREE.Cache.enabled = true;
  let loader = new FontLoader();
  let font = loader.load(
    // resource URL
    '../../../../assets/fonts/sansSerif/jostCutted.json',

    // onLoad callback
    function (font) {
      // do something with the font
      if (font) {
        console.log('<TextGeometryPrimitive> / font!!!!!!!!!!!:', font);
        return font;
      } else {
        console.log('<TextGeometryPrimitive> / NO FONT AT ALL !!!!!:');
      }
    },

    // onProgress callback
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },

    // onError callback
    function (err) {
      console.log('An error happened');
    }
  );

  useEffect(() => {
    console.log('<TextGeometryPrimitive> / loader:', loader);
    console.log('<TextGeometryPrimitive> / font:', font);
  }, [loader, font]);

  //______
  return null;
};

export default TextGeometryPrimitive;
