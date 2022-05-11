import React, { useRef } from 'react';
/*
Components
*/
import SpinningBox from '../../../spinningBox/SpinningBox';
import SpinningBoxSideIndicator from '../../../spinningBox/SpinningBoxSideIndicator';
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
  spinningBoxLayout,
  spinningBoxConfig,
  indicatorCongif,
} from './slide0DataWork';

/*
----------------------------------------------------------------------
*/
const Slide0 = ({
  slideId,
  rotateStepByStep,
  gesturesForSidesRotations,
  gesturesForSidesRotationsIndicator,
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
  depending on the final valu of this statement: "slideId < canvasGlobalState.containerAboutVisibleSlideIndex" slide can be "in the center of a screen" or "just above the top frame of a screen" (or, in case of <Slide1> "just below the bottom frame of a screen")
  */
  const { positionY } = useSpring({
    from: {
      positionY: sliderEngineSpring.centralPosition,
    },
    to: {
      positionY:
        slideId < canvasGlobalState.containerAboutVisibleSlideIndex
          ? sliderEngineSpring.topPosition
          : sliderEngineSpring.centralPosition,
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
      <a.group name="GroupForSlide_0" position-y={positionY}>
        {/*-----SpinningBoxSideIndicator Section--------------------------*/}
        <SpinningBoxSideIndicator
          indicatorCongif={indicatorCongif}
          /*
          "scaleValue" name is significantly shorten word then "gesturesForSidesRotationsIndicator"; it matters within <SpinningBoxSideIndicator>
          */
          springValue={gesturesForSidesRotationsIndicator}
        />

        {/*-----SpinningBox Section---------------------------------------*/}
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
                ? spinningBoxLayout.mobile.scale
                : spinningBoxLayout.desktop.scale,
          }}
          /*
          "spinningBoxConfig" is an array with 4 configObjects as items; using map() we get 4 <SpinningBoxSide>s
          */
          spinningBoxConfig={spinningBoxConfig}
        />
      </a.group>
    </group>
  );
};

export default Slide0;
