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
import { bilboardSide3Data } from './bilboardSide_3_Data';

/*
----------------------------------------------------------------------------
*/

const BilboardSide_3 = ({
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
      {...bilboardSide3Data.sideProps}
      rotation={animatedRotation}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide3Data.frameProps}
      />
      {/* <SideLabel labelProps={labelPropsReverse} />
      <SideLabel labelProps={labelProps} /> */}
    </a.group>
  );
};

export default BilboardSide_3;
