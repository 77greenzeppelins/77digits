import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const BasicNoiseShaderMaterial = shaderMaterial(
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

  `,
  /*
  ----------Fragment Shader Section-----------------------------------
  */
  glsl`
  #define NUM_PARTICLES 20.
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
  Basic Noise
  */
  float NoiseMaker1 (vec2 coordSysten){
    float patternMaker = fract(sin(coordSysten.x * 100.)*4672.);
    return patternMaker += fract(sin(coordSysten.y * 100.)*467.);
  }
  float NoiseMaker2 (vec2 coordSysten){
    return fract(sin(vUv.x * 100. + vUv.y * 6666.)*9666.);
  }

  /*
  Main Function Section;
  */
  void main (){
      /*
      ................................................................
      resource: 
      /*
       initially "uVu-coordinate-system" spans from 0 to 1
       imagine two type of operations:
       <1> scaling => "*" or "\"
       <2> offsetting => "+" or "-" 
       now our "uVu-coordinate-system" spans from -1 to 1 with (0,0) in center center of the picture / plane
      */
      vec2 myCoordSystem = vUv * 2. - 1.;
      /*
      color for final function gl_FragColor; 
      */
      vec4 color = vec4(0.,0.,0.,1.);
      /*
      pulseMaker delivers some effect of pulsing
      used as offsetter nicelly moves/animates pattern from center to "plane frame" and aback (i z powrotem);
      */
      float pulseMaker = sin(uTime);

      /*
      ..............................................................
      resource
      https://www.youtube.com/watch?v=zXsWftRdsvU
      */
      /*
      Basic Values
      */
      float timeSpead = uTime * 2.;
      /*
      Grid Maker
      The way we can get repeated pattern;
      fract(1.53) returns decimal/fractional component i.e. 0.53;
      */
      vec2 grid = fract(vUv*10.);
      /*
      floor(1.53) return integer component of the number i.e. 1.;
      */
      vec2 id = floor(vUv*10.);  

      /*
      Color Manipulations
      */
      float tempColor = NoiseMaker2(vUv);
      color.rgb = vec3(tempColor);
      // color.rg = id *0.1;
      // color.b = NoiseMaker2(myCoordSystem);

      gl_FragColor = vec4(vec4(color));
    

     /*
      ................................................................
      Animated Circle;
      source: https://www.shadertoy.com/view/tlGXRz
      author uses the following "coordinate-system-setting":
      vec2 uv =  (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);
      */
     /*
     "thisPulseMaker" scecifies the behaviour of our pulsator i.e value that allowes our picture to pulse;
     */
    //  float t = -uTime * 3. + 5000. + sin(uTime / 3.) * 5. ;
     /*
     distance() tell me haw far each particular pixel (first argument) is from defined position(second argument);
     */
    //  float dist = distance(myUv, vec2(0.)) * 0.1  ;
    //  float maxDist = .9;
    //  float expDist = dist * dist * dist;
    //  float strength = (sin(expDist * 100.)+1.)/2.;
    //  float height = (sin(t * strength)+1.)/2.;
    //  float alpha = 1. - expDist / (maxDist * maxDist * maxDist) + (1. - height) * -0.014  ;
    // color = vec4(1.,1.,1.,.9) * height - (1. - alpha) * 0.652;
    // color.a = alpha;
    // if(dist > maxDist) color = vec4(.1,.1,.1, 0.);

    // color.y = dist;
    // gl_FragColor = vec4(0., dist, 0., 1.);
    // gl_FragColor = vec4(vec4(color));

  }
  `
);

export { BasicNoiseShaderMaterial };
