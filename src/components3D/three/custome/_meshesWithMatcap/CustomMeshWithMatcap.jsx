import React from 'react';
/*
...
*/
import MatcapMaterialInMemo from '../matcapMaterials/MatcapMaterialInMemo';

/*
--------------------------------------------------------------------------
*/
const CustomMeshWithMatcap = props => {
  /*
  JSX
  */
  return (
    <mesh {...props.meshProps} material={MatcapMaterialInMemo()}>
      {props.children}
    </mesh>
  );
};

export default CustomMeshWithMatcap;
