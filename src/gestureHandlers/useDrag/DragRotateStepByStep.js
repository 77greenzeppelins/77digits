import { useCallback } from 'react';
// import { useThree } from '@react-three/fiber';
/*
Gesture Staff
*/
import { useDrag } from '@use-gesture/react';
/*
Spring Staff
*/
import { useSpring, config } from '@react-spring/three';
/*
Global State Staff
*/
// import { canvasState } from '../../states/canvasState';
/*
Basic Data
*/
const [
  defaultX,
  defaultY,
  defaultZ,
  defaultLimitX,
  //   defaultLimitY,
  defaultLimitZ,
] = [0, 0, 0, 0, 0, 0];
/*
--------------------------------------------------------------------------
*/

const DragRotateStepByStep = ({
  /*
  Props explanation:'
  "rotationX" is actually initial value for "rotation.x"; important when we want to start with some rotation i.e. object has some starting/initial velue;
  same refers to "rotationY", "rotationZ"
  */
  rotationX,
  rotationY,
  rotationZ,
  rightDragLimitX,
  leftDragLimitX,
  rightDragLimitY,
  leftDragLimitY,
  rightDragLimitZ,
  leftDragLimitZ,
}) => {
  /*
  Spring Section
  */
  const [{ rotateStepByStep }, api] = useSpring(() => ({
    rotateStepByStep: [
      rotationX || defaultX,
      rotationY || defaultY,
      rotationZ || defaultZ,
    ],
    config: config.molasses,
  }));

  /*
  Main Callback Section
  */
  const mainHandler = useCallback(
    /*
    Why "active" is crucial attribute of gesture state?
    Because "dragging" cause by user exist only when "active = 1"; if zero no changes take place; i.e. object rotates only if "active = 1" so automatically return to "initial settings of rotation" 
    */
    ({ active, movement: [movementX, movementY], last }) => {
      if (Math.abs(movementX) > 200) {
        console.log('DragRotateStepByStep / movementX', movementX);
        console.log('DragRotateStepByStep / movementY', movementY);
      }

      api.start({
        /*
        logic explanation: the main idea is that I want to restrict rotation of "frame-like components" to certain value; i.e. no full "360 deg" rotation;
        "active === true" means that user is dragging;
        first check if value is positive ("movementX > 0"); in practice it means that user drags finger from left to right or drag mouse from left to right; in that case console logs values from 0 to XXX;
        
        What "movementX !== 0" does?
        It prevent from frame's move when clicking without dragging;
        */

        rotateStepByStep: [
          /*
          calculate X
          */
          active && movementX !== 0
            ? movementX > 0
              ? rightDragLimitX || defaultLimitX
              : leftDragLimitX || defaultLimitX
            : rotationX || defaultX,

          /*
          calculate Y
          */
          //   active && movementX !== 0
          //     ? movementX > 0
          //       ? rightDragLimitY || defaultLimitY
          //       : leftDragLimitY || defaultLimitY
          //     : rotationY || defaultY,
          /*
          Firs check: if user drags more intense then "200"; if not no changes in rotation; if yes process second check;
          Second check: if drag generates positive value of  "movementX"
          */
          Math.abs(movementX) > 200 && movementX !== 0
            ? movementX > 0
              ? Math.PI * 0.5
              : -Math.PI * 0.5
            : null,
          /*
            calculate z
            */
          active && movementX !== 0
            ? movementX > 0
              ? rightDragLimitZ || defaultLimitZ
              : leftDragLimitZ || defaultLimitZ
            : rotationZ || defaultZ,
        ],
      });
    },
    [
      api,
      rotationX,
      rightDragLimitX,
      leftDragLimitX,
      //   rotationY,
      //   rightDragLimitY,
      //   leftDragLimitY,
      rotationZ,
      rightDragLimitZ,
      leftDragLimitZ,
    ]
  );

  /*
  Gesture Section
  Here we set the drag hook; by means of "mainHandler" we define component movement based on gesture data;
  */
  const dragRotateStepByStep = useDrag(
    mainHandler,
    /*
    This is a sort of "config object" that embraces "gesture options"
    */
    {
      // rubberband: true,
      /*
    react only to horizontal user's dragging; 
    */
      axis: 'x',
    }
  );

  /*
  Final "return staff" of this function
  */
  return [rotateStepByStep, dragRotateStepByStep];
};

export default DragRotateStepByStep;
/*
Props

const [
  rightDragLimitX, 
  leftDragLimitX, 
  rightDragLimitY, 
  leftDragLimitY] = [
     -0.25, 
     -0.25, 
      1, 
     -1];
*/

/*
Call this gesture!!!
*/
// const [rotateStepByStep, dragRotateStepByStep] = DragRotateStepByStep({
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
