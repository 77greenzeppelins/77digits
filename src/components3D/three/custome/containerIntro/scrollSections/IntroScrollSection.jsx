import React from 'react';
/*
Components
*/
import CustomMeshWithMatcap from '../../_meshesWithMatcap/CustomMeshWithMatcap';
import ArrowSharpHorizontalGeometry from '../../extrudedObjects/arrows/arrowSharp/ArrowSharpHorizontalGeometry';

/*
----------------------------------------------------------------------
*/
const IntroScrollSection = () => {
  return (
    <>
      <group
        position={[0, -0.44, 0.5]}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, 0, -0.5 * Math.PI]}
      >
        <CustomMeshWithMatcap>
          <ArrowSharpHorizontalGeometry />
        </CustomMeshWithMatcap>
      </group>
      <group
        position={[0, -0.485, 0.5]}
        scale={[0.04, 0.04, 0.04]}
        rotation={[0, 0, -0.5 * Math.PI]}
      >
        <CustomMeshWithMatcap>
          <ArrowSharpHorizontalGeometry />
        </CustomMeshWithMatcap>
      </group>
      <group
        position={[0, -0.52, 0.5]}
        scale={[0.03, 0.03, 0.03]}
        rotation={[0, 0, -0.5 * Math.PI]}
      >
        <CustomMeshWithMatcap>
          <ArrowSharpHorizontalGeometry />
        </CustomMeshWithMatcap>
      </group>
    </>
  );
};

export default IntroScrollSection;
