import React, { useMemo } from 'react';

/*
-------------------------------------------------------------------------------
*/
const ConstelationA = ({ pointsProps, pointsNumber, materialProps }) => {
  /*
   */
  const [positions] = useMemo(() => {
    const positions = [];

    for (let i = 0; i < pointsNumber; i++) {
      /*
      "positions array" would have pointsNumber * 3 elements; 1000 pointsNumbers gives array.length = 3000;
      */
      const indexFactor = i * 3;
      positions[indexFactor + 0] = Math.random() * 4 - 2;
      positions[indexFactor + 1] = Math.random() * 4 - 2;
      positions[indexFactor + 2] = Math.random() - 0.5;
    }

    return [new Float32Array(positions)];
  }, [
    pointsNumber,
    //  branches, radious, spin, randomness
  ]);

  return (
    <points {...pointsProps}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial {...materialProps} />
    </points>
  );
};

export default ConstelationA;
