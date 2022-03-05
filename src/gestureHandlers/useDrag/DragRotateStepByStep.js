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
const [defaultX, defaultY, defaultZ] = [0, 0, 0];

let horizontalRotationValue = 0;
let verticalRotationValue = 0;
let someBool = null;
let leftRotation = 0;
let rightRotation = 0;

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
    // config: { duration: 2000 },
  }));

  /*
  Main Callback Section
  */
  const mainHandler = useCallback(
    /*
    What "down" does ?
    */
    ({ down, movement: [movementX, movementY] }) => {
      /*
      Test 2
      I'm looking for 
      */
      if (movementX > 0 && !down) {
        someBool = true;
        horizontalRotationValue += 1;
        console.log('DragRotateStepByStep / someBool', someBool);
      }
      if (movementX < 0 && !down) {
        someBool = false;
        horizontalRotationValue -= 1;
        console.log('DragRotateStepByStep / someBool', someBool);
      }
      /*
      Spring API
      */
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
          0,
          //   someBool
          //     ? verticalRotationValue * Math.PI * 0.5
          //     : verticalRotationValue * Math.PI * 0.5,

          /*
          calculate Y
          */
          someBool
            ? horizontalRotationValue * Math.PI * 0.5
            : horizontalRotationValue * Math.PI * 0.5,

          /*
          calculate z
          */
          0,
        ],
      });
    },
    [
      api,
      //   rotationX,
      //   rightDragLimitX,
      //   leftDragLimitX,
      //   rotationY,
      //   rightDragLimitY,
      //   leftDragLimitY,
      //   rotationZ,
      //   rightDragLimitZ,
      //   leftDragLimitZ,
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
