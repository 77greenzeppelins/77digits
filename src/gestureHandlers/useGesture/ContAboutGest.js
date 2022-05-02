import { useCallback, useRef } from 'react';
// import { useThree } from '@react-three/fiber';
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
import { slide0Box1Data } from '../../components3D/three/custome/containerAbout/slider/slide0/slide0Data';
import { mainGroupSpringData } from '../../components3D/three/custome/containerAbout/navigationPanel/navigationPanelData';
const scaleFactor = 1.6;

/*
-----------------------------------------------------------------------
*/

const ContAboutGest = ({ axisLimitation }) => {
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
  let isNavPanelOpened = useRef(false);
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
      positionNavPanel,
      arrowPromptGroupRotation,
      number1,
      number2,
      number3,
      number4,
      number77,
    },
    api,
  ] = useSpring(() => ({
    rotateStepByStep: [0, 0, 0],
    sideFrontRotation: [0, slide0Box1Data[0].sideProps.rotation[1], 0],
    sideLeftRotation: [0, slide0Box1Data[1].sideProps.rotation[1], 0],
    sideBackRotation: [0, slide0Box1Data[2].sideProps.rotation[1], 0],
    sideRightRotation: [0, slide0Box1Data[3].sideProps.rotation[1], 0],
    number1: 1,
    number2: 1,
    number3: 1,
    number4: 1,
    number77: 0,
    //
    arrowPromptGroupRotation: [0, 0, 0],
    //
    // positionNavPanel: mainGroupSpringData.startingPosition,
    positionNavPanel: [0, -1, 1.3],

    //
    config: config.molasses,
    delay: 200,
    /*
    What "onRest()" does?
    It changes global state & opens 2D navPanel;  
    */
    onChange: () => {
      if (isNavPanelOpened.current === true) {
        canvasState.isNavPanelOpened = true;
      }
      if (isSpinningBoxGesturePromptMounted.current === false) {
        canvasState.isSpinningBoxGesturePromptMounted = false;
      }
    },
    // },
    // onRest: () => {
    //   if (isNavPanelOpened.current === true) {
    //     canvasState.isNavPanelOpened = true;
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
    ({ down, movement: [movementX, movementY] }) => {
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
    /*
    this "logic" refers to situation when user rotates "spinning box" and something happens when he gets to "the end" of "Client Section"; "the end" in this case means , that bilboard is about to rotate 360deg = back to initial position; but this "final gesture" actually triggers "77digits Section";
    */
    ({ down, direction: [dirX, dirY] }) => {
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
        "isNavPanelOpened.current" condition guarantees "only one" eveluation of the if statement; i.e. buttons appears only once and lasts for ever;
        */
        isNavPanelOpened.current === false
      ) {
        isNavPanelOpened.current = true;
        // canvasState.isNavPanelOpened = true;
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
            ? slide0Box1Data[0].sideProps.rotation[1]
            : slide0Box1Data[0].sideProps.rotation[1] + Math.PI,
          0,
        ],
        sideLeftRotation: [
          0,
          isClientSideVisible.current
            ? slide0Box1Data[1].sideProps.rotation[1]
            : slide0Box1Data[1].sideProps.rotation[1] + Math.PI,
          0,
        ],
        sideBackRotation: [
          0,
          isClientSideVisible.current
            ? slide0Box1Data[2].sideProps.rotation[1]
            : slide0Box1Data[2].sideProps.rotation[1] + Math.PI,
          0,
        ],
        sideRightRotation: [
          0,
          isClientSideVisible.current
            ? slide0Box1Data[3].sideProps.rotation[1]
            : slide0Box1Data[3].sideProps.rotation[1] + Math.PI,
          0,
        ],
        arrowPromptGroupRotation: [
          0,
          isClientSideVisible.current ? 0 : Math.PI,
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

        /*
        springValue: "positionNavPanel" for <NavigationPanel>
        Why "full logic" instead of just "mainGroupSpringData.endingPosition"?
        Besause after the very first gesture "panel" flied to popsition [0,0,0]... 
        */
        positionNavPanel: [
          isNavPanelOpened.current === true
            ? mainGroupSpringData.endingPosition[0]
            : mainGroupSpringData.startingPosition[0],
          isNavPanelOpened.current === true
            ? mainGroupSpringData.endingPosition[1]
            : mainGroupSpringData.startingPosition[1],
          isNavPanelOpened.current === true
            ? mainGroupSpringData.endingPosition[2]
            : mainGroupSpringData.startingPosition[2],
        ],
      });
    },
    [
      api,
      // canvasGlobalState.isNavPanelOpened
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
      drag: {
        axis: axisLimitation,
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
    positionNavPanel,
    arrowPromptGroupRotation,
    number1,
    number2,
    number3,
    number4,
    number77,
    containerAboutGestures,
  };
};

export default ContAboutGest;
