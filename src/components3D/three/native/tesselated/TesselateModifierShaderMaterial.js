import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const TesselateModifierShaderMaterial = shaderMaterial(

	//___uniforms = props
  {
    // uColor: [1, 0, 0],
    // uColor: new THREE.Color(0.2, 0.0, 0.5),
    // uPixelRatio: 0.0,
    // uSize: 1.0,
    uTime: 0.0,
    uAmplitude: 0.5,
  },
  //___Vertex Shader
  glsl`

  uniform float uAmplitude;
  uniform float uTime;

  attribute vec3 aColor;
  attribute vec3 aDisplacement;

  varying vec3 vNormal;
  varying vec3 vColor;

  void main() {
  	// vec3 newPosition = position + normal * uAmplitude * aDisplacement * uTime ;
  	// gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
  	// gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      vec3 newPosition = position;
      newPosition.x += abs(sin(uTime * 0.3)) * aDisplacement.x* 0.01;
      newPosition.y += abs(sin(uTime * 0.1)) * aDisplacement.y* 0.01;
      newPosition.z += abs(sin(uTime * 0.2)) * aDisplacement.z* 0.01;

      vec4 wordSpace = modelMatrix * vec4(newPosition, 1.0);
      // wordSpace.y += abs(sin(uTime * 0.09 + wordSpace.x)) * 0.09;
      // wordSpace.z += cos(uTime + wordSpace.x * 10.0) * 0.09;
      // wordSpace.x += cos(uTime + wordSpace.x * 100.0) * 0.09;
      vec4 viewSpace = viewMatrix * wordSpace;
      vec4 clipSpace = projectionMatrix * viewSpace;
      gl_Position = clipSpace;

  	vNormal = normal;
	  vColor = aColor;
  }

  `,
  //___Fragment Shader
  glsl`

  varying vec3 vNormal;
  varying vec3 vColor;

  void main(){

  	const float ambient = 0.4;
  	vec3 light = vec3(1.0);
  	light = normalize(light);

  	float directional = max(dot(vNormal, light), 0.5);

  	gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );
  	// gl_FragColor = vec4( vColor, 1.0 );

  }

  `
)

    export { TesselateModifierShaderMaterial };