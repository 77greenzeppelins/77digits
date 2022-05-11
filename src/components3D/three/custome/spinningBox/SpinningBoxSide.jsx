import React from 'react';
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
  JSX
  */
  return (
    <a.group
      name="GroupForSpinningBoxSide"
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
