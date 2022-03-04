/*
Cube filled with triangles
*/
import React, { useMemo } from 'react';

const InteractiveBurffergeometry = ({
  meshProps,
  geometryProps,
  materialProps,
}) => {
  /*
  _____Basic  Variables
  n & n2 specifies triangles spread in the cube 
  b & d2 spacifies individual triangle size
  */
  const [trianglesNumber, n, n2, d, d2] = [5000, 800, 400, 120, 60];

  const [position, normals, colors] = useMemo(() => {
    const position = [];
    const normals = [];
    const colors = [];

    for (let i = 0; i < trianglesNumber * 3; i += 9) {}

    return [];
  }, [trianglesNumber]);

  //_____
  return (
    <mesh {...meshProps}>
      <bufferGeometry {...geometryProps}>
        {/* <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        /> */}
      </bufferGeometry>
      <meshBasicMaterial {...materialProps} />
    </mesh>
  );
};

export default InteractiveBurffergeometry;
