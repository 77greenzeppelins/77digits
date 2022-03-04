import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const SevenSevenPointsShaderMaterial = shaderMaterial(
  //___uniforms = props from CPU
  {
    uColor: new THREE.Color(0.2, 0.0, 0.5),
    uPixelRatio: 0.0,
    uSize: 1.0,
    uTime: 0.0,
    uFrameSize: 100,
    uTexture: new THREE.Texture(),
  },

  //___vertex shader
  glsl` 
 
    uniform float uPixelRatio;
    // uniform float uSize;
    // uniform float uTime;
    // attribute float aScale;
    attribute vec3 aCoordinates;
    attribute float uFrameSize;

    varying vec2 vCoordinates;
    varying vec2 vUv;

    void main() {

      vec4 worldSpace = modelMatrix * vec4(position, 1.);
      vec4 viewSpace = viewMatrix * worldSpace;
      //_____Juri's approach
      // vec4 viewSpace = modelViewMatrix * vec4(position, 1.);
      //_____my approach
      gl_PointSize = 2.5 * uPixelRatio ;
      gl_PointSize *=  1. / - viewSpace.z;  // (uSize  * aScale * uPixelRatio)
      gl_Position = projectionMatrix * viewSpace;
      //_____
      vCoordinates = aCoordinates.xy;
      vUv = uv;
      
    }
  `,

  //___fragment shader
  glsl`

  uniform float uFrameSize;
  /*
  _____1. Function of vCoordinates?
  */
    varying vec2 vCoordinates;
    uniform sampler2D uTexture;
    varying vec2 vUv;


    void main() {
    //_____my v1
      // float pct = 0.;
      // vec2 myUv = vec2(vCoordinates.x/uFrameSize, vCoordinates.y/uFrameSize);
      // // pct = distance(myUv.xy, vec2(0.5));
      // pct = distance(vUv.xy, vec2(0.5));
      // gl_FragColor = vec4(1.,1.,1., pct);
    //_____my v2


    //_____
      vec2 myUv = vec2(vCoordinates.x/uFrameSize, vCoordinates.y/uFrameSize);
      vec4 logo = texture2D(uTexture,myUv);
      gl_FragColor = logo;

    }
  `
);

export { SevenSevenPointsShaderMaterial };
