import React from 'react';
/*
Gesture Staff
*/
// import ContAboutNavGest from '../../../../../gestureHandlers/useGesture/ContAboutNavGest';
/*
Basic Data
*/
import { interactivePanelData } from './interactivePanelData';

const InteractivePanel = ({ meshProps }) => {
  /*
  Gesture Section
  */
  // ContAboutNavGest();

  /*
  JSX
  */
  return (
    <mesh
      {...meshProps}
      position={interactivePanelData.position}
      // {...contAboutNavGest()}
      // {...pseudoScrollinGesture()}
      // {...gestureHandler()}
      //   visible={false}
    >
      <planeGeometry args={interactivePanelData.planeGeometryArgs} />
      <meshBasicMaterial color={[0, 0, 0]} />
    </mesh>
  );
};

export default InteractivePanel;
