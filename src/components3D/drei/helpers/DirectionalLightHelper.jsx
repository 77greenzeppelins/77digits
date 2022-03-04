import React, { useRef } from 'react';
//_____Staff for creating spotLight helper
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import DirectionalLight from 'three';

const DirectionalLightDisplayer = ({ args, lightTarget, position, rotate }) => {
  //
  const directionalLight = useRef();
  //_____SpotLightHelper creation
  useHelper(directionalLight, DirectionalLightHelper, '#dc1be3');
  //
  return (
    <directionalLight args={args} target={lightTarget} ref={directionalLight} />
  );
};

export default DirectionalLightDisplayer;

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
Constructor
DirectionalLight( color : Integer, intensity : Float )
color - (optional) hexadecimal color of the light. Default is 0xffffff (white).
intensity - (optional) numeric value of the light's strength/intensity. Default is 1.
*/
