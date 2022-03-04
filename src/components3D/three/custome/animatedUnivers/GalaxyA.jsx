import React, { useMemo } from 'react';

/*
-------------------------------------------------------------------------
*/
const GalaxyA = ({
  pointsProps,
  pointsNumber,
  galaxyRadious,
  branchesNumber,
  materialProps,
  branchSpiner,
  randomnessFactor,
}) => {
  /*
   */
  const [positions] = useMemo(() => {
    const positions = [];

    for (let i = 0; i < pointsNumber; i++) {
      /*
      "positions array" would have pointsNumber * 3 elements; 1000 pointsNumbers gives array.length = 3000;
      */
      const indexFactor = i * 3;
      /*
      initial branch length; having that branch we can take from it points and place it on other branches
      */
      const branchLength = Math.random() * galaxyRadious;
      /*
      from props we get number of branches, then within each iterations we can generate branche's index; optiions / indices: 0,1,2 ; 
      */
      const branchIndex = i % branchesNumber;
      /*
      in case of 3 branches radiansBetweenBranches = 2.0943951023931953; we actually divide circle into three pieces; this value show how width are angles between branches i.e inside each "pizza piece"
      */
      const radiansBetweenBranches = (2 * Math.PI) / branchesNumber;
      /*
      angleGenerator can have the following values:
      2.0943951023931953 * 0 = 0
      2.0943951023931953 * 1 = 2.0943951023931953;
      2.0943951023931953 * 2 = 4.1887902047863905
      */
      const angleGenerator = radiansBetweenBranches * branchIndex;
      /*
      spinFactor makes the line to spin; I don't know how...
      */
      const spinFactor = branchLength * branchSpiner;
      /*
      randomness actually gives a 3D-look of each branch;
      these values actually produce a kind of offsets for other value;
      in "space" when we apply addition we want to offset some other value 
      */
      const randomX = Math.random() * 0.1 - 0.1;
      const randomY = Math.random() * 0.1 - 0.1;
      const randomZ = Math.random() * 0.1 - 0.1;

      positions[indexFactor + 0] =
        Math.sin(angleGenerator + spinFactor) * branchLength + randomX;
      positions[indexFactor + 1] =
        Math.cos(angleGenerator + spinFactor) * branchLength + randomY;
      positions[indexFactor + 2] = 0 + randomZ;
    }

    return [new Float32Array(positions)];
  }, [
    pointsNumber,
    galaxyRadious,
    branchesNumber,
    branchSpiner,
    // randomnessFactor,
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

export default GalaxyA;

/*
Variant with "initial flat lines"
*/
// const [positions] = useMemo(() => {
//     const positions = [];

//     for (let i = 0; i < pointsNumber; i++) {
//       /*
//       "positions array" would have pointsNumber * 3 elements; 1000 pointsNumbers gives array.length = 3000;
//       */
//       const indexFactor = i * 3;
//       /*
//       initial branch length; having that branch we can take from it points and place it on other branches
//       */
//       const branchLength = Math.random() * galaxyRadious;
//       /*
//       from props we get number of branches, then within each iterations we can generate branche's index; optiions / indices: 0,1,2 ;
//       */
//       const branchIndex = i % branchesNumber;
//       /*
//       in case of 3 branches radiansBetweenBranches = 2.0943951023931953; we actually divide circle into three pieces; this value show how width are angles between branches i.e inside each "pizza piece"
//       */
//       const radiansBetweenBranches = (2 * Math.PI) / branchesNumber;
//       /*
//       angleGenerator can have the following values:
//       2.0943951023931953 * 0 = 0
//       2.0943951023931953 * 1 = 2.0943951023931953;
//       2.0943951023931953 * 2 = 4.1887902047863905
//       */
//       const angleGenerator = radiansBetweenBranches * branchIndex;
//       /*
//        */
//       const spinFactor = branchLength * branchSpiner;

//       positions[indexFactor + 0] =
//         Math.sin(angleGenerator + spinFactor) * branchLength;
//       positions[indexFactor + 1] =
//         Math.cos(angleGenerator + spinFactor) * branchLength;
//       positions[indexFactor + 2] = 0;
//     }

//     return [new Float32Array(positions)];
//   }, [pointsNumber, galaxyRadious, branchesNumber, branchSpiner]);
