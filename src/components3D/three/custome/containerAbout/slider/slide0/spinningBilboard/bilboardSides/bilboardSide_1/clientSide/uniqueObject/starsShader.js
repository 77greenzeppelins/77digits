import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
// import * as THREE from 'three';

const StarsShaderMaterial = shaderMaterial(
  { uTime: 0 },

  // vertex shader
  glsl`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  glsl`
    uniform float uTime; 
    varying vec2 vUv;
    void main() {

      float distToCenter = distance(vUv, vec2(0.5));
      float strength = 0.05 / distToCenter - 0.05 * 2.;
      gl_FragColor = vec4(vec3(1.), strength);
      
      // gl_FragColor = vec4(vec3(1.),1.);
    }
  `
);
export { StarsShaderMaterial };
