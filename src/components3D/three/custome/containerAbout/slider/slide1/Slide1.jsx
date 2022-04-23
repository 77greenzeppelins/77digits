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
      /*
     it actually plays role of <InteractivePanel>; it only receives "gestures inputs"; output from contAboutSlide1() manipulates global state "canvasState.slide1Part = refX.current"; then according to current value of "slide1Part" appropriate non-canvas staff is rendered...
     */
      <mesh
        position={[
          0,
          0,
          /*
          to cover the whole sreen,  this plane should be positioned very close to camera; value 0.9 makes it "invisible"; for test purpose smaller values should be used;
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
