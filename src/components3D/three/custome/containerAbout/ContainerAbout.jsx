import React, { useMemo, Suspense, useRef, useEffect } from 'react';
/*
Components
*/
import Slider from './slider/Slider';
import InteractivePanel from './interactivePanel/InteractivePanel';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Gesture Staff
*/
import ContAboutGest from '../../../../gestureHandlers/useGesture/ContAboutGest';
/*
Basic Data
*/
import { contAboutSlidesNumber } from '../../../../data/globalData';
/*
------------------------------------------------------------------------
 */
const ContainerAbout = () => {
  /*
  References
  */
  const group = useRef();
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gesture Section 
  */
  const {
    rotateStepByStep,
    sideFrontRotation,
    sideLeftRotation,
    sideBackRotation,
    sideRightRotation,
    number1,
    number2,
    number3,
    number4,
    number77,
    containerAboutGestures,
  } = ContAboutGest();

  /*
  array of animation for all <SpinningBoxSide>
  */
  const gesturesForSidesRotations = useMemo(() => {
    return [
      sideFrontRotation,
      sideLeftRotation,
      sideBackRotation,
      sideRightRotation,
    ];
  }, [
    sideFrontRotation,
    sideLeftRotation,
    sideBackRotation,
    sideRightRotation,
  ]);
  /*
  array of animation for all <SpinningBoxSide>
  */
  const gesturesForSidesRotationsIndicator = useMemo(() => {
    return [number1, number2, number3, number4, number77];
  }, [number1, number2, number3, number4, number77]);

  /*
  ...
  */
  // useEffect(() => {
  //   console.log(group.current);
  // }, []);

  /*
  JSX 
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <group
        ref={group}
        scale={[1, 1, 1]}
        name="GroupForContainerAbout"
        position={canvasGlobalState.aboutContainerPosition}
        {...containerAboutGestures()}
      >
        <InteractivePanel
          meshProps={{ name: 'PanelForContainerAbout' }}
          slidesNumber={contAboutSlidesNumber}
        />
        <Suspense fallback={null}>
          {/*-----Slider Section-----------------------------------
      "rotateStepByStep" gestures for <SpinningBox>
      "gesturesForSidesRotations" gestures for <SpinningBoxSide>
      */}
          <Slider
            rotateStepByStep={rotateStepByStep}
            gesturesForSidesRotations={gesturesForSidesRotations}
            gesturesForSidesRotationsIndicator={
              gesturesForSidesRotationsIndicator
            }
          />
          {/*-----Navigation Panel Section------------------------*/}
        </Suspense>
      </group>
    )
  );
};

export default ContainerAbout;
