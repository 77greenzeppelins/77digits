import React from 'react';
/*
Basic Data
*/
import { interactivePanelData } from './interactivePanelData';
/*
Gesture Staff
*/
import ContAboutNavGest from '../../../../../gestureHandlers/useGesture/ContAboutNavGest';
// import LimitedPseudoScrolling from '../../../../../gestureHandlers/useGesture/LimitedPseudoScrolling';

const InteractivePanel = ({ meshProps }) => {
  /*
  Gesture Section
  */
  // const { pseudoScrollinGesture } = LimitedPseudoScrolling({
  //   numberOfSlides: 5,
  // });

  /*
  Gesture Section
  */
  const { contAboutNavGest } = ContAboutNavGest({
    // numberOfSlides: interactivePanelData.numberOfSlides,
    numberOfSlides: 5,
  });

  /*
  JSX
  */
  return (
    <mesh
      {...meshProps}
      position={interactivePanelData.position}
      {...contAboutNavGest()}
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
