import React from 'react';
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
    isSlideVisible,
    isSideRotating,
    /*
  Props for children components
  */
    canvasProps,
    frameProps,
    labelProps,
    labelPropsReverse,
  }
) => {
  /*
  Props destructuring
  */
  const { position, rotation } = sideProps;
  const { axisLimitation, animationDelay, config } = springConfig;

  /*
  SpringSection
  */
  const { springValue } = useSpring({
    from: { springValue: rotation },
    to: {
      springValue: [
        /*
        important for "banner"'s sides that rotate along x-axis
        */
        axisLimitation === 'y' && isSlideVisible && isSideRotating
          ? rotation[0] + Math.PI
          : rotation[0],
        /*
        important for "portrait"'s sides that rotate along y-axis;
        */
        axisLimitation === 'x' && isSlideVisible && isSideRotating
          ? rotation[1] + Math.PI
          : rotation[1],
        /*
        z-axis value
        */
        rotation[2],
      ],
    },
    config: config,
    delay: animationDelay,
    cancel: isSlideVisible ? false : true, //????
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
