/*
inspired by: https://medium.com/cortico/3d-data-visualization-with-react-and-three-js-7272fb6de432
*/

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
//_____
import { extrudeSettings, hardcodedSeven } from './geometryOfSeven';
//_____
import { useLayout } from '../../../../../hooks/useLayout';

const scratchObject3D = new THREE.Object3D();

const FieldOfSeven = ({
  data,
  layout,
  //   instancesProps,
  meshProps,
  //   geometryProps,
  materialProps,
}) => {
  //
  //_____
  //   const { fieldWidth, fieldHeight } = instancesProps;
  //   const { boxWidth, boxHeight, boxDepth } = geometryProps;
  //   const { color } = materialProps;

  //_____
  const meshRef = useRef();
  const itemsNumber = data.length;

  //_____

  useLayout({ data, layout });

  //_____
  useEffect(() => {
    //
    // console.log('<FieldOfSeven> / data after hook', data);
    // console.log('<FieldOfSeven> / meshRef.current:', meshRef.current);

    //
    const mesh = meshRef.current;

    // set the transform matrix for each instance
    for (let i = 0; i < data.length; ++i) {
      const { x, y, z } = data[i];

      scratchObject3D.position.set(
        x + Math.random() * 0.5,
        y + Math.random() * 0.5,
        z
        // x,
        // y,
        // z
      );
      scratchObject3D.updateMatrix();
      mesh.setMatrixAt(i, scratchObject3D.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, [data, layout]);

  return (
    <instancedMesh
      {...meshProps}
      ref={meshRef}
      args={[null, null, itemsNumber]}
      frustumCulled={false} //?????
      name="FieldOfSeven"
    >
      <extrudeGeometry args={[hardcodedSeven, extrudeSettings]} />
      {/* <meshStandardMaterial attach="material" color="red" /> */}
      <meshStandardMaterial color={0xffffff} metalness={0} roughness={0} />
      {/* <meshBasicMaterial {...materialProps} /> */}
    </instancedMesh>
  );
};

export default FieldOfSeven;

//   useFrame(({ clock }) => {
//     const ref = meshRef.current;
//     let counter = 0;
//     const time = clock.getElapsedTime() * 0.001;
//     const t = clock.oldTime * 0.001;
//     //___main loop
//     for (let i = 0; i < fieldWidth; i++) {
//       for (let j = 0; j < fieldHeight; j++) {
//         const id = counter++;
//         tempBoxes.position.set(fieldWidth / 2 - i, fieldHeight / 2 - j, 0);
//         // tempBoxes.rotation.z = t;
//         tempBoxes.updateMatrix();
//         ref.setMatrixAt(id, tempBoxes.matrix);
//       }
//     }
//     ref.instanceMatrix.needsUpdate = true;
//   });

/**
   useEffect(() => {
    //
    const ref = meshRef.current;
    let counter = 0;
    //___main loop
    for (let i = 0; i < fieldWidth; i++) {
      for (let j = 0; j < fieldHeight; j++) {
        const id = counter++;
        tempBoxes.position.set(fieldWidth / 2 - i, fieldHeight / 2 - j, 0);
        tempBoxes.updateMatrix();
        ref.setMatrixAt(id, tempBoxes.matrix);
      }
    }
    ref.instanceMatrix.needsUpdate = true;
  }, [fieldWidth, fieldHeight]);
 */
