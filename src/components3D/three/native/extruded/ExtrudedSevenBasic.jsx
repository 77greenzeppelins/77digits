import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const ExtrudedSevenBasic = React.forwardRef(
  ({ meshProps, materialProps, thisShaderMaterial, thisMaterial }, ref) => {
    //
    //______Coordinate for "7" (hardcoded version)
    let hardcodedSevenCoordinates = [];
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.1, 0.86));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.16, 1));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.8, 1));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.4, 0));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.25, 0));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.6, 0.86));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.2, 0.86));

    const hardcodedSeven = new THREE.Shape(hardcodedSevenCoordinates);

    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: false,
      // bevelEnabled: true,
      // bevelSegments: 0.1,
      // steps: 0.2,
      // bevelSize: 0.1,
      // bevelThickness: 0.1,
    };

    //_____References

    //_____useFrame Section
    //___1. Creat a uniform "time"
    // useFrame(({ clock, viewport }) => {
    //   if (shaderMaterial.current) {
    //     shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
    //     shaderMaterial.current.uniforms.uWidth.value = viewport.width;
    //   }
    // });

    return (
      <mesh {...meshProps} ref={ref}>
        <extrudeGeometry args={[hardcodedSeven, extrudeSettings]} />
        {thisShaderMaterial || thisMaterial || (
          <meshBasicMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
);

export default ExtrudedSevenBasic;
