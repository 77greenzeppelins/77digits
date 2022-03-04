import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const AlgorithmicDrawingShaderMaterial = shaderMaterial(
    //_____uniforms
    {
        uResolution: [0.0,0.0],
},
  glsl`

    attribute float aRandom;

    varying float vRandom;
    varying vec2 vUv;

    void main (){

        vec4 worldSpace = modelMatrix * vec4(position, 1.0);
        // worldSpace.z += aRandom  * 0.1;
        vec4 viewSpace = viewMatrix * worldSpace;
        vec4 clipSpace = projectionMatrix * viewSpace;
        gl_Position = clipSpace;
        //_____
        vRandom = aRandom;
        vUv = uv;
}
`,
glsl`

  uniform vec2 uResolution;
  varying float vRandom;
  varying vec2 vUv;

  float plot(vec2 st) {    
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}


  void main(){
      
    vec2 st = gl_FragCoord.xy/uResolution;

    float y = st.x;

    vec3 color = vec3(y);

    // Plot a line
    float pct = plot(st);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

	// gl_FragColor = vec4(color,1.0);
	gl_FragColor = vec4(st,0.0,1.0);


    //   vec2 st = gl_FragCoord.xy ;
    //   gl_FragColor = vec4(vUv,1.0, 1.0);
  }

`
)
    export { AlgorithmicDrawingShaderMaterial };

     // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);