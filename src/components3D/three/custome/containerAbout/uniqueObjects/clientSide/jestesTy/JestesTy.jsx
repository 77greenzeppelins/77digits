import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import JestesTyText from '../../../../_meshesWithMatcap/collection/jestesTyText/JestesTyText';

const JestesTy = ({ trigger }) => {
  /*
  References Section
  */
  const group = useRef();
  /*
  useFrame Section
  */
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    // group.current.rotation.x = (-0.1 * Math.PI + Math.cos(t / 4)) / 6;
    // group.current.rotation.y = 0.1 * Math.PI + Math.sin(t / 4) / 6;
    if (trigger) {
      group.current.rotation.z = (0.1 * Math.PI + Math.sin(t / 1.5)) / 15;
      // group.current.position.y = Math.sin(t / 2.5) / 5;
      //   console.log(trigger);
    }
  });
  /*
  JSX
  */
  return (
    <group
      ref={group}
      // scale={[0.18, 0.18, 0.18]}
      rotation={[0, 0, 0.14 * Math.PI]}
      position={[0, -0.13, 0.04]}
    >
      <JestesTyText />
    </group>
  );
};

export default JestesTy;
