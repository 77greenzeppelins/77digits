import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
extend({ MeshSurfaceSampler });

const MeshSurfaceSamplerTemplate = ({
  pointsProps,
  materialProps,
  sampleredMesh,
  particlesNumber,
}) => {
  //_____Default Input Geometry
  // const geometry = new THREE.TorusKnotGeometry(1, 0.3, 50, 16);
  // const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  // const defaultMesh = new THREE.Mesh(geometry);

  const geometry = new THREE.BoxBufferGeometry(1);
  // const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const defaultMesh = new THREE.Mesh(geometry);

  // useEffect(() => {
  //   console.log('sampleredMesh:', sampleredMesh);
  //   console.log('sphere:', sphere);
  // }, [sphere, sampleredMesh]);

  //_______________________________________________________
  // _____Input Geometry
  const inputMesh = sampleredMesh || defaultMesh;

  //_____References
  // const group = useRef();
  //   const basicMesh = useRef();
  //   const surfaceSamplers = useRef();
  //_____

  //_____Sampler Instance
  const sampler = new MeshSurfaceSampler(inputMesh).build();

  //_____Sampler's samples = create array with position coordinates for each sample
  const [positions] = useMemo(() => {
    const positions = [];
    for (let i = 0; i < particlesNumber * 3; i += 3) {
      const tempPosition = new THREE.Vector3();
      //_____sample() selects random point located on input geometry's surface and specifies its position = generates some vector
      sampler.sample(tempPosition);
      //_____pass tempPosition's data (in form of vector) to 'position' array
      positions[i] = tempPosition.x;
      positions[i + 1] = tempPosition.y;
      positions[i + 2] = tempPosition.z;
      //   positions[i + 3] = Math.random() * 10.0;
    }
    return [new Float32Array(positions)];
  }, [sampler, particlesNumber]);
  //_____
  useEffect(() => {
    // console.log('<BasicSurfaceSampler> / data: ', data);
    console.log('<MyMeshSurfaceSample> / sampleredMesh: ', sampleredMesh);
  }, [sampleredMesh]);

  return (
    <points {...pointsProps} name="MyMeshSurfaceSample">
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

export default MeshSurfaceSamplerTemplate;

/*
_____sampleredMesh
...it's a 3D object whose surface will be explored by 

_____build () /from doc./
...Processes the input geometry (my: sampleredMesh) and prepares to return samples. Any configuration of the geometry or sampler must occur before this method is called

_____.sample ( targetPosition : Vector3, targetNormal : Vector3, targetColor : Color ) /from doc./
Selects a random point on the surface of the input geometry, returning the position and optionally the normal vector and color at that point. Time complexity is O(log n) for a surface with n faces.

*/
