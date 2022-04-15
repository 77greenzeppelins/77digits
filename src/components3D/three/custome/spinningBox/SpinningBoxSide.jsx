import React from 'react';
/*
Global State Staff
*/
import { snapshot, useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import UniversalFrame from '../matcapFrames/UniversalFrame';
import SideLabel from './SideLabel';
/*
Spring Section
*/
import { a, useSpring } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBoxSide = (
  /*
   "spinningBoxConfig" is destructured here!
  */
  {
    /*
  Props used by <SpinningBoxSide>
  */
    sideProps,
    springConfig,
    /*
  Props for children components
  */
    frameProps,
    labelProps,
    labelPropsReverse,
  }
) => {
  /*
  Props destructuring
  */
  const { position, rotation } = sideProps;
  const { animationDelay, config } = springConfig;
  /*
Global state section
*/
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  SpringSection
  */
  const { springValue } = useSpring({
    from: { springValue: rotation },
    to: {
      springValue: [
        0,
        canvasGlobalState.isClientSideVisible === true
          ? rotation[1]
          : rotation[1] + Math.PI,

        0,
      ],
    },
    config: config,
    delay: animationDelay,
    // cancel: isSlideVisible ? false : true, //????
  });
  /*
  JSX
  */
  return (
    <a.group
      name="GroupForSpinningBoxSides"
      position={position}
      rotation={springValue}
    >
      <UniversalFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...frameProps}
      />
      {/* <UniversalCanvas {...canvasProps} /> */}
      <SideLabel labelProps={labelPropsReverse} />
      <SideLabel labelProps={labelProps} />
      {/* <group position={[0.3, 0, 0]}>
        <SideLabel labelProps={labelProps} />
      </group> */}
    </a.group>
  );
};

export default SpinningBoxSide;
