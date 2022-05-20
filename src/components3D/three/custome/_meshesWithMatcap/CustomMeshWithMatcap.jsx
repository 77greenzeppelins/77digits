import React from 'react';
/*
...
*/
import MatcapMaterialInMemo from '../matcapMaterials/MatcapMaterialInMemo';

/*
--------------------------------------------------------------------------
main idea of this component: just send me any geometry ;-)
*/
const CustomMeshWithMatcap = React.forwardRef((props, ref) => {
  /*
  JSX
  */
  return (
    <mesh ref={ref} {...props.meshProps} material={MatcapMaterialInMemo()}>
      {props.children}
    </mesh>
  );
});

export default CustomMeshWithMatcap;
/*
How to use it:
<SomeComponent>
return (
    <CustomMeshWithMatcap ref={ref} meshProps={meshProps}>
      <TextGeometryFromFont
        fontExtrudeSettings={exclamationMarkConfig.fontExtrudeSettings}
        text={exclamationMarkConfig.text}
      />
    </CustomMeshWithMatcap>
  );
*/
