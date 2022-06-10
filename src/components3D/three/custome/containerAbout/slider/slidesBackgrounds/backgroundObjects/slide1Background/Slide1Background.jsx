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
--------------------------------------------------------------------------------
*/
const Slide1Background = ({
  scale,
  position,
  bgId,
  switcherCondition,
  apiScale,
  apiPosition,
  api,
}) => {
  /*
  ...
  */
  useEffect(() => {
    if (bgId === switcherCondition) {
      console.log('....Slide1Background');
    }
    api.start({
      apiScale: bgId === switcherCondition ? 1 : 0,
      apiPosition: bgId === switcherCondition ? 1 : 0,
      // config: { duration: 2000 },
    });
  }, [bgId, switcherCondition, api]);

  const sc = apiScale.to([0, 1], [0, 2]);
  const poY = apiPosition.to([0, 1], [0.2, 0]);

  /*
  JSX
  */
  return (
    <a.group
      scale={scale}
      //  position-y={poY}
    >
      <CustomMeshWithMatcap
        meshProps={{
          scale: [0.02, 0.02, 0.02],
          name: 'Slide1Background',
          identity: 1,
        }}
      >
        <sphereGeometry args={[4, 4, 4]} />
      </CustomMeshWithMatcap>
    </a.group>
  );
};

export default Slide1Background;
