import React from 'react';
/*
Components
*/
import SideFrame from '../_sideChildrenComponents/sideFrame/SideFrame';
import ClientSide4 from './clientSide/ClientSide4';
import DigitSide4 from './digitsSide/DigitSide4';
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
  gesturesForSidesRotations,
}) => {
  return (
    <a.group
      name="GroupForSpinningBoxSide"
      {...bilboardSide4Data.sideProps}
      rotation={gesturesForSidesRotations}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide4Data.frameProps}
      />
      <ClientSide4 />
      <DigitSide4 />
    </a.group>
  );
};

export default BilboardSide_4;
