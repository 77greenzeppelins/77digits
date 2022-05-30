import { useCallback, useRef } from 'react';
import { useGesture } from '@use-gesture/react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../states/canvasState';
/*
Spring Staff
*/
import { useSpring } from '@react-spring/three';
/*
Basic Data
*/
import { contAboutSlidesNumber } from '../../data/globalData';

/*
--------------------------------------------------------------------
*/
const ContAboutNavGest = () => {
  /*
  References
  */
  const navY = useRef(0);
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ springValue, progressValue }, api] = useSpring(() => ({
    springValue: 1,
    progressValue: 0,
  }));

  const onWheelHandler = useCallback(
    ({ active, direction: [, directionY], movement: [, movementY] }) => {
      /*
      set gesture type; i.e wheeling or draging
      */
      if (
        !active &&
        directionY === 1 &&
        navY.current < contAboutSlidesNumber - 1
      ) {
        // console.log('from up-to-down directionY:', directionY);
        // console.log('from up-to-down movementY:', movementY);
        navY.current++;
        canvasState.containerAboutVisibleSlideIndex = navY.current;
        canvasState.isSlideComplete = false;
        // console.log('navY.current:', navY.current);
      }

      if (!active && directionY === -1 && navY.current > 0) {
        // console.log('from down-to-up directionY:', directionY);
        // console.log('from down-to-up movementY:', movementY);
        navY.current--;
        canvasState.containerAboutVisibleSlideIndex = navY.current;
        // console.log('navY.current:', navY.current);
      }
      /*
      Spring in action
      */
      api.start({
        springValue: navY.current === 0 ? 1 : 0.3,
        progressValue: (navY.current / (contAboutSlidesNumber - 1)) * 100,
      });
    },
    [api]
  );

  const endDragHandler = useCallback(
    ({ down, movement: [, movementY], direction: [, directionY] }) => {
      /*
        from top-to-bottom gives positive value of movementX (someNumber) ? directionX (1); it suggest regress; user goes vbackward, to the very previous part of slide;
        */
      if (
        // canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementY > 100 &&
        directionY === 1 &&
        !down &&
        /*
        this very last condition allowes to avoid nagative indices; i.e if you get "0" no subtraction is evaluated
        */
        navY.current > 0
      ) {
        navY.current--;
        canvasState.containerAboutVisibleSlideIndex = navY.current;
        // console.log('from top-to-bottom / movementY:', movementY);
        // console.log('from top-to-bottom / directionY:', directionY);
        // canvasState.containerAboutVisibleSlideIndex -= 1;
      }
      if (
        /*
        from bottom-to-top gives negative value of movementX (-someNumber) ? directionX (-1); it suggest progress; user goes forward, to the very next part of slide;
        */
        // canvasGlobalState.containerAboutGestureType === 'dragging' &&
        movementY < -100 &&
        directionY === -1 &&
        !down &&
        navY.current < contAboutSlidesNumber - 1
      ) {
        navY.current++;
        canvasState.containerAboutVisibleSlideIndex = navY.current;
        canvasState.isSlideComplete = false;
        // console.log('from bottom-to-top / movementY:', movementY);
        // console.log('from bottom-to-top / directionY:', directionY);
      }

      /*
      Spring in action
      */
      api.start({
        springValue: navY.current === 0 ? 1 : 0.3,
        progressValue: (navY.current / (contAboutSlidesNumber - 1)) * 100,
      });
    },
    [api]
  );

  /*
  Gesture Section
  */
  const contAboutNavGest = useGesture(
    {
      // onWheelStart: startWheelHandler,
      // onWheel: onWheelHandler,
      onWheelEnd: onWheelHandler,
      // onDragStart: startDragHandler,
      onDragEnd: endDragHandler,
    },
    {
      /*
      Why "slideIsCompletted"?
      */
      target: canvasGlobalState.currentContainer === 'aboutContainer' && window,
      enabled:
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        canvasGlobalState.sliderIsReady &&
        canvasGlobalState.isSlideComplete,
      drag: { axis: 'y' },
      wheel: { axis: 'y' },
    }
  );
  /*
  ContainerIntroDrag's return
  */
  return { springValue, progressValue, contAboutNavGest };
};

export default ContAboutNavGest;
