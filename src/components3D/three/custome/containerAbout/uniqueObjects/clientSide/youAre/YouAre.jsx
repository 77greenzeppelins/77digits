import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import QuestionMark from '../../../../_meshesWithMatcap/collection/questionMark/QuestionMark';

/*
------------------------------------------------------------------------
*/
const YouAre = ({ trigger }) => {
  /*
  References Section
  */
  const group = useRef();
  /*
  useFrame Section
  */
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    // group.current.rotation.x = (0.5 * Math.PI + Math.cos(t / 4)) / 4;
    // group.current.rotation.y = 0.1 * Math.PI + Math.sin(t / 4) / 6;
    if (trigger) {
      group.current.rotation.z = (0.1 * Math.PI + Math.sin(t / 1.5)) / 15;
      group.current.position.y = Math.sin(t / 2.5) / 15 - 0.025;
      // console.log(t);
    }
  });
  /*
  JSX
  */
  return (
    <group
      ref={group}
      scale={[0.5, 0.5, 0.5]}
      rotation={[0, 0.18 * Math.PI, 0.1 * Math.PI]}
      position={[0.15, -0.13, 0.1]}
    >
      <QuestionMark />
    </group>
  );
};

export default YouAre;
