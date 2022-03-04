import React from 'react';
import * as THREE from 'three';
//_____
import { a } from '@react-spring/three';

const DialogCloud = React.forwardRef(
  ({ meshProps, materialProps, thisMaterial }, ref) => {
    //
    //______Coordinate for "7" (hardcoded version)
    // let hardcodedCoordinates = [];
    // hardcodedCoordinates.push(new THREE.Vector2(0.17, 1));
    // hardcodedCoordinates.push(new THREE.Vector2(0.85, 1));
    // hardcodedCoordinates.push(new THREE.Vector2(0.8, 0));
    // hardcodedCoordinates.push(new THREE.Vector2(0.7, 0.4));
    // hardcodedCoordinates.push(new THREE.Vector2(0.22, 0.4));
    // hardcodedCoordinates.push(new THREE.Vector2(0.17, 1));

    let hardcodedCoordinates = [];
    hardcodedCoordinates.push(new THREE.Vector2(0.25, 0.2));
    hardcodedCoordinates.push(new THREE.Vector2(0.2, 0.7));
    hardcodedCoordinates.push(new THREE.Vector2(0.8, 0.7));
    hardcodedCoordinates.push(new THREE.Vector2(0.75, 0));
    hardcodedCoordinates.push(new THREE.Vector2(0.65, 0.2));
    hardcodedCoordinates.push(new THREE.Vector2(0.25, 0.2));

    const hardcodedSeven = new THREE.Shape(hardcodedCoordinates);
    return (
      <mesh {...meshProps} ref={ref}>
        {/* <sphereGeometry args={[15, 32, 16]} scale={0.1} /> */}
        <shapeGeometry args={[hardcodedSeven]} />
        {thisMaterial || <a.meshBasicMaterial {...materialProps} />}
      </mesh>
    );
  }
);

export default DialogCloud;
