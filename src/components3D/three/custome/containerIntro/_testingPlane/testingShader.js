import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const TestingShaderMaterial = shaderMaterial(
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

    varying vec2 vUv;



    void main() {

      vec4 wordSpace = modelMatrix * vec4(position, 1.0);
      vec4 viewSpace = viewMatrix * wordSpace;
      vec4 clipSpace = projectionMatrix * viewSpace;
      gl_Position = clipSpace;

      vUv = uv;

    }
  `,

  //___fragment shader
  glsl`

    varying vec2 vUv;

    //___
    float beSmooth (float edge , vec2 testedValue ) {
      return smoothstep(edge-0.05, edge, testedValue.y );
    }

    //___jedi line ;-)
    float jediLine(vec2 testValues, float edge){
      return smoothstep(edge - 0.05, edge, testValues.y ) - smoothstep(edge, edge + 0.05, testValues.y );
    }

    //___
    float lineMaker(float startValue, float factor, vec2 direction){
      return -1. * (step(startValue, direction.y) - step(startValue + factor, direction.y) - 1.);
    }

    void main() {
        //___some value to reuse;
        float edge = 0.0;
        // float stepEffect = step(0.5, vUv.x);
        float stepEffect = step(vUv.y, vUv.x);
        float smoothEffect = beSmooth( vUv.x ,vUv);
        //___horizontal bar
        // float justSmooth = smoothstep(0.5 - 0.05, 0.5, vUv.y);
        // float justSmooth2 = smoothstep(0.5, 0.5+0.05, vUv.y);
        // float x = justSmooth -  justSmooth2;
        float x = smoothEffect;
        //___
        float justSmooth3 = smoothstep(sin(vUv.x - 0.05), sin(vUv.x), vUv.y);
        //___
        float argument1 = 0.5 + cos(vUv.x * 25. - 0.05) * 0.1;
        float argument2 = 0.5 + cos(vUv.x * 25.) * 0.1;
        float justSmooth4 = smoothstep(argument1, argument2, vUv.y);
        //___
        // vec3 lineColor = vec3(0.168, 0.407, 0.45);
        vec3 lineColor = vec3(0.2, 0.9, 0.95);
        //___
        vec3 finalValue = lineColor * justSmooth4;
        //___mirroring <formula: x*(1-x) >
        vec3 m = vec3(1.0);
        vec2 mirrored = vUv * (1. - vUv);
        vec2 step1 = step(vec2(0.8 * 0.25), mirrored);
        m = m * step1.x * step1.y;
        //__jedi line
        vec2 newUv = vUv;
        newUv *=4.0;
        newUv -= 2.0;
        edge = cos(newUv.x*10.0)*0.1;
        // float jediValue = jediLine(newUv,edge);
        //___
        vec2 bUv = vUv;
        bUv *=4.0;
        bUv -= 2.0;
        bUv.y = bUv.y * bUv.y;
        float wave =cos(25.0 * bUv.x) ;
        edge = 1.2 - pow(bUv.x, 2.0);
        edge= 1.0 -pow(wave * bUv.x , 2.0);
        float lineValue =  jediLine(bUv,edge);
        vec3 line = lineColor * lineValue;

        //___
        vec3 bgColor = vec3(1.,1.,1.);
        vec3 blueColor = vec3(0.2, 0.9, 0.95);
        vec3 mixColors = mix (bgColor, blueColor,  vUv.x );
        float factor = 0.2;
        float line1 = lineMaker(0., factor, vUv);
        float line2 = lineMaker(0.4, factor, vUv);
        float line3 = lineMaker(0.8, factor, vUv);

        float lines = line1* line2 * line3;
        /*
        formula to switch values from 0=>1 & 1=>0; black lines becomes white
        */
        lines = -1.*(lines-1.);
        
        vec3 finalColor = mixColors * lines   ;

      gl_FragColor = vec4(0.2, 0.9, 0.95, finalColor);
    }
  `
);

export { TestingShaderMaterial };
//   gl_PointCoord coordinate
//   (0.0,0.0)     (1.0,0.0)
//   (0.0, 1.0)    (1.0,1.0)

//   uV coordinate
//   (0.0,1.0)     (1.0,1.0)
//   (0.0, 0.0)    (1.0,0.0)
