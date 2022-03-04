import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

//_____Shaders Section
// import { SevenShapeShaderMaterial } from '../shapes/SevenShapeShaderMaterial';
import { ExtrudedFrameShaderMaterial } from './ExtrudedFrameShaderMaterial';
import { extend } from '@react-three/fiber';
extend({ ExtrudedFrameShaderMaterial });

const ExtrudedPointedFrame = ({ meshProps, materialProps }) => {
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
    depth: 0.1,
    bevelEnabled: false,
    // shape
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

  return (
    <points {...meshProps}>
      {/* <sphereGeometry args={[15, 32, 16]} scale={0.1} /> */}
      {/* <shapeBufferGeometry args={[hardcodedFrame]} /> */}
      <extrudeGeometry args={[hardcodedFrame, extrudeSettings]} />
      <pointsMaterial {...materialProps} side={THREE.DoubleSide} wireframe />
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
    </points>
  );
};

export default ExtrudedPointedFrame;
