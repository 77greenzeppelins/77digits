import React from 'react';
import * as THREE from 'three';

/*
Components
*/
import ConstelationA from './ConstelationA';
import ConstelationB from './ConstelationB';
import GalaxyA from './GalaxyA';
import GalaxyB from './GalaxyB';

const AnimatedUniverse = ({ groupProps }) => {
  return (
    <group {...groupProps}>
      <ConstelationA
        /*
         */
        pointsProps={{ name: 'PointsOfConstelationA', visible: false }}
        /*
        geometry props
        */
        pointsNumber={4000}
        /*
        material props
        */
        materialProps={{
          size: 0.02,
          color: 0xffffff,
          sizeAttenuation: false,
        }}
      />

      <GalaxyA
        /*
        points props
        */
        pointsProps={{ name: 'PointsOfGalaxyA', visible: false }}
        /*
        geometry props
        */
        pointsNumber={10000}
        galaxyRadious={1}
        branchesNumber={3}
        branchSpiner={2}
        randomnessFactor={0.001}
        /*
        material props; sizeAttenuation &  size are only for <points> i.e doesn't function in shader material
        */
        materialProps={{
          color: 0xff0000,
          sizeAttenuation: false,
          size: 0.05,
        }}
      />

      <ConstelationB
        /*
        points props
        */
        pointsProps={{
          name: 'PointsOfConstelationB',
          visible: true,
          // rotation: [Math.PI * 0.2, Math.PI * 0.3, 0],
          rotation: [0, 0, 0],
        }}
        /*
        geometry props; used for calculating positions of vertices
        */
        pointsNumber={2000}
        /*
        shader props
        */
        shaderProps={{
          /*
          What "transparent" prop does?
          It's necessary as we wrok with alpha-chenel in fragment shader;
          */
          transparent: true,
          // depth: false,
          /*
          What "THREE.AdditiveBlending" prop does?
          It adds some color from backbround (something that is behing point) to point when it seems to be lighting;
          Not recomende from performance p.o.v.! 
          */
          // blending: THREE.AdditiveBlending,
          /*
          What disactivated "depthWrite"  does?
          It solves the following problem: points from foreground hides elements that are behind them; 
          */
          depthWrite: false,
          /*
          How "vertexColors" works? It must be "true" if we want to utilize color from geometry's attribute 
          */
          vertexColors: true,
          uPointSize: 50,
          /*
          Question: pixel ratio here or in useFrame?
          */
          uPixelRatio: Math.min(window.devicePixelRatio, 2),
        }}
      />
      <GalaxyB
        /*
        points props
        */
        pointsProps={{
          name: 'PointsOfGalaxyB',
          visible: false,
          // rotation: [Math.PI * 0.2, Math.PI * 0.3, 0],
          rotation: [0, 0, 0],
        }}
        /*
        geometry props; used for calculating positions of vertices
        */
        pointsNumber={5000}
        galaxyRadious={0.5}
        branchesNumber={3}
        branchSpiner={4}
        randomnessFactor={0.001}
        colorA={0xff6030}
        colorB={0x1b3984}
        /*
        shader props
        */
        shaderProps={{
          depth: false,
          blending: THREE.AdditiveBlending,
          /*
          How "vertexColors" works? It must be "true" if we want to utilize color from geometry's attribute 
          */
          vertexColors: true,
          uPointSize: 10,
          uPixelRatio: Math.min(window.devicePixelRatio, 2),
        }}
      />
    </group>
  );
};

export default AnimatedUniverse;
