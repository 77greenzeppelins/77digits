// import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const ConstalationBShaderMaterial = shaderMaterial(
  /*
  ----------Uniforms Section---------------------------------------
  */
  {
    uPointSize: 0,
    uPixelRatio: 1,
    // uResolutionX: 0,
    // uResolutionY: 0,
    /*
    think of this as a kind of "offset"; offsetting is based on two operations: "+" or "-" !!!; somethig that can slightly changes the position "over the time" / constantly;
    */
    uTime: 0,
    /*
    switcher for this shader material; it should be visible only when <ContrainerIntroContent> has specified c-position; 
    */
    uSwitcher: 0,
  },

  /*
  ----------Vertex Shader Section-----------------------------------
  */
  glsl`
  /*
  extract "atributes" from <ContainerAnswerYes> i.e. from Java Script;
  defoult atteributes: uv, position, color don't need to be retrieved
  */
   attribute float aRandomScale;
  /*
  extract uniforms
  */
  uniform float uTime;
  uniform float uPointSize;
  uniform float uPixelRatio;
  uniform bool uSwitcher;
  /*
  create / declare "varying" for "Fragment Shader sake";
  they come from geometry attributes;
  */
  varying vec2 vUv;
  varying vec3 vColor;
  
  /*
  Main Function Section;
  */
  void main (){
      vec4 worldSpace = modelMatrix * vec4(position, 1.);
      /*
      tAnimation Section
      */
      if(uSwitcher){
        /*
        This "if statement" is required to turn on / turn off 
        */
        worldSpace.y += sin(uTime * 0.05 + aRandomScale ) * aRandomScale;
        worldSpace.x += cos(uTime * 0.05 + aRandomScale ) * aRandomScale;
      };
      

      vec4 viewSpace = viewMatrix * worldSpace;
      vec4 clipSpace = projectionMatrix * viewSpace;
      gl_Position = clipSpace;
      /*
      It manage issue of device "pixel ratio"; 
      remember, that the higher "pr" the smaller point user see;  
      */
      gl_PointSize = uPointSize * aRandomScale * uPixelRatio;
      /*
      It manages issue of "size attenuation" i.e points from background are smaller then points from foreground; 
      in three.js doc it stands like this: 
      gl_PointSize *= ( scale / - mvPosition.z );
      mvPosition = viewPosition = viewSpace
      */
      gl_PointSize *= (1.0 / - viewSpace.z) ;
      /*
      assign verying for "Fragment Shader sake";
      think of "uv" & "color" as in-built staff; 
      */
      vUv = uv;
      vColor = color;
  }
  `,
  /*
  ----------Fragment Shader Section-----------------------------------
  */

  glsl`
  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform float uTime;
  uniform float uResolutionX;
  uniform float uResolutionY;
  uniform bool uSwitcher;

  /*
  extract varyings from Vertex Shader;
  */
  varying vec2 vUv;
  varying vec3 vColor;
  /*
  Main Function Section;
  */
  void main (){
    /*
    gl_PointCoord is "fragment shader" input for creating coordinate system
    imagin that each particle has it's own "full plane"
    */
   vec2 brunoUv = gl_PointCoord;
    /*
    Bruno's second approach
    Concept: let point to be white and manipulate alpha-chenel
    */ 
   vec3 basicColor = vec3(0.,0.,0.);
   float brunoShape = distance(brunoUv, vec2(.5));
   /*
   What "- 0.05 * 2." does?
   */
  float brunoAlphaValue = 0.05 / brunoShape - 0.05 * 2.;

   if(uSwitcher){
        /*
        This "if statement" is required to turn on / turn off shader that essentially plays role of background for "odlot section" within <ContainerIntroContyent>
        */
       basicColor = sin(uTime * vec3(.234, .456, .678)) * 0.2 + 0.3;
      };
   gl_FragColor = vec4(basicColor,brunoAlphaValue);

  }
  `
);
export { ConstalationBShaderMaterial };
