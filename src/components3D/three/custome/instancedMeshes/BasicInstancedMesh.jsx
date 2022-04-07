import React, { useRef, useLayoutEffect, useEffect } from 'react';
import * as THREE from 'three';

/*
-------------------------------------------------------------------------
Version for static, predefined layouts; i.e. there is an component whose instances have pre-defined layout stored in some external .js file
*/
const BasicInstancedMesh = ({
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
    const transform = new THREE.Matrix4();

    layoutData.map((item, index) => {
      transform.setPosition(...item.position);
      ref.current.setMatrixAt(index, transform);
    });
  }, [layoutData]);
  /*
  JSX
  */

  return (
    <instancedMesh ref={ref} args={[null, null, layoutData.length]}>
      {geometry || <boxGeometry args={[0.1, 0.1, 0.1]} />}
      {material || <meshBasicMaterial />}
    </instancedMesh>
  );
};

export default BasicInstancedMesh;
/*
Doesn't work:   
return <instancedMesh ref={ref} args={[geometry, material, layoutData.length]}/>
*/

/*
Used in:
<InstancedMusicNotes>
*/
