import React from 'react';
/*
Components
*/
import SpinningBoxSide from './SpinningBoxSide';

/*
State Staff
*/
// import { canvasState } from '../../../../states/canvasState';
// import { useSnapshot } from 'valtio';
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
      spinningBoxConfig, // "slide0Box1Data"
      /*
      springValue from "ContainerAboutGesture.js"
      */
      rotateStepByStep,
      gesturesForSidesRotations,
    },
    ref
  ) => {
    /*
    JSX
    */
    return (
      <a.group rotation={rotateStepByStep} ref={ref} {...groupProps}>
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
              sideProps={sideProps}
              animatedRotation={gesturesForSidesRotations[index]}
              labelProps={labelProps}
              labelPropsReverse={labelPropsReverse}
              canvasProps={canvasProps}
              frameProps={frameProps}
            />
          )
        )}
      </a.group>
    );
  }
);

export default SpinningBox;
