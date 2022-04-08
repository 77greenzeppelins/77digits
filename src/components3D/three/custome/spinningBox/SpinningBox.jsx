import React, { useRef, useEffect } from 'react';
/*
Components
*/
import SpinningBoxSide from './SpinningBoxSide';
/*
Gesture Section
*/
import DragRotateStepByStep from '../../../../gestureHandlers/useDrag/DragRotateStepByStep';
/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBox = React.forwardRef(
  (
    {
      /*
  props for <SpinningBox>'s main <group>; scale & position;
  */
      groupProps,
      /*
  props for <SpinningBoxSide> layout and its children
  */
      spinningBoxConfig,
      /*
  props for <SpinningBoxSide>'s spring
  */
      springConfig,
      isSlideVisible,
      isSideRotating,
    },
    ref
  ) => {
    /*
  References
  */
    const autorotatingGroup = useRef();
    /*
  Call this gesture!!!
  returned staf includes: rotateStepByStep,gestureCounter, dragRotateStepByStep
  */
    const [rotateStepByStep, dragRotateStepByStep] = DragRotateStepByStep({
      /*
    set axis that is active
    */
      axisLimitation: springConfig.axisLimitation,
    });

    // useEffect(() => {
    //   if (
    //     ref.current.name === 'groupForSpinningBox_slide_0' &&
    //     ref.current.rotation.z === 0
    //   ) {
    //     console.log('SpinningBox / ref.current:', ref.current.rotation);
    //   } else console.log('SpinningBox WTF');
    // }, [ref]);

    /*
  JSX
  */
    return (
      <a.group
        ref={ref}
        {...groupProps}
        {...dragRotateStepByStep()}
        rotation={rotateStepByStep}
      >
        <a.group ref={autorotatingGroup}>
          {spinningBoxConfig.map(
            (
              {
                sideProps,
                labelProps,
                labelPropsReverse,
                canvasProps,
                frameProps,
              },
              index
            ) => (
              <SpinningBoxSide
                key={index}
                labelProps={labelProps}
                labelPropsReverse={labelPropsReverse}
                sideProps={sideProps}
                canvasProps={canvasProps}
                frameProps={frameProps}
                /*
              props for <SpinningBoxSide>'s springAnimation;
              */
                springConfig={springConfig}
                isSlideVisible={isSlideVisible}
                isSideRotating={isSideRotating}
              />
            )
          )}
        </a.group>
      </a.group>
    );
  }
);

export default SpinningBox;
