import { useCallback, useRef } from 'react';
// import { useThree } from '@react-three/fiber';
import { useSpring, config } from '@react-spring/three';
import { useGesture } from '@use-gesture/react';
/*
GlobalState
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../states/canvasState';
/*
Basic Data
*/
import {
  onWheelData,
  factorPositionY,
} from '../../components3D/three/custome/containerIntro/containerIntroData';
/*
-------------------------------------------------------------------------------
*/
const IntroWheelGesture = () => {
  /*
  References
  */
  const gestureType = useRef();
  const endOfWheeling = useRef(false);
  /*
  Global States for SpringValues;
  canvasState = { isCanvasScrollableContainerScrollable: false, wheelBounds: { top: 0, bottom: 3550 }, dragBounds: { top: -3350, bottom:0 }, introContainerWheelDragBounds: {top: 0, bottom: 3550}}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ someValue, wheeledPositionZ }, api] = useSpring(() => ({
    someValue: 0,
    wheeledPositionZ: 0,
    config: config.molasses,
    /*
    "onStart()"; works...but there is still some "tick" in weeling
    */
    onStart: () => {
      // if (positionZ.current === onWheelData.bottom) {
      //   canvasState.endOfContainerIntro = true;
      //   // console.log('onRest / positionZ.current:', positionZ.current);
      // }
      if (gestureType.current === 'wheeling') {
        canvasState.introContainerEventType = 'wheeling';
      }
    },
    // onChange: () => {
    //   if (endOfWheeling.current === true) {
    //     canvasState.endOfContainerIntro = true;
    //   }
    // },
  }));

  const onWheelStartHandler = useCallback(
    ({ wheeling, offset: [, offsetY] }) => {
      /*
      this callback sets 
       */
      if (wheeling && canvasGlobalState.introContainerEventType === 'none') {
        // console.log('is wheeling:', wheeling);
        gestureType.current = 'wheeling';
      }
    },
    [canvasGlobalState.introContainerEventType]
  );
  /*
  Main Handler Section
  */
  const mainWheelHandler = useCallback(
    ({ offset: [, offsetY] }) => {
      /*
      Spring Section;
      */
      api.start({
        someValue: offsetY,
        wheeledPositionZ: offsetY * factorPositionY,
      });
    },
    [api]
  );
  /*
  Additional Handler for last wheel 
  */
  const onWheelEndHandler = useCallback(
    ({ offset: [, offsetY], active }) => {
      /*
      What should happen if user wheels to the end?
      */
      if (offsetY === onWheelData.bottom && !active) {
        endOfWheeling.current = true;
        canvasState.endOfContainerIntro = true;
      }
    },
    [
      // canvasGlobalState.introContainerWheelDragBounds.bottom
    ]
  );

  /*
  Gesture Section
  */
  const containerIntroWheel = useGesture(
    {
      onWheelStart: onWheelStartHandler,
      onWheel: mainWheelHandler,
      onWheelEnd: onWheelEndHandler,
    },
    {
      target: canvasGlobalState.currentContainer === 'introContainer' && window,
      enabled:
        /*
        why two conditions? 
        (1) about ".currentContainer" - bacause we want...
        (2) about ".endOfContainerIntro" - it is initially false and changes to true when user scrolls to the end; without this condition user can scroll backward = scrolling doesn't stop
        */
        canvasGlobalState.currentContainer === 'introContainer' &&
        !canvasGlobalState.endOfContainerIntro,
      wheel: {
        axis: 'y',
        bounds: { ...onWheelData },
        threshold: 150,
      },
    }
  );
  /*
  ContainerIntroWheel's return
  */
  return { someValue, wheeledPositionZ, containerIntroWheel };
};

export default IntroWheelGesture;

/*
it was a bit unpredictible... power of wheeling determined final position of "stop"

const doThisAtTheBeginningHandler = useCallback(
    ({ offset: [, y] }) => {
      
      What should happen if user wheels to "oblot";
      if user haven't eaten cookies (default value of "userAteCookies" is "false") and scrolled to "2200" scrolling is disabled; now user must decide what to do with cookies; whatever user decides by clicking any button in <Cookies>, button's onClick handler makes the following change: "isIntroContainerScrollable = true" 
      
      if (canvasGlobalState.userAteCookies === false && y > 2000) {
        console.log('stop wheeling...................');
        canvasState.isIntroContainerScrollable = false;
      }
    },
    [canvasGlobalState.userAteCookies]
  );
*/
