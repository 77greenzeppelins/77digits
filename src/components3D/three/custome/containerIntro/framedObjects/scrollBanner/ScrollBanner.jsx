import React from 'react';
// import { useThree } from '@react-three/fiber';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import UniversalCanvasWithoutMap from '../../../matcapFrames/UniversalCanvasWithoutMap';
import TextSection from './textSection/TextSection';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../../../states/canvasState';
/*
Gesture Staff
"DragRotateReturn" works as pseudoOrbitController; it just rotate obiect along with defined axis;
*/
import DragRotateReturn from '../../../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
/*
Basic variables
*/

import {
  scrollBannerData,
  bannerGestureConfiguration,
} from '../framedObjectsData';

/*
--------------------------------------------------------------------------
*/
const ScrollBaner = ({ groupProps }) => {
  /*
  Global State Section
  canvasState={languageVersion: 'pl',...}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  extracting data from useThree()
  */
  // const { viewport } = useThree();
  /*
  Gesture Section
  */
  const [orbitImitation, dragRotateReturn] = DragRotateReturn({
    /*
    set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
    */
    rightDragLimitX: bannerGestureConfiguration.rightDragLimitX,
    leftDragLimitX: bannerGestureConfiguration.leftDragLimitX,
    /*
    set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
    */
    rightDragLimitY: bannerGestureConfiguration.rightDragLimitY,
    leftDragLimitY: bannerGestureConfiguration.leftDragLimitY,
  });
  /*
  JSX
  */
  return (
    <a.group
      {...scrollBannerData.groupProps}
      {...dragRotateReturn()}
      rotation={orbitImitation}
    >
      <UniversalFrame {...scrollBannerData.frameProps} />
      <UniversalCanvasWithoutMap {...scrollBannerData.canvasProps} />
      <TextSection />
    </a.group>
  );
};

export default ScrollBaner;
