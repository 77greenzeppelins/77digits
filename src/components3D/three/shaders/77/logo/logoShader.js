import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const LogoShaderMaterial = shaderMaterial(
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
  Main Function Section;
  */
  void main (){
      /*
      */
      vec2 uv = 2. * vUv - 1.;
      vec2 uvCenter = vec2(0.,0.);
      float basicColor = 0.;

      // basicColor = DrawRing(uv, vec2(0.), 1.);
      /*
      manipulate uv
      */
      float x = uv.x;
      float y = uv.y;
      x -= y * 0.5;
      /*
      Bottom 7
      DrawRectangle(vec2 uv, float width, float height, float blur)
      */
      basicColor += DrawRectangle(vec2(x,y), vec2(-0.1, -0.1), .08, .5, 0.001);
      basicColor += DrawRectangle(vec2(x,y), vec2(-0.37, 0.32), .3, .08, 0.001);

      /*
      Top 7
      DrawRectangle(vec2 uv, float width, float height, float blur)
      */
      basicColor += DrawRectangle(vec2(x,y), vec2(0.13, 0.1), .08, .5, 0.001);
      basicColor += DrawRectangle(vec2(x,y), vec2(-0.2, 0.52), .3, .08, 0.001);

      /*
      DrawRing (vec2 uv,vec2 position, float tAnimatorValue, float size, float blur)
      */
      basicColor += DrawRing(uv, vec2(0.), 0., 1., 0.02);
      // basicColor += DrawCircle( uv,vec2(0.), 0.2, 0.05);
      /*
      Final Color !!!
      */
      gl_FragColor = vec4(vec3(basicColor), 1.);
  }
  `
);

export { LogoShaderMaterial };
