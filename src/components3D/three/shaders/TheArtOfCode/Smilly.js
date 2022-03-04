import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const SmillyShaderMaterial = shaderMaterial(
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
    uniform passed from <IntroductionBackground> (AboutMenu) with value 1; 
    chan
    */
    uDark: 0,
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

  */
  #define S(a, b, t) smoothstep(a, b, t)
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
  /*
  */
 float DrawRectangle(vec2 uv, vec2 position, float width, float height, float blur){
   /*
//     translating coordinate system (based on correction of uv system);
//     */
       uv -= position;
       vec2 absUv = abs(uv);
      //  float x = smoothstep(width, width + blur, absUv.x) ;
      //  float y = smoothstep(height, height + blur, absUv.y);
      /*
      order of "width" valuse matters i.e. if (width > width - blur) {all uv's less then "width" are black}; in that cese we get black background and white rectangle; 
      */
      float x = smoothstep(width , width - blur , absUv.x )  ;
      float y = smoothstep(height , height - blur, absUv.y);
      /*
      create intersection; take "white / 1." from both smoothsteps() and return "common part"
      */
      return x * y;
      /*
      create sum; result is a cross
      */
      // return x * y;
   }

  //  float DrawSeven ()

  /*
  "position" allowes position "drawn circle" within plane's frame 
  */
  float DrawCircle(vec2 uv,vec2 position, float radious, float blur){
      /*
      "uv - position" can change uvCenter from "global" 0<>0 to something decentralised; i.e me move coordinate system, not "object" itself; it's kind of relative coordinate system, bound with particular "object"/"drawn detail";
      */
      vec2 relativeUv = uv - position;
      float distanceToUvCenter = length(relativeUv);
      float circle = smoothstep(radious, radious - blur, distanceToUvCenter);
      return circle;
  }

  float DrawRing (vec2 uv,vec2 position, float tSpeed, float size, float blur){
//     /*
//     translating coordinate system (based on correction of uv system);
//     */
       uv += position;
       /*
       scaling coordinate system; for instace: if(size = 2.) {drawn shape is smaller}; "uv /= size" might be more intuitive becouse number bigger then 1. increases size and smalller then 1. dicreases;
       */ 
       uv *= size; 
       /*
       */
      float tAnimator = sin(uTime * tSpeed);
         /*
         It draws white circle on black "background"; this backgroun isn't colorised intentionaly, it's just a result of DS() itself, that covers plane with blac or white;
         */
        // DrawCircle( uv,vec2(0.), 0.2, 0.05);
         float basicColor = DrawCircle( uv, vec2(0.), .9, blur * 2.);
         /*
         Create a new, white, smaller circle and subtract it from bigger; it works as basic subtruction, i.e.: 1 - 1 = 0 white - white = black; white - black = white; black - black = black
         */
         basicColor -= DrawCircle( uv, vec2(0.,0.), .75 * (sin(uTime * 0.5)*0.025 + 1.15 ), blur);
         /*
         returns white ring on black bg; if you add it to black plane you get white ring; dont use "*" as 0*1 = 1; 
         */
         return basicColor;
  }
  /*
  "a & b" specifies some domain
  "t" is a value that within below calculation can approach to "a" or "b"
  */
 float NormalizeDomain(float a,float b, float t){
     /*
     "b-a" actually specifies range of that domain
     if t<=a return 0; results might by negative...;
     if t>=a return 0; results might be more then 1...;
     and it works as interpolation... 
     using clamp() outputs are alvays between 0<>1;
     */
     return clamp((t-a) / (b-a), 0., 1.); 
 }
//  float Remap(float a,float b, float c, float d, float t, ){
//     return NormalizeDomain(a,b,c) * (d-c) + c;
//  }
  /*
  Eye
  */
//   vec4 DrawEye (vec2 uv){
//     vec4 color = vec4(0.);
//     return color;
//   }
   /*
  Mouth
  */
//   vec4 DrawMouth (vec2 uv){
//     vec4 color = vec4(0.);
//     return color;
//   }
  /*
  Head 
  */
  vec4 DrawHead (vec2 uv){
    vec4 color = vec4(.9, .65, .1, 1.);
    float d = length(uv);
    /*
    Why smoothstep() was called on "alpha chanel"???
    To keep initial "yellow color"
    */
    color.a = S(0.5, 0.49, d);
    /*
    "edgeShade" is a kind of inner smoothstep in range .35<>.5
    */
    float edgeShade = NormalizeDomain(.35, .5, d);
    /*
    we want an effect of "pierwiastek z x" i.e. fast grow on short distance an then delicate grow on long distance; 
    */
    edgeShade *= edgeShade;
    color.rgb *= 1. - edgeShade * .5;
    /*
    how to draw a frame / narrow line that looks as outline;
    */
    color.rgb = mix(color.rgb, vec3(.6, .3, .1), smoothstep(.47 , .48 , d));
    /*
    how to draw a highlight;
    */

    return color;
  }
  /*
  Emoticon
  */
   vec4 DrawEmoticon(vec2 uv){
       vec4 color = vec4(0.);
       vec4 head = DrawHead(uv);
       color = mix(color, head, head.a);
       return color;

   }
  /*
  Main Function Section;
  */
  void main (){
      /*
      */
      vec2 uv = 2. * vUv - 1.;
      vec2 uvCenter = vec2(0.,0.);
      float basicColor = 0.;

       
      /*
      Final Color !!!
      */
      gl_FragColor = DrawEmoticon(uv);

    //   gl_FragColor = vec4(vec3(basicColor), 1.);
  }
  `
);

export { SmillyShaderMaterial };
