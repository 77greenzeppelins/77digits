import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

//_____Shaders Section
// import { SevenShapeShaderMaterial } from '../shapes/SevenShapeShaderMaterial';
import { ExtrudedFrameShaderMaterial } from './ExtrudedFrameShaderMaterial';
import { extend } from '@react-three/fiber';
extend({ ExtrudedFrameShaderMaterial });

const ExtrudedFrame = ({
  groupProps,
  meshProps,
  materialProps,
  thisMaterial,
}) => {
  //
  //_____References
  const shaderMaterial = useRef();
  const material = useRef();

  //_____
  let shapeCoordinates = [];
  shapeCoordinates.push(new THREE.Vector2(0.2, 1));
  shapeCoordinates.push(new THREE.Vector2(0.8, 1));
  shapeCoordinates.push(new THREE.Vector2(0.8, 0));
  shapeCoordinates.push(new THREE.Vector2(0.2, 0));
  shapeCoordinates.push(new THREE.Vector2(0.2, 1));

  let pathCoordinates = [];
  pathCoordinates.push(new THREE.Vector2(0.3, 0.9));
  pathCoordinates.push(new THREE.Vector2(0.7, 0.9));
  pathCoordinates.push(new THREE.Vector2(0.7, 0.1));
  pathCoordinates.push(new THREE.Vector2(0.3, 0.1));
  pathCoordinates.push(new THREE.Vector2(0.3, 0.9));

  const hardcodedFrame = new THREE.Shape(shapeCoordinates);
  const hardcodedPath = new THREE.Path(pathCoordinates);

  hardcodedFrame.holes.push(hardcodedPath);

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: false,
    // bevelEnabled: true,
    // bevelSegments: 0.1,
    // steps: 0.2,
    // bevelSize: 0.1,
    // bevelThickness: 0.1,
  };

  //_____useFrame Section
  //___1. Creat a uniform "time"
  useFrame(({ clock, viewport }) => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uTime.value =
        clock.getElapsedTime() * 0.95;
      shaderMaterial.current.uniforms.uWidth.value = viewport.width;
    }

    //___Taken from SSSShape
    // if (bottomSevenMaterial.current) {
    //   bottomSevenMaterial.current.uniforms.uTime.value =
    //     clock.getElapsedTime() * 0.95;
    //   //_____uniforms creator
    //   if (group.current.position.x !== 0) {
    //     bottomSevenMaterial.current.uniforms.uDraggedX.value =
    //       group.current.position.x;
    //     // console.log('<SSShape> / useFrame / group.current.position.x ', group.current.position.x)
    //   }
    // }
  });

  //___
  return (
    <group {...groupProps}>
      {/* <pointLight
        args={[0xff0040, 1]} // color,intensity
        position={[0, 5, 10]}
      /> */}
      {/* <hemisphereLight args={[0xffffbb, 0x080820, 1]} position={[0, 0, -0.5]} /> */}
      {/* <ambientLight intensity={0} /> */}
      <mesh {...meshProps}>
        {/* <sphereGeometry args={[15, 32, 16]} scale={0.1} /> */}
        {/* <shapeBufferGeometry args={[hardcodedFrame]} /> */}
        <extrudeGeometry args={[hardcodedFrame, extrudeSettings]} />
        {thisMaterial || (
          // <meshPhongMaterial
          //   side={THREE.DoubleSide}
          //   color={0x555555}
          //   specular={0xffffff}
          //   shininess={100}
          // />
          <meshBasicMaterial
            {...materialProps}
            side={THREE.DoubleSide}
            // wireframe
          />
        )}
        {/* <meshStandardMaterial
          side={THREE.DoubleSide}
          color={[0.9, 0.7, 0.99]}
          metalness={0.5}
          roughness={0.5}
        /> */}
        {/* <sevenShapeShaderMaterial
        ref={shaderMaterial}
        // blending={THREE.MultiplyBlending}
        side={THREE.DoubleSide}
      /> */}
        {/* <extrudedFrameShaderMaterial
        ref={material}
        // blending={THREE.MultiplyBlending}
        side={THREE.DoubleSide}
      /> */}
      </mesh>
    </group>
  );
};

export default ExtrudedFrame;

/*
<ExtrudedFrame
              meshProps={{
                position: [-0.5, -0.5, -12.05],
                // scale: [0.02, 0.02, 0.02],
                name: 'ExtrudedFrame',
              }}
              materialProps={{ color: [0, 1, 0] }}
            />
*/
