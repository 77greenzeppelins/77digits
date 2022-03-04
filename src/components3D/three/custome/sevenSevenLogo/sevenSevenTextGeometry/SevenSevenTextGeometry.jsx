import React, { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
//_____
import SimpleBox from '../../../native/boxes/SimpleBox';
//_____
import TextGeometryCreator from '../../../native/textGeometry/TextGeometryCreator';
import SevenSevenLights from './SevenSevenLights';

const SevenSevenTextGeometry = ({ groupProps }) => {
  //_____
  const textGeometry = useRef();
  useEffect(() => {
    console.log(
      '<SevenSevenTextGeometry> / TextGeometryCreator:',
      TextGeometryCreator
    );
  }, []);
  //   return null;
  return (
    <group {...groupProps} scale={0.007}>
      {/* <mesh
        position={[0, 0, -25]}
        rotation={[0, 0, 0]}
        name="backgroundPlane"
        receiveShadow={true}
      >
        <planeGeometry args={[100, 100, 10, 10]} />
       
        <meshPhysicalMaterial
          // thickness={100}
          transmission={1}
          roughness={0.25}
          clearcoat={1}
          // clearcoatRoughness={0}
          // envMapIntensity={5}
        />

      </mesh> */}
      <SevenSevenLights />
      <SimpleBox />

      {/* <Suspense fallback={null}>
        <mesh position={[0, 0, 10]} castShadow={true} receiveShadow={true}>
          <TextGeometryCreator
            ref={textGeometry}
            geometryParams={{
              size: 80,
              height: 0.3,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 3,
              bevelSize: 2,
              // bevelOffset: 2,
              bevelSegments: 2,
            }}
            text="7"
          />

          <meshPhysicalMaterial
            color={[0, 1, 0]}
            // thickness={100}
            transmission={1}
            roughness={0.25}
            clearcoat={1}
            // clearcoatRoughness={0}
            envMapIntensity={5}
          />
        </mesh>
        <mesh position={[28.5, 20.5, 0]}>
          <TextGeometryCreator ref={textGeometry} text="7" />
          <meshPhysicalMaterial
            thickness={100}
            transmission={1}
            roughness={0.25}
            clearcoat={1}
            clearcoatRoughness={0}
            envMapIntensity={5}
          />
        </mesh>
      </Suspense> */}
    </group>
  );
};

export default SevenSevenTextGeometry;

/* <meshBasicMaterial
            color={[1, 1, 1]}
            //  wireframe={true}
    /> 
          
    <meshNormalMaterial
          flatShading={true}

    />       
          
*/
