import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three';

const PixelatedRafaelShaderMaterial = shaderMaterial(
  //_____uniforms
  {
    //uColor: [1.0, 0.0, 1.0], //alternatively...it doesn't work if color is passed in form of string i.g. 'hotpink' instead of vector3
    uColor: new THREE.Color([1.0, 0.0, 1.0]),
    uTime: 0.0,
    uTexture: new THREE.Texture(),
    uDataTexture: new THREE.Texture(),
  },
  //_____Vertex Shader
  glsl`

  //___greetings from CPU! Hera are uniforms ;-)
  uniform float uTime;

  varying vec2 vUv;

  void main(){

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    //___Varying assignments
      vUv = uv;
  }
  `,
  //FS
  glsl`

  //___greetings from CPU! Hera are uniforms ;-)
  uniform vec3 uColor;
  uniform float uTime;
  uniform sampler2D uTexture;
  uniform sampler2D uDataTexture;

  

  //___greetings from VS! Hera are varyings ;-)
  varying vec2 vUv;


  void main(){

    /*
    uDataTexture in action
    */
    vec4 dataTextureOffset = texture2D(uDataTexture, vUv);
    gl_FragColor = dataTextureOffset;
    /*
    uTexture in action
    */
    vec4 rafaelTexture = texture2D(uTexture, vUv );
    gl_FragColor = rafaelTexture;
    
    /*
    Both textures in action
    */
    // gl_FragColor = texture2D(uTexture, vUv - 0.2 * vec2(dataTextureOffset.r));
    // gl_FragColor = texture2D(uTexture,vUv - 0.009 * dataTextureOffset.rg);




  }`
);
export { PixelatedRafaelShaderMaterial };
