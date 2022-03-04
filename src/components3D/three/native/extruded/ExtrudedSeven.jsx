import React from 'react';
import * as THREE from 'three';

/*
------------------------------------------------------------------------
*/
const ExtrudedSeven = React.forwardRef(
  ({ meshProps, materialProps, thisShaderMaterial }, ref) => {
    /*
    Coordinate for "7" (hardcoded version)
    */
    let hardcodedSevenCoordinates = [];
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.1, 0.86));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.16, 1));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.8, 1));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.4, 0));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.25, 0));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.6, 0.86));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.2, 0.86));

    const hardcodedSeven = new THREE.Shape(hardcodedSevenCoordinates);

    /*
    Config object for ExtrudeGeometry
    */
    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: false,
      // bevelEnabled: true,
      // bevelSegments: 0.1,
      // steps: 0.2,
      // bevelSize: 0.1,
      // bevelThickness: 0.1,
    };
    /*
    JSX
    */
    return (
      <mesh {...meshProps} ref={ref}>
        <extrudeGeometry args={[hardcodedSeven, extrudeSettings]} />
        {/* <meshBasicMaterial {...materialProps} /> */}
        { thisShaderMaterial }
      </mesh>
    );
  }
);

export default ExtrudedSeven;


/*
/_____Shaders Section

import { SevenShapeShaderMaterial } from '../shapes/SevenShapeShaderMaterial';
import { extend } from '@react-three/fiber';
extend({ SevenShapeShaderMaterial });
//_____References
    const shaderMaterial = useRef();

//_____useFrame Section
    //___1. Creat a uniform "time"
    useFrame(({ clock, viewport }) => {
      if (shaderMaterial.current) {
        shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
        shaderMaterial.current.uniforms.uWidth.value = viewport.width;
      }
    });

//_____
<sevenShapeShaderMaterial
            ref={shaderMaterial}
            // blending={THREE.MultiplyBlending}
            // side={THREE.DoubleSide}
/>
*/