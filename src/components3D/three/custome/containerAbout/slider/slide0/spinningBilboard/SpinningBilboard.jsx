import React from 'react';
/*
Components
*/
import BilboardSide1 from './bilboardSides/bilboardSide_1/BilboardSide_1';
import BilboardSide2 from './bilboardSides/bilboardSide_2/BilboardSide_2';
import BilboardSide3 from './bilboardSides/bilboardSide_3/BilboardSide_3';
import BilboardSide4 from './bilboardSides/bilboardSide_4/BilboardSide_4';
/*
Hook Staff
*/
// import useWindowSize from '../../../../../../../hooks/useWindowSize';
/*
Spring Section
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
// const spinningBoxLayout = {
//   mobile: { scale: [0.32, 0.32, 0.32] },
//   desktop: { scale: [0.33, 0.33, 0.33] },
// };
// const minForTablet = 850;
const basicData = {
  groupScale: [0.32, 0.32, 0.32],
};

/*
-----------------------------------------------------------------------------
*/
const SpinningBilboard = ({
  /*
  springValue from "ContAboutGesture.js"
  */
  gestureForBilboardRotation,
  gesturesForSidesRotations,
}) => {
  /*
  JSX
  */
  return (
    <a.group
      name="groupForSpinningBilboard"
      scale={basicData.groupScale}
      rotation={gestureForBilboardRotation}
    >
      <BilboardSide1 gesturesForSidesRotations={gesturesForSidesRotations[0]} />
      <BilboardSide2 gesturesForSidesRotations={gesturesForSidesRotations[1]} />
      <BilboardSide3 gesturesForSidesRotations={gesturesForSidesRotations[2]} />
      <BilboardSide4 gesturesForSidesRotations={gesturesForSidesRotations[3]} />
    </a.group>
  );
};

export default SpinningBilboard;
