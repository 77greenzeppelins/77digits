import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PlaneGeometry } from 'three';
/*
Global State
*/
import { canvasState } from '../../../../../../../../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Basic Data
*/
// import { coordinates } from './starsData';
/*
Shaders Staff
*/
import { extend } from '@react-three/fiber';
import { StarsShaderMaterial } from './starsShader';
extend({ StarsShaderMaterial });
/*
InstancedMesh Staff
*/

const plane = new PlaneGeometry(0.03, 0.03, 1, 1);

/*
--------------------------------------------------------------------------
*/
const Stars = () => {
  /*
  References
  */
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  const mesh4 = useRef();
  const mesh5 = useRef();

  const material = useRef();
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  ...
  */
  useFrame(({ clock }) => {
    material.current.uniforms.uTime.value = clock.getElapsedTime();
    if (
      canvasGlobalState.currentContainer === 'aboutContainer' &&
      canvasGlobalState.isClientSideVisible === true
    ) {
      // console.log('.........');
      // const scaleValue = Math.abs(Math.sin(clock.getElapsedTime() * 0.2));
      // const scaleValue2 = Math.abs(Math.sin(clock.getElapsedTime() * 0.4));

      // console.log('scaleValue', scaleValue);
      mesh1.current.scale.x = Math.abs(Math.sin(clock.getElapsedTime() * 0.4));
      mesh1.current.scale.y = Math.abs(Math.sin(clock.getElapsedTime() * 0.4));
      // mesh2.current.scale.x = scaleValue * 1.5;
      // mesh2.current.scale.y = scaleValue * 1.5;
      mesh3.current.scale.x = Math.abs(Math.sin(clock.getElapsedTime() * 0.2));
      mesh3.current.scale.y = Math.abs(Math.sin(clock.getElapsedTime() * 0.2));
      mesh4.current.scale.x = Math.abs(Math.sin(clock.getElapsedTime() * 0.3));
      mesh4.current.scale.y = Math.abs(Math.sin(clock.getElapsedTime() * 0.3));
      mesh5.current.scale.x = Math.abs(Math.sin(clock.getElapsedTime() * 0.15));
      mesh5.current.scale.y = Math.abs(Math.sin(clock.getElapsedTime() * 0.15));

      mesh2.current.position.y =
        -0.6 - Math.sin(clock.getElapsedTime() * 0.3) * 0.01;
      mesh2.current.position.x =
        0.09 - Math.cos(clock.getElapsedTime() * 0.3) * 0.01;
    }
  });

  /*
  JSX
  */
  return (
    <>
      <mesh ref={mesh1} position={[-0.05, -0.68, 0.001]} geometry={plane}>
        <starsShaderMaterial ref={material} transparent={true} />
      </mesh>
      <mesh ref={mesh2} position={[0.09, -0.6, 0.001]} geometry={plane}>
        <starsShaderMaterial ref={material} transparent={true} />
      </mesh>
      <mesh ref={mesh3} position={[0.18, -0.61, 0.001]} geometry={plane}>
        <starsShaderMaterial ref={material} transparent={true} />
      </mesh>
      <mesh ref={mesh4} position={[0.17, -0.53, 0.001]} geometry={plane}>
        <starsShaderMaterial ref={material} transparent={true} />
      </mesh>
      <mesh ref={mesh5} position={[0.22, -0.53, 0.001]} geometry={plane}>
        <starsShaderMaterial ref={material} transparent={true} />
      </mesh>
    </>
  );
};

export default Stars;

/*
___1_ Initially I wantesd to use "Bruno particles" yet <points> always face the camera; 
return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={pointsPosition.length / 3}
          array={pointsPosition}
          itemSize={3}
        />
         <bufferAttribute
          attachObject={['attributes', 'aScale']}
          count={pointsSize.length / 1}
          array={pointsSize}
          itemSize={1}
        /> 
      </bufferGeometry>
      <pointsMaterial color={[0, 0, 0.3]} size={0.02}
      //__"sizeAttenuation" is tipical for "sprite", a plane that always faces towards the camera,
      
       sizeAttenuation={true} />
    </points>
  );
*/

/*
  InstancedMesh Layout
*/

// const instance = new Object3D();

// const rootMesh = useRef();

// <instancedMesh ref={rootMesh} args={[null, null, coordinates.length]}>
//   <planeGeometry args={[0.05, 0.05, 1, 1]} />
//   <starsShaderMaterial ref={material} transparent={true} />
//   {/* <meshBasicMaterial color={[0, 0, 1]} /> */}
// </instancedMesh>

// useEffect(() => {
//   for (let i = 1; i < coordinates.length; i++) {
//     //   const x = (i % 10) * 0.05;
//     //   const y = Math.floor(i / 10) * 0.05;
//     //   const z = 0;
//     instance.position.set(
//       coordinates[i][0],
//       coordinates[i][1],
//       coordinates[i][2]
//     );
//     instance.rotation.set(0.5 * Math.PI, 0, 0);
//     instance.updateMatrix();
//     rootMesh.current.setMatrixAt(i, instance.matrix);
//   }
//   rootMesh.current.instanceMatrix.needsUpdate = true;

//   console.log('rootMesh.current:', rootMesh.current);
// }, []);
