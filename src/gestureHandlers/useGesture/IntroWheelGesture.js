import { useCallback, useRef } from 'react';

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
  const onStartCondition = useRef(true);
  /*
  Global States for SpringValues;
  canvasState = { isCanvasScrollableContainerScrollable: false, wheelBounds: { top: 0, bottom: 3550 }, dragBounds: { top: -3350, bottom:0 }, introContainerWheelDragBounds: {top: 0, bottom: 3550}}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ width, progressValue, wheeledPositionZ }, api] = useSpring(() => ({
    width: '0%',
    progressValue: 0,
    wheeledPositionZ: 0,
    config: { ...config.molasses, precision: 0.00001 },
    /*
    "onStart()"; works...but there is still some "tick" in weeling
    */
    onStart: () => {
      if (gestureType.current === 'wheeling' && onStartCondition.current) {
        canvasState.introContainerEventType = 'wheeling';
        onStartCondition.current = false;
      }
    },
  }));

  const onWheelStartHandler = useCallback(
    ({ wheeling, offset: [, offsetY] }) => {
      /*
      sidenote: I'vetried to use "gestureType.current = 'none'" instead of "bcanvasGlobalState.introContainerEventType === 'none'"; result: if first gesture was "wheeling" it can anyway be replaced by "laptop tap panel" and vice versa;
       */
      if (wheeling && canvasGlobalState.introContainerEventType === 'none') {
        // console.log('is wheeling:', wheeling);
        gestureType.current = 'wheeling';
        // console.log('IntroWheelGesture / onWheelStartHandler ');
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
        width: (offsetY / onWheelData.bottom) * 100 + '%',
        progressValue: (offsetY / onWheelData.bottom) * 100,
        wheeledPositionZ: offsetY * factorPositionY,
      });
    },
    [api]
  );
  /*
  Additional Handler for last wheel 
  */
  const onWheelEndHandler = useCallback(({ offset: [, offsetY], active }) => {
    /*
      What should happen if user wheels to the end?
      */
    if (offsetY === onWheelData.bottom && !active) {
      canvasState.endOfContainerIntro = true;
    }
  }, []);

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
  return { width, progressValue, wheeledPositionZ, containerIntroWheel };
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
