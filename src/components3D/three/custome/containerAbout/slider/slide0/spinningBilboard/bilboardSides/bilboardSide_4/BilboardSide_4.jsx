import React from 'react';
/*
Components
*/
import SideFrame from '../_sideChildrenComponents/sideFrame/SideFrame';
// import SideLabel from './SideLabel';
/*
Spring Section
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
import { bilboardSide4Data } from './bilboardSide_4_Data';

/*
----------------------------------------------------------------------------
*/

const BilboardSide_4 = ({
  /*
  Props used by <SpinningBoxSide>
  */
  //   sideProps,
  /*
  Props for children components
  */
  //   frameProps,
  labelProps,
  labelPropsReverse,
  /*
  ...
  */
  animatedRotation,
}) => {
  return (
    <a.group
      name="GroupForSpinningBoxSide"
      {...bilboardSide4Data.sideProps}
      rotation={animatedRotation}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide4Data.frameProps}
      />
      {/* <SideLabel labelProps={labelPropsReverse} />
      <SideLabel labelProps={labelProps} /> */}
    </a.group>
  );
};

export default BilboardSide_4;
