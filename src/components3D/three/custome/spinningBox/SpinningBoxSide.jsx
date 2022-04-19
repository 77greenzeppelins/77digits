import React from 'react';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import UniversalFrame from '../matcapFrames/UniversalFrame';
import SideLabel from './SideLabel';
/*
Spring Section
*/
import { a } from '@react-spring/three';

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
    /*
    Props for children components
    */
    frameProps,
    labelProps,
    labelPropsReverse,
    /*
    ...
    */
    animatedRotation,
  }
) => {
  /*
  Global state section
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  SpringSection
  */
  // const { springValue } = useSpring({
  //   from: { springValue: sideProps.rotation },
  //   to: {
  //     springValue: [
  //       sideProps.rotation[0],
  //       canvasGlobalState.isClientSideVisible === true
  //         ? sideProps.rotation[1]
  //         : sideProps.rotation[1] + Math.PI,

  //       sideProps.rotation[2],
  //     ],
  //   },
  //   config: springConfig.config,
  //   delay: springConfig.animationDelay,
  // });

  // useEffect(() => {
  //   console.log('animatedRotation', animatedRotation);
  // }, [animatedRotation]);
  /*
  JSX
  */
  return (
    <a.group
      name="GroupForSpinningBoxSides"
      position={sideProps.position}
      rotation={animatedRotation}
    >
      <UniversalFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...frameProps}
      />
      <SideLabel labelProps={labelPropsReverse} />
      <SideLabel labelProps={labelProps} />
    </a.group>
  );
};

export default SpinningBoxSide;
