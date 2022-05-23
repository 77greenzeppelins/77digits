import React from 'react';
/*
Components
*/
import SideFrame from '../_sideChildrenComponents/sideFrame/SideFrame';
import ClientSide1 from './clientSide/ClientSide1';
import DigitSide1 from './digitsSide/DigitSide1';
/*
Spring Section
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
import { bilboardSide1Data } from './bilboardSide_1_Data';

/*
----------------------------------------------------------------------------
*/

const BilboardSide_1 = ({
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
      name="GroupForBilboardSide_1"
      // position={bildoardSide1Data.sideProps.position}
      {...bilboardSide1Data.sideProps}
      rotation={animatedRotation}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide1Data.frameProps}
      />
      <ClientSide1 />
      <DigitSide1 />

      {/* <SideLabel labelProps={labelPropsReverse} />
      <SideLabel labelProps={labelProps} /> */}
    </a.group>
  );
};

export default BilboardSide_1;
