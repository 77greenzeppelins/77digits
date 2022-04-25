import { useCallback } from 'react';
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
  ...
  */
  // const positionZ = useRef();

  /*
  State
  */
  // const [counter, setCounter] = useState(0);
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
    Works...but there is still some "tick" in weeling
    */
    // onRest: () => {
    //   if (positionZ.current === onWheelData.bottom) {
    //     canvasState.endOfContainerIntro = true;
    //     // console.log('onRest / positionZ.current:', positionZ.current);
    //   }
    // },
  }));

  const onWheelStartHandler = useCallback(
    ({ wheeling }) => {
      /*
      this operation sets two global state properties that are crucial in <ContainerIntroContent> as they determines what was the very first users's gesture; the same operation is in <IntroDragGesture>
      I've been testing various "state" mechanism: <i> bare "let" before function; <2> useRef, <3> useState; only global state solve my problem...
       */
      if (wheeling && canvasGlobalState.introContainerEventType === 'none') {
        canvasState.introContainerEventType = 'wheeling';
      }
    },
    [canvasGlobalState.introContainerEventType]
  );
  /*
  Main Handler Section
  */
  const mainWheelHandler = useCallback(
    ({ offset: [, offsetY], down }) => {
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
    ({ offset: [, offsetY], down }) => {
      /*
      What should happen if user wheels to the end?
      */
      if (offsetY === onWheelData.bottom && !down) {
        canvasState.endOfContainerIntro = true;
        // positionZ.current = offsetY++;
        // console.log('onWheelEndHandler / offsetY:', offsetY);
        // console.log(
        //   'onWheelEndHandler / positionZ.current:',
        //   positionZ.current
        // );
      }

      // if (!down) {
      //   positionZ.current = offsetY++;
      //   console.log('onWheelEndHandler / offsetY:', offsetY);
      //   console.log(
      //     'onWheelEndHandler / positionZ.current:',
      //     positionZ.current
      //   );
      // }
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
