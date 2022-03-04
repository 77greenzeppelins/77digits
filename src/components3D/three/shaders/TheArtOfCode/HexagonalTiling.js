import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const HexagonalTilingShaderMaterial = shaderMaterial(
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
  varying vec2 vScreenCoordinates;
  
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
      /*
      What is "vScreenCoordinates"?
      This is the way we get "screen coordinates" within Vertex Shader (remember that shader is just a small application with some default outputs)... these coordinates are given for free!!! just use them!... using "gl_Position.w" a normalized version is created...yet I don't know what that ".w" is... 
      so wa are talking about "screen space" generated by all this matrices that take part in final result of gl_Position!!!
      moreover, it allowes to achieve some effects without 'postprocessing'
      */
        vScreenCoordinates = gl_Position.xy/gl_Position.w;

  }
  /*
  ----------Fragment Shader Section----------------------------------------
  */
  `,
  glsl`
//   #define HEXAGONE_RATIO (1.,1.73)
    /*
  extract varyings from Vertex Shader;
  */
  varying vec2 vUv;
  varying vec2 vScreenCoordinates;

  /*
  extract uniforms from <ContainerAnswerYes>
  */
  uniform float uTime;
  uniform float uResolutionX;
  uniform float uResolutionY;
   /*
  
  */
   float DrawRectangle(vec2 uv, float width, float height){
       uv = abs(uv);
       float x = smoothstep(width, width + 0.01, uv.x);
       float y = smoothstep(height, height + 0.01, uv.y);

       return x+y;
   }

  /*
  
  */
   float DrawDiamond(vec2 uv){
       uv = abs(uv);
       float diamond = dot(uv, vec2(1.));
       return diamond;
   }
  /*
  it actually counts hexagonal distance to the (0,0) point
  */
  float DrawHexagone(vec2 uv){
    /*
     abs() in this case we get only positive values horizontally & vertically from (0,0) p.o.v.;
    */
      uv = abs(uv);
    /*
     case: dot(uv, vec2(1.)); we get hexagonal radient from black center to lighter border;
     case: dot(uv, vec2(1.)) + step(); we get "regular diamond / romb" or "kopnięty kwadrat";
     case: dot(uv, normalize(vec2(1.))) + step(); still "regular diamond" yet a bit bigger;
     case: dot(uv, normalize(vec2(1., 1.73)))+ step();we get horizontally squeezed diamon that have the "right angle" i.e. hexagone's  angle;
     */
      float hexagone = dot(uv, normalize(vec2(1., 1.73)));
      /*
     ?? maximum of diagonal and horizontal "line" and it creates hexagone by cutting diamond's left and right corners;
     */
      hexagone = max(hexagone, uv.x);
      return hexagone;
  }

  /*
  
  */
 vec4 HexCoords(vec2 uv){
   vec2 cellRatio = vec2(1., 1.73);
   vec2 height = cellRatio*.5;
   vec2 gridA = mod(uv, cellRatio) - height;
   /*
   firs "-.5" is an offset of grid i.e. move whole grid;
   second "-.5" is color modificator i.e. change coordinate syetem within cell
   */
   vec2 gridB = mod(uv - height, cellRatio) -height;

   vec2 finalGrid;

   if(length(gridA) < length(gridB))
   finalGrid = gridA;
   else
   finalGrid = gridB;

   float x = atan(finalGrid.x, finalGrid.y);
   float y = .5 - DrawHexagone(finalGrid);

   vec2 id = uv - finalGrid;

//    return vec4(finalGrid.x, finalGrid.y, id.x, id.y);
   return vec4(x, y, id.x, id.y);


 }


  /*
  Main Function Section;
  */
  void main (){
    /*
    initially "uVu-coordinate-system" spans from 0 to 1
    imagine two type of operations:
    <1> scaling => "*" or "\"
    <2> offsetting => "+" or "-" 
    now our "uVu-coordinate-system" spans from -1 to 1 with (0,0) in center center of the picture / plane
    */
    // vec2 uv = vUv * 2. - 1. ; // uv *= vec2(2.); uv -= vec2(1.); 
    //   vec2 uv = 2. * vUv - 1. ; //
    vec2 uv = vUv - .5 ; //

    /*
    color for final function gl_FragColor; 
    */
    vec3 baseColor = vec3(0.);

    /*
    ..............................................................
    resource: https://www.youtube.com/watch?v=VmrIDyYiJBA
    */

    /*
    grid coordinate system
    */
   uv *= 10.;
   /*
   */
//   vec2 hc = HexCoords(uv).xy;  
//   float someVal_1 = DrawHexagone(hc);
//   float someVal_2 = .5 - DrawHexagone(vec2(HexCoords(uv).xy));
//   float c = smoothstep(.0, .1, hc.y);
//   baseColor += c;

// vec4 hc = HexCoords(uv);
// float c = smoothstep(.0, .1, hc.y * sin(hc.z * hc.w + uTime));
// baseColor += c;

//   baseColor.rg = vec2(hc.x, someVal_2) ;

//    baseColor.rg = HexCoords(uv).xy;
   /*
    Draw diamond
   */
//    float shape = step(0.4,DrawDiamond(uv)) ;
   /*
    Draw hexagone (uv, size)
   */
//    shape = step(0.4,DrawHexagone(uv, 0.2)); // black on white
    // shape = step( DrawHexagone(uv), 0.4);
//    baseColor +=  sin(DrawHexagone(uv, 0.2)*10. + uTime) ;
    // baseColor += shape;
    /*
   */
  /* 
  */
  baseColor += DrawRectangle(uv, 1., .5);

    // gl_FragColor = vec4(vec3(shape), 1.);
    gl_FragColor = vec4(baseColor, 1.);


  }
  `
);

export { HexagonalTilingShaderMaterial };
