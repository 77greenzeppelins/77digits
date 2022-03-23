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
import { GestureConfiguration } from './scrollBannerConfiguration';

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
    rightDragLimitX: GestureConfiguration.rightDragLimitX,
    leftDragLimitX: GestureConfiguration.leftDragLimitX,
    /*
    set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
    */
    rightDragLimitY: GestureConfiguration.rightDragLimitY,
    leftDragLimitY: GestureConfiguration.leftDragLimitY,
  });
  /*
  JSX
  */
  return (
    <a.group {...groupProps} {...dragRotateReturn()} rotation={orbitImitation}>
      <UniversalFrame
        groupProps={{ name: 'groupForUniversalFrame' }}
        banner={true}
        format="banner"
      />
      <UniversalCanvasWithoutMap banner={true} format="banner" />
      <TextSection />
    </a.group>
  );
};

export default ScrollBaner;