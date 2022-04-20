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
import { slide0Box1Data } from '../../components3D/three/custome/containerAbout/slider/slide0/slide0Data';

/*
-----------------------------------------------------------------------
*/

const ContainerAboutGestures = ({ axisLimitation }) => {
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
  let isNavPanelOpened = useRef(false);
  /*
  Spring Section
  "rotateStepByStep" refers to <SpinningBox> rotation;
  */
  const [
    {
      rotateStepByStep,
      positionNavPanel,
      sideFrontRotation,
      sideLeftRotation,
      sideBackRotation,
      sideRightRotation,
    },
    api,
  ] = useSpring(() => ({
    rotateStepByStep: [0, 0, 0],
    sideFrontRotation: [0, slide0Box1Data[0].sideProps.rotation[1], 0],
    sideLeftRotation: [0, slide0Box1Data[1].sideProps.rotation[1], 0],
    sideBackRotation: [0, slide0Box1Data[2].sideProps.rotation[1], 0],
    sideRightRotation: [0, slide0Box1Data[3].sideProps.rotation[1], 0],
    //_____testers
    positionNavPanel: [0, -0.3, -2.2],
    rotateButtonVisibility: false,
    //_____
    config: config.molasses,
    // config: { duration: 2000 },
    /*
    What "onRest()" does?
    It opens 2D navPanel;  
    */
    // onRest: () => {
    //   if (
    //     isClientSideVisible.current === false &&
    //     refX.current === 0 &&
    //     /*
    //     this last condition guarantees "only one" eveluation of the callback; i.e. buttons appears only once and lasts for ever;
    //     */
    //     isNavPanelOpened.current === false
    //   ) {
    //     isNavPanelOpened.current = true;
    //     canvasState.isNavPanelOpened = true;
    //     // console.log('.......fire buttons');
    //     console.log('isClientSideVisible.current', isClientSideVisible.current);
    //     console.log('refX.current', refX.current);
    //     console.log('isNavPanelOpened.current', isNavPanelOpened.current);
    //     // console.log('dirX', dirX);
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
    ({ down, movement: [movementX, movementY], direction: [dirX, dirY] }) => {
      // console.log('dirX, dirY:', dirX, dirY);
      /*
      Why such "if statement condition" ?
     "down" is true when a mouse button or touch is down (documentation)
      I'm looking for "unique set of properties" i.e the one that "happens once" within "current gesture"; bare "movementX" triggers multiply times within every drag; i.e within particular user's drags this value changes a number of time;
      "refX.current" / "refY.current" works as counter;
      ".facetOfSpinningBoxSide === 1" means we are on "Jesteś Ty" side
      */
      /*___________part for "Jesteś Ty" */
      if (movementX > 50 && !down && refX.current <= 3) {
        refX.current++;
        // console.log('refX.current / client / left-to-right', refX.current);
        // console.log(
        //   'canvasGlobalState.facetOfSpinningBoxSide / left-to-right',
        //   canvasGlobalState.facetOfSpinningBoxSide
        // );
      }

      if (movementX < 50 && !down && refX.current > 0) {
        refX.current--;
        // console.log('refX.current / client / right-to-left', refX.current);
        // console.log(
        //   'canvasGlobalState.facetOfSpinningBoxSide / left-to-right',
        //   canvasGlobalState.facetOfSpinningBoxSide
        // );
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
        canvasState.isNavPanelOpened = true;
        // console.log('.......fire buttons');
        // console.log('isClientSideVisible.current', isClientSideVisible.current);
        // console.log('refX.current', refX.current);
        // console.log('dirX', dirX);
      }

      /*
      Spring API
      */
      api.start({
        /*
        springValue: "rotateStepByStep"
        */
        rotateStepByStep: [0, refX.current * Math.PI * 0.5, 0],

        /*
        springValue: "positionNavPanel"
        */
        positionNavPanel: [
          0,
          -0.245,
          canvasGlobalState.isNavPanelOpened === true ? 0.3 : -2.2,
        ],
      });
    },
    [api, canvasGlobalState.isNavPanelOpened]
  );

  const endDragHandler = useCallback(
    ({ down }) => {
      if (
        !down &&
        refX.current === 4 &&
        // canvasGlobalState.isClientSideVisible === true
        isClientSideVisible.current === true
      ) {
        isClientSideVisible.current = false;
      }

      if (
        !down &&
        refX.current === 0 &&
        // canvasGlobalState.isClientSideVisible === false
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
        // /*
        // springValue: "positionNavPanel"
        // */
        // positionNavPanel: [
        //   0,
        //   -0.245,
        //   canvasGlobalState.isNavPanelOpened === true ? 0.3 : -2.2,
        // ],
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
    containerAboutGestures,
  };
};

export default ContainerAboutGestures;
