import React from 'react';
/*
Basic Data
*/
import { globalPositionData } from '../../../../../data/globalData';
/*
Gesture Staff
*/
import LimitedPseudoScrolling from '../../../../../gestureHandlers/useGesture/LimitedPseudoScrolling';

const InteractivePanel = ({ gestureHandler, color }) => {
  /*
  Gesture Section
  */
  // const { pseudoScrollinGesture } = LimitedPseudoScrolling({
  //   numberOfSlides: 5,
  // });
  /*
  JSX
  */
  return (
    <mesh
      position={[
        0,
        0,
        /*
        to cover the whole sreen position this plane very close to camera; value 0.9 makes it invisible; test with smaller values
        */
        globalPositionData.aboutContainerCameraPosition[2] * 0.5,
      ]}
      // {...pseudoScrollinGesture()}
      {...gestureHandler()}
      //   visible={false}
    >
      <planeGeometry args={[0.3, 0.3]} />
      <meshBasicMaterial color={color || [0, 0, 0]} />
    </mesh>
  );
};

export default InteractivePanel;
