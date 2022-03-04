import * as THREE from 'three';

//______Coordinate for "7" (hardcoded version)
let hardcodedSevenCoordinates = [];
hardcodedSevenCoordinates.push(new THREE.Vector2(0.1, 0.86));
hardcodedSevenCoordinates.push(new THREE.Vector2(0.16, 1));
hardcodedSevenCoordinates.push(new THREE.Vector2(0.8, 1));
hardcodedSevenCoordinates.push(new THREE.Vector2(0.4, 0));
hardcodedSevenCoordinates.push(new THREE.Vector2(0.25, 0));
hardcodedSevenCoordinates.push(new THREE.Vector2(0.6, 0.86));
hardcodedSevenCoordinates.push(new THREE.Vector2(0.2, 0.86));

//_____
const extrudeSettings = {
  depth: 0.2,
  bevelEnabled: false,
  // bevelEnabled: true,
  // bevelSegments: 0.1,
  // steps: 0.2,
  // bevelSize: 0.1,
  // bevelThickness: 0.1,
};

const hardcodedSeven = new THREE.Shape(hardcodedSevenCoordinates);

export { extrudeSettings, hardcodedSeven };
