import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three';

const BraveClientsPictureOnPlaneShaderMaterial = shaderMaterial(
  //uniforms (textures, time, mousePositions etc...)
  {
    uTime: 0,
    uColor: new THREE.Color([1.0, 1.0, 1.0]),
    uTexture: new THREE.Texture(),
  },

  //VertexShader
  glsl`
    precision mediump float;
    uniform float uTime;
    varying vec2 vUv;
    varying float vWave;
    #pragma glslify: snoise3 = require('glsl-noise/simplex/3d');

  void main(){

    vec3 pos = position;
    float noiseFrequencyX = 1.5;
    float noiseFrequencyY = 0.5;
    float noiseAmplitude = 0.01;
    vec3 noisePosition = vec3(pos.x * noiseFrequencyX + uTime * 0.4, pos.y * noiseFrequencyY + uTime * 0.4, pos.z);
    pos.z += snoise3(noisePosition) * noiseAmplitude;
    pos.y += snoise3(noisePosition) * noiseAmplitude;

      
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);


      /*
      Varying assignments
      */
      vUv = uv;
      /*
      what "vWave" does?
      it's required in FS; it allowes image to match vertex more preciselly; without it imaga can look as if it were positioned "next to" vertices; additional, usin "special" factor we can increase image's waving amplitude
      */
      vWave = pos.z;
       }
  `,

  /*
  FragmentShader
  */
  glsl`
   precision mediump float;
  //___greetings from CPU! Hera are uniforms ;-)
  uniform vec3 uColor;
  uniform float uTime;
  uniform sampler2D uTexture;

  //___greetings from VertexShader! Hera are varyings ;-)
  varying vec2 vUv;
  /*
  what "vWave" does?
  it's required in FS; it allowes image to match vertex more preciselly; without it imaga can look as if it were positioned "next to" vertices; additional, usin "special" factor we can increase image's waving amplitude
  */
  varying float vWave;

  void main(){

    float waveImpulse = vWave * 0.1;
    // vec3 texture = texture2D(uTexture, vUv + waveImpulse).rgb;
    vec3 texture = texture2D(uTexture, vUv).rgb;
    // gl_FragColor = vec4(logoTexture, 1.0);
      // gl_FragColor = vec4(vUv.y * 0.6, vUv.x* 0.6, abs(sin(uTime* 0.3)) * 0.6, 1.0);
  
    gl_FragColor = vec4(texture, 0.5);
    #include <tonemapping_fragment>
    #include <encodings_fragment>
    }`
);

export { BraveClientsPictureOnPlaneShaderMaterial };
