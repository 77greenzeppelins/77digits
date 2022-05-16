import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
// import { TransformControls } from '@react-three/drei';
/*
Components
*/
import CustomMeshWithMatcap from '../../CustomMeshWithMatcap';
import TextGeometryFromFont from '../../../extrudedObjects/text/TextGeometryFromFont';
/*
Basic Data
*/
import { jestesTyTextConfig } from './jestesTyTextData';

/*
------------------------------------------------------------------------
*/
const JestesTyText = ({ trigger }) => {
  /*
  References
  */
  const mesh = useRef();
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
      group.current.position.y = Math.sin(t / 3.5) / 5;
      //   console.log(trigger);
    }
  });
  /*
  ...
  */
  useEffect(() => {
    console.log(
      'JestesTyText / mesh.current.geometry.boundingBox',
      mesh.current.geometry.boundingBox
    );
  }, []);

  /*
 JSX
 */
  return (
    <group ref={group}>
      <CustomMeshWithMatcap ref={mesh} meshProps={jestesTyTextConfig.meshProps}>
        <TextGeometryFromFont
          fontExtrudeSettings={jestesTyTextConfig.fontExtrudeSettings}
          text={jestesTyTextConfig.text}
        />
      </CustomMeshWithMatcap>
    </group>
  );
};

export default JestesTyText;
