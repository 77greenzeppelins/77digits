import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
/*
Assets
*/
import image from '../../../../../../../assets/textures/containerAbout_Slide0_medicine_detail_1_40_40.webp';
/*
---------------------------------------------------------------------------
*/
const MedicineDatail = ({ trigger }) => {
  /*
  References
  */
  const mesh = useRef();
  /*
  useLoader Section  
  */
  const texture = useLoader(THREE.TextureLoader, image);
  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    if (trigger) {
      mesh.current.rotation.z += 0.004;
      mesh.current.position.y =
        -0.35 - Math.sin(clock.getElapsedTime() * 0.3) * 0.05;
      mesh.current.position.x =
        -0.25 - Math.cos(clock.getElapsedTime() * 0.3) * 0.05;
    }

    //mesh.current.position.lerp(vec, 0.1))
    // console.log(mesh.current.position.y);
  });

  const onClickHandler = () => {
    console.log('.................');
  };

  /*
  JSX
  */
  return (
    <mesh onClick={onClickHandler} ref={mesh} position-z={0.0105}>
      <planeGeometry args={[0.08, 0.08, 1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default MedicineDatail;
