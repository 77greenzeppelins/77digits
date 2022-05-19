import { useCallback, useRef } from 'react';
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
import { spinningBoxConfig } from '../../components3D/three/custome/containerAbout/slider/slide0/slide0Data';
const scaleFactor = 1.6;

/*
-----------------------------------------------------------------------
*/

const ContAboutGest = () => {
  /*
  Global States for SpringValues;
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  References
  */
  let refX = useRef(0);
  let isClientSideVisible = useRef(true);
  let sliderIsReady = useRef(false);
  let isSpinningBoxGesturePromptMounted = useRef(true);
  /*
  Spring Section
  "rotateStepByStep" refers to <SpinningBox> rotation;
  */
  const [
    {
      rotateStepByStep,
      sideFrontRotation,
      sideLeftRotation,
      sideBackRotation,
      sideRightRotation,
      arrowPromptGroupRotation,
      number1,
      number2,
      number3,
      number4,
      number77,
      /*
      for <ComponentAbout2DStaff>
      */
      opacitySetter,
      moveX,
    },
    api,
  ] = useSpring(() => ({
    rotateStepByStep: [0, 0, 0],
    sideFrontRotation: [0, spinningBoxConfig[0].sideProps.rotation[1], 0],
    sideLeftRotation: [0, spinningBoxConfig[1].sideProps.rotation[1], 0],
    sideBackRotation: [0, spinningBoxConfig[2].sideProps.rotation[1], 0],
    sideRightRotation: [0, spinningBoxConfig[3].sideProps.rotation[1], 0],
    number1: 1,
    number2: 1,
    number3: 1,
    number4: 1,
    number77: 0,
    //
    moveX: 0,
    opacitySetter: 0.8,
    //
    config: config.molasses,
    delay: 200,
    /*
    What "onRest()" does?
    Here two global state props are changed: (i) to close initial gesture prompt  (ii) to open 2D navPanel => or rather to open gesture prompt indicator for slide changes...;  
    */
    onChange: () => {
      if (sliderIsReady.current === true) {
        canvasState.sliderIsReady = true;
      }
      if (isSpinningBoxGesturePromptMounted.current === false) {
        canvasState.isSpinningBoxGesturePromptMounted = false;
      }
    },
    // },
    // onRest: () => {
    //   if (sliderIsReady.current === true) {
    //     canvasState.sliderIsReady = true;
    //   }
    // },
  }));

  /*
  Main Callback Section
  */
  const mainDragHandler = useCallback(
    /*
    What "down" does ?
    documentation: "true when a mouse button or touch is down"
    */
    ({ offset: [offsetX], down, movement: [movementX, movementY] }) => {
      /*
      triggers once only; allowes to unmount <SpinningBoxGesturePrompt>
      */
      if (
        !down &&
        movementX !== 0 &&
        isSpinningBoxGesturePromptMounted.current === true
      ) {
        isSpinningBoxGesturePromptMounted.current = false;
        // console.log(
        //   'isSpinningBoxGesturePromptMounted.current:',
        //   isSpinningBoxGesturePromptMounted.current
        // );
      }
      /*
      Why such "if statement condition" ?
     "down" is true when a mouse button or touch is down (documentation)
      I'm looking for "unique set of gesture properties" i.e the one that "happens only once" within "current gesture"; bare "movementX" triggers / "is being changed" multiply times within every drag; i.e within particular user's drags this value changes a number of time;
      "refX.current" / "refY.current" works as counter;
      */
      /*___________part for "Jesteś Ty" */
      if (movementX > 50 && !down && refX.current <= 3) {
        refX.current++;
        // console.log('refX.current', refX.current);
      }

      if (movementX < 50 && !down && refX.current > 0) {
        refX.current--;
        // console.log('refX.current', refX.current);
      }

      // console.log('offset: [offsetX,]', offsetX);

      /*
      Spring API
      */
      api.start({
        /*
        "rotateStepByStep" animates <SpinningBox>'s rotation
        */
        rotateStepByStep: [0, refX.current * Math.PI * 0.5, 0],
        opacitySetter:
          refX.current === 1 && isClientSideVisible.current ? 1 : 0.3,
        // opacitySetter: offsetX > 0 ? 1 : 0.3,
        moveX: offsetX,
      });
    },
    [api]
  );

  const endDragHandler = useCallback(
    /*
    this "logic" refers to situation when user rotates "spinning box" and something happens when he gets to "the end" of "Client Section"; "the end" in this case means , that bilboard is about to rotate 360deg = back to initial position; but this "final gesture" actually triggers "77digits Section";
    */
    ({ down, direction: [dirX] }) => {
      if (!down && refX.current === 4 && isClientSideVisible.current === true) {
        isClientSideVisible.current = false;
      }

      if (
        !down &&
        isClientSideVisible.current === false &&
        refX.current === 0 &&
        /*
        "dirX" condition is true only on "77digit" side; without "dirX" it triggers after the very firs dragg;
        */
        dirX === -1 &&
        /*
        "sliderIsReady.current" condition guarantees "only one" eveluation of the if statement; i.e. buttons appears only once and lasts for ever;
        */
        sliderIsReady.current === false
      ) {
        sliderIsReady.current = true;
        // canvasState.sliderIsReady = true;
      }

      /*
      This logic refers to moment when user returns from "77digits Section" to "Client Section" 
      */
      if (
        !down &&
        refX.current === 0 &&
        isClientSideVisible.current === false
      ) {
        isClientSideVisible.current = true;
      }
      /*
      Spring API
      */
      api.start({
        sideFrontRotation: [
          0,
          isClientSideVisible.current
            ? spinningBoxConfig[0].sideProps.rotation[1]
            : spinningBoxConfig[0].sideProps.rotation[1] + Math.PI,
          0,
        ],
        sideLeftRotation: [
          0,
          isClientSideVisible.current
            ? spinningBoxConfig[1].sideProps.rotation[1]
            : spinningBoxConfig[1].sideProps.rotation[1] + Math.PI,
          0,
        ],
        sideBackRotation: [
          0,
          isClientSideVisible.current
            ? spinningBoxConfig[2].sideProps.rotation[1]
            : spinningBoxConfig[2].sideProps.rotation[1] + Math.PI,
          0,
        ],
        sideRightRotation: [
          0,
          isClientSideVisible.current
            ? spinningBoxConfig[3].sideProps.rotation[1]
            : spinningBoxConfig[3].sideProps.rotation[1] + Math.PI,
          0,
        ],
        /*
        set of animations for <SpinningBoxIndicator>
        */
        number1:
          (refX.current === 0 && isClientSideVisible.current) ||
          (refX.current === 4 && !isClientSideVisible.current)
            ? scaleFactor
            : 1,

        number2:
          (refX.current === 1 && isClientSideVisible.current) ||
          (refX.current === 3 && !isClientSideVisible.current)
            ? scaleFactor
            : 1,

        number3:
          (refX.current === 2 && isClientSideVisible.current) ||
          (refX.current === 2 && !isClientSideVisible.current)
            ? scaleFactor
            : 1,

        number4:
          (refX.current === 3 && isClientSideVisible.current) ||
          (refX.current === 1 && !isClientSideVisible.current)
            ? scaleFactor
            : 1,

        number77: !isClientSideVisible.current ? Math.PI * 2 : 0,
      });
    },
    [
      api,
      // canvasGlobalState.sliderIsReady
    ]
  );

  /*
  Gesture Section
  */
  const containerAboutGestures = useGesture(
    {
      onDrag: mainDragHandler,
      onDragEnd: endDragHandler,
    },
    {
      // target: canvasGlobalState.currentContainer === 'aboutContainer' && window,
      drag: {
        axis: 'x',
        // bounds: {  },
        // threshold: -10,
      },
    }
  );

  /*
  Final "return staff" of this function
  */
  return {
    rotateStepByStep,
    sideFrontRotation,
    sideLeftRotation,
    sideBackRotation,
    sideRightRotation,
    arrowPromptGroupRotation,
    number1,
    number2,
    number3,
    number4,
    number77,
    opacitySetter,
    moveX,
    containerAboutGestures,
  };
};

export default ContAboutGest;
