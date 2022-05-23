import React, { useEffect } from 'react';
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
import useWindowSize from '../../../../../../../hooks/useWindowSize';
/*
...
*/
/*
Spring Section
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
const spinningBoxLayout = {
  mobile: { scale: [0.32, 0.32, 0.32] },
  desktop: { scale: [0.33, 0.33, 0.33] },
};
const minForTablet = 850;

/*
-----------------------------------------------------------------------------
*/
const SpinningBilboard = ({
  /*
      props for <SpinningBox>'s main <group>; scale & position;
      */
  groupProps,
  /*
      props for <SpinningBoxSide> layout and its children
      */
  spinningBoxConfig, // "slide0Box1Data"
  /*
      springValue from "ContainerAboutGesture.js"
      */
  rotateStepByStep,
  gesturesForSidesRotations,
}) => {
  /*
  Hook Section
  */
  const windowSize = useWindowSize();
  /*
  scale calculation
  */
  //   const scale =
  //     windowSize.width < minForTablet
  //       ? spinningBoxLayout.mobile.scale
  //       : spinningBoxLayout.desktop.scale;

  useEffect(() => {
    console.log('gesturesForSidesRotations', gesturesForSidesRotations);
  }, [gesturesForSidesRotations]);

  /*
  JSX
  */
  return (
    <a.group
      name="groupForSpoinningBilboard"
      scale={[0.32, 0.32, 0.32]}
      rotation={rotateStepByStep}
    >
      <BilboardSide1 animatedRotation={gesturesForSidesRotations[0]} />
      <BilboardSide2 animatedRotation={gesturesForSidesRotations[1]} />
      <BilboardSide3 animatedRotation={gesturesForSidesRotations[2]} />
      <BilboardSide4 animatedRotation={gesturesForSidesRotations[3]} />

      {/* <mesh>
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial color={[1, 0, 0]} />
      </mesh> */}
    </a.group>
  );
};

export default SpinningBilboard;
