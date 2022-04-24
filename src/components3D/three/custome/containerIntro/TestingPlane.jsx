import React, { useRef } from 'react';
// import * as THREE from 'three';
import { extend, useFrame, useThree } from '@react-three/fiber';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Shaders Staff
*/
import { SmillyShaderMaterial } from '../../shaders/TheArtOfCode/Smilly';
import { LogoShaderMaterial } from '../../shaders/77/logo/logoShader';
import { Checker_1_ShaderMaterial } from '../../shaders/77/patternsRegular/checker_1_shader';
import { SpaceGifShaderMaterial } from '../../shaders/TheArtOfCode/SpaceGif';
import { QuadranglePatternShaderMaterial } from '../../shaders/TheArtOfCode/QuadranglePattern';
import { HexagonalTilingShaderMaterial } from '../../shaders/TheArtOfCode/HexagonalTiling';
import { DomainDistortionShaderMaterial } from '../../shaders/TheArtOfCode/DomainDistortion';
import { PolarCoordinatesShaderMaterial } from '../../shaders/TheArtOfCode/PolarCoordinates';
import { PaintWithMathShaderMaterial } from '../../shaders/InigoQuilez/PaintWithMath';
import { October2021ShaderMaterial } from '../../shaders/shortCodingSkills/october26_2021';

extend({
  SmillyShaderMaterial,
  LogoShaderMaterial,
  Checker_1_ShaderMaterial,
  SpaceGifShaderMaterial,
  DomainDistortionShaderMaterial,
  PolarCoordinatesShaderMaterial,
  PaintWithMathShaderMaterial,
  HexagonalTilingShaderMaterial,
  October2021ShaderMaterial,
  QuadranglePatternShaderMaterial,
});

/*
-----------------------------------------------------------------------------
*/
const TestingPlane = ({ meshProps }) => {
  /*
  References
  */
  const mesh = useRef();
  const material = useRef();

  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useThree Section
  */
  const { viewport, size } = useThree();
  /*
  UNIFORMS Section
  */
  useFrame(({ clock, size, viewport }) => {
    const time = clock.getElapsedTime();
    /*
     */
    material.current.uniforms.uWidth.value = size.width;
    material.current.uniforms.uHeight.value = size.height;
    /*
    uniform based on "elapsed time"; within "Vertex Shader" this value will be calculated as argument of sin(); we get "dynamicy" yet in specified range;
    */
    material.current.uniforms.uTime.value = time;
  });
  /*
 JSX
 */
  return (
    <mesh ref={mesh} {...meshProps}>
      <planeGeometry
        args={[
          size.width < size.height ? size.height * 0.0005 : size.width * 0.0005,
          size.height > size.width ? size.height * 0.0005 : size.width * 0.0005,
          1,
          1,
        ]}
        // args={[1, 1, 1, 1]}
        // args={[size.width, size.height, 1, 1]}

        // args={[
        //   canvasGlobalState.isOdlotBackgroundVisible ? viewport.width * 0.4 : 0,
        //   canvasGlobalState.isOdlotBackgroundVisible
        //     ? viewport.height * 0.4
        //     : 0,
        //   1,
        //   1,
        // ]}
        // args={[viewport.width * 0.25, viewport.height * 0.25, 1, 1]}
        // args={[size.width * 0.0055, size.height * 0.0055, 1, 1]}
      />
      {/* <introBackgroundShaderMaterial
          ref={material}
        /> */}
      {/* <smillyShaderMaterial ref={material} /> */}
      {/* <logoShaderMaterial ref={material} /> */}
      {/* <spaceGifShaderMaterial ref={material} /> */}
      {/* <domainDistortionShaderMaterial ref={material} /> */}
      {/* <polarCoordinatesShaderMaterial ref={material} /> */}
      {/* <paintWithMathShaderMaterial ref={material} /> */}
      {/* <hexagonalTilingShaderMaterial ref={material} /> */}
      {/* <quadranglePatternShaderMaterial ref={material} /> */}
    </mesh>
  );
};

export default TestingPlane;
