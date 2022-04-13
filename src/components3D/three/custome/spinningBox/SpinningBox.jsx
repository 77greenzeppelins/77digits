import React, { useRef } from 'react';
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
      /*
      props for <SpinningBoxSide>'s gesture
      */
      gestureSettings,
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
    const { rotateStepByStep, dragRotateStepByStep } = DragRotateStepByStep({
      /*
      set axis that is active
      */
      axisLimitation: springConfig.axisLimitation,
    });

    /*
  JSX
  */
    return (
      <a.group
        ref={ref}
        {...groupProps}
        {...dragRotateStepByStep()}
        // rotation={rotateStepByStep} //___
      >
        <a.group ref={autorotatingGroup} rotation={rotateStepByStep}>
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
        <mesh position={[0, -0.93, 0]}>
          <planeGeometry args={[0.1, 0.1]} />
          <meshBasicMaterial color={[1, 0, 0]} />
        </mesh>
      </a.group>
    );
  }
);

export default SpinningBox;
