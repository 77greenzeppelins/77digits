import React from 'react';
/*
Components
*/
import BasicTextGeometry from './BasicTextGeometry';

/*
----------------------------------------------------------------------
*/
const Text3D = ({
  meshProps,
  materialProps,
  customeMaterial,
  textGeometryProps,
  text,
}) => {
  /*
  JSX
  */
  return (
    <mesh {...meshProps}>
      <BasicTextGeometry textGeometryProps={textGeometryProps} text={text} />
      {customeMaterial || <meshBasicMaterial {...materialProps} />}
    </mesh>
  );
};

export default Text3D;
