import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
// import * as THREE from 'three';

const MeshConeShaderMaterial = shaderMaterial(
  //_____
  {},
  //_____
  glsl`

    varying vec2 vUv;
    varying vec2 vScreenCoordinates;
    varying vec3 vNormal;
    
    void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

        vUv = uv;
        vNormal = normal;
        vScreenCoordinates = gl_Position.xy/gl_Position.w;

    }
    `,
  //_____
  glsl`
    
    varying vec2 vUv;
    varying vec2 vScreenCoordinates;
    varying vec3 vNormal;

    void main(){

        float light = dot(vNormal, normalize(vec3(1.)))*0.5+0.5;

        gl_FragColor = vec4(vec3(light),1.); 

        /*
    In that case we are rendering "Screen Space Coordinates" not object space coordinates => when we scroll object increase but colors remain "unchanged" i.e. it looks as if they were stick to the screen
    */
    //    gl_FragColor = vec4(vScreenCoordinates,0.,1.);
    }
    `
);

export { MeshConeShaderMaterial };
