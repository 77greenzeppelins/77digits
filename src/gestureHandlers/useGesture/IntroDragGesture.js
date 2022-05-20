import { useCallback } from 'react';
/*
Spring Staff
*/
import { useSpring, config } from '@react-spring/three';
/*
Gesture Staff
*/
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
  onDragData,
  factorPositionY,
} from '../../components3D/three/custome/containerIntro/containerIntroData';
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
  const [{ dragProgressValue, dragProgressToggler, draggedPositionZ }, api] =
    useSpring(() => ({
      dragProgressValue: 0,
      dragProgressToggler: 1,
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

      if (dragging && canvasGlobalState.introContainerEventType === 'none') {
        canvasState.introContainerEventType = 'dragging';
      }
      api.start({
        dragProgressValue: (offsetY / onDragData.bottom) * 99,
        dragProgressToggler:
          offsetY === 0 || (offsetY / onDragData.bottom) * 100 > 99 ? 1 : 0.3,
        draggedPositionZ: offsetY * factorPositionY,
      });
    },
    [api, canvasGlobalState.introContainerEventType]
  );
  /*
  Additional Handler Section for onDragEnd
  */
  const doThisAtTheEndHandler = useCallback(({ offset: [, y] }) => {
    /*
      What should happen if user wheels to the end?
      */
    if (y === onDragData.bottom) {
      canvasState.endOfContainerIntro = true;
    }
  }, []);
  /*
  Gesture Section
  */
  const containerIntroDrag = useGesture(
    {
      onDrag: mainDragHandler,
      onDragEnd: doThisAtTheEndHandler,
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
      drag: {
        axis: 'y',
        bounds: { ...onDragData },
        threshold: 50,
      },
    }
  );

  /*
  ContainerIntroDrag's return
  */
  return {
    dragProgressValue,
    dragProgressToggler,
    draggedPositionZ,
    containerIntroDrag,
  };
};

export default IntroDragGesture;

/*
The useDrag hook returns a function (stored in the containerIntroDrag constant); When containerIntroDrag is called, it returns an object with event handlers;
Here: <animated.div {...containerIntroDrag()} style={{ x, y }} /> 
when you spread {...containerIntroDrag()} into a component, you're actually adding onMouseDown and onTouchStart event handlers.
*/
