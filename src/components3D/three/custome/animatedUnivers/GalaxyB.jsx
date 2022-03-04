import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
/*
Shader Staff
*/
import { GalaxyShaderMaterial } from './galaxyShaderMaterial';
import { extend } from '@react-three/fiber';
extend({ GalaxyShaderMaterial });

/*
-------------------------------------------------------------------------
*/
const GalaxyB = ({
  pointsProps,
  pointsNumber,
  galaxyRadious,
  branchesNumber,
  branchSpiner,
  randomnessFactor,
  colorA,
  colorB,
  shaderProps,
}) => {
  /*
  References
  */
  const material = useRef();
  /*
   */
  const [positions, colors, aRandomScale] = useMemo(() => {
    const startingColor = new THREE.Color(colorA);
    const endingColor = new THREE.Color(colorB);
    // const startingColor = colorA;
    // const endingColor = colorB;
    const positions = [];
    const aRandomScale = [];
    const colors = [];

    for (let i = 0; i < pointsNumber; i++) {
      /*
      "positions array" would have pointsNumber * 3 elements; 1000 pointsNumbers gives array.length = 3000;
      */
      const indexFactor = i * 3;
      /*
      initial branch length; having that branch we can take from it points and place it on other branches
      */
      const branchLength = Math.random() * galaxyRadious;
      /*
      from props we get number of branches, then within each iterations we can generate branche's index; optiions / indices: 0,1,2 ; 
      */
      const branchIndex = i % branchesNumber;
      /*
      in case of 3 branches radiansBetweenBranches = 2.0943951023931953; we actually divide circle into three pieces; this value show how width are angles between branches i.e inside each "pizza piece"
      */
      const radiansBetweenBranches = (2 * Math.PI) / branchesNumber;
      /*
      angleGenerator can have the following values:
      2.0943951023931953 * 0 = 0
      2.0943951023931953 * 1 = 2.0943951023931953;
      2.0943951023931953 * 2 = 4.1887902047863905
      */
      const angleGenerator = radiansBetweenBranches * branchIndex;
      /*
      spinFactor makes the line to spin; I don't know how...
      */
      const spinFactor = branchLength * branchSpiner;
      /*
      randomness actually gives a 3D-look of each branch;
      these values actually produce a kind of offsets for other value;
      in "space" when we apply addition we want to offset some other value 
      */
      const randomX = Math.random() * 0.1 - 0.1;
      const randomY = Math.random() * 0.1 - 0.1;
      const randomZ = Math.random() * 0.1 - 0.1;

      positions[indexFactor + 0] =
        Math.sin(angleGenerator) * branchLength + randomX;
      positions[indexFactor + 1] =
        Math.cos(angleGenerator) * branchLength + randomY;
      positions[indexFactor + 2] = 0 + randomZ;
      /*
      Makeing color attribute in simple way
      */
      // let color = { r: 1, g: 0, b: 1 };
      // colors.push(color.r, color.g, color.b);
      /*
      Makeing color attribute in advanced way
      Why clone() was used ?
      We need this clone() to preserve value of startingColor and apply it to all points; without clone() we would apply original vrsion of startingColor only to firt point and then we would use modified version; 
      */
      const mixedColor = startingColor.clone();
      /*
      lerp() comes from three's "color library" + in a method of vec3
      schema: vec3.lerp(vec3,alphaFloat)
      */
      mixedColor.lerp(endingColor, branchLength / galaxyRadious);
      /*
      apply current mixedColor to all color chanel of current point
      */
      colors[indexFactor + 0] = mixedColor.r;
      colors[indexFactor + 1] = mixedColor.g;
      colors[indexFactor + 2] = mixedColor.b;
      /*
      what "pointScalers" does?
      This attribute would be utilized in vertex shader to achieve random sizes of particles and set proper device pixel ratio;
      */
      //  pointScalers.push(Math.random());
      aRandomScale[i] = Math.random();
    }

    return [
      new Float32Array(positions),
      new Float32Array(colors),
      new Float32Array(aRandomScale),
    ];
  }, [
    pointsNumber,
    galaxyRadious,
    branchesNumber,
    branchSpiner,
    // randomnessFactor,
    colorA,
    colorB,
  ]);

  useFrame(({ clock, size, viewport }) => {
    const time = clock.getElapsedTime();
    /*
    uniform based on "elapsed time"; within "Vertex Shader" this value will be calculated as argument of sin(); we get "dynamicy" yet in specified range;
    */
    material.current.uniforms.uTime.value = time;
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
          attachObject={['attributes', 'color']}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'aRandomScale']}
          array={aRandomScale}
          count={aRandomScale.length / 1}
          itemSize={1}
        />
      </bufferGeometry>

      <galaxyShaderMaterial {...shaderProps} ref={material} />
    </points>
  );
};

export default GalaxyB;
