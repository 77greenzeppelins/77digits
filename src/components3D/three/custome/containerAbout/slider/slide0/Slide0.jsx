import React, { useRef } from 'react';
/*
Components
*/
import SpinningBox from '../../../spinningBox/SpinningBox';
// import ArrowPrompt from './arrowPrompt/ArrowPrompt';
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
  minForTablet,
  sliderEngineSpring,
  slide0Box1Layout,
  slide0Box1Data,
  // arrowPromptData,
} from './slide0Data';

/*
----------------------------------------------------------------------
*/
const Slide0 = ({
  slideId,
  rotateStepByStep,
  gesturesForSidesRotations,
  arrowPromptGroupRotation,
}) => {
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
    {containerAboutVisibleSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  "sliderEngine"
  depending on the final valu of this statement: "slideId < canvasGlobalState.containerAboutVisibleSlideIndex" slide can be "in the center of a screen" or "just above the top frame of a screen" or "just below the bottom frame of a screen"
  */
  const { position } = useSpring({
    from: { position: [sliderEngineSpring.centralPosition, 0, 0] },
    to: {
      position: [
        0,
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutVisibleSlideIndex
          ? sliderEngineSpring.topPosition
          : sliderEngineSpring.centralPosition,

        0,
      ],
    },
    config:
      slideId < canvasGlobalState.containerAboutVisibleSlideIndex
        ? sliderEngineSpring.config /* when going up */
        : sliderEngineSpring.configDown /* when going down (molasses) */,
  });

  // useEffect(() => {
  //   console.log(
  //     'Slide0 / gesturesForSidesRotations:',
  //     gesturesForSidesRotations
  //   );
  // }, [gesturesForSidesRotations]);
  /*
  JSX
  */
  return (
    <group name="GroupForSlide_0">
      <a.group name="GroupForSlide_0" position={position}>
        {/*-----Body Section------------------------------------------*/}

        <SpinningBox
          rotateStepByStep={rotateStepByStep}
          gesturesForSidesRotations={gesturesForSidesRotations}
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
        />
        {/* <ArrowPrompt
          responsiveness={
            windowSize.width < arrowPromptData.responsivenessFactor ? 1 : 0
          }
          arrowPromptGroupRotation={arrowPromptGroupRotation}
        /> */}
      </a.group>
    </group>
  );
};

export default Slide0;
