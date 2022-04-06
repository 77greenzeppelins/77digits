import React from 'react';
/*
Components
*/
import Text3D from '../../../text3D/Text3D';
import BasicUseMatcapTexture from '../../../matcapMaterials/BasicUseMatcapTexture';

/*
----------------------------------------------------------------------------
*/
const UniqueText3D = () => {
  /*
  JSX
  */
  return (
    // <>
    <Text3D
      text="?"
      customeMaterial={<BasicUseMatcapTexture />}
      meshProps={{
        position: [-0.1, -0.2, 0.05],
        rotation: [0, -0.2 * Math.PI, 0],
      }}
      textGeometryProps={{
        size: 0.2,
        height: 0.03,
        // curveSegments: 2,
        bevelThickness: 0.01,
        bevelSize: 0.005,
        bevelEnabled: true,
      }}
    />
    // </>
  );
};

export default UniqueText3D;
