import React from 'react';
/*
Components
*/
import SideFrame from '../_sideChildrenComponents/sideFrame/SideFrame';
import ClientSide3 from './clientSide/ClientSide3';
import DigitSide3 from './digitsSide/DigitSide3';
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
  gesturesForSidesRotations,
}) => {
  return (
    <a.group
      name="GroupForSpinningBoxSide"
      {...bilboardSide3Data.sideProps}
      rotation={gesturesForSidesRotations}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide3Data.frameProps}
      />
      <ClientSide3 />
      <DigitSide3 />
    </a.group>
  );
};

export default BilboardSide_3;
