/*
https://onion2k.hashnode.dev/drawing-lots-and-lots-of-cubes-with-react-three-fiber
*/
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const tempBoxes = new THREE.Object3D();

const FieldOfBoxes = ({
  instancesProps,
  meshProps,
  geometryProps,
  materialProps,
}) => {
  //
  //_____
  const { fieldWidth, fieldHeight } = instancesProps;
  const { boxWidth, boxHeight, boxDepth } = geometryProps;
  const { color } = materialProps;
  //_____
  const material = new THREE.MeshLambertMaterial({ color });
  // const material = new THREE.MeshBasicMaterial({ color });
  const boxesGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const ref = useRef();

  useFrame(({ clock }) => {
    let counter = 0;
    const time = clock.getElapsedTime() * 0.001;
    const t = clock.oldTime * 0.001;
    //___main loop
    for (let i = 0; i < fieldWidth; i++) {
      for (let j = 0; j < fieldHeight; j++) {
        const id = counter++;
        tempBoxes.position.set(fieldWidth / 2 - i, fieldHeight / 2 - j, 0);
        tempBoxes.rotation.z = t;
        tempBoxes.updateMatrix();
        ref.current.setMatrixAt(id, tempBoxes.matrix);
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      {...meshProps}
      ref={ref}
      args={[boxesGeometry, material, fieldWidth * fieldHeight]}
      name="FieldOfBoxes"
    ></instancedMesh>
  );
};

export default FieldOfBoxes;

/**
<FieldOfBoxes
meshProps={{instancesNumber: 100, fieldWidth: 10, fieldHeight:10  }}
/>


 */
