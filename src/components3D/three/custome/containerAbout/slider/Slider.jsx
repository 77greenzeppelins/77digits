import React from 'react';
/*
Components
*/
import Slide0 from './slide0/Slide0';
// import Slide1 from './slide1/Slide1';

/*
-----------------------------------------------------------------
*/
const Slider = ({ rotateStepByStep, gesturesForSidesRotations }) => {
  /*
  JSX
  */
  return (
    <group scale={[1, 1, 1]} name="groupForSlider">
      <Slide0
        slideId={0}
        rotateStepByStep={rotateStepByStep}
        gesturesForSidesRotations={gesturesForSidesRotations}
      />
      {/* <Slide1 slideId={1} /> */}

      {/*---Central Plane*/}
      {/* <mesh position={[0, 0, 0]}>
        <planeGeometry args={[0.5, 0.02]} />
        <meshBasicMaterial color={[0.5, 0.5, 0.5]} />
      </mesh> */}

      {/*---Left Plane*/}
      {/* <mesh position={[-0.4, 0, 0.5]}>
        <planeGeometry args={[0.5, 0.002]} />
        <meshBasicMaterial color={[0, 0, 0.02]} />
      </mesh> */}

      {/*---Right Plane*/}
      {/* <mesh position={[0.4, 0, 0.5]}>
        <planeGeometry args={[0.5, 0.002]} />
        <meshBasicMaterial color={[0.02, 0.0, 0.0]} />
      </mesh> */}
    </group>
  );
};

export default Slider;
