import React, { useRef } from 'react';
/*
Components
*/
import Slide0 from './slide0/Slide0';
import Slide1 from './slide1/Slide1';
import Slide2 from './slide2/Slide2';

import Slide4 from './slide4/Slide4';
// import BackgroundsSwitcher from './slidesBackgrounds/BackgroundsSwitcher';
/*
Spring Staff
*/
// import { a } from '@react-spring/three';
/*
-----------------------------------------------------------------
*/
const Slider = () => {
  /*
  ...
  */
  const slider = useRef();
  /*
  JSX
  */
  return (
    <group ref={slider} scale={[1, 1, 1]} name="groupForSlider">
      <Slide0 slideId={0} />
      <Slide1 slideId={1} />
      <Slide2 slideId={2} />

      <Slide4 slideId={4} />
      {/* <BackgroundsSwitcher /> */}
    </group>
  );
};

export default Slider;

//___________________________________________________________________

/*---Central Plane*/

/* <mesh position={[0, 0, 0]}>
        <planeGeometry args={[0.5, 0.02]} />
        <meshBasicMaterial color={[0.5, 0.5, 0.5]} />
      </mesh> */

/* <mesh position={[-0.4, 0, 0.5]}>
        <planeGeometry args={[0.5, 0.002]} />
        <meshBasicMaterial color={[0, 0, 0.02]} />
      </mesh> */

/* <mesh position={[0.4, 0, 0.5]}>
        <planeGeometry args={[0.5, 0.002]} />
        <meshBasicMaterial color={[0.02, 0.0, 0.0]} />
      </mesh> */
