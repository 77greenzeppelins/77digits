import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
// import * as THREE from 'three';

const ShaderedRingMaterial = shaderMaterial(
  /*
  Uniforms
  */
  { uTime: 0, uAspect: 1.777 },

  /*
  Vertex Shader
  */
  glsl`
    precision mediump float;
    
    varying vec2 vUv;

  void main(){
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}
`,

  /*
  Fragment Shader
  */
  glsl`
  precision mediump float;
  uniform float uTime;
  uniform float uAspect;
  varying vec2 vUv;

  //___part 2
  vec3 drawCircle(vec2 vUv, float r, vec2 offset){
    float x = vUv.x - offset.x;
    float y = vUv.y ;
    float d = length(vec2(x,y)) - r;
    //___black, moving circle on animated, colorful background;
    // float a = length(vec2(x,y));
    // float d = step(a,r);
    // return d > 0. ? vec3(1.) : vec3(1.,0.5,0.5);
    //___formula "0.5 + 0.5 * valueRange <-1.1>" giver valueRange <0,1>
    //___formula "cos(uTime + vUv.xyx  + vec3(0,2,4))" allowes to cycle through the same set of colors over and over; offsetting uTime  by "+ vUv.xyx" final value is of type "vec3" => without offset we get only float end error occures;
    //__formula "d > 0 ? __ : __" means tha if distance is greater then zero pixel is outside the shape  
    return d > 0. ? vec3(0.) : 0.5 + 0.5 * cos(uTime + vUv.xyx  + vec3(0,2,4)) ;
  }
  //___part 3
  vec3 drawSquere(vec2 vUv, float size, vec2 offset){
    float x = vUv.x - offset.x;
    float y = vUv.y - offset.y;
    float d = max(abs(x), abs(y)) - size;
    return d > 0. ? vec3(1.) : vec3(1.,.0,.0); 
  }

  //___part 4; intro
  vec3 getBeckgroundColor(vec2 uv){
    uv += 0.5;  // remap uv from <-0.5,0.5> to <0,1>
    vec3 startColor = vec3(1.,0.,1.);
    vec3 endColor = vec3(0.,1.,1.);
    return mix(startColor,endColor,uv.y);
  }

  //___part 4
  float sdfCircle (vec2 uv, float r, vec2 offset){
    float x = uv.x - offset.x;
    float y = uv.y - offset.y;
    //___if "r" approach to 0.5 we have more black / 0-value and little white / 1-value it is important iaas we want to use this value in smoothstep()
    return length(vec2(x,y)) - r;
  }

  vec3 drawScene(vec2 uv, vec2 offset){
    vec3 color = vec3(1.);
    float circle = sdfCircle(uv, 0.3, offset);

    color = mix(vec3(0.,0.,0.), color, smoothstep(0., 0.025, circle));
     
    return color;
  }

  //___https://glslsandbox.com/e#81653.0
  vec3 hsv(float hue) {
	  return clamp(abs(fract(hue+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.);
   }


  void main() {
    //correction of coordinate system
    vec2 newUv =  vUv; // <0,1>
    newUv -= .5; // <-0.5, 0.5> i.e zero in the center;
    newUv.x *= uAspect; // makes circle in landscape format of "3D-plane"
    //divide canvas into four solidColorareas
    // vec3 color = vec3(step(0.5, vUv),0.);
    //___animated offset
    // vec2 animatedOffset = vec2(sin(uTime*0.5)*0.1 ,cos(uTime*0.5)*0.2);
    vec2 animatedOffset = vec2(0 ,0.);
    //___
    // vec3 color = drawCircle(newUv, .2, animatedOffset);
    // vec3 color = drawSquere(newUv, .2, animatedOffset);
    //___Time varying pixel color - initial version from ShadrToy
    // vec3 color = 0.5 + 0.5*cos(uTime + vUv.xyx + vec3(0,2,4));
    //___simply interpolations with mix()
    // float interpolatedValue = mix(1.,0., newUv.x);
    // vec3 color = vec3(interpolatedValue);
    //___
    // vec3 color = getBeckgroundColor(newUv);
    //___chapter4
    // vec3 color = vec3(drawScene(newUv, animatedOffset));
    //___Ring from https://glslsandbox.com/e#81653.0
    float d = length(newUv) - 0.3;
	  float bright = 0.0001 / (d * d);
	  vec3 color = hsv(uTime * 0.2) + vec3(1, 1, 1);

    //___Shining point from https://glslsandbox.com/e#81702.0

    // float l = 0.1 / length(newUv);
    float l = 1. - length(newUv) - 0.5;

    // gl_FragColor = vec4(vec3(0.), l);
    gl_FragColor = vec4(vec3(1.),l );

    
    //___Output to screen
    // gl_FragColor = vec4(color, 1.);

    // gl_FragColor = vec4(color * bright, 1);
    // gl_FragColor = vec4(color * bright, 1);

  }
`
);
export { ShaderedRingMaterial };
