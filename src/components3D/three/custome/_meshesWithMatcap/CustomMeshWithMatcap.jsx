import React from 'react';
/*
...
*/
import MatcapMaterialInMemo from '../matcapMaterials/MatcapMaterialInMemo';

/*
--------------------------------------------------------------------------
main idea of this component: just send me any geometry ;-)
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
