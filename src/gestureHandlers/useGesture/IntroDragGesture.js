import { useCallback, useRef } from 'react';
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
import { onDragData, factorPositionY } from '../../data/globalData';
/*
-----------------------------------------------------------------------
*/
const IntroDragGesture = () => {
  /*
  References
  */
  // const gestureType = useRef();
  // const onStartCondition = useRef(true);
  const endOfContainerIntro = useRef(false);
  /*
  Global States for SpringValues;
  canvasState = {..., introContainerEventType: none, introContainerWheelDragBounds: {top: 0, bottom: 3550}}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [
    {
      dragProgressValue,
      dragProgressToggler,
      draggedPositionZ,
      fallDownDrag,
      riseUpDrag,
    },
    api,
  ] = useSpring(() => ({
    dragProgressValue: 0,
    dragProgressToggler: 1,
    draggedPositionZ: 0,
    fallDownDrag: 0.1,
    riseUpDrag: -0.1,
    config: config.molasses,
    /*
    "onStart()"; works...but there is still some "tick" in weeling
    */
    // onStart: () => {
    //   if (gestureType.current === 'dragging' && onStartCondition.current) {
    //     canvasState.introContainerEventType = 'dragging';
    //     onStartCondition.current = false;
    //     // console.log(
    //     //   'canvasState.introContainerEventType:',
    //     //   canvasState.introContainerEventType
    //     // );
    //   }
    // },
  }));

  /*
    ...
    */

  /*
  ...
  */
  const onDragStartHandler = useCallback(
    ({ dragging }) => {
      /*
      sidenote: I've tried to use "gestureType.current = 'none'" instead of "canvasGlobalState.introContainerEventType === 'none'"; result: if first gesture was "wheeling" it can anyway be replaced by "laptop tap panel" and vice versa;
       */
      if (dragging && canvasGlobalState.introContainerEventType === 'none') {
        // gestureType.current = 'dragging';
        canvasState.introContainerEventType = 'dragging';
      }
    },
    [canvasGlobalState.introContainerEventType]
  );

  /*
  Main Handler Section
  */
  const mainDragHandler = useCallback(
    ({ offset: [, offsetY], dragging }) => {
      /*
      this operation sets global state property that is crucial in <ContainerIntroContent> as it determines what was the very first users's gesture; the same operation is in <IntroWheelGesture>
       */

      // if (dragging && canvasGlobalState.introContainerEventType === 'none') {
      //   canvasState.introContainerEventType = 'dragging';
      // }
      api.start({
        dragProgressValue: (offsetY / onDragData.bottom) * 100,
        dragProgressToggler:
          offsetY === 0 || (offsetY / onDragData.bottom) * 100 > 99 ? 1 : 0.3,
        draggedPositionZ: offsetY * factorPositionY,
      });
    },
    [
      api,
      //  canvasGlobalState.introContainerEventType
    ]
  );
  /*
  Additional Handler Section for onDragEnd
  */
  const onDragEndHandler = useCallback(
    ({ offset: [, offsetY], active }) => {
      /*
      What should happen if user wheels to the end?
      */
      if (offsetY === onDragData.bottom) {
        // canvasState.endOfContainerIntro = true;
        endOfContainerIntro.current = true;
        console.log('endOfContainerIntro.current', endOfContainerIntro.current);
      } else {
        endOfContainerIntro.current = false;
        console.log('endOfContainerIntro.current', endOfContainerIntro.current);
      }
      /*
      API section
      */
      api.start({
        fallDownDrag: endOfContainerIntro.current ? 0.017 : 0.1,
        riseUpDrag: endOfContainerIntro.current ? -0.017 : -0.1,
      });
    },
    [api]
  );
  /*
  Gesture Section
  */
  const containerIntroDrag = useGesture(
    {
      onDragStart: onDragStartHandler,
      onDrag: mainDragHandler,
      onDragEnd: onDragEndHandler,
    },
    {
      target: canvasGlobalState.currentContainer === 'introContainer' && window,
      enabled: canvasGlobalState.currentContainer === 'introContainer',
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
    fallDownDrag,
    riseUpDrag,
  };
};

export default IntroDragGesture;

/*
The useDrag hook returns a function (stored in the containerIntroDrag constant); When containerIntroDrag is called, it returns an object with event handlers;
Here: <animated.div {...containerIntroDrag()} style={{ x, y }} /> 
when you spread {...containerIntroDrag()} into a component, you're actually adding onMouseDown and onTouchStart event handlers.
*/
