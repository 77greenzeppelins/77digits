/*
main inspiration: 
https://medium.com/cortico/3d-data-visualization-with-react-and-three-js-7272fb6de432

secondary inspirations:
https://tympanus.net/codrops/2020/12/17/recreating-a-dave-whyte-animation-in-react-three-fiber/
https://onion2k.hashnode.dev/drawing-lots-and-lots-of-cubes-with-react-three-fiber
*/

import React, { useEffect, useRef } from 'react';
import BasicUseMatcapTexture from '../../../matcapMaterials/BasicUseMatcapTexture';
import { Object3D, Matrix4 } from 'three';
/*
...
*/

/*
Data
*/
import { meshProps, coordinates } from './circledPathData';

// const data = new Array(100).fill(0).map((x, i) => ({ id: i }));

const instance = new Object3D();
// const transform = new Matrix4();

/*
--------------------------------------------------------------
*/
const CircledPath = ({ trigger }) => {
  /*
  References
  */
  const rootMesh = useRef();
  /*
  ...
  */
  //   useEffect(() => {
  //     for (let i = 1; i < data.length; i++) {
  //       const x = (i % 10) * 0.05;
  //       const y = Math.floor(i / 10) * 0.05;
  //       const z = 0;
  //       transform.setPosition(x, y, z);
  //       rootMesh.current.setMatrixAt(i, transform);
  //     }
  //     rootMesh.current.instanceMatrix.needsUpdate = true;
  //   }, []);

  useEffect(() => {
    // console.log('CircledPath / data:', data);
    for (let i = 1; i < coordinates.length; i++) {
      //   const x = (i % 10) * 0.05;
      //   const y = Math.floor(i / 10) * 0.05;
      //   const z = 0;
      instance.position.set(
        coordinates[i][0],
        coordinates[i][1],
        coordinates[i][2]
      );
      instance.rotation.set(0.5 * Math.PI, 0, 0);
      instance.updateMatrix();
      rootMesh.current.setMatrixAt(i, instance.matrix);
    }
    rootMesh.current.instanceMatrix.needsUpdate = true;
  }, []);

  /*
  JSX
  */
  return (
    <instancedMesh
      {...meshProps}
      ref={rootMesh}
      args={[null, null, coordinates.length]}
      frustumCulled={false}
    >
      <sphereBufferGeometry args={[0.01, 7, 7]} />
      <BasicUseMatcapTexture />
    </instancedMesh>
  );
};

export default CircledPath;
