import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const SpaceGifShaderMaterial = shaderMaterial(
  /*
  ----------Uniforms Section---------------------------------------
  */
  {
    uResolutionX: 0,
    uResolutionY: 0,
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
  */
  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform float uTime;
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
      we do our best to create great-dynamically-changing "elevation value", so wy don't we pass it to the "Fragment Shader"
      */
        vUv = uv;

  }
  /*
  ----------Fragment Shader Section-----------------------------------------
  */
  `,
  glsl`
  // #define NUM_PARTICLES 20.
    /*
  extract varyings from Vertex Shader;
  */
  varying vec2 vUv;
  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform float uTime;
  uniform float uResolutionX;
  uniform float uResolutionY;

  /*
  Main Function Section;
  */
  void main (){
      /*
      ..............................................................
      resource: https://www.youtube.com/watch?v=cQXAbndD5CQ
      */
      /*
      Basic Values
      */
      vec2 uv = 2. * vUv  - 1.;
      uv *= 10.;
      /*
      color for final function gl_FragColor; 
      */
      vec3 color = vec3(0.,0.,0.);
      /*
      pulseMaker delivers some effect of pulsing
      used as offsetter nicelly moves/animates pattern from center to "plane frame" and aback (i z powrotem);
      */
      float pulseMaker = sin(uTime);
      float timeSpead = uTime * 2.;
      /*
      step 1.0: grid;
      grid can be incorporated into picture or just play a role of grid that divides picture into cells... 
       fract() returns values from 0<>1 domain; 
      "-.5" move (0,0) position within each cell to center; cell is more darker; 
       */ 
      // vec2 gridUv = fract(uv) - .5;
      vec2 gridUv = mod(uv, 1.) - .5;
      /*
      step 1.1: how to draw circle in each cell
      length()gives a distance of each pixel within cell to cell's center point
      smoothstep() just interpolates values co that we get circle in each cell;
      */
      // float d = length(gridUv);
      // float shapeCircle  = smoothstep(.33,.3, d);
      
      /*
      step 1.1: how to draw lines in each cell
      length()gives a distance of each pixel within cell to cell's center point
      smoothstep() just interpolates values co that we get circle in each cell;
      */
      // float line = smoothstep(.49, .48, d);


      /*
      step 2: "for loop"
      */
     float shape = 0.;
     float minRadious = .2;
     float maxRadious = .5;
     float tAnimator = uTime;
     /*
     "dAnimator" is addittional parameter for "pulsingRadious" that takes into accout pixel's distance to the center od "uv"; yet it produces some distortion...
     */
     float dAnimator = length(uv) * 2.;
     /*
     "id" is used inside "for loop" to creat 
     */
     vec2 gridId = floor(uv);
     


      for(float y = -1.; y <=1. ; y++){
        for(float x = -1.; x <=1. ; x++){
          /*
          data
          */
          vec2 offset = vec2(x,y);
          float d = length(gridUv - offset);
          float bAnimator = length(gridId + offset) * 2.;
          // if (y = 1) maxRadious *= 2.;
          /*
          calculations part_1
          */
          float pulsingRadious = mix(minRadious, maxRadious, sin(bAnimator - tAnimator) * 0.5 + 0.5 );
          shape += smoothstep(pulsingRadious, pulsingRadious * 0.9, d);
 
        }
      }
      
      /*
      Let's make coooolor!!!!
      */
      // color.rgb += mod(shape, 2.) ;
      color.b += shape ;
      /*
      Final Line!!!!
      */
      gl_FragColor = vec4(color, 1.);

  }
  `
);

export { SpaceGifShaderMaterial };
/*
time...
float t = uTime * 0.1 ; => fly away...
float t = abs(sin(uTime)) ; => is bouncing infinitelly...
float t = fract(uTime * 0.1); => repeats from the same position infinitelly...
*/
