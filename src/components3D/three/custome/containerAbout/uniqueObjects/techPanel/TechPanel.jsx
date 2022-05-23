import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

/*
Basic Data
*/
import { mesh1Data, mesh2Data, mesh3Data } from './techPanelData';

/*
Reuseable Staff
*/
const torus = new THREE.TorusGeometry(...mesh2Data.geometryProps);
const basicMaterial = new THREE.MeshBasicMaterial({
  ...mesh2Data.materialProps,
});

const TechPanel = ({ trigger }) => {
  /*
  References
  */
  const mesh1 = useRef();
  /*
  useFrame Section
  */
  // let prevTime = 0,
  //   currTime;

  let tAnimation;

  useFrame(({ clock }) => {
    tAnimation = clock.getElapsedTime();
    if (tAnimation.toFixed(0) % 9 === 0) {
      mesh1.current.rotation.z += 0.01;
      // mesh1.current.rotation.z += Math.sin(Math.PI * 0.1);
    }
    if (tAnimation.toFixed(0) % 4 === 0) {
      mesh1.current.rotation.z -= 0.01;
      // mesh1.current.rotation.z += Math.sin(Math.PI * 0.1);
    }
    // currTime = clock.getElapsedTime();
    // if (currTime - prevTime > 5) {
    //   // mesh1.current.position.set(someHeavyComputations());
    //   mesh1.current.rotation.z += 0.004;
    //   prevTime = clock.getElapsedTime();
    // }

    // mesh1.current.rotation.z += 0.004;
  });
  /*
  ...
  */
  /*
  JSX
  */
  return (
    <>
      <mesh ref={mesh1} {...mesh1Data.meshData}>
        <ringGeometry {...mesh1Data.geometryData} />
        <meshBasicMaterial {...mesh1Data.materialData} />
      </mesh>
      <mesh
        {...mesh2Data.meshProps}
        geometry={torus}
        material={basicMaterial}
      />
      <mesh
        {...mesh3Data.meshProps}
        geometry={torus}
        material={basicMaterial}
      />
    </>
  );
};

export default TechPanel;
