import React from 'react';
import * as THREE from 'three';

const Frame = ({ meshProps, materialProps }) => {
  let shapeCoordinates = [];
  shapeCoordinates.push(new THREE.Vector2(0.2, 1));
  shapeCoordinates.push(new THREE.Vector2(0.8, 1));
  shapeCoordinates.push(new THREE.Vector2(0.8, 0));
  shapeCoordinates.push(new THREE.Vector2(0.2, 0));
  shapeCoordinates.push(new THREE.Vector2(0.2, 1));

  let pathCoordinates = [];
  pathCoordinates.push(new THREE.Vector2(0.3, 0.9));
  pathCoordinates.push(new THREE.Vector2(0.7, 0.9));
  pathCoordinates.push(new THREE.Vector2(0.7, 0.1));
  pathCoordinates.push(new THREE.Vector2(0.3, 0.1));
  pathCoordinates.push(new THREE.Vector2(0.3, 0.9));

  const hardcodedFrame = new THREE.Shape(shapeCoordinates);
  const hardcodedPath = new THREE.Path(pathCoordinates);

  hardcodedFrame.holes.push(hardcodedPath);

  //_____
  return (
    <mesh {...meshProps}>
      <shapeGeometry args={[hardcodedFrame]} />
      <meshBasicMaterial {...materialProps} />
      {/* {thisShaderMaterial || (
        <sevenShapeShaderMaterial
          ref={shaderMaterial}
          // blending={THREE.MultiplyBlending}
          // side={THREE.DoubleSide}
        />
      )} */}
    </mesh>
  );
};

export default Frame;

/*
Frame
  meshProps={{
    position: [-0.5, -0.5, -12.05],
    // scale: [0.02, 0.02, 0.02],
    name: 'Frame',
  }}
  materialProps={{ color: [0, 1, 0] }}
/>

*/
