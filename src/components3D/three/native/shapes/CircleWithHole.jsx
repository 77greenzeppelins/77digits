import React from 'react';
import * as THREE from 'three';

const CircleWithHole = ({ meshProps, materialProps }) => {
  //
  //_____Circle with hole
  var arcShape = new THREE.Shape();
  arcShape.moveTo(50, 10);
  arcShape.absarc(10, 10, 40, 0, Math.PI * 2, false);

  var holePath = new THREE.Path();
  holePath.moveTo(20, 10);
  holePath.absarc(10, 10, 10, 0, Math.PI * 2, true);

  arcShape.holes.push(holePath);

  //_____
  return (
    <mesh {...meshProps}>
      {/* <sphereGeometry args={[15, 32, 16]} scale={0.1} /> */}
      <shapeBufferGeometry args={[arcShape]} />
      {/* <extrudeGeometry args={[hardcodedFrame, extrudeSettings]} /> */}
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

export default CircleWithHole;

/*
<CircleWithHole
              meshProps={{
                position: [-0.5, -0.5, -12.05],
                // scale: [0.02, 0.02, 0.02],
                name: 'ExtrudedFrame',
              }}
              materialProps={{ color: [0, 1, 0] }}
            />
*/

//_____Triangle
//   const pts = [];
//   const count = 3;

//   for (let i = 0; i < count; i++) {
//     const sideLength = 0.1; //or tweak scale in parent component
//     const a = ((2 * i) / count) * Math.PI;
//     pts.push(new THREE.Vector2(Math.cos(a) * sideLength, Math.sin(a) * sideLength));
//   }

//   const liveFrame = new THREE.Shape(pts);

//   var extrudeSettings = {
//     steps: 100,
//     bevelEnabled: false,
//     extrudePath: 'closedSpline',
//   };
//   const extrudeSettings = {
//     curveSegments: 10,
//     steps: 2,
//     depth: 0.3,
//     bevelEnabled: false,

//     // bevelThickness: 1,
//     // bevelSize: 1,
//     // bevelOffset: 0,
//     // bevelSegments: 1,
//   };
