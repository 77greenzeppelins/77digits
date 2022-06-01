import { useCallback, useRef } from 'react';
/*
GlobalState
*/
// import { useSnapshot } from 'valtio';
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
import { bilboardSideProps } from '../../components3D/three/custome/containerAbout/slider/slide0/spinningBilboard/bilboardSides/bilboarSidesCommonData';
const scaleFactor = 1.6;

/*
-----------------------------------------------------------------------
*/

const SpinningBilboardGestures = () => {
  /*
  Global States for SpringValues;
  canvasState = {}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  References
  */
  let refX = useRef(0);
  let isClientSideVisible = useRef(true);
  let sliderIsReady = useRef(false);
  // let isSpinningBoxGesturePromptMounted = useRef(true);
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
      number1,
      number2,
      number3,
      number4,
      number77,
      promptRotation,
    },
    api,
  ] = useSpring(() => ({
    rotateStepByStep: [0, 0, 0],
    sideFrontRotation: bilboardSideProps[0].rotationY,
    sideLeftRotation: bilboardSideProps[1].rotationY,
    sideBackRotation: bilboardSideProps[2].rotationY,
    sideRightRotation: bilboardSideProps[3].rotationY,
    number1: 1,
    number2: 1,
    number3: 1,
    number4: 1,
    number77: 0,
    promptRotation: 0,
    //
    config: config.molasses,
    // delay: 200,
    /*
    "onRest()" or onChange()?
    I've made some "experiences"... first seems to be preferable
 
    */
    // onChange: () => {
    //   if (sliderIsReady.current === true ) {
    //     canvasState.sliderIsReady = true;
    //   }
    //   // if (isSpinningBoxGesturePromptMounted.current === false) {
    //   //   canvasState.isSpinningBoxGesturePromptMounted = false;
    //   // }
    // },

    onRest: () => {
      // if (
      //   sliderIsReady.current === true &&
      //   canvasGlobalState.sliderIsReady === false
      // ) {
      //   canvasState.sliderIsReady = true;
      //   /*this "console.log" doesn't show current value of sliderIsReady*/
      //   console.log(
      //     'ContAboutGest / canvasGlobalState.sliderIsReady:',
      //     canvasGlobalState.sliderIsReady
      //   );
      // }

      if (isClientSideVisible.current === true) {
        canvasState.isClientSideVisible = true;
        // console.log(
        //   'ContAboutGest / canvasState.isClientSideVisible:',
        //   canvasGlobalState.isClientSideVisible,
        //   refX.current
        // );
      }
      if (isClientSideVisible.current === false) {
        canvasState.isClientSideVisible = false;
        // console.log(
        //   'ContAboutGest / canvasState.isClientSideVisible:',
        //   canvasGlobalState.isClientSideVisible,
        //   refX.current
        // );
      }
    },
  }));

  /*
  onStart Handler
  */
  const startDragHandler = useCallback(({ direction: [dirX] }) => {
    /*
    logic for changing "canvasState.sliderIsReady" that triggers 2D "GesturePrompt" of <Slider>
    */
    if (
      isClientSideVisible.current === false &&
      refX.current === 1 &&
      /*
      "dirX" condition is true only on "77digit" side; without "dirX" it triggers after the very first dragg;
      */
      dirX === -1 &&
      /*
      "sliderIsReady.current" condition guarantees "only one" eveluation of the if statement; i.e. buttons appears only once and lasts for ever;
      */
      sliderIsReady.current === false
    ) {
      sliderIsReady.current = true;
      canvasState.sliderIsReady = true;
      // console.log('........time to change "canvasState.sliderIsReady = true" ');
    }
    // console.log(
    //   'isClientSideVisible.current / refX.current / dirX / sliderIsReady.current / dragging:',
    //   isClientSideVisible.current,
    //   refX.current,
    //   dirX,
    //   sliderIsReady.current,
    //   dragging
    // );
  }, []);
  /*
  Main Callback Section
  */
  const mainDragHandler = useCallback(
    /*
    What "down" does ?
    documentation: "true when a mouse button or touch is down"
    */
    ({ down, movement: [movementX] }) => {
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

      /*
      Spring API
      */
      api.start({
        /*
        "rotateStepByStep" animates <SpinningBox>'s rotation
        */
        rotateStepByStep: [0, refX.current * Math.PI * 0.5, 0],
      });
    },
    [api]
  );

  const endDragHandler = useCallback(
    ({ down, direction: [dirX] }) => {
      /*
      This logic refers to moment when user has reached the end of "Client Section" is about to enter "77digitsSection" 
      */
      if (!down && refX.current === 4 && isClientSideVisible.current === true) {
        isClientSideVisible.current = false;
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
        sideFrontRotation: isClientSideVisible.current
          ? bilboardSideProps[0].rotationY
          : bilboardSideProps[0].rotationY + Math.PI,

        sideLeftRotation: isClientSideVisible.current
          ? bilboardSideProps[1].rotationY
          : bilboardSideProps[1].rotationY + Math.PI,

        sideBackRotation: isClientSideVisible.current
          ? bilboardSideProps[2].rotationY
          : bilboardSideProps[2].rotationY + Math.PI,

        sideRightRotation: isClientSideVisible.current
          ? bilboardSideProps[3].rotationY
          : bilboardSideProps[3].rotationY + Math.PI,

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
        // promptOpacity: (4 - refX.current) * 0.25,
        promptRotation: !isClientSideVisible.current ? Math.PI : 0,
      });
    },
    [api]
  );

  /*
  Gesture Section
  */
  const spinningBilboardGestures = useGesture(
    {
      onDragStart: startDragHandler,
      onDrag: mainDragHandler,
      onDragEnd: endDragHandler,
    },
    {
      // enabled:
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
    number1,
    number2,
    number3,
    number4,
    number77,
    promptRotation,
    spinningBilboardGestures,
  };
};

export default SpinningBilboardGestures;

// if (
//   !down &&
//   isClientSideVisible.current === false &&
//   refX.current === 0 &&
//   /*
//   "dirX" condition is true only on "77digit" side; without "dirX" it triggers after the very first dragg;
//   */
//   dirX === -1 &&
//   /*
//   "sliderIsReady.current" condition guarantees "only one" eveluation of the if statement; i.e. buttons appears only once and lasts for ever;
//   */
//   sliderIsReady.current === false
// ) {
//   sliderIsReady.current = true;
//   canvasState.sliderIsReady = true;
// }
// console.log(
//   'down / isClientSideVisible.current / refX.current / dirX / sliderIsReady.current___dragging, wheeling, moving:',
//   down,
//   isClientSideVisible.current,
//   refX.current,
//   dirX,
//   sliderIsReady.current,
//   dragging
// );
