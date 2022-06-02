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
  const dirY = useRef();
  /*
  Global State Section
  {sliderToggler:0}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ springValue, progressValue }, api] = useSpring(() => ({
    springValue: 1,
    progressValue: 0,
  }));

  const startWheelHandler = useCallback(({ active, wheeling }) => {}, []);

  const endWheelHandler = useCallback(
    ({ active, direction: [, directionY] }) => {
      // if (!active) console.log('.....endWheelHandler / !active', active);
      /*
      ...
      */
      if (
        !active &&
        directionY === 1 &&
        canvasGlobalState.containerAboutVisibleSlideIndex <
          contAboutSlidesNumber - 1
      ) {
        // console.log('from up-to-down directionY:', directionY);
        // console.log('from up-to-down movementY:', movementY);
        canvasState.containerAboutVisibleSlideIndex =
          canvasGlobalState.containerAboutVisibleSlideIndex + 1;
        canvasState.isSlideComplete = false;
        canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
      }

      if (
        !active &&
        directionY === -1 &&
        canvasGlobalState.containerAboutVisibleSlideIndex > 0
      ) {
        // console.log('from down-to-up directionY:', directionY);
        // console.log('from down-to-up movementY:', movementY);
        canvasState.containerAboutVisibleSlideIndex =
          canvasGlobalState.containerAboutVisibleSlideIndex - 1;
        canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
      }
      /*
      Spring in action
      */
      api.start({
        springValue: navY.current === 0 ? 1 : 0.3,
        progressValue: (navY.current / (contAboutSlidesNumber - 1)) * 100,
      });

      api.start({
        fake: !active ? Math.PI * navY.current : 0,
        config: { duration: 900 },
      });
    },
    [
      api,
      canvasGlobalState.containerAboutVisibleSlideIndex,
      canvasGlobalState.sliderToggler,
    ]
  );

  /*
  this "handler" & "dirY.current" are necessary! 
  there was a problem with tablet's tapPanel;
  */
  const startDragHandler = useCallback(
    ({ active, down, direction: [, directionY], movement: [, movementY] }) => {
      if (!down && movementY < 0) {
        dirY.current = -1;
        // console.log('startDragHandler / goUp / movementY', movementY);
        // console.log('startDragHandler / ...goUp / dirY.current', dirY.current);
        // console.log('startDragHandler / ...goUp/ directionY', directionY);
      }
      if (!down && movementY > 0) {
        dirY.current = 1;
        // console.log('startDragHandler / goDown/ movementY', movementY);
        // console.log(
        //   'startDragHandler / ...goDown / dirY.current',
        //   dirY.current
        // );
        // console.log('startDragHandler / ...goDown/ directionY', directionY);
      }
    },
    []
  );

  const endDragHandler = useCallback(
    ({ movement: [, movementY], direction: [, directionY] }) => {
      /*
      from top-to-bottom gives positive value of movementX (someNumber) ? directionX (1); it suggest regress; user goes vbackward, to the very previous part of slide;
      */
      if (
        /*
        why "dirY.current" instead "directionY" ?
        with "directionY" tablet's tapPanel doesn't work...
        */
        dirY.current === 1 &&
        /*
        this condition allowes to avoid nagative indices; i.e if you get "0" no subtraction is evaluated
        */
        navY.current > 0
      ) {
        navY.current--;
        canvasState.containerAboutVisibleSlideIndex = navY.current;
        // console.log('from top-to-bottom / directionY:', directionY);
        // console.log('from top-to-bottom / navY.current:', navY.current);
        // canvasState.containerAboutVisibleSlideIndex -= 1;
      }
      if (
        /*
        from bottom-to-top gives negative value of movementX (-someNumber) ? directionX (-1); it suggest progress; user goes forward, to the very next part of slide;
        */
        dirY.current === -1 &&
        navY.current < contAboutSlidesNumber - 1
      ) {
        navY.current++;
        canvasState.containerAboutVisibleSlideIndex = navY.current;
        canvasState.isSlideComplete = false;
        // console.log('from bottom-to-top / directionY:', directionY);
        // console.log('from bottom-to-top / navY.current:', navY.current);
      }

      // console.log('from top-to-bottom / directionY:', directionY);
      // console.log(
      //   'from top-to-bottom / directionY.current:',
      //   directionY.current
      // );

      // console.log('from top-to-bottom / navY.current:', navY.current);

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
      onWheelEnd: endWheelHandler,
      //...
      onDrag: startDragHandler,
      onDragEnd: endDragHandler,
    },
    {
      /*
      ...
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
  return {
    springValue,
    progressValue,
    contAboutNavGest,
  };
};

export default ContAboutNavGest;
