import React from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import TextSlide from '../../textSlides/textSlide/TextSlide';
import RaphaelPainting from './raphaelPainting/RaphaelPainting';
import PhilosophersAnswers from './philosophersAnswers/PhilosophersAnswers';
/*
Global State Section
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Gesture Staff
*/

import DragRotateReturn from '../../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a, useSpring } from '@react-spring/three';

/*
Basic Data
*/
import {
  raphaelSectionSpringConfig,
  raphaelSectionGesturesConfig,
  closeButtonFrame,
  closeButtonTextSlide,
} from './raphaelSectionData';

const RaphaelSection = () => {
  /*
  Global State Section
  canvasState = {currentContainer: none, startOfContainerIntroShow: false, ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Animation Section
  */
  const { springPositionZ } = useSpring({
    springPositionZ:
      canvasGlobalState.currentContainer === 'introContainer' &&
      canvasGlobalState.startOfContainerIntroShow
        ? raphaelSectionSpringConfig.positionEnd
        : raphaelSectionSpringConfig.positionStart,
    config: raphaelSectionSpringConfig.configBasic,
    delay: raphaelSectionSpringConfig.delay,
  });

  /*
  Gesture Section;
  standard draging to imitate "object limited-spinning"
  */
  const [orbitImitation, dragRotateReturn] = DragRotateReturn({
    /*
    set initial value of "rotation.z";
    */
    rotationX: raphaelSectionGesturesConfig.rotationX,
    /*
    set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
    */
    rightDragLimitX: raphaelSectionGesturesConfig.rightDragLimitX,
    leftDragLimitX: raphaelSectionGesturesConfig.leftDragLimitX,
    /*
    set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
    */
    rightDragLimitY: raphaelSectionGesturesConfig.rightDragLimitY,
    leftDragLimitY: raphaelSectionGesturesConfig.leftDragLimitY,
  });
  return (
    <a.group
      position={springPositionZ}
      {...dragRotateReturn()}
      rotation={orbitImitation}
    >
      <PhilosophersAnswers />
      <RaphaelPainting />
      {/*-----Close Button-----------------------------------*/}
      <group {...closeButtonFrame.groupProps}>
        <UniversalFrame {...closeButtonFrame.frameProps} />
        <TextSlide
          groupProps={closeButtonTextSlide.groupProps}
          textProps={closeButtonTextSlide.textProps}
          font={closeButtonTextSlide.font}
          fontSize={closeButtonTextSlide.fontSize}
          textLinePl={closeButtonTextSlide.textLinePl}
          textLineEn={closeButtonTextSlide.textLineEn}
          // thisLetterSpacing ={resetButtonTextSlide.groupProps}
          // whiteSpace,
        />
      </group>
    </a.group>
  );
};

export default RaphaelSection;
