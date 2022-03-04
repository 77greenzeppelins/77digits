import { useCallback } from 'react';
// import { useThree } from '@react-three/fiber';
import { useSpring, config } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
/*
GlobalState
*/
// import { useSnapshot } from 'valtio';
import { canvasState } from '../../states/canvasState';
/*
Basic Data
*/
const [
  // defoultFactorX,
  // defoultFactorY,
  // defoultFactorZ,
  defoultX,
  defoultY,
  defoultZ,
  defoultLimitX,
  defoultLimitY,
  defoultLimitZ,
] = [0, 0, 0, 0, 0, 0];
/*
--------------------------------------------------------------------------
*/
const DragRotateReturn = ({
  rotationX,
  rotationY,
  rotationZ,
  rightDragLimitX,
  leftDragLimitX,
  rightDragLimitY,
  leftDragLimitY,
  rightDragLimitZ,
  leftDragLimitZ,
  clickDoesNothing,
}) => {
  /*
  Props explanation:'
  "rotationX" is actually initial value for "rotation.z"; imortant whwn we want to start with some rotation i.e. object has some starting/initial velue;

  */
  /*
  Global States for SpringValues;
  canvasState = {}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ orbitImitation }, api] = useSpring(() => ({
    orbitImitation: [
      rotationX || defoultX,
      rotationY || defoultY,
      rotationZ || defoultZ,
    ],
    config: config.molasses,
  }));

  /*
  Main Callback Section
  */
  const mainHandler = useCallback(
    ({ active, movement: [movementX, movementY], last }) => {
      /*
      What it does / what issue it solves ?
      I lost from time to time "clickability" of <AnsverYes> / <AnswerNo> buttons
      I don't know why....
      It doesn't solve my problem in 100%....
      */
      if (last) {
        canvasState.isYesNoButtonClickable = true;
        // console.log(
        //   'DragRotateReturn / canvasState.isYesNoButtonClickable:',
        //   canvasState.isYesNoButtonClickable
        // );
      }

      // console.log('movementX', movementX);

      api.start({
        /*
        logic explanation: the main idea is that I want to restrict rotation of "frame-like components" to certain value; i.e. no full "360 deg" rotation;
        "active === true" means that user is dragging;
        first check if value is positive ("movementX > 0"); in practice it means that user drags finger from left to right or drag mouse from left to right; in that case console logs values from 0 to XXX;
        
        What "movementX !== 0" does?
        It prevent from frame's move when clicking without dragging;
        */

        orbitImitation: [
          /*
          calculate X
          */
          active && movementX !== 0
            ? movementX > 0
              ? rightDragLimitX || defoultLimitX
              : leftDragLimitX || defoultLimitX
            : rotationX || defoultX,
          /*
          calculate Y
          */
          active && movementX !== 0
            ? movementX > 0
              ? rightDragLimitY || defoultLimitY
              : leftDragLimitY || defoultLimitY
            : rotationY || defoultY,
          /*
            calculate z
            */
          active && movementX !== 0
            ? movementX > 0
              ? rightDragLimitZ || defoultLimitZ
              : leftDragLimitZ || defoultLimitZ
            : rotationZ || defoultZ,
        ],
      });
    },
    [
      api,
      rotationX,
      rightDragLimitX,
      leftDragLimitX,
      rotationY,
      rightDragLimitY,
      leftDragLimitY,
      rotationZ,
      rightDragLimitZ,
      leftDragLimitZ,
    ]
  );

  /*
  Gesture Section
  */
  const dragRotateReturn = useDrag(mainHandler, {
    rubberband: true,
    /*
    react only to horizontal user's dragging; 
    */
    axis: 'x',
  });

  return [orbitImitation, dragRotateReturn];
};

export default DragRotateReturn;

/*
Props
*/
// const [rightDragLimitX, leftDragLimitX, rightDragLimitY, leftDragLimitY] = [
//   -0.25, -0.25, 1, -1];
/*
Call this gesture!!!
*/
// const [orbitImitation, dragRotateReturn] = DragRotateReturn({
/*
    set initial value of "rotation.z";
    */
// rotationX: rotationX,
/*
    set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
    */
// rightDragLimitX: rightDragLimitX,
// leftDragLimitX: leftDragLimitX,
/*
    set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
    */
// rightDragLimitY: rightDragLimitY,
// leftDragLimitY: leftDragLimitY,
// });

//____first version
/*
 calculate X
 */
// active
//   ? movementX > 0
//     ? Math.min((factorX || defoultFactorX) * movementX, 0.5)
//     : Math.max((factorX || defoultFactorX) * movementX, 0.5)
//   : rotationX,
/*
 calculate Y
 */
// active
//   ? movementX > 0
//     ? Math.min((factorY || defoultFactorY) * movementX, 1)
//     : Math.max((factorY || defoultFactorY) * movementX, -1)
//   : 0,
/*
 calculate Z
 */
// active
//   ? movementX > 0
//     ? Math.min((factorZ || defoultFactorZ) * movementX, 0)
//     : Math.max((factorZ || defoultFactorZ) * movementX, 0)
//   : 0,
