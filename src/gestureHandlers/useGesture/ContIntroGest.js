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
const factorPositionY = 0.005;

const ContIntroGest = () => {
  /*
  References
  */
  const refPositionY = useRef(0);
  const gestureType = useRef('none');
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
  const [{ positionZ }, api] = useSpring(() => ({
    positionZ: 0,
    config: config.molasses,
  }));

  /*
  onDragStart Section
  */
  const onDragStartHandler = useCallback(({ dragging }) => {
    /*
      this operation sets global state property that is crucial in <ContainerIntro> as it determines what was the very first users's gesture; the same operation is in <IntroWheelGesture>
       */
    if (dragging && gestureType.current === 'none') {
      /*
      this operation sets global state property that is crucial in <ContainerIntro> as it determines what was the very first users's gesture; the same operation is in <IntroWheelGesture>
       */
      gestureType.current = 'dragging';
      console.log(
        'onWheelStartHandler, gestureType.current:',
        gestureType.current
      );
    }
  }, []);
  /*
  Main Handler Section
  */
  const onDragHandler = useCallback(
    ({ offset: [, offsetY], dragging }) => {
      if (gestureType.current === 'dragging' && dragging) {
        refPositionY.current = offsetY++;
      }
      if (gestureType.current === 'wheeling' && dragging) {
        refPositionY.current = offsetY;
        console.log('dragging when gestureType.current === wheeling ');
      }

      /*
      Spring section
      */
      api.start({
        positionZ:
          gestureType.current === 'dragging' &&
          //   offsetY * factorPositionY,
          refPositionY.current * factorPositionY,
      });
    },
    [api]
  );
  /*
  Additional Handler Section for onDragEnd
  */
  const onDragEndHandler = useCallback(
    ({ offset: [, y] }) => {
      /*
      What should happen if user draggs to the end?
      */
      if (y === canvasGlobalState.introContainerWheelDragBounds.bottom) {
        canvasState.endOfContainerIntro = true;
      }
    },
    [canvasGlobalState.introContainerWheelDragBounds.bottom]
  );

  /*
  ...
  */
  const onWheelStartHandler = useCallback(({ wheeling }) => {
    /*
      this operation sets two global state properties that are crucial in <ContainerIntroContent> as they determines what was the very first users's gesture; the same operation is in <IntroDragGesture>
      I've been testing various "state" mechanism: <i> bare "let" before function; <2> useRef, <3> useState; only global state solve my problem...
       */
    if (wheeling && gestureType.current === 'none') {
      gestureType.current = 'wheeling';
      console.log(
        'onWheelStartHandler, gestureType.current:',
        gestureType.current
      );
    }
  }, []);
  /*
  Main Handler Section
  */
  const onWheelHandler = useCallback(
    ({ offset: [, offsetY], wheeling }) => {
      if ((gestureType.current = 'wheeling' && wheeling)) {
        refPositionY.current = offsetY++;
      }
      if (gestureType.current === 'dragging' && wheeling) {
        refPositionY.current = offsetY;
        console.log('wheeling when gestureType.current === dragging ');
      }
      /*
      Spring Section;
      */
      api.start({
        positionZ: (gestureType.current =
          'wheeling' && refPositionY.current * factorPositionY),
      });
    },
    [api]
  );
  /*
  Additional Handler for last wheel 
  */
  const onWheelEndHandler = useCallback(
    ({ offset: [, y], down }) => {
      /*
      What should happen if user wheels to the end?
      */
      if (
        y === canvasGlobalState.introContainerWheelDragBounds.bottom &&
        !down
      ) {
        canvasState.endOfContainerIntro = true;
      }
    },
    [canvasGlobalState.introContainerWheelDragBounds.bottom]
  );
  /*
  Gesture Section
  */
  const containerIntroDrag = useGesture(
    {
      onDragStart: onDragStartHandler,
      onDrag: onDragHandler,
      onDragEnd: onDragEndHandler,
      onWheelStart: onWheelStartHandler,
      onWheel: onWheelHandler,
      onWheelEnd: onWheelEndHandler,
    },
    {
      target: canvasGlobalState.currentContainer === 'introContainer' && window,
      enabled:
        /*
        why two conditions? 
        Bacause we want to keep scrolling in "disable state" untill cookies are eatten i.e no scroll befor decision about cookies
        */
        canvasGlobalState.currentContainer === 'introContainer' &&
        !canvasGlobalState.endOfContainerIntro,
      drag: {
        axis: 'y',
        bounds: { ...canvasGlobalState.introContainerWheelDragBounds },
        // threshold: -10,
      },
      wheel: {
        axis: 'y',
        bounds: { ...canvasGlobalState.introContainerWheelDragBounds },
        // threshold: 100,
      },
    }
  );

  /*
  Final Return
  */
  return { positionZ, containerIntroDrag };
};

export default ContIntroGest;
