import React from 'react';
/*
Components
*/
import SideFrame from '../_sideChildrenComponents/sideFrame/SideFrame';
import ClientSide2 from './clientSide/ClientSide2';
import DigitSide2 from './digitsSide/DigitSide2';
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
  ...
  */
  gesturesForSidesRotations,
}) => {
  return (
    <a.group
      name="GroupForSpinningBoxSide"
      {...bilboardSide2Data.sideProps}
      rotation-y={gesturesForSidesRotations}
    >
      <SideFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...bilboardSide2Data.frameProps}
      />
      <ClientSide2 />
      <DigitSide2 />
    </a.group>
  );
};

export default BilboarSide_2;
