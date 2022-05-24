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
    /*
    springValue for rotation of the whole <SpinningBilboard>
    */
    rotateStepByStep,
    /*
    springValues for rotation of each individual <SB>'s sides
    */
    sideFrontRotation,
    sideLeftRotation,
    sideBackRotation,
    sideRightRotation,
    /*
    springValues for SpinningBoxSideIndicator>
    */
    number1,
    number2,
    number3,
    number4,
    number77,
    containerAboutGestures,
  } = ContAboutGest();

  const gestureForBilboardRotation = useMemo(() => {
    return rotateStepByStep;
  }, [rotateStepByStep]);
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
          {/*
          Slider Section
          */}
          <Slider
            gestureForBilboardRotation={gestureForBilboardRotation}
            gesturesForSidesRotations={gesturesForSidesRotations}
            gesturesForSidesRotationsIndicator={
              gesturesForSidesRotationsIndicator
            }
          />
        </Suspense>
      </group>
    )
  );
};

export default ContainerAbout;
