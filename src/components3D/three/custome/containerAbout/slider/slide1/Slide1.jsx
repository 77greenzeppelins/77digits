import React, { useEffect } from 'react';
/*
Components
*/
import InteractivePanel from '../../interactivePanel/InteractivePanel';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Gesture data
*/
import ContAboutSlide1 from '../../../../../../gestureHandlers/useGesture/ContAboutSlide1';
/*
Spring data
*/
// import { a, useSpring } from '@react-spring/three';
/*
 Basic Data
 */
import { globalPositionData } from '../../../../../../data/globalData';

/*
----------------------------------------------------------------------
*/

const Slide1 = ({ slideId }) => {
  /*
  Hook Section
  Why this hook?
  */
  /*
  Global State Section
    {containerAboutVisibleSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  Gesture Section
  */
  const { contAboutSlide1 } = ContAboutSlide1({
    numberOfSlides: 2,
  });

  // useEffect(() => {
  //   console.log(
  //     'Slide1 / canvasGlobalState.containerAboutVisibleSlideIndex:',
  //     canvasGlobalState.containerAboutVisibleSlideIndex
  //   );
  //   console.log('Slide1 / slideId:', slideId);
  // }, [canvasGlobalState.containerAboutVisibleSlideIndex, slideId]);

  /*
  JSX
  */
  return (
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId && (
      // <InteractivePanel
      //   gestureHandler={ContAboutSlide1}
      //   color={[0.015, 0.0001, 0.019]}
      // />
      <mesh
        position={[
          0,
          0,
          /*
        to cover the whole sreen position this plane very close to camera; value 0.9 makes it invisible; test with smaller values
        */
          globalPositionData.aboutContainerCameraPosition[2] * 0.9,
        ]}
        // {...pseudoScrollinGesture()}
        {...contAboutSlide1()}
        //   visible={false}
      >
        <planeGeometry args={[0.3, 0.3]} />
        <meshBasicMaterial
          //  color={[0.015, 0.0001, 0.019]}
          wireframe
        />
      </mesh>
    )
  );
};

export default Slide1;
