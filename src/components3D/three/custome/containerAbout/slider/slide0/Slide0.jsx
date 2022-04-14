import React, { Suspense, useRef } from 'react';
/*
Components
*/
import SpinningBox from '../../../spinningBox/SpinningBox';
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Gesture Section
*/
import DragRotateStepByStep from '../../../../../../gestureHandlers/useDrag/DragRotateStepByStep';
/*
Spring data
*/
import { a, useSpring } from '@react-spring/three';
/*
Hook Staff
*/
import useWindowSize from '../../../../../../hooks/useWindowSize';
/*
 Basic Data
 */
import {
  slideSpring,
  slide0Box1Layout,
  slide0Box1Data,
  slide0Box1DataForSpring,
} from './slide0Data';

const minForTablet = 850;

/*
----------------------------------------------------------------------
*/
const Slide0 = ({ slideId }) => {
  /*
  References
  */
  const spinBox = useRef();
  /*
  Hook Section
  */
  const windowSize = useWindowSize();
  /*
  Global State Section
    {containerAboutSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  "sliderEngine"
  depending on "slideId < canvasGlobalState.containerAboutVisibleSlideIndex"
  slide can be "in center" or "at top"
  */
  // const sliderEngine = useSpring({
  //   from: [slideSpring.centralPosition, 0, 0],
  //   to: {
  //     position: [
  //       0,
  //       canvasGlobalState.currentContainer === 'aboutContainer' &&
  //       slideId < canvasGlobalState.containerAboutVisibleSlideIndex
  //         ? slideSpring.topPosition
  //         : slideSpring.centralPosition,

  //       0,
  //     ],
  //   },
  //   config: slideSpring.config,
  // });
  /*
  "Reseter"
  Allowes to reset position of <SpinningBoxSide> to "client label"
  */
  if (canvasGlobalState.currentContainer !== 'aboutContainer') {
    canvasState.slide0Rotation = false;
  }
  /*
    Call this gesture!!!
    returned staf includes: rotateStepByStep,gestureCounter, dragRotateStepByStep
    */
  const {
    //____
    rotateStepByStep,
    rotateButtonPosition,
    rotateButtonVisibility,
    dragRotateStepByStep,
  } = DragRotateStepByStep({
    /*
      set axis that is active
      */
    axisLimitation: slide0Box1DataForSpring.axisLimitation,
  });

  /*
  JSX
  */
  return (
    <a.group
      name="GroupForSlide_0"
      // position={sliderEngine.position}
      {...dragRotateStepByStep()}
    >
      {/*-----Body Section------------------------------------------*/}
      <Suspense fallback={null}>
        <SpinningBox
          rotateStepByStep={rotateStepByStep}
          ref={spinBox}
          groupProps={{
            name: 'groupForSpinningBox_slide_0',
            /*
              a bit of responsiveness; 
              */
            scale:
              windowSize.width < minForTablet
                ? slide0Box1Layout.mobile.scale
                : slide0Box1Layout.desktop.scale,
            position:
              windowSize.width < minForTablet
                ? slide0Box1Layout.mobile.position
                : slide0Box1Layout.desktop.position,
          }}
          /*
          "spinningBoxConfig" is an array with configObjects as items; using map() we get 4 <SpinningBoxSide>
          */
          spinningBoxConfig={slide0Box1Data}
          springConfig={slide0Box1DataForSpring}
          isSlideVisible={
            slideId === canvasGlobalState.containerAboutSlideIndex
          }
          isSideRotating={canvasGlobalState.slide0Rotation}
        />
      </Suspense>
      <a.group position={rotateButtonPosition} visible={rotateButtonVisibility}>
        <Suspense fallback={null}>
          <UniversalFrame
            groupProps={{
              name: 'groupForButton',
              scale: [0.15, 0.15, 0.15],
              // position: [0, -0.35, 0],
              position: [0, 0, 0],
            }}
            format="banner"
            cylinderFi={0.015}
            sphereRadious={0.03}
          />
        </Suspense>
      </a.group>
    </a.group>
  );
};

export default Slide0;
