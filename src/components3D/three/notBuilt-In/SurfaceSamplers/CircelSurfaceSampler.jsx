import React, { useEffect } from 'react';
import * as THREE from 'three';
//_____
import MeshSurfaceSamplerTemplate from './MeshSurfaceSamplerTemplate';

const CircelSurfaceSampler = ({ groupProps }) => {
  //_____it's inputMesh for prop 'sampleredMesh'
  const geometry = new THREE.SphereBufferGeometry(1);
  const inputMesh = new THREE.Mesh(geometry);

  useEffect(() => {
    console.log('<CircelSurfaceSampler> / sphere:', inputMesh);
  }, [inputMesh]);

  return (
    <group {...groupProps}>
      <MeshSurfaceSamplerTemplate
        sampleredMesh={inputMesh}
        pointsProps={{ scale: 0.2 }}
        materialProps={{ color: [0.8, 0.1, 1], size: 0.01 }}
        particlesNumber={2000}
      />
    </group>
  );
};

export default CircelSurfaceSampler;
