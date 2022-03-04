import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Shader Staff
*/
import { extend } from '@react-three/fiber';
import { ConstalationBShaderMaterial } from './constelationBShader';
extend({ ConstalationBShaderMaterial });

const ConstelationB = ({ pointsProps, pointsNumber, shaderProps }) => {
  /*
  References
  */
  const material = useRef();
  /*
  Global State Section
  canvasState = {isOdlotBackgroundVisible: false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
 ...
 */
  const pointsRandomSize = useMemo(() => {
    const pointsRandomSize = [...new Array(pointsNumber)].map(() =>
      Math.random()
    );
    return new Float32Array(pointsRandomSize);
  }, [pointsNumber]);
  const [positions] = useMemo(() => {
    const positions = [];

    for (let i = 0; i < pointsNumber; i++) {
      /*
      "positions array" would have pointsNumber * 3 elements; 1000 pointsNumbers gives array.length = 3000;
      */
      const indexFactor = i * 3;
      positions[indexFactor + 0] = Math.random() * 6 - 3;
      positions[indexFactor + 1] = Math.random() * 6 - 3;
      positions[indexFactor + 2] = Math.random() - 0.5;
    }

    return [new Float32Array(positions)];
  }, [
    pointsNumber,
    //  branches, radious, spin, randomness
  ]);

  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    /*
    uniform based on "elapsed time"; within "Vertex Shader" this value will be calculated as argument of sin(); we get "dynamicy" yet in specified range;
    */
    material.current.uniforms.uTime.value = time;
    // material.current.uniforms.uPixelRatio = Math.min(
    //   window.devicePixelRatio,
    //   2
    // );
    /*
    uniform based on global state value that is set in <ContainerIntroContent>; it should turn on / turn off shader material;
    */
    material.current.uniforms.uSwitcher.value =
      canvasGlobalState.isOdlotBackgroundVisible;
  });

  return (
    <points {...pointsProps}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'aRandomScale']}
          array={pointsRandomSize}
          count={pointsRandomSize.length / 1}
          itemSize={1}
        />
      </bufferGeometry>
      <constalationBShaderMaterial ref={material} {...shaderProps} />
      {/* <pointsMaterial size={0.02} color={0xffffff} sizeAttenuation={false} /> */}
    </points>
  );
};

export default ConstelationB;
