import React from 'react';
import * as THREE from 'three';

const ExtrudedObject = ({
  meshProps,
  materialProps,
  customeMaterial,
  pointsCoordinatesArray,
  extrudeSettings,
}) => {
  /*
  Array of points for creating shape  
  */
  const shape = new THREE.Shape(pointsCoordinatesArray);

  /*
   JSX
   */
  return (
    <mesh {...meshProps}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      {customeMaterial || <meshBasicMaterial {...materialProps} />}
    </mesh>
  );
};

export default ExtrudedObject;
