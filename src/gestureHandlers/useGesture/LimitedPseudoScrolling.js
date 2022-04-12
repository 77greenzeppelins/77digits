import { useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
/*
GlobalState
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../states/canvasState';

const LimitedPseudoScrolling = ({ numberOfSlides }) => {
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

  const startDragHandler = useCallback(
    ({ dragging }) => {
      /*
      set gesture type; i.e wheeling or draging
      */
      if (dragging && canvasGlobalState.containerAboutGestureType === 'none') {
        canvasState.containerAboutGestureType = 'dragging';
        // console.log('startWheelHandler was triggered....');
      }
    },
    [canvasGlobalState.containerAboutGestureType]
  );

  const endDragHandler = useCallback(
    ({ down, movement: [, movementY], direction: [, directionY] }) => {
      if (
        canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementY > 50 &&
        // directionY === -1 &&
        !down &&
        /*
        this very last condition avoid nagative indices; i.e if you gey "0" no subtraction is evaluated
        */
        canvasGlobalState.containerAboutVisibleSlideIndex > 0
      ) {
        canvasState.containerAboutVisibleSlideIndex -= 1;
      }
      if (
        canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementY < 50 &&
        // directionY === 1 &&
        !down &&
        canvasGlobalState.containerAboutVisibleSlideIndex < numberOfSlides
      ) {
        canvasState.containerAboutVisibleSlideIndex += 1;
      }
    },
    [
      canvasGlobalState.containerAboutGestureType,
      canvasGlobalState.containerAboutVisibleSlideIndex,
      numberOfSlides,
    ]
  );

  /*
  Gesture Section
  */
  const pseudoScrollinGesture = useGesture(
    {
      onWheelStart: startWheelHandler,
      onWheelEnd: endWheelHandler,
      onDragStart: startDragHandler,
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
      drag: { axis: 'y' },
      wheel: {
        axis: 'y',
        threshold: 300,
      },
    }
  );
  /*
  ContainerIntroDrag's return
  */
  return { pseudoScrollinGesture };
};

export default LimitedPseudoScrolling;
