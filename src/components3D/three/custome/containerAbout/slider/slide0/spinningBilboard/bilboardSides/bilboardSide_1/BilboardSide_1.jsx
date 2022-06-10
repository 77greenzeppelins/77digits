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

const BilboardSide_1 = ({ gesturesForSidesRotations }) => {
  /*
  JSX
  */
  return (
    <a.group
      name="GroupForBilboardSide_1"
      {...bilboardSide1Data.sideProps}
      rotation-y={gesturesForSidesRotations}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide1Data.frameProps}
      />
      <ClientSide1 />
      <DigitSide1 />
    </a.group>
  );
};

export default BilboardSide_1;
