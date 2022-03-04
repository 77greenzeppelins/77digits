// import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const GalaxyShaderMaterial = shaderMaterial(
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
   vec2 uv = 2. * gl_PointCoord - 1.;
   vec2 brunoUv = gl_PointCoord;
   /*
   */
   vec2 uvCenter = vec2(0.);
   float d = length(uv);
   float shape = smoothstep(0.9, 0.7, d);
   /*
   Bruno's first approach
   */
  //  float brunoShape = distance(brunoUv, vec2(.5));
  //  brunoShape *= 2.; //now brunoUv = 0<>2; this step actually scales;  
  //  brunoShape = 1. -brunoShape; //this step inverts positions of black&white
  /*
   Bruno's second approach
  */ 
  float brunoShape = 1. - distance(brunoUv, vec2(.5));
    /*
    using pow() we replace "linear diffuse" by somethig more "dynamic"; 
    result: point feads out faster, is intensive in the center and disappears dynamically
    */
  brunoShape = pow(brunoShape, 10.);
  vec3 color = mix (vec3(0.), vColor, brunoShape);

  //  gl_FragColor = vec4( vec3(brunoShape),1.);
   gl_FragColor = vec4(color,1.);

  }
  `
);

export { GalaxyShaderMaterial };
