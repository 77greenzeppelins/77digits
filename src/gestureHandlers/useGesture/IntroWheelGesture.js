import { useCallback } from 'react';

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
import { onWheelData, factorPositionY } from '../../data/globalData';
/*
-------------------------------------------------------------------------------
*/
const IntroWheelGesture = () => {
  /*
  References
  */
  // const gestureType = useRef();
  // const onStartCondition = useRef(true);
  // const endOfContainerIntro = useRef(false);
  /*
  Global States for SpringValues;
  canvasState = { isCanvasScrollableContainerScrollable: false, wheelBounds: { top: 0, bottom: 3550 }, dragBounds: { top: -3350, bottom:0 }, introContainerWheelDragBounds: {top: 0, bottom: 3550}}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [
    {
      wheelProgressValue,
      wheelProgressToggler,
      wheeledPositionZ,
      fallDownWheel,
      riseUpWheel,
      opacity,
    },
    api1,
  ] = useSpring(() => ({
    wheelProgressToggler: 1,
    wheelProgressValue: 0,
    wheeledPositionZ: 0,
    fallDownWheel: 0.1,
    riseUpWheel: -0.1,
    opacity: 0,
    config: { ...config.molasses, precision: 0.0001 },
    /*
    "onStart()"; works...but there is still some "tick" in weeling
    */
    // onChange: () => {
    //   if (gestureType.current === 'wheeling' && onStartCondition.current) {
    //     // canvasState.introContainerEventType = 'wheeling';
    //     onStartCondition.current = false;
    //     console.log(
    //       'onChange / canvasGlobalState.introContainerEventType:',
    //       canvasGlobalState.introContainerEventType
    //     );
    //   }
    // },
    // onRest: () => {
    //   if (endOfContainerIntro.current === true) {
    //     canvasState.endOfContainerIntro = true;
    //   }
    // },
  }));

  const onWheelStartHandler = useCallback(
    ({ wheeling }) => {
      /*
      sidenote: I've tried to use "gestureType.current = 'none'" instead of "canvasGlobalState.introContainerEventType === 'none'"; result: if first gesture was "wheeling" it can anyway be replaced by "laptop tap panel" and vice versa;
       */
      if (wheeling && canvasGlobalState.introContainerEventType === 'none') {
        canvasState.introContainerEventType = 'wheeling';
        // console.log('wheeling', wheeling);
      }
    },
    [canvasGlobalState.introContainerEventType]
  );
  /*
  Main Handler Section
  */
  const mainWheelHandler = useCallback(
    ({ active, offset: [, offsetY] }) => {
      if (onWheelData.bottom === offsetY && !active) {
        canvasState.endOfContainerIntro = true;
        // console.log('....enter the end', offsetY);
      }
      if (
        onWheelData.bottom !== offsetY &&
        !active &&
        canvasGlobalState.endOfContainerIntro === true
      ) {
        canvasState.endOfContainerIntro = false;
        // console.log('....leave the end', offsetY);
      }
      /*
      Spring Section;
      */
      api1.start({
        wheelProgressToggler:
          offsetY === 0 || (offsetY / onWheelData.bottom) * 100 > 99 ? 1 : 0.3,
        wheelProgressValue: (offsetY / onWheelData.bottom) * 100,
        wheeledPositionZ: offsetY * factorPositionY,
      });
    },
    [api1, canvasGlobalState.endOfContainerIntro]
  );
  /*
  Additional Handler for last wheel 
  */
  const onWheelEndHandler = useCallback(
    ({ offset: [, offsetY] }) => {
      /*
      API section
      */
      api1.start({
        fallDownWheel: offsetY === onWheelData.bottom ? 0.017 : 0.1,
        riseUpWheel: offsetY === onWheelData.bottom ? -0.017 : -0.1,
      });
    },
    [api1]
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
        canvasGlobalState.currentContainer === 'introContainer' &&
        canvasGlobalState.isInitialOverlayMounted === false,
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
  return {
    wheelProgressValue,
    wheelProgressToggler,
    wheeledPositionZ,
    containerIntroWheel,
    fallDownWheel,
    riseUpWheel,
    opacity,
  };
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
