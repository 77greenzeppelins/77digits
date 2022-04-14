import { useCallback, useRef } from 'react';
/*
Global State Staff
*/
import { canvasState } from '../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Gesture Staff
*/
import { useDrag } from '@use-gesture/react';
/*
Spring Staff
*/
import { useSpring, config } from '@react-spring/three';
/*
Basic Data
*/
// const [defaultX, defaultY, defaultZ] = [0, 0, 0];
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
  axisLimitation,
}) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  References
  */
  let refX = useRef(0);
  //____
  // if (canvasGlobalState.isRotateButtonActive) {
  //   refX.current = 0;
  // }
  //____

  /*
  Spring Section
  "rotateStepByStep" refers to <SpinningBox> rotation;
  "gpVisibility" refersto <GesturePrompts> visibility
  */
  const [
    { rotateStepByStep, rotateButtonPosition, rotateButtonVisibility },
    api,
  ] = useSpring(() => ({
    rotateStepByStep: [0, 0, 0],
    // rotateStepByStep: [
    //   rotationX || defaultX,
    //   rotationY || defaultY,
    //   rotationZ || defaultZ,
    // ],
    //_____testers
    rotateButtonPosition: [0, -0.22, 0],
    rotateButtonVisibility: false,

    //_____
    config: config.molasses,
    // config: { duration: 2000 },
    /*
    What this does???
    It is ment to triger rendering of 2D button for 3D button that rotate <SBF>; as it's global state we can acces it on 2D-domaine 
    */
    onRest: () => {
      if (refX.current === 4 || refX.current === -4) {
        canvasState.isRotateButtonActive = true;
      } else {
        canvasState.isRotateButtonActive = false;
      }
    },
  }));

  /*
  Main Callback Section
  */
  const mainHandler = useCallback(
    /*
    What "down" does ?
    documentation: "true when a mouse button or touch is down"
    */
    ({ down, movement: [movementX, movementY], memo = 0 }) => {
      /*
      Why such "if statement condition" ?
      documentation: "down is true when a mouse button or touch is down"
      I'm looking for "unique set of properties" i.e the one that "happens once" within "current gesture"; bare "movementX" triggers multiply times within every drag; i.e within particular user's drags this value changes a number of time;
      "refX.current" / "refY.current" works as counter;
      concept of "reseter": if(canvasGlobalState.currentContainer !== "aboutContainer") {refX.current = 0};
      */
      if (movementX > 50 && !down && refX.current <= 3) {
        refX.current += 1;
        console.log('refX.current / left-to-right', refX.current);
      }

      if (movementX < 50 && !down && refX.current >= -3) {
        refX.current -= 1;
        console.log('refX.current / right-to-left', refX.current);
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
          // axisLimitation === 'y' ? refY.current * Math.PI * 0.5 : 0,
          0,
          /*
          calculate Y
          listen to gesture on x-axis and using valuse from this gesture calculate rotation along y-axis; a bit odd... 
          */
          // axisLimitation === 'x' && refX.current < 5
          //   ? refX.current * Math.PI * 0.5
          //   : 4 * Math.PI * 0.5,
          axisLimitation === 'x' ? refX.current * Math.PI * 0.5 : 0,
          /*
          calculate z
          */
          // rotationZ || defaultZ,
          0,
        ],
        /*
        .........springValues for tests
        */
        rotateButtonPosition:
          refX.current === 4 || refX.current === -4
            ? [0, -0.35, 0]
            : [0, -0.18, 0],
        rotateButtonVisibility:
          refX.current > 2 || refX.current < -2 ? true : false,
      });
    },
    [api, axisLimitation]
  );

  /*
  Gesture Section
  Here we set the "drag hook"; by means of "mainHandler" we define component movement based on gesture data;
  */
  const dragRotateStepByStep = useDrag(
    mainHandler,
    /*
    This is a sort of "config object" that embraces "gesture options"
    axis sets "active" axis; component "listen to" draggs along this axis
    */
    {
      // target: window,
      axis: axisLimitation,
    }
  );
  /*
  Final "return staff" of this function
  */
  return {
    rotateStepByStep,
    rotateButtonPosition,
    rotateButtonVisibility,
    dragRotateStepByStep,
  };
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
