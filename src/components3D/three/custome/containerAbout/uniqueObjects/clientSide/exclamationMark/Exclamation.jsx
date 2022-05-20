import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import ExclamationMark from '../../../../_meshesWithMatcap/collection/exclamationMark/ExclamationMark';

const Exclamation = ({ trigger }) => {
  /*
  References; for animations sake...
  */
  const exclamationMark = useRef();
  // const group = useRef();
  /*
  useFrame Section (from <JestesTy>)
  */
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    // exclamationMark.current.rotation.x = (-0.1 * Math.PI + Math.cos(t / 4)) / 6;
    // group.current.rotation.y = 0.2 * Math.PI + Math.sin(t / 4) / 4;
    // exclamationMark.current.rotation.y += Math.sin(0.005);
    if (trigger) {
      exclamationMark.current.rotation.z =
        (0.1 * Math.PI + Math.sin(t / 1.5)) / 15;
      exclamationMark.current.position.y = Math.sin(t / 3.5) / 10;
      //   console.log(trigger);
    }
  });

  /*
  JSX
  */
  return (
    <ExclamationMark
      ref={exclamationMark}
      meshProps={{
        name: 'meshOfExclamationMarkInUniqueObjects',
        position: [0.25, 0, 0.05],
        rotation: [0, 0.1 * Math.PI, 0],
        scale: [0.4, 0.4, 0.4],
      }}
    />
  );
};

export default Exclamation;
