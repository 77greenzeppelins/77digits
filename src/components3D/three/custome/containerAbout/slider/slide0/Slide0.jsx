import React, { Suspense, useRef } from 'react';
/*
Components
*/
import SpinningBox from '../../../spinningBox/SpinningBox';
import GesturePrompt from '../../../gesturePrompt/GesturePrompt';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Gesture Section
*/
import IncrementalSpinOnDrag from '../../../../../../gestureHandlers/useGesture/IncrementalSpinOnDrag';

/*
Spring data
*/
import { a } from '@react-spring/three';
/*
Hook Staff
*/
import useWindowSize from '../../../../../../hooks/useWindowSize';
/*
 Basic Data
 */
import {
  // slideSpring,
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
  // if (canvasGlobalState.currentContainer !== 'aboutContainer') {
  //   canvasState.slide0Rotation = false;
  // }
  /*
  Call this gesture!!!
  returned staf includes: rotateStepByStep,gestureCounter, dragRotateStepByStep
  */
  const { rotateStepByStep, incrementalSpinOnDrag } = IncrementalSpinOnDrag({
    /*
    set axis that is active
    */
    axisLimitation: slide0Box1DataForSpring.axisLimitation,
    rotationInitVal: [0, 0, 0],
  });
  /*
  JSX
  */
  return (
    <group name="GroupForSlide_0">
      <a.group
        name="GroupForSlide_0...incrementalSpinOnDrag()"
        {...incrementalSpinOnDrag()}
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
          />
        </Suspense>
      </a.group>

      {canvasGlobalState.currentContainer === 'aboutContainer' && (
        <GesturePrompt
          scena="caDragSpinningBox"
          groupProps={{
            position: [0, 0, 0.6],
          }}
        />
      )}
    </group>
  );
};

export default Slide0;
