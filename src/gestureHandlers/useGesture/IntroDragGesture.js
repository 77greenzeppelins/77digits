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
import { onDragData, factorPositionY } from '../../data/globalData';
/*
-----------------------------------------------------------------------
*/
const IntroDragGesture = () => {
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
  const startDragHandler = useCallback(
    ({ dragging }) => {
      if (dragging && canvasGlobalState.introContainerEventType === 'none') {
        canvasState.introContainerEventType = 'dragging';
      }
    },
    [canvasGlobalState.introContainerEventType]
  );

  /*
  Main Handler Section
  */
  const mainDragHandler = useCallback(
    ({ offset: [, offsetY] }) => {
      // if (onDragData.bottom === offsetY && !active) {
      //   // canvasState.endOfContainerIntro = true;
      //   console.log('....enter the end', offsetY);
      // } else {
      //   console.log('....leave the end', offsetY);
      // }
      // if (
      //   onDragData.bottom !== offsetY
      //   // &&
      //   // !down
      //   // !active
      //   //  &&
      //   // !active &&
      //   // canvasGlobalState.endOfContainerIntro === true
      // ) {
      //   // canvasState.endOfContainerIntro = false;
      //   console.log('....leave the end', offsetY);
      // }
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
      //  canvasGlobalState.endOfContainerIntro
    ]
  );
  /*
  Additional Handler Section for onDragEnd
  */
  const endDragHandler = useCallback(
    ({ offset: [, offsetY], active }) => {
      /*
      ".endOfContainerIntro" allowes to render 2D EndButtons that map 3D "pseudoButtons"; drei's Html is not detected by all browsers so I need such staff...
      */
      if (onDragData.bottom === offsetY && !active) {
        canvasState.endOfContainerIntro = true;
      }
      if (
        onDragData.bottom !== offsetY &&
        !active &&
        canvasGlobalState.endOfContainerIntro === true
      ) {
        canvasState.endOfContainerIntro = false;
      }
      /*
      API section
      */
      api.start({
        fallDownDrag: offsetY === onDragData.bottom ? 0.017 : 0.1,
        riseUpDrag: offsetY === onDragData.bottom ? -0.017 : -0.1,
      });
    },
    [api, canvasGlobalState.endOfContainerIntro]
  );
  /*
  Gesture Section
  */
  const containerIntroDrag = useGesture(
    {
      onDragStart: startDragHandler,
      onDrag: mainDragHandler,
      onDragEnd: endDragHandler,
    },
    {
      target: canvasGlobalState.currentContainer === 'introContainer' && window,
      enabled:
        canvasGlobalState.currentContainer === 'introContainer' &&
        canvasGlobalState.isInitialOverlayMounted === false,
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
