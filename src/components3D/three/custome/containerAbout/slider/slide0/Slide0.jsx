import React, { Suspense, useEffect, useRef } from 'react';
/*
Components
*/
import SpinningBox from '../../../spinningBox/SpinningBox';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
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
  */
  const sliderEngine = useSpring({
    from: [slideSpring.centralPosition, 0, 0],
    to: {
      position: [
        0,
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutSlideIndex
          ? slideSpring.topPosition
          : slideSpring.centralPosition,

        0,
      ],
    },
    config: slideSpring.config,
  });

  /*
  useEffectSection
  */
  // useEffect(() => {
  //   if (canvasGlobalState.currentContainer === 'aboutContainer') {
  //     console.log('you are in aboutContainer /  Slide0');
  //     console.log(
  //       'you are in aboutContainer /  spinBox.current',
  //       spinBox.current.rotation
  //     );
  //     console.log(
  //       '<Slide0> /  canvasGlobalState.slide0Rotation',
  //       canvasGlobalState.slide0Rotation
  //     );
  //   } else {
  //     console.log('you are outside aboutContainer /  Slide0');
  //     canvasState.slide0Rotation = false;
  //   }
  // }, [canvasGlobalState.currentContainer, canvasGlobalState.slide0Rotation]);
  // useEffect(() => {
  //   if (
  //     canvasGlobalState.currentContainer === 'aboutContainer' &&
  //     spinBox.current
  //   ) {
  //     console.log('spinBox.current', spinBox.current.children[0]);
  //   }
  // }, [canvasGlobalState.currentContainer]);
  /*
  "Reseter"
  Allowes to reset position of <SpinningBoxSide> to "client label"
  */
  if (canvasGlobalState.currentContainer !== 'aboutContainer') {
    canvasState.slide0Rotation = false;
  }

  //___
  /*
  JSX
  */
  return (
    <a.group
      name="GroupForSliderEngineAnimationOfSlide_0"
      position={sliderEngine.position}
    >
      {/*-----Body Section------------------------------------------*/}
      <Suspense fallback={null}>
        <SpinningBox
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
    </a.group>
  );
};

export default Slide0;
