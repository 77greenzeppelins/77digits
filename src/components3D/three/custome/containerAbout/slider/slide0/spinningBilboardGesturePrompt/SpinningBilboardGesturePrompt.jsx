import React from 'react';
import { Html } from '@react-three/drei';
/*
Component 2D
*/
import HtmlSpinningBilboardGesturePrompt from './htmlComponent/HtmlSpinningBilboardGesturePrompt';
/*
Spring data
*/
import { a } from '@react-spring/three';

/*
-------------------------------------------------------------------------
*/
const SpinningBilboardGesturePrompt = ({ promptGesture }) => {
  /*
  JSX
  */
  return (
    <a.group scale={0.04} position={[0, -0.355, 0]} rotation-y={promptGesture}>
      <Html transform>
        <HtmlSpinningBilboardGesturePrompt />
      </Html>
    </a.group>
  );
};

export default SpinningBilboardGesturePrompt;
