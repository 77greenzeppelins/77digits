import React from 'react';
/*
Components
*/
import RaphaelPainting from './raphaelPainting/RaphaelPainting';
import PhilosophersAnswers from './philosophersAnswers/PhilosophersAnswers';
/*
Gesture Staff
*/

import DragRotateReturn from '../../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
import {
  raphaelSectionSpringConfig,
  raphaelSectionGesturesConfig,
} from './raphaelSectionData';

const RaphaelSection = () => {
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
      position={[0, 0, -19.6]}
      {...dragRotateReturn()}
      rotation={orbitImitation}
    >
      <RaphaelPainting />

      <PhilosophersAnswers />
    </a.group>
  );
};

export default RaphaelSection;
