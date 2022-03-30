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
-----------------------------------------------------------------------
*/
const IntroDragGesture = () => {
  /*
  State
  */
  // const [counter, setCounter] = useState(0);
  /*
  Global States for SpringValues;
  canvasState = {..., introContainerEventType: none, introContainerWheelDragBounds: {top: 0, bottom: 3550}}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ draggedPositionZ }, api] = useSpring(() => ({
    draggedPositionZ: 0,
    config: config.molasses,
  }));
  /*
  Main Handler Section
  */
  const mainDragHandler = useCallback(
    ({ offset: [, offsetY], dragging }) => {
      /*
      this operation sets global state property that is crucial in <ContainerIntroContent> as it determines what was the very first users's gesture; the same operation is in <IntroWheelGesture>
       */
      if (dragging && canvasGlobalState.introContainerEventCounter === 0) {
        canvasState.introContainerEventType = 'dragging';
        canvasState.introContainerEventCounter = 1;
      }
      api.start({ draggedPositionZ: offsetY * factorPositionY });
    },
    [api, canvasGlobalState.introContainerEventCounter]
  );
  /*
  Additional Handler Section for onDragEnd
  */
  const doThisAtTheEndHandler = useCallback(
    ({ offset: [, y] }) => {
      /*
      What should happen if user wheels to the end?
      */
      if (y === canvasGlobalState.introContainerWheelDragBounds.bottom) {
        canvasState.endOfContainerIntro = true;
      }
    },
    [canvasGlobalState.introContainerWheelDragBounds.bottom]
  );
  /*
  Gesture Section
  */
  const containerIntroDrag = useGesture(
    {
      onDrag: mainDragHandler,
      onDragEnd: doThisAtTheEndHandler,
    },
    {
      target: window,
      enabled:
        /*
        why two conditions? 
        Bacause we want to keep scrolling in "disable state" untill cookies are eatten i.e no scroll befor decirion about cookies
        */
        canvasGlobalState.currentContainer === 'introContainer' &&
        !canvasGlobalState.endOfContainerIntro,
      drag: {
        axis: 'y',
        bounds: { ...canvasGlobalState.introContainerWheelDragBounds },
        threshold: -10,
      },
    }
  );

  /*
  ContainerIntroDrag's return
  */
  return [draggedPositionZ, containerIntroDrag];
};

export default IntroDragGesture;

/*
The useDrag hook returns a function (stored in the containerIntroDrag constant); When containerIntroDrag is called, it returns an object with event handlers;
Here: <animated.div {...containerIntroDrag()} style={{ x, y }} /> 
when you spread {...containerIntroDrag()} into a component, you're actually adding onMouseDown and onTouchStart event handlers.
*/
