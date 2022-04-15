import { useCallback, useRef } from 'react';
// import { useThree } from '@react-three/fiber';
/*
GlobalState
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../states/canvasState';
/*
Spring Staff
*/
import { useSpring, config } from '@react-spring/three';
/*
Gesture Staff
*/
import { useGesture } from '@use-gesture/react';
/*
Basic Data
*/

/*
-----------------------------------------------------------------------
*/
const IncrementalSpinOnDrag = ({ axisLimitation, rotationInitVal }) => {
  /*
  Global States for SpringValues;
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  References
  */
  let refX = useRef(0);

  /*
  Spring Section
  "rotateStepByStep" refers to <SpinningBox> rotation;
  */
  const [
    { rotateStepByStep, rotateButtonPosition, rotateButtonVisibility },
    api,
  ] = useSpring(() => ({
    // rotateStepByStep: [0, 0, 0],
    rotateStepByStep: rotationInitVal,
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
    // onRest: () => {
    //   if (
    //     refX.current === 4 &&
    //     canvasGlobalState.isClientSideVisible === true
    //   ) {
    //     canvasState.isClientSideVisible =
    //       !canvasGlobalState.isClientSideVisible;
    //   }
    //   if (
    //     refX.current === 0 &&
    //     canvasGlobalState.isClientSideVisible === false
    //   ) {
    //     canvasState.isClientSideVisible =
    //       !canvasGlobalState.isClientSideVisible;
    //   }
    // },
  }));

  /*
  Main Callback Section
  */
  const mainHandler = useCallback(
    /*
    What "down" does ?
    documentation: "true when a mouse button or touch is down"
    */
    ({ down, movement: [movementX, movementY] }) => {
      /*
      Why such "if statement condition" ?
     "down" is true when a mouse button or touch is down (documentation)
      I'm looking for "unique set of properties" i.e the one that "happens once" within "current gesture"; bare "movementX" triggers multiply times within every drag; i.e within particular user's drags this value changes a number of time;
      "refX.current" / "refY.current" works as counter;
      ".facetOfSpinningBoxSide === 1" means we are on "Jesteś Ty" side
      */
      /*___________part for "Jesteś Ty" */
      if (
        movementX > 50 &&
        !down &&
        refX.current <= 3 &&
        canvasGlobalState.facetOfSpinningBoxSide === 1
      ) {
        // refX.current += 1;
        refX.current++;

        // console.log('refX.current / left-to-right', refX.current);
      }

      if (
        movementX < 50 &&
        !down &&
        refX.current > 0 &&
        canvasGlobalState.facetOfSpinningBoxSide === 1
      ) {
        // refX.current -= 1;
        refX.current--;
        // console.log('refX.current / right-to-left', refX.current);
      }

      /*___________part for "Jestem Ja" */
      if (
        movementX < 50 &&
        !down &&
        refX.current > 0 &&
        canvasGlobalState.facetOfSpinningBoxSide === 0
      ) {
        // refX.current -= 1;
        refX.current--;

        // console.log('refX.current / right-to-left', refX.current);
      }
      if (
        movementX > 50 &&
        !down &&
        refX.current <= 3 &&
        canvasGlobalState.facetOfSpinningBoxSide === 0
      ) {
        // refX.current += 1;
        refX.current++;

        // console.log('refX.current / left-to-right', refX.current);
      }
      /*
      Spring API
      */
      api.start({
        /*
        springValue: "rotateStepByStep"
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
          axisLimitation === 'x' ? refX.current * Math.PI * 0.5 : 0,
          // axisLimitation === 'x' && refX.current < 5
          //   ? refX.current * Math.PI * 0.5
          //   : 4 * Math.PI * 0.5,
          /*
          calculate z
          */
          // rotationZ || defaultZ,
          0,
        ],
        /*
        springValue: "rotateButtonPosition"
        */
        // rotateButtonPosition:
        //   canvasGlobalState.facetOfSpinningBoxSide === 1 && refX.current === 4
        //     ? //      ||
        //       //   (canvasGlobalState.facetOfSpinningBoxSide === 0 && refX.current === 0)
        //       [0, -0.35, 0]
        //     : [0, -0.18, 0],
        /*
        springValue: "jestesTyGestureIndicator"
        */
        // rotateSpinningBoxFace:
        //   canvasGlobalState.facetOfSpinningBoxSide === 1 && refX.current === 1
        //     ? []
        //     : [],
        /*
        springValue: "jestemJaGestureIndicator"
        */
        // rotateSpinningBoxFace:
        //   canvasGlobalState.facetOfSpinningBoxSide === 0 && refX.current === 4
        //     ? []
        //     : [],
        /*
        springValue: "rotateButtonVisibility"
        */
        rotateButtonVisibility:
          refX.current > 2 || refX.current < -2 ? true : false,
      });
    },
    [api, axisLimitation, canvasGlobalState.facetOfSpinningBoxSide]
  );

  const endDragHandler = ({ down }) => {
    if (
      !down &&
      refX.current === 4 &&
      canvasGlobalState.isClientSideVisible === true
    ) {
      canvasState.isClientSideVisible = !canvasGlobalState.isClientSideVisible;
      //   refX.current = 0;
      //   console.log(
      //     'clientSide end / canvasGlobalState.isClientSideVisible:',
      //     canvasGlobalState.isClientSideVisible
      //   );
      //   console.log('clientSide end / refX.current:', refX.current);
    }
    if (
      !down &&
      refX.current === 0 &&
      canvasGlobalState.isClientSideVisible === false
    ) {
      canvasState.isClientSideVisible = !canvasGlobalState.isClientSideVisible;
      //   refX.current = 0;
      //   console.log(
      //     '77Side end / canvasGlobalState.isClientSideVisible:',
      //     canvasGlobalState.isClientSideVisible
      //   );
      //   console.log('77Side end / refX.current:', refX.current);
    }
    /*
    Spring API
    */
    api.start({
      /*
      springValue: "rotateButtonPosition"
      */
      rotateButtonPosition:
        refX.current === 4 || refX.current === -4
          ? [0, -0.35, 0]
          : [0, -0.18, 0],
    });
  };

  /*
  Gesture Section
  */
  const incrementalSpinOnDrag = useGesture(
    {
      onDrag: mainHandler,
      onDragEnd: endDragHandler,
    },
    {
      //   target: canvasGlobalState.currentContainer === 'introContainer' && window,
      //   enabled:
      //     canvasGlobalState.currentContainer === 'introContainer' &&
      //     !canvasGlobalState.endOfContainerIntro,
      drag: {
        axis: axisLimitation,
        // bounds: { ...canvasGlobalState.introContainerWheelDragBounds },
        // threshold: -10,
      },
    }
  );

  /*
  Final "return staff" of this function
  */
  return {
    rotateStepByStep,
    rotateButtonPosition,
    rotateButtonVisibility,
    incrementalSpinOnDrag,
  };
};

export default IncrementalSpinOnDrag;
