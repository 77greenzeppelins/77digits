import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import TechPanelFrame from '../../../../../../../../_glbComponents/techPanel/TechPanelFrame';
/*
Basic Data
*/
import { mesh1Data, mesh2Data } from './techPanelData';

/*
---------------------------------------------------------------------------
*/
const TechPanel = () => {
  /*
  References
  */
  const group = useRef();

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
  useEffect(() => {
    console.log('group.current:', group.current);
  }, []);

  /*
  JSX
  */
  return (
    <group ref={group}>
      <mesh ref={mesh1} {...mesh1Data.meshData}>
        <ringGeometry {...mesh1Data.geometryData} />
        <meshBasicMaterial
          {...mesh1Data.materialData}
          // color={[0.2, 0.9, 0.95]}
        />
      </mesh>

      {/* <TechPanelFrame
        meshProps={{ position: [0, -0.49, 0.01], scale: [0.3, 0.3, 0.3] }}
        materialProps={{ ...mesh2Data.materialProps }}
      /> */}
    </group>
  );
};

export default TechPanel;
