import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const TextSurfaceSamplerShaderMaterial = shaderMaterial(
  //___uniforms = props from CPU
  {
    // uColor: [1, 0, 0],
    uColor: new THREE.Color(0.2, 0.0, 0.5),
    uPixelRatio: 0.0,
    uSize: 1.0,
    uTime: 0.0,
  },

  //___vertex shader
  glsl` 
 
    uniform float uPixelRatio;
    uniform float uSize;
    uniform float uTime;
    attribute float aScale;

    void main() {

      // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

      vec4 wordSpace = modelMatrix * vec4(position, 1.0);
      // wordSpace.y += abs(sin(uTime * (aScale * 0.09) + wordSpace.x)) * aScale;
      wordSpace.z += cos(uTime + wordSpace.x * 10.0) * aScale * 0.09;
      // wordSpace.x += cos(uTime + wordSpace.x * 100.0) * aScale * 0.2;
      vec4 viewSpace = viewMatrix * wordSpace;
      vec4 clipSpace = projectionMatrix * viewSpace;
      gl_Position = clipSpace;
      gl_PointSize = uSize  * aScale * uPixelRatio ;

    /*
    This is magic formula to diversify "visible size" on z-axis
    it requires access to viewSpace that is "camera space ", "camera's point of view"
    */
      gl_PointSize *= (1.0 / - viewSpace.z) ;

    }
  `,

  //___fragment shader
  glsl`

  uniform vec3 uColor;
  uniform float uTime;
  //bouncing between two colors
  vec3 colorA = vec3(0.149,0.141,0.912);
  vec3 colorB = vec3(1.000,0.833,0.224);

  float plot (vec2 pointCoordinate){
    return smoothstep(0.02, 0.0, abs(pointCoordinate.y - pointCoordinate.x));
  }
    void main() {
      //_____
      float pct = 0.0;
      //_____circle
      pct = distance(gl_PointCoord.xy, vec2(0.5));
      //___default output that feeds every thread in GPU;
      gl_FragColor = vec4( uColor , 0.05 /  pct - 0.1);
    }
  `
);

export { TextSurfaceSamplerShaderMaterial };
//   gl_PointCoord coordinate
//   (0.0,0.0)     (1.0,0.0)
//   (0.0, 1.0)    (1.0,1.0)

//   uV coordinate
//   (0.0,0.1)     (1.0,1.0)
//   (0.0, 0.0)    (1.0,0.0)

/*

   universal variable
      vec3 color = vec3(0.0);
      float pct = 0.0;
      // float y = gl_PointCoord.x;
      // vec3 color = vec3(y);
      //___crazy pattern with green line... 
      // float pct = plot(gl_PointCoord.xy);
      // color=(1.0-pct)*color+pct*vec3(0.0, 1.0, 0.0);
      //___bouncing between two colors
      // vec3 color = vec3(0.0);
      // float mixer = abs(sin(uTime)); //gives 'smooth' values in range <0,1>
      // color = mix(colorA, colorB, mixer);
      //___simple horizontal gradient
      // color=vec3(gl_PointCoord.x);
      vec3 colorA = vec3(0.149,0.141,0.912);
      vec3 colorB = vec3(1.000,0.833,0.224);
      //___mix() =>  x×(1−a)+y×a => colorA * (1-0) + colorB * 0
      color=mix(colorA,colorB, vec3(gl_PointCoord.x)); //


      //___single vertical line 
      // float lineX1 = step(0.1, gl_PointCoord.x);//f(y) = 0.3;
      // float lineX2 = step(0.9, gl_PointCoord.x);//f(y) = 0.3;
      // float lineY = step(0.2, gl_PointCoord.y);//f(y) = 0.3;
      // color = vec3(lineX1 * lineY);
      //___simple rectangle
      // float flippedX = gl_PointCoord.x;
      // float flippedY = 1.0-gl_PointCoord.y;
      // float left = step(0.2,flippedX );
      // float bottom = step(0.2,flippedY );
      // color = vec3(left * bottom);
      // vec2 bordersA = step(vec2(0.3), gl_PointCoord.xy );
      // vec2 bordersB = step(vec2(0.3), 1.0 - gl_PointCoord.xy );
      // color = vec3(bordersA.x * bordersA.y * bordersB.x * bordersB.y);
      // gl_FragColor = vec4( color, 1.0);
      // vec2 shape1 = step(vec2(0.2), gl_PointCoord.xy);
      // color = vec3(shape1.x * shape1.y);
      // vec4 shape = step(vec4(0.2), vec4(gl_PointCoord.xy, 1.0 - gl_PointCoord.xy) );
      // color = vec3(shape.r * shape.g * shape.b * shape.a) ;
      // gl_FragColor = vec4( (color.x + 0.3) * abs(sin(uTime)),
      // (color.y + 0.7) * abs(sin(uTime)*0.5),
      // (color.z + 0.1) * abs(sin(uTime)*0.2), 1.0);
      */
