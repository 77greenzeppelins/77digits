import React, { useEffect } from 'react';
/*
Components
*/
import CustomMeshWithMatcap from '../../../../../_meshesWithMatcap/CustomMeshWithMatcap';

/*
Spring Staff
*/
import { a } from '@react-spring/three';

/*
------------------------------------------------------------------------------
*/
// const Slide2Background = ({ scale, position }) => {
//   return (
//     <a.group scale={scale} position={position}>
//       <mesh scale={[0.2, 0.2, 0.2]} name="Slide2Background">
//         <planeGeometry args={[0.5, 0.5, 8, 8]} />
//         <meshBasicMaterial />
//       </mesh>
//     </a.group>
//   );
// };

const Slide2Background = ({ scale, position, bgId }) => {
  /*
  ...
  */
  useEffect(() => {
    console.log('Slide2Background / bgId', bgId);
  }, [bgId]);

  /*
  JSX
  */
  return (
    <a.group scale={scale} position-y={position}>
      <CustomMeshWithMatcap
        meshProps={{
          scale: [0.04, 0.04, 0.04],
          name: 'Slide1Background',
          identity: 1,
        }}
      >
        <sphereGeometry args={[10, 32, 32]} />
      </CustomMeshWithMatcap>
    </a.group>
  );
};

export default Slide2Background;

/*
<mesh
        scale= {[0.02, 0.02, 0.02]}
        name= 'Slide2Background'
    >
      <planeGeometry args={[0.5,0.5, 8, 8]} />
       <meshBasicMaterial/>
    </mesh

*/
