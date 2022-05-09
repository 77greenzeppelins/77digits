// import React, { useRef } from 'react';
// import * as THREE from 'three';
// import { useFrame } from '@react-three/fiber';
// /*
// ........
// */
// const temp3DObject = new THREE.Object3D();
// const tempMatrix = new THREE.Matrix4();
// const tempVector = new THREE.Vector3();

// // const justLerp = (val1, val2, interpolant) => {
// //   return val1 * (1 - interpolant) + val2 * interpolant;
// // };

// /*
// ----------------------------------------------------------------------------
// */
// const AnimatedInstancedMesh = ({
//   geometry,
//   material,
//   /*
//   This component requires array of data to built layout
//   */
//   layoutData,
// }) => {
//   /*
//   References
//   */
//   const ref = useRef();
//   /*
//   useLayoutEffect Section
//   */
//   //   useLayoutEffect(() => {
//   //     layoutData.map((item, index) => {
//   //       temp3DObject.position.set(...item.position);
//   //       temp3DObject.scale.set(...item.scale);
//   //       temp3DObject.updateMatrix();
//   //       ref.current.setMatrixAt(index, temp3DObject.matrix);
//   //     });
//   //   }, [layoutData]);
//   /*
//   useFrame Animations Section
//   */
//   useFrame(state => {
//     /*
//     "timeToggler" chnges between [0,1] every 5 second
//     */
//     // const timeToggler = Math.floor(state.clock.getElapsedTime() / 5) % 2;
//     // console.log('AnimatedInstancedMesh / timeToggler:', timeToggler);
//     /*
//     timeAnimator
//     */
//     // const timeInterpolant =
//     //   0.5 - Math.sin(state.clock.getElapsedTime() * 2) * 0.5;
//     // console.log('AnimatedInstancedMesh / timeInterpolant:', timeInterpolant);
//     /*
//     ...
//     */
//     layoutData.map((item, index) => {
//       ref.current.getMatrixAt(index, tempMatrix);
//       tempVector.setFromMatrixPosition(tempMatrix);
//       /*
//       ...
//       */
//       // const timeInterpolant =
//       //   0.5 -
//       //   Math.sin(state.clock.getElapsedTime() * 0.4 * (index + 0.2)) * 0.5;
//       /*
//       build layout
//       */
//       temp3DObject.position.set(...item.position);
//       temp3DObject.scale.set(...item.scale);
//       item.rotation && temp3DObject.rotation.set(...item.rotation);
//       /*
//       build layout using justjustLerp()
//       */
//       //   temp3DObject.rotation.x = justLerp(
//       //     item.rotationStart[0],
//       //     item.rotationEnd[0],
//       //     timeInterpolant
//       //   );
//       //   temp3DObject.rotation.y = justLerp(
//       //     item.rotationStart[1],
//       //     item.rotationEnd[1],
//       //     timeInterpolant
//       //   );
//       //   temp3DObject.rotation.z = justLerp(
//       //     item.rotationStart[2],
//       //     item.rotationEnd[2],
//       //     timeInterpolant
//       //   );

//       temp3DObject.updateMatrix();
//       ref.current.setMatrixAt(index, temp3DObject.matrix);
//     });
//     ref.current.instanceMatrix.needsUpdate = true;
//   });
//   /*
//   JSX
//   */
//   return (
//     <instancedMesh ref={ref} args={[null, null, layoutData.length]}>
//       {geometry || <boxGeometry args={[0.1, 0.1, 0.1]} />}
//       {material || <meshBasicMaterial />}
//     </instancedMesh>
//   );
// };

// export default AnimatedInstancedMesh;
