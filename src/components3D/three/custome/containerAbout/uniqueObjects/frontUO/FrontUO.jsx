import React from 'react';
/*
Components
*/
import QuestionMark from '../../../_meshesWithMatcap/collection/questionMark/QuestionMark';

const FrontUO = () => {
  return (
    <group
      scale={[0.5, 0.5, 0.5]}
      rotation={[0.17 * Math.PI, 0.18 * Math.PI, 0.1 * Math.PI]}
      position={[0.2, -0.13, 0.032]}
    >
      <QuestionMark />
    </group>
  );
};

export default FrontUO;
