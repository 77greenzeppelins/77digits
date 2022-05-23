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
import { bilboardSide2Data } from './bilboardSide_2_Data';

/*
---------------------------------------------------------------------------
*/
const BilboarSide_2 = ({
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
      // position={bildoardSide1Data.sideProps.position}
      {...bilboardSide2Data.sideProps}
      rotation={animatedRotation}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide2Data.frameProps}
      />

      {/* <SideLabel labelProps={labelPropsReverse} />
      <SideLabel labelProps={labelProps} /> */}
    </a.group>
  );
};

export default BilboarSide_2;
