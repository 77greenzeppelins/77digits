import { useCallback, useRef } from 'react';
import { useGesture } from '@use-gesture/react';
/*
Global State Staff
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
  // const startWheelHandler = useCallback(
  //   ({ wheeling }) => {
  //     /*
  //     set gesture type; i.e wheeling or draging
  //     */
  //     if (wheeling && canvasGlobalState.containerAboutGestureType === 'none') {
  //       canvasState.containerAboutGestureType = 'wheeling';
  //       // console.log('startWheelHandler was triggered....');
  //     }
  //   },
  //   [canvasGlobalState.containerAboutGestureType]
  // );

  const onWheelHandler = useCallback(
    ({
      active,
      direction: [directionX, directionY],
      movement: [movementX, movementY],
    }) => {
      /*
      set gesture type; i.e wheeling or draging
      */
      if (!active && directionY === 1 && refX.current < numberOfSlides - 1) {
        console.log('from up-to-down directionY:', directionY);
        console.log('from up-to-down movementY:', movementY);
        refX.current++;
        canvasState.slide1Part = refX.current;
        // console.log('refX.current:', refX.current);
        // canvasState.containerAboutVisibleSlideIndex += 1;
        // console.log(
        //   'canvasGlobalState.containerAboutVisibleSlideIndex',
        //   canvasGlobalState.containerAboutVisibleSlideIndex
        // );
      }

      if (!active && directionY === -1 && refX.current > 0) {
        console.log('from down-to-up directionY:', directionY);
        console.log('from down-to-up movementY:', movementY);
        refX.current--;
        canvasState.slide1Part = refX.current;
        // console.log('refX.current:', refX.current);
      }
    },
    [numberOfSlides]
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
    ({ down, movement: [movementX], direction: [directionX] }) => {
      /*
        from left-to-right gives positive value of movementX (someNumber) ? directionX (1); it suggest regress; user goes vbackward, to the very previous part of slide;
        */
      if (
        // canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementX > 100 &&
        directionX === 1 &&
        !down &&
        /*
        this very last condition avoid nagative indices; i.e if you gey "0" no subtraction is evaluated
        */
        refX.current > 0
      ) {
        refX.current--;
        canvasState.slide1Part = refX.current;
        // console.log('from left-to-right / refX.current:', refX.current);
        // console.log('from left-to-right / movementX:', movementX);
        // console.log('from left-to-right / directionX:', directionX);

        // canvasState.containerAboutVisibleSlideIndex -= 1;
      }
      if (
        /*
        from right-to-left gives negative value of movementX (-someNumber) ? directionX (-1); it suggest progress; user goes forward, to the very next part of slide;
        */
        // canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementX < -100 &&
        directionX === -1 &&
        !down &&
        refX.current < numberOfSlides - 1
      ) {
        refX.current++;
        canvasState.slide1Part = refX.current;
        // console.log('from right-to-left / refX.current:', refX.current);
        // console.log('from right-to-left / movementX:', movementX);
        // console.log('from right-to-left / directionX:', directionX);

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
      onWheel: onWheelHandler,
      // onWheelEnd: endDragHandler,
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
        // threshold: 300,
      },
    }
  );
  /*
  ContainerIntroDrag's return
  */
  return { contAboutSlide1 };
};

export default ContAboutSlide1;
