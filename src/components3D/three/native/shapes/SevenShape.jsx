import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

//_____Shaders Section
import { SevenShapeShaderMaterial } from './SevenShapeShaderMaterial';
import { extend } from '@react-three/fiber';
extend({ SevenShapeShaderMaterial });

const SevenShape = React.forwardRef(
  ({ meshProps, materialProps, thisShaderMaterial }, ref) => {
    //
    //______Coordinate for "7" (hardcoded version)
    let hardcodedSevenCoordinates = [];
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.1, 0.86));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.16, 1));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.8, 1));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.4, 0));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.25, 0));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.6, 0.86));
    hardcodedSevenCoordinates.push(new THREE.Vector2(0.2, 0.86));

    const hardcodedSeven = new THREE.Shape(hardcodedSevenCoordinates);

    //_____References
    const shaderMaterial = useRef();

    //_____useFrame Section
    //___1. Creat a uniform "time"
    useFrame(({ clock, viewport }) => {
      if (shaderMaterial.current) {
        shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
        shaderMaterial.current.uniforms.uWidth.value = viewport.width;
      }
    });

    return (
      <mesh {...meshProps} ref={ref}>
        {/* <sphereGeometry args={[15, 32, 16]} scale={0.1} /> */}
        <shapeGeometry args={[hardcodedSeven]} />
        {/* <meshBasicMaterial {...materialProps} /> */}
        {thisShaderMaterial || (
          <sevenShapeShaderMaterial
            ref={shaderMaterial}
            // blending={THREE.MultiplyBlending}
            // side={THREE.DoubleSide}
          />
        )}
      </mesh>
    );
  }
);

export default SevenShape;

/*
______https://stackoverflow.com/questions/69293031/how-to-create-an-irregular-3d-polygon-extruded-shape-react-three-fiber
 var length = 14,
    width = 2,
    deg = 10,
    thickness = 0.3
  var rad = (deg * Math.PI) / 180
  var offset = Math.min(Math.tan(rad) * width, length / 2)
  var shape = new Shape()
  shape.moveTo(0, 0)
  shape.lineTo(offset, width)
  shape.lineTo(length - offset, width)
  shape.lineTo(length, 0)
  shape.lineTo(0, 0)

*/

/*
  //_____

  const length = 1.4,
    height = 1.5,
    width = 0.2,
    deg = 10;

  var rad = (deg * Math.PI) / 180;
  var offsetHorizontal = Math.min(Math.tan(rad) * width, length / 2);
  var offsetVertical = Math.min(Math.tan(rad) * height, length / 2);

  var shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(offsetHorizontal, width);
  shape.lineTo(length, width);
  shape.lineTo(height - offsetVertical, -height);
  shape.lineTo(1, -height);
  shape.lineTo(0, 0);
*/

/*
  //_____
  //   var triangleShape = new THREE.Shape();
  //   triangleShape.moveTo(0.8, 0.2);
  //   triangleShape.lineTo(0.4, 0.8);
  //   triangleShape.lineTo(1.2, 0.8);
  //   triangleShape.lineTo(0.8, 0.2); // close path

*/
