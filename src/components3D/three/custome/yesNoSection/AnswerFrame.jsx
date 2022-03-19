import React from 'react';
/*
Vomponents
*/
import UniversalFrame from '../matcapFrames/UniversalFrame';

/*
-------------------------------------------------------------------------
*/
const AnswerFrame = ({ groupProps, thisMatcapMaterial, coneMeshProps }) => {
  return (
    <group {...groupProps}>
      <UniversalFrame
        portrait={true}
        format="portrait"
        groupProps={{ scale: [0.3, 0.3, 0.3], rotation: [0, 0, Math.PI * 0.5] }}
      />
      <mesh
        {...coneMeshProps}
        rotation={[Math.PI, 0, 0]}
        material={thisMatcapMaterial}
      >
        <coneGeometry args={[0.006, 0.1, 16]} />
      </mesh>
    </group>
  );
};

export default AnswerFrame;
