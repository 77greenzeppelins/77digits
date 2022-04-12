import React from 'react';
/*
Basic Data
*/
import { globalPositionData } from '../../../../../data/globalData';
/*
Gesture Staff
*/
import LimitedPseudoScrolling from '../../../../../gestureHandlers/useGesture/LimitedPseudoScrolling';

const InteractivePanel = () => {
  /*
  Gesture Section
  */
  const { pseudoScrollinGesture } = LimitedPseudoScrolling({
    numberOfSlides: 5,
  });
  /*
  JSX
  */
  return (
    <mesh
      position={[
        0,
        0,
        /*
        to cover the whole sreen position this plane very close to camera
        */
        globalPositionData.aboutContainerCameraPosition[2] * 0.9,
      ]}
      {...pseudoScrollinGesture()}
      //   visible={false}
    >
      <planeGeometry args={[0.3, 0.3]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default InteractivePanel;
