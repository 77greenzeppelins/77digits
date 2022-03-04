import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const CameraOverlayShaderMaterial = shaderMaterial(
  /*
    Uniforms
    */
  { uAlpha: 1.0 },
  /*
    Vertex Shader
    */
  glsl`
  
  void main(){
    //   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, .0);
      gl_Position = vec4(position, 1.);

  }
  `,
  /*
    Fragment Shader
    */
  glsl`

  uniform float uAlpha;

  void main(){
        gl_FragColor = vec4(vec3(.0,1.,1.), uAlpha);


  }

  `
);
export { CameraOverlayShaderMaterial };
