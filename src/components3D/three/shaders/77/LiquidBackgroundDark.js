import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const LiquidBackgroundDarkShaderMaterial = shaderMaterial(
  /*
  ----------Uniforms Section---------------------------------------
  */
  {
    uWidth: 0,
    uHeight: 0,
    /*
    think of this as a kind of "offset"; offsetting is based on two operations: "+" or "-" !!!; somethig that can slightly changes the position "over the time" / constantly;
    */
    uTime: 0,
    /*
    uniform passed from <ContainerMenu>, <IntroductionBackground> (AboutMenu)
    */
    uContainer: 1,
  },
  /*
  ----------Vertex Shader Section-----------------------------------
  */
  glsl`
  /*
  create / declare "varying" for "Fragment Shader sake";
  */
  varying vec2 vUv;
  /*
  Main Function Section;
  */
  void main (){
      vec4 worldSpace = modelMatrix * vec4(position, 1.);
      vec4 viewSpace = viewMatrix * worldSpace;
      vec4 clipSpace = projectionMatrix * viewSpace;
      gl_Position = clipSpace;
      /*
      assign verying for "Fragment Shader sake";
      */
      vUv = uv;

  }
  /*
  ----------Fragment Shader Section-----------------------------------
  */
  `,
  glsl`
    /*
  extract varyings from Vertex Shader;
  */
  varying vec2 vUv;
  /*
  extract uniforms from <ContainerMenu>
  */
  uniform float uTime;
  uniform float uWidth;
  uniform float uHeight;
  uniform int uContainer;
  /*
  Main Function Section;
  */
  void main (){
      /*
       initially "uVu-coordinate-system" spans from 0 to 1
       imagine two type of operations:
       <1> scaling => "*" or "\"
       <2> offsetting => "+" or "-" 
       now our "uVu-coordinate-system" spans from -1 to 1 wit 0 in center
      */
      vec2 vUv = 2. * vUv - 1.;
      /*
      Color Manipulations
      */
      /*
      What function does "tAnimator" play?
      1. we can't change uTime directlly so additional variable is required;
      2. "tAnimator" + "switch statement" allowes to NOT animate shader when "currentContainer" is different then "menuContainer"
      */
      float tAnimator;

      switch(uContainer)
      {
        case 0:
         tAnimator = 0.;
         break;
        case 1:
         tAnimator = uTime;
         break;
        default: // in any other case.
         tAnimator = 0.;
      }
      
      for(float i = 1.0; i < 6.0; i++){
          vUv.x += -i * 0.05  * sin(vUv.y * i * i  + tAnimator * 0.05) * sin(vUv.x * i * i  + tAnimator * 0.3);
      }
      /*
      Final Color !!!
      */
      vec3 finalColor = vec3(vUv.x + 0.2, vUv.x + 0.2, vUv.x + 0.2);
      gl_FragColor = vec4(finalColor, 1.);
  }
  `
);

export { LiquidBackgroundDarkShaderMaterial };
