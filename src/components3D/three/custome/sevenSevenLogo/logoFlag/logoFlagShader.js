import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three'; 

const LogoFlagShaderMaterial = shaderMaterial(
  //uniforms
  {
      //uColor: [1.0, 0.0, 1.0], //alternatively...it doesn't work if color is passed in form of string i.g. 'hotpink' instead of vector3
      uColor: new THREE.Color([1.0, 0.0, 1.0]), 
      uTime: 0.0, 
      uTexture: new THREE.Texture(),
  },
  //VS
  glsl`

  //___greetings from CPU! Hera are uniforms ;-)
  uniform float uTime;

  varying vec2 vUv;
  varying float vWave;

  #pragma glslify: snoise3 = require('glsl-noise/simplex/3d');

  void main(){

    vec3 pos = position;
    float noiseFrequency = 1.5;
    float noiseAmplitude = 0.2;
    vec3 noisePosition = vec3(pos.x * noiseFrequency + uTime * 0.4, pos.y, pos.z);
    pos.z += snoise3(noisePosition) * noiseAmplitude;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    //___Varying assignments
      vUv = uv;
      vWave = pos.z;
  }
  `,
  //FS
  glsl`

  //___greetings from CPU! Hera are uniforms ;-)
  uniform vec3 uColor;
  uniform float uTime;
  uniform sampler2D uTexture;

  //___greetings from VS! Hera are varyings ;-)
  varying vec2 vUv;
  varying float vWave;

  void main(){

    float waveImpulse = vWave * 0.1;
    vec3 logoTexture = texture2D(uTexture, vUv + waveImpulse).rgb;
    gl_FragColor = vec4(logoTexture, 1.0);
      // gl_FragColor = vec4(vUv.y * 0.6, vUv.x* 0.6, abs(sin(uTime* 0.3)) * 0.6, 0.5);
    //_____let's use Bruno...
      float pct = 0.0;
      pct = distance(gl_FragCoord.xy, vec2(0.5));
      float testAlpha = 0.05 /  pct - 0.1;
      // vec2 myUv = vec2(vCoordinates.x/uFrameSize, vCoordinates.y/uFrameSize);
      // vec4 logo = texture2D(uTexture,myUv);
      // gl_FragColor = logo;
      gl_FragColor = vec4(logoTexture, 0.5);
      // gl_FragColor.r = testAlpha;
      // gl_FragColor.b = testAlpha;;
  }`
);

export { LogoFlagShaderMaterial };
