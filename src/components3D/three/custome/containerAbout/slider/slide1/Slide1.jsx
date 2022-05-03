import React from 'react';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Gesture data
*/
import ContAboutSlide1 from '../../../../../../gestureHandlers/useGesture/ContAboutSlide1Gest';
/*
 Basic Data
 */
import { interactivePanelData } from './slide1Data';
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
    numberOfSlides: interactivePanelData.numberOfSlides,
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
     it actually plays role of <InteractivePanel>; it only receives "gestures inputs"; output from "contAboutSlide1.js" manipulates global state "canvasState.slide1Part = refX.current"; then according to current value of "slide1Part" appropriate non-canvas staff is rendered...
     */
      <mesh
        position={interactivePanelData.position}
        {...contAboutSlide1()}
        visible={false}
      >
        <planeGeometry args={interactivePanelData.planeGeometryArgs} />
        <meshBasicMaterial
        //  color={[0.015, 0.0001, 0.019]}
        // wireframe
        />
      </mesh>
    )
  );
};

export default Slide1;
