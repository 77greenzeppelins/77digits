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
const factorPositionY = 0.005;
/*
-------------------------------------------------------------------------------
*/
const IntroWheelGesture = () => {
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
  }));
  /*
  Main Handler Section
  */
  const mainWheelHandler = useCallback(
    ({ offset: [, offsetY], wheeling, active }) => {
      /*
      this operation sets two global state properties that are crucial in <ContainerIntroContent> as they determines what was the very first users's gesture; the same operation is in <IntroDragGesture>
      I've been testing various "state" mechanism: <i> bare "let" before function; <2> useRef, <3> useState; only global state solve my problem...
       */

      if (wheeling && canvasGlobalState.introContainerEventCounter === 0) {
        canvasState.introContainerEventType = 'wheeling';
        // console.log(
        //   'canvasState.introContainerEventType:',
        //   canvasState.introContainerEventType
        // );
        // canvasState.introContainerEventCounter = 1;
        // console.log(
        //   'canvasState.introContainerEventCounter:',
        //   canvasState.introContainerEventCounter
        // );
      }
      /*
      this is spring part;
       */
      api.start({
        someValue: offsetY,
        wheeledPositionZ: offsetY * factorPositionY,
      });
    },
    [api, canvasGlobalState.introContainerEventCounter]
  );
  /*
  Additional Handler for last wheel 
  */
  const doThisAtTheEndHandler = useCallback(
    ({ offset: [, y] }) => {
      /*
      What should happen if user wheels to the end?
      */
      if (y === canvasGlobalState.introContainerWheelDragBounds.bottom) {
        canvasState.endOfContainerIntro = true;
        console.log(
          'canvasGlobalState.endOfContainerIntro:',
          canvasGlobalState.endOfContainerIntro,
          y
        );
        // console.log('.....onWheel & onDrag are blocked');
      }
    },
    [
      canvasGlobalState.introContainerWheelDragBounds.bottom,
      canvasGlobalState.endOfContainerIntro,
    ]
  );

  /*
  Gesture Section
  */
  const containerIntroDrag = useGesture(
    {
      onWheel: mainWheelHandler,
      onWheelEnd: doThisAtTheEndHandler,
    },
    {
      target: window,
      enabled:
        /*
        why two conditions? 
        (1) about ".currentContainer" - bacause we want to keep scrolling in "disable state" untill cookies are eatten i.e no scroll when user is in LInitialOverlay>;
        (2) about ".endOfContainerIntro" - it is initially false and changes to true when user scrolls to the end
        */
        canvasGlobalState.currentContainer === 'introContainer' &&
        !canvasGlobalState.endOfContainerIntro,
      wheel: {
        axis: 'y',
        bounds: { ...canvasGlobalState.introContainerWheelDragBounds },
        threshold: 100,
      },
    }
  );
  /*
  ContainerIntroDrag's return
  */
  return { someValue, wheeledPositionZ, containerIntroDrag };
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
