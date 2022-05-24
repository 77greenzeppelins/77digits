import React, { useRef, useEffect } from 'react';
import { Object3D } from 'three';
/*
Components
*/
import BasicUseMatcapTexture from '../../../../../../../../matcapMaterials/BasicUseMatcapTexture';
/*
Basic Data
*/
import { meshProps, coordinates } from './circledPathData';
/*
...
*/
const instance = new Object3D();
// const sphere = new SphereGeometry(0.01, 7, 7);

/*
--------------------------------------------------------------
*/
const CircledPath = () => {
  /*
  References
  */
  const rootMesh = useRef();
  /*
  InstancedMesh Layout
  */
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
      //   instance.rotation.set(0.5 * Math.PI, 0, 0);
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
      //   geometry={sphere}
    >
      <sphereGeometry args={[0.01, 7, 7]} />
      <BasicUseMatcapTexture />
    </instancedMesh>
  );
};

export default CircledPath;
