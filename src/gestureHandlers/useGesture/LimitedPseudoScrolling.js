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
  const mainWheelHandler = useCallback(
    ({ wheeling, direction: [directionX, directionY], last, first }) => {
      /*
      set gesture type; i.e wheeling or draging
      */
      if (wheeling && canvasGlobalState.containerAboutGestureType === 'none') {
        canvasState.containerAboutGestureType = 'wheeling';
      }
      /*
      actuall handler logic; I've been testing various "gesture state" combination to avoid multiply changes within one wheel move / scroll;
      */
      if (
        /*
        this very first condition avoid nagative indices
        */
        canvasGlobalState.containerAboutVisibleSlideIndex < numberOfSlides &&
        canvasGlobalState.containerAboutGestureType === 'wheeling' &&
        directionY === 1 &&
        first
      ) {
        console.log(
          'canvasGlobalState.containerAboutVisibleSlideIndex < numberOfSlides',
          canvasGlobalState.containerAboutVisibleSlideIndex < numberOfSlides
        );
        console.log(
          "canvasGlobalState.containerAboutGestureType === 'wheeling'",
          canvasGlobalState.containerAboutGestureType === 'wheeling'
        );
        console.log('directionY === 1', directionY === 1);
        console.log('first', first);
        canvasState.containerAboutVisibleSlideIndex += 1;
      } else {
        console.log(
          'canvasGlobalState.containerAboutVisibleSlideIndex < numberOfSlides',
          canvasGlobalState.containerAboutVisibleSlideIndex < numberOfSlides
        );
        console.log(
          "canvasGlobalState.containerAboutGestureType === 'wheeling'",
          canvasGlobalState.containerAboutGestureType === 'wheeling'
        );
        console.log('directionY === 1', directionY === 1);
        console.log('first', first);
      }
      if (
        /*
        this very first condition avoid nagative indices
        */
        canvasGlobalState.containerAboutVisibleSlideIndex > 0 &&
        canvasGlobalState.containerAboutGestureType === 'wheeling' &&
        directionY === -1 &&
        first
      ) {
        console.log('last', last);
        canvasState.containerAboutVisibleSlideIndex -= 1;
      }
    },
    [
      canvasGlobalState.containerAboutGestureType,
      canvasGlobalState.containerAboutVisibleSlideIndex,
      numberOfSlides,
    ]
  );

  const mainDragHandler = useCallback(
    ({ dragging, down, movement: [movementX, movementY] }) => {
      /*
      set gesture type i.e wheeling or draging
      */
      if (dragging && canvasGlobalState.containerAboutGestureType === 'none') {
        canvasState.containerAboutGestureType = 'dragging';
      }

      /*
       actuall handler logic; I've been testing various "gesture state" combination to avoid multiply changes within one wheel move / scroll;
      */
      if (
        canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementY > 50 &&
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
      onWheel: mainWheelHandler,
      onDrag: mainDragHandler,
    },
    {
      target: window,
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
