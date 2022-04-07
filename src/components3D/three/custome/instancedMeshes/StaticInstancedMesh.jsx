import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
/*
........
*/
const temp3DObject = new THREE.Object3D();
/*
Linear Interpolation Staff
*/
const justLerp = (val1, val2, interpolant) => {
  return val1 * (1 - interpolant) + val2 * interpolant;
};

const StaticInstancedMesh = ({
  geometry,
  material,
  /*
  This component requires array of data to built layout
  */
  layoutData,
}) => {
  /*
  References
  */
  const ref = useRef();
  /*
  useLayoutEffect Section
  */
  useLayoutEffect(() => {
    layoutData.map((item, index) => {
      temp3DObject.position.set(...item.position);
      temp3DObject.scale.set(...item.scale);
      temp3DObject.updateMatrix();
      ref.current.setMatrixAt(index, temp3DObject.matrix);
    });
  }, [layoutData]);

  return (
    <instancedMesh ref={ref} args={[null, null, layoutData.length]}>
      {geometry || <boxGeometry args={[0.1, 0.1, 0.1]} />}
      {material || <meshBasicMaterial />}
    </instancedMesh>
  );
};

export default StaticInstancedMesh;
