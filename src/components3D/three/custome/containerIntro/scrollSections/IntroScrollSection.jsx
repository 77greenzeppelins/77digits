import React from 'react';
/*
Components
*/
import CustomMeshWithMatcap from '../../_meshesWithMatcap/CustomMeshWithMatcap';
import ArrowSharpGeometry from '../../extrudedObjects/arrows/arrowSharp/ArrowSharpGeometry';

const IntroScrollSection = () => {
  return (
    <>
      <group
        position={[0, -0.5, 0.5]}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, 0, -0.75 * Math.PI]}
      >
        <CustomMeshWithMatcap>
          <ArrowSharpGeometry />
        </CustomMeshWithMatcap>
      </group>
      <group
        position={[0, -0.46, 0.5]}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, 0, -0.75 * Math.PI]}
      >
        <CustomMeshWithMatcap>
          <ArrowSharpGeometry />
        </CustomMeshWithMatcap>
      </group>
      <group
        position={[0, -0.42, 0.5]}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, 0, -0.75 * Math.PI]}
      >
        <CustomMeshWithMatcap>
          <ArrowSharpGeometry />
        </CustomMeshWithMatcap>
      </group>
    </>
  );
};

export default IntroScrollSection;
