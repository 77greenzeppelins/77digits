import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { extend, useLoader, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import jostUrl from '../../../../assets/fonts/sansSerif/jost.blob';
//_____Shaders Stuff
import { TextSurfaceSamplerShaderMaterial } from './TextSurfaceSamplerShader.js';
//_____
extend({ TextGeometry, MeshSurfaceSampler, TextSurfaceSamplerShaderMaterial });

/*
COMMENTS FOR "MeshSurfaceSampler Conception"
Is is used for sampling weighted random points on the surface of a mesh.
 */

const TextSurfaceSampler = ({
  children, //text / word
  particlesNumber,
  pointsProps,
  uniformColor,
}) => {
  //_____References
  const material = useRef();
  //   const pointsRef = useRef();

  //_____TextGeometry Section
  const font = useLoader(FontLoader, jostUrl);
  const [textMesh] = useMemo(() => {
    const geometryFromText = new TextGeometry(children, {
      font: font,
      size: 1,
      height: 0.01,
      curveSegments: 12,
      //   bevelEnabled: true,
      //   bevelThickness: 10,
      //   bevelSize: 2,
      //   bevelOffset: 0,
      //   bevelSegments: 1,
    });
    geometryFromText.center();
    // const positionsFromText = geometryFromText.attributes.position.array;
    const textMesh = new THREE.Mesh(geometryFromText);
    return [textMesh];
  }, [font, children]);

  //___MeshSurfaceSampler Instance
  const sampler = new MeshSurfaceSampler(textMesh).build();

  //_____Sampler's samples = create array with position coordinates for each sample
  const [positions, size] = useMemo(() => {
    const positions = new Float32Array(particlesNumber * 3);
    const size = new Float32Array(particlesNumber);

    for (let i = 0; i < particlesNumber * 3; i += 3) {
      const tempPosition = new THREE.Vector3();
      //_____sample() selects random vertex located on input geometry's surface and specifies its position = fullfill  new THREE.Vector3(X,X,X)
      sampler.sample(tempPosition);
      //_____pass tempPosition's data (in form of vector) to 'position' array
      tempPosition.toArray(positions, i * 3);
      size[i] = Math.random();
    }
    return [positions, size];
  }, [sampler, particlesNumber]);
  //_____
  /*
  COMMENTS TO useFrame
  It's a way a uniform can be added => uniforms.uUniformName.value
  */
  useFrame(
    ({ clock }) =>
      (material.current.uniforms.uTime.value = clock.getElapsedTime())
  );
  //_____
  // useEffect(() => {
  // console.log('<TextSurfaceSampler> / sampler:', sampler);
  // console.log('<TextSurfaceSampler> / positions:', positions);
  // console.log('TextSurfaceSamplerShaderMaterial:', TextSurfaceSamplerShaderMaterial)
  // }, [sampler, positions]);
  //_____
  // const onClick = () => {
  //   console.log('<YesNoPanel> / onClick');
  // };
  //_____
  // const pointerMove = event => {
  //   console.log('<TextSurfaceSampler> / move');
  // };
  // const pointerMove = event => {
  //   event.stopPropagation();
  //   console.log('<TextSurfaceSampler> pointerMove......');
  // };
  // const onClick = event => {
  //   event.stopPropagation();
  //   console.log('<TextSurfaceSampler> onClick......');
  // };
  // const onPointerEnter = event => {
  //   event.stopPropagation();
  //   console.log('<TextSurfaceSampler> onPointerEnter......');
  // };
  //_____
  return (
    <points
      {...pointsProps}
      // onPointerMove={pointerMove}
      // onClick={onClick}
      // onPointerEnter={onPointerEnter}
    >
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'aScale']}
          count={size.length / 1}
          array={size}
          itemSize={1}
        />
      </bufferGeometry>
      <textSurfaceSamplerShaderMaterial
        ref={material}
        transparent={true}
        depthWrite={false} // it's obliged if alfa chanel is modified
        // blending={THREE.AdditiveBlending}
        uColor={uniformColor}
        uPixelRatio={Math.min(window.devicePixelRatio, 2)}
        uSize={60}
      />
      {/* <pointsMaterial {...materialProps} /> */}
    </points>
  );
};

export default TextSurfaceSampler;
