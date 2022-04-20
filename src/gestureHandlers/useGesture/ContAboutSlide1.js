import { useCallback, useRef } from 'react';
import { useGesture } from '@use-gesture/react';
/*
GlobalState
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../states/canvasState';

const ContAboutSlide1 = ({ numberOfSlides }) => {
  /*
  References
  */
  const refX = useRef(0);
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  Wheel Handler Section
  */
  const startWheelHandler = useCallback(
    ({ wheeling }) => {
      /*
      set gesture type; i.e wheeling or draging
      */
      if (wheeling && canvasGlobalState.containerAboutGestureType === 'none') {
        canvasState.containerAboutGestureType = 'wheeling';
        // console.log('startWheelHandler was triggered....');
      }
    },
    [canvasGlobalState.containerAboutGestureType]
  );

  const endWheelHandler = useCallback(
    ({ direction: [, directionY] }) => {
      /*
      set gesture type; i.e wheeling or draging
      */
      if (
        canvasGlobalState.containerAboutGestureType === 'wheeling' &&
        canvasGlobalState.containerAboutVisibleSlideIndex < numberOfSlides &&
        directionY === 1
      ) {
        // console.log('endWheelHandler was triggered....');
        canvasState.containerAboutVisibleSlideIndex += 1;
        // console.log(
        //   'canvasGlobalState.containerAboutVisibleSlideIndex',
        //   canvasGlobalState.containerAboutVisibleSlideIndex
        // );
      }

      if (
        canvasGlobalState.containerAboutGestureType === 'wheeling' &&
        canvasGlobalState.containerAboutVisibleSlideIndex > 0 &&
        directionY === -1
      ) {
        // console.log('endWheelHandler was triggered....');
        canvasState.containerAboutVisibleSlideIndex -= 1;
        // console.log(
        //   'canvasGlobalState.containerAboutVisibleSlideIndex',
        //   canvasGlobalState.containerAboutVisibleSlideIndex
        // );
      }
    },
    [
      canvasGlobalState.containerAboutGestureType,
      canvasGlobalState.containerAboutVisibleSlideIndex,
      numberOfSlides,
    ]
  );

  /*
  Drag Handler Section
  */

  //   const startDragHandler = useCallback(
  //     ({ dragging }) => {
  //       /*
  //       set gesture type; i.e wheeling or draging
  //       */
  //       if (dragging && canvasGlobalState.containerAboutGestureType === 'none') {
  //         canvasState.containerAboutGestureType = 'dragging';
  //         // console.log('startWheelHandler was triggered....');
  //       }
  //     },
  //     [canvasGlobalState.containerAboutGestureType]
  //   );

  const endDragHandler = useCallback(
    ({ down, movement: [movementX] }) => {
      if (
        // canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementX > 50 &&
        !down &&
        /*
        this very last condition avoid nagative indices; i.e if you gey "0" no subtraction is evaluated
        */
        refX.current > 0
      ) {
        refX.current--;
        canvasState.slide1Part = refX.current;
        console.log('from left-to-right / refX.current:', refX.current);
        // canvasState.containerAboutVisibleSlideIndex -= 1;
      }
      if (
        // canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementX < 50 &&
        // directionY === 1 &&
        !down &&
        refX.current < numberOfSlides - 1
      ) {
        refX.current++;
        canvasState.slide1Part = refX.current;
        console.log('from right-to-left / refX.current:', refX.current);
        // canvasState.containerAboutVisibleSlideIndex += 1;
      }
    },
    [numberOfSlides]
  );

  /*
  Gesture Section
  */
  const contAboutSlide1 = useGesture(
    {
      //   onWheelStart: startWheelHandler,
      //   onWheelEnd: endWheelHandler,
      //   onDragStart: startDragHandler,
      onDragEnd: endDragHandler,
    },
    {
      // target: window,
      /*
      Why "slideIsCompletted"?
      */
      enabled:
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        canvasGlobalState.slideIsCompletted,
      drag: { axis: 'x' },
      wheel: {
        axis: 'x',
        threshold: 300,
      },
    }
  );
  /*
  ContainerIntroDrag's return
  */
  return { contAboutSlide1 };
};

export default ContAboutSlide1;
