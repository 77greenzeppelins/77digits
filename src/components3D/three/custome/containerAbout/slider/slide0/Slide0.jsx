import React, { Suspense, useRef } from 'react';
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
import { slideSpring, slide0Box1Layout, slide0Box1Data } from './slide0Data';

const minForTablet = 850;

/*
----------------------------------------------------------------------
*/
const Slide0 = ({ slideId, rotateStepByStep, gesturesForSidesRotations }) => {
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
  depending on "slideId < canvasGlobalState.containerAboutVisibleSlideIndex"
  slide can be "in center" or "at top"
  */
  const { position } = useSpring({
    from: { position: [slideSpring.centralPosition, 0, 0] },
    to: {
      position: [
        0,
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        slideId < canvasGlobalState.containerAboutVisibleSlideIndex
          ? slideSpring.topPosition
          : slideSpring.centralPosition,

        0,
      ],
    },
    config:
      slideId < canvasGlobalState.containerAboutVisibleSlideIndex
        ? slideSpring.config /* when going up */
        : slideSpring.configDown /* when going down (molasses) */,
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
        <Suspense fallback={null}>
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
        </Suspense>
      </a.group>
    </group>
  );
};

export default Slide0;
