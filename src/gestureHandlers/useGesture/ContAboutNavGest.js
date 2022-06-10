import { useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../states/canvasState';
/*
Basic Data
*/
import { contAboutSlidesNumber } from '../../data/globalData';

/*
--------------------------------------------------------------------
*/
const ContAboutNavGest = () => {
  /*
  Global State Section
  {sliderToggler:0}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  // const startWheelHandler = useCallback(({ active, wheeling }) => {}, []);

  const endWheelHandler = useCallback(
    ({ active, direction: [, directionY] }) => {
      if (
        !active &&
        directionY === 1 &&
        canvasGlobalState.containerAboutVisibleSlideIndex <
          contAboutSlidesNumber - 1
      ) {
        canvasState.containerAboutVisibleSlideIndex =
          canvasGlobalState.containerAboutVisibleSlideIndex + 1;
        canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
        // console.log('from goDown directionY:', directionY);
      }

      if (
        !active &&
        directionY === -1 &&
        canvasGlobalState.containerAboutVisibleSlideIndex > 0
      ) {
        canvasState.containerAboutVisibleSlideIndex =
          canvasGlobalState.containerAboutVisibleSlideIndex - 1;
        canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
        // console.log('from goUp directionY:', directionY);
      }
      /*
      Spring in action
      */
    },
    [
      canvasGlobalState.containerAboutVisibleSlideIndex,
      canvasGlobalState.sliderToggler,
    ]
  );

  /*
  this "handler" & "dirY.current" are necessary! 
  there was a problem with tablet's tapPanel;
  */
  const endDragHandler = useCallback(
    ({ down, movement: [, movementY] }) => {
      if (
        !down &&
        movementY < 0 &&
        canvasGlobalState.containerAboutVisibleSlideIndex <
          contAboutSlidesNumber - 1
      ) {
        canvasState.containerAboutVisibleSlideIndex =
          canvasGlobalState.containerAboutVisibleSlideIndex + 1;
        canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
        // console.log(
        //   'endDragHandler / goUp = progress / containerAboutVisibleSlideIndex',
        //   canvasGlobalState.containerAboutVisibleSlideIndex
        // );
      }
      if (
        !down &&
        movementY > 0 &&
        canvasGlobalState.containerAboutVisibleSlideIndex > 0
      ) {
        canvasState.containerAboutVisibleSlideIndex =
          canvasGlobalState.containerAboutVisibleSlideIndex - 1;
        canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
        // console.log(
        //   'endDragHandler / goUp = progress / containerAboutVisibleSlideIndex',
        //   canvasGlobalState.containerAboutVisibleSlideIndex
        // );
      }
    },
    [
      canvasGlobalState.containerAboutVisibleSlideIndex,
      canvasGlobalState.sliderToggler,
    ]
  );
  /*
  Gesture Section
  */
  const contAboutNavGest = useGesture(
    {
      onWheelEnd: endWheelHandler,
      //...
      onDragEnd: endDragHandler,
    },
    {
      /*
      ...
      */
      target: canvasGlobalState.currentContainer === 'aboutContainer' && window,
      enabled:
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        canvasGlobalState.sliderIsReady,
      //  &&
      // canvasGlobalState.isSlideComplete,
      drag: { axis: 'y' },
      wheel: { axis: 'y' },
    }
  );
  /*
  ContainerIntroDrag's return
  */
  return {
    contAboutNavGest,
  };
};

export default ContAboutNavGest;
