import React, { useRef, useEffect } from 'react';
//_____Staff for creating spotLight helper
import { SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const SpotLightDisplayer = ({
  args,
  lightTarget,
  position,
  angle,
  distance,
  rotate,
}) => {
  //_____References
  const spotLight = useRef();
  //_____SpotLightHelper creation
  useHelper(spotLight, SpotLightHelper, '#dc1be3');

  useEffect(() => {
    console.log('spotLightTarget.current:', lightTarget);
  }, [lightTarget]);

  //_____
  return (
    <spotLight
      args={args}
      target={lightTarget}
      ref={spotLight}
      position={position || [0, 0, 0]}
      angle={angle}
      distance={distance}
      // rotate={rotate || [0, 1, 0]}
    />
  );
};

export default SpotLightDisplayer;

/*
DESCRIPTION
...1...What is "spotLightTarget={textGroup.current}" ?
simply object we want to point to...


<SpotLightDisplayer
        args={[0xffffff, 10]}
        spotLightTarget={textGroup.current}
        position={[0.3, -0.2, 0.9]}
        angle={0.4}
        distance={1}
        // rotate={[0, 5, 0]}
      />
*/

/*
<SpotLightDisplayer/>
*/

/*
Constructor
SpotLight( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float )
color - (optional) hexadecimal color of the light. Default is 0xffffff (white).
intensity - (optional) numeric value of the light's strength/intensity. Default is 1.

distance - Maximum range of the light. Default is 0 (no limit).
angle - Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
penumbra - Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and 1. Default is zero.
decay - The amount the light dims along the distance of the light.
*/
