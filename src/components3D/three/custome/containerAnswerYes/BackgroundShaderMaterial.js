import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const BackgroundShaderMaterial = shaderMaterial(
  /*
  ----------Uniforms Section---------------------------------------
  */
  {
    uResolution: [0, 0],
    uBigWaveElevation: 0,
    uBigWaveFrequency: new THREE.Vector2(0, 0),
    uBigWaveSpeed: 0,
    uDepthColor: new THREE.Color(0x111111),
    uSurfaceColor: new THREE.Color(0x111100),
    uColorOffset: 0,
    uColorMultiplier: 0,
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
  attribute float aRandom;
  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform float uBigWaveElevation;
  uniform vec2 uBigWaveFrequency;
  uniform float uBigWaveSpeed;
  uniform float uTime;
  /*
  create / declare "varying" for "Fragment Shader sake";
  */
  varying float vRandom;
  varying vec2 vUv;
  varying vec2 vPosition;
  varying float vElevation;

  /*
  Main Function Section;
  */
  void main (){
      vec4 worldSpace = modelMatrix * vec4(position, 1.);
      /*
      Anatomy of wave:
      1_why we work within "worldSpace"?
      2_sin() is good to create wave itself
        sin(valu1 * value3) * value2
        sin() requires any valu / argument (for example value1) to return something from range (-1,1);
        if value1 = worldSpace.x our argument is from range (0,1)???; as a  result we get almost flat plane
        to define final amplitude of wave we can use 0.2 to lower the wave or 2.0 to make it higher;
        to increase frequency of wave i.e. maki it more wavy (pofalowany) we use "uBigWaveFrequency.x" whose value is 4;
      */
      /*
      one direction wave on x-axi
      */
    //   float elevation = sin(worldSpace.x * uBigWaveFrequency.x ) * uBigWaveElevation;
      /*
      multi direction wave on x-axis + z-axis;
      */
    //   float elevation = sin(worldSpace.x * uBigWaveFrequency.x + uTime * uBigWaveSpeed ) * sin(worldSpace.z * uBigWaveFrequency.y + uTime * uBigWaveSpeed )* uBigWaveElevation;

    //   worldSpace.y += elevation;
      /*
      no custome calculations below;
      only spaces made of two reminding "default matrices";
      it just works without / before perlin noise modifications;
      */
      vec4 viewSpace = viewMatrix * worldSpace;
      vec4 clipSpace = projectionMatrix * viewSpace;
      gl_Position = clipSpace;
      /*
      assign verying for "Fragment Shader sake";
      we do our best to create great-dynamically-changing "elevation value", so wy don't we pass it to the "Fragment Shader"
      */

        // vElevation = elevation;
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
  varying float vElevation;
//   varying float vRandom;
  varying vec2 vUv;
  varying vec2 vPosition;
  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform vec3 uDepthColor;
  uniform vec3 uSurfaceColor;
  uniform float uColorOffset;
  uniform float uColorMultiplier;
  uniform float uTime;
  uniform float uResolutionX;
  uniform float uResolutionY;
  uniform vec3 uResolution;
  /*
  Main Function Section;
  */
  void main (){
      /*
      ................................................................
      source: Bruno
      In final result we want color to be subordinated (uzależniony) from amplitude we defined in Vertex Shader;
      */
    //   float colorMixer = (vElevation + uColorOffset) * uColorMultiplier;
    //   vec3 mixedColor = mix(uDepthColor,uSurfaceColor, colorMixer);
    //   gl_FragColor = vec4(mixedColor, 1.);

      /*
      ................................................................
      source :https://www.youtube.com/watch?v=QtrzuSFfsSo&list=PLigR2sjkH_KeIMuNPpGBSoRQGUDU1987E&index=22
      */

      /*
       initially "uVu-coordinate-system" spans from 0 to 1
       imagine two type of operations:
       <1> scaling => "*" or "\"
       <2> offsetting => "+" or "-"
       now our "uVu-coordinate-system" spans from -1 to 1 wit 0 in center
      */
      vec2 vUv = vUv * 2. - 1.;
      /*
      try this syntax for "color" that is final value of gl_FragColor; declare initial value at the beginning of main() and then manipulat each chanel separately like that:
      "color.r = mySin;"
      */
      vec4 color = vec4(1.,0.,0.,1.);
      /*
      I'm trying to normalize "coordinate system"
      when uResolutionX is based on useFrame/size result is a mess...
      */
    //  vec2 uv =  (2.0 * vUv - vec2(uResolutionX, uResolutionY) ) / min(uResolutionX, uResolutionY);
    // vec2 myFragCoord = vec2(vUv.x * uResolutionX * 0.01, vUv.y *  uResolutionY * 0.01 );
      /*
      I'm trying to normalize "coordinate system"
      when uResolutionX is based on useFrame/viewport result is predictable
      */
      vec2 myFragCoord = vec2(vUv.x * uResolutionX, vUv.y *  uResolutionY);
      //  vec2 myUv =  (myFragCoord - vec2(uResolutionX, uResolutionY)) / min(uResolutionX, uResolutionY);
      vec2 myUv = myFragCoord * 2. - 1.;

      /*
      pulseMaker delivers some effect of pulsing
      used as offsetter nicelly moves/animates pattern from center to "plane frame" and aback (i z powrotem);
      */
      float pulseMaker = sin(uTime);

      /* !!!!!!!!!!!!!!
      above we have some initial veriables;
      below we have some calculations
      */

      /*
      -----calculation_1;
      */
      // float mySin = abs(sin(vUv.x * 3.14159 * 2. + pulseMaker));
      // float myCosin = abs(cos(vUv.y * 3.14159 * 2. + pulseMaker));
      /*
      let's color each chanel separatelly!!!
      */
      // color.r = mySin;
      // color.g = 1. - vUv.x;
      // color.b = myCosin;

      /*
      ................................................................
      Abstract, moving liquid metal
      source: https://www.shadertoy.com/view/WtdXR8
      author uses the following "coordinate-system-setting":
      vec2 uv =  (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y); but I don't need them...
      */
    //  for(float i = 1.; i < 10.; i++){
    //    vUv.x +=0.6 / i * cos(i * 2.5 * vUv.y + uTime);
    //    vUv.y +=0.6 / i * cos(i * 1.5 * vUv.x + uTime);
    //  }
    //  gl_FragColor = vec4(vec3(0.1)/abs(sin(uTime  - vUv.y - vUv.x)), 1.);

     /*
      ................................................................
      source: https://www.shadertoy.com/view/WtdXR8
      author uses the following "coordinate-system-setting":
      vec2 uv =  (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y); but I don't need them...
      you can replar vUv by  "myFragCoord"
      */
     /*
     Option: Horizontally
     */
    // for(float i = 1.0; i < 8.0; i++){
    //     vUv.y += i * 0.1 / i *
    //   sin(vUv.x * i * i + uTime * 0.05) * sin(vUv.y * i * i + uTime * 0.3);
    // }

    //  color.r  = vUv.y + 0.9;
    //  color.g = vUv.y + 0.9;
    //  color.b = vUv.y + 0.9;

    // gl_FragColor = vec4(vec4(color));
    /*
    Option: Vertically
    */
    for(float i = 1.0; i < 8.0; i++){
        vUv.x += i * 0.1 / i *
      sin(vUv.y * i * i  + uTime * 0.05) * cos(vUv.x * i * i  + uTime * 0.3);
    }

     color.r = vUv.x + 0.9;
     color.g = vUv.x + 0.9;
     color.b = vUv.x + 0.9;

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

export { BackgroundShaderMaterial };
