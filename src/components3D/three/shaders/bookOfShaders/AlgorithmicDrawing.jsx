import React, { useRef, useEffect, useMemo } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
//_____
import { AlgorithmicDrawingShaderMaterial } from './AlgorithmicDrawingShaderMaterial';
extend({ AlgorithmicDrawingShaderMaterial });

const AlgorithmicDrawing = ({ meshProps, planeArgs, materialProps }) => {
  //_____
  const { size } = useThree();
  //_____References
  const geometry = useRef();
  //_____
  const randomValues = useMemo(() => {
    const counts = 529; //it's geometry.current.attributes.position.count;
    const randomValues = new Float32Array(counts);
    for (let i = 0; i < counts; i++) {
      randomValues[i] = Math.random();
    }
    return randomValues;
  }, []);
  //_____
  useEffect(() => {
    console.log(
      '<AlgorithmicDrawing> / geometry.current.attributes.position.count:',
      geometry.current.attributes.position.count
    );
  }, []);
  return (
    <mesh {...meshProps}>
      <planeGeometry ref={geometry} {...planeArgs}>
        <bufferAttribute
          attachObject={['attributes', 'aRandom']}
          array={randomValues}
          count={randomValues.length}
          itemSize={1}
        />
      </planeGeometry>
      <algorithmicDrawingShaderMaterial
        {...materialProps}
        uResolution={[size.width, size.height]}
      />
    </mesh>
  );
};

export default AlgorithmicDrawing;

/* <AlgorithmicDrawing 
              meshProps={{    
              position: [0, 0, -0.2],
              name: 'AlgorithmicDrawing',
              }} 
              planeArgs={{args:[1,1,1,1]}}

              materialProps={{wireframe:false}}
/> */
