import React from 'react';
/*
Components
*/
import RaphaelPainting from './raphaelPainting/RaphaelPainting';
import PhilosophersAnswers from './philosophersAnswers/PhilosophersAnswers';
import CustomMeshWithMatcap from '../../_meshesWithMatcap/CustomMeshWithMatcap';
import TextGeometryFromFont from '../../extrudedObjects/text/TextGeometryFromFont';
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
import { a, useTransition } from '@react-spring/three';

/*
Basic Data
*/
import {
  raphaelSectionSpringConfig,
  raphaelSectionGesturesConfig,
  buttonX,
} from './raphaelSectionData';

/*
----------------------------------------------------------------------------
*/
const RaphaelSection = React.forwardRef(
  ({ groupProps, positionY, zRaphael }, ref) => {
    /*
  Global State Section
  canvasState = {currentContainer: none, startOfContainerIntroShow: false, ...}
  */
    const canvasGlobalState = useSnapshot(canvasState);
    /*
  Spring Animation Section
  */

    const condition =
      canvasGlobalState.currentContainer === 'introContainer' &&
      canvasGlobalState.endOfContainerIntro;

    const transition = useTransition(condition, {
      from: { zPosition: raphaelSectionSpringConfig.positionStart },
      enter: { zPosition: raphaelSectionSpringConfig.positionEnd },
      leave: { zPosition: raphaelSectionSpringConfig.positionStart },
      config: raphaelSectionSpringConfig.configBasic,
      delay: raphaelSectionSpringConfig.delay,
    });

    /*
  Gesture Section;
  standard draging to imitate "object limited-spinning"
  */
    const { orbitImitation, dragRotateReturn } = DragRotateReturn({
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

    // return transition(
    // ({ zPosition }, transitionCondition) =>
    //   transitionCondition && (
    return (
      <a.group
        ref={ref}
        position-x={0}
        position-y={0}
        position-z={0} //  zStart: -21, zEnd: -19.64,
        // {...groupProps}
        // position={zPosition}
        {...dragRotateReturn()}
        rotation={orbitImitation}
      >
        <PhilosophersAnswers />
        <RaphaelPainting />
        {/*-----X Button-----------------------------------*/}
        <a.group {...buttonX.groupProps}>
          <CustomMeshWithMatcap meshProps={buttonX.meshProps}>
            <TextGeometryFromFont
              fontExtrudeSettings={buttonX.fontExtrudeSettings}
              text={buttonX.text}
            />
          </CustomMeshWithMatcap>
        </a.group>
      </a.group>
    );
    //     )
    // );
  }
);

export default RaphaelSection;
