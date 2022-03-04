import React, { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
//_____
import {
  extrudeSettings,
  hardcodedSeven,
} from '../fieldOfSeven/geometryOfSeven';

const tempObject = new THREE.Object3D();
// const data = Array.from(100).fill(0);

const BoxOfSeven = ({ meshProps, materialProps, thisMaterial }) => {
  const meshRef = useRef();
  const prevRef = useRef();

  useEffect(() => {
    let i = 0;
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++;
          tempObject.position.set(x, y, z);
          tempObject.rotation.y = Math.PI * Math.random();

          tempObject.updateMatrix();
          meshRef.current.setMatrixAt(id, tempObject.matrix);
        }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame(state => {
    const time = state.clock.getElapsedTime();
    // meshRef.current.rotation.x = Math.sin(time / 4);
    // meshRef.current.rotation.y = Math.sin(time / 2);
    //     let i = 0;
    //     for (let x = 0; x < 5; x++)
    //       for (let y = 0; y < 40; y++)
    //         for (let z = 0; z < 5; z++) {
    //           const id = i++;
    //           tempObject.position.set(2 - x, 5 - y, 5 - z);
    //           //   tempObject.position.set(x, y, z);

    tempObject.rotation.y = Math.sin(time) + Math.sin(time) + Math.sin(time);
    tempObject.rotation.z = tempObject.rotation.y * 2;

    //           //_____hover tricks
    //           // if (hovered !== prevRef.Current) {
    //           //   tempColor
    //           //     .set(id === hovered ? 'white' : data[id].color)
    //           //     .toArray(colorArray, id * 3);
    //           //   meshRef.current.geometry.attributes.color.needsUpdate = true;
    //           // }

    //           // const scale = (data[id].scale = THREE.MathUtils.lerp(
    //           //   data[id].scale,
    //           //   id === hovered ? 3 : 1,
    //           //   0.1
    //           // ));
    //           // tempObject.scale.setScalar(scale);
    //   tempObject.updateMatrix();
    //   meshRef.current.setMatrixAt(id, tempObject.matrix);
    //         }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* <pointLight /> */}

      <instancedMesh
        {...meshProps}
        ref={meshRef}
        args={[null, null, 1000]}
        //   onPointerMove={e => set(e.instanceId)}
        //   onPointerOut={e => set(undefined)}
        name="BoxOfSeven"
      >
        <extrudeGeometry args={[hardcodedSeven, extrudeSettings]} />
        {thisMaterial || (
          <meshStandardMaterial
            color={[0.9, 0.7, 0.99]}
            metalness={0.5}
            roughness={0.5}
          />
        )}
        {/* <meshBasicMaterial {...materialProps} /> */}
        {/* <meshPhongMaterial
      //vertexColors={THREE.VertexColors} //use if "instancedBufferAttribute" is used
      /> */}
      </instancedMesh>
    </group>
  );
};

export default BoxOfSeven;
