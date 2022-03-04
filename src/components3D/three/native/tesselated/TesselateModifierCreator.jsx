import React, { Suspense, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js';
import { BufferGeometry } from 'three';
//_____
import { TesselateModifierShaderMaterial } from './TesselateModifierShaderMaterial';
extend({ TesselateModifierShaderMaterial });

const TesselateModifierCreator = ({ meshProps, geometry }) => {
  //_____References
  const material = useRef();
  //_____
  let [
    numFaces,
    tesselatedGeometry,
    // imputGeometry,
    colors,
    displacement,
    position,
  ] = useMemo(() => {
    //_____Input Geometry
    let imputGeometry = geometry;
    imputGeometry.center();
    //_____Input Geometry
    let tessellateModifier = new TessellateModifier(8, 6);

    //_____Output Geometry
    const tesselatedGeometry = tessellateModifier.modify(imputGeometry);
    const position = tesselatedGeometry.attributes.position.array;

    //_____calculations based on Output Geometry
    const numFaces = tesselatedGeometry.attributes.position.count / 3;
    const colors = new Float32Array(numFaces * 3 * 3);
    const displacement = new Float32Array(numFaces * 3 * 3);

    const color = new THREE.Color();

    for (let f = 0; f < numFaces; f++) {
      const index = 9 * f;

      const h = 0.2 * Math.random();
      const s = 0.5 + 0.5 * Math.random();
      const l = 0.5 + 0.5 * Math.random();

      color.setHSL(h, s, l);

      const d = 10 * (0.5 - Math.random());

      for (let i = 0; i < 3; i++) {
        colors[index + 3 * i] = color.r;
        colors[index + 3 * i + 1] = color.g;
        colors[index + 3 * i + 2] = color.b;

        displacement[index + 3 * i] = d;
        displacement[index + 3 * i + 1] = d;
        displacement[index + 3 * i + 2] = d;
      }
    }
    return [
      numFaces,
      tesselatedGeometry,
      // imputGeometry,
      colors,
      displacement,
      position,
    ];
  }, [geometry]);

  useFrame(({ clock }) => {
    material.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  useEffect(() => {
    console.log(
      'TesselateModifierCreator / tesselatedGeometry:',
      tesselatedGeometry
    );
    console.log(
      'TesselateModifierCreator / TesselateModifierShaderMaterial:',
      TesselateModifierShaderMaterial
    );
    // console.log('TesselateModifierCreator / numFaces:', numFaces);
    console.log('TesselateModifierCreator / colors:', colors);
    console.log('TesselateModifierCreator / displacement:', displacement);
  }, [tesselatedGeometry, position, numFaces]);

  //_____
  //   return null;
  return (
    //   <Suspense fallback={null}>
    <mesh
      {...meshProps}
      //  geometry={tesselatedGeometry}
    >
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={position}
          count={position.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'aColor']}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'aDisplacement']}
          array={displacement}
          count={displacement.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      {/* <meshBasicMaterial color={[1, 1, 1]} /> */}
      <tesselateModifierShaderMaterial
        ref={material}
        // blending={THREE.AdditiveBlending}
        blending={THREE.NormalBlending}
        side={THREE.DoubleSide}
        uAmplitude={2.0}
      />
    </mesh>
    //   </Suspense>
  );
};

export default TesselateModifierCreator;

/* <TesselateModifierCreator
            meshProps={{
              position: [0, 0, -0.2],
              name: 'TesselateModifierCreator',
            }}
            geometry={new THREE.BoxGeometry(0.5, 0.5, 0.5)}
  /> */

/* <particlesShaderMaterial
  ref={material}
  transparent={true}
  depthWrite={false}
  // blending={THREE.AdditiveBlending}
  uColor={[0.0, 1.0, 0.0]}
  uPixelRatio={Math.min(window.devicePixelRatio, 2)}
  uSize={200}
/> */
