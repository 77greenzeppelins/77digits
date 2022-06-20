import { useCallback } from 'react';
/*
GlobalState Staff
*/
import { canvasState } from '../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Spring & Gesture Staff
*/
import { useSpring, config } from '@react-spring/three';
import { useGesture } from '@use-gesture/react';

/*
---------------------------------------------------------------------------
*/
const InitialOverlayGest = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [
    { overlayOpacity, messageOpacity, translateUp, translateDown, fakeOpacity },
    api,
  ] = useSpring(() => ({
    overlayOpacity: 0,
    messageOpacity: 0,
    translateUp: 'translate3d(0,0px,0)',
    translateDown: 'translate3d(0,0px,0)',
    fakeOpacity: 1,
    // config: {
    //   duration: 400,
    // },
    config: config.slow,
  }));

  const onDragHandler = useCallback(
    ({ down, elapsedTime }) => {
      // console.log('elapsedTime:', elapsedTime);
      // if (down) {
      //   dragCondition1.current = true;
      //   console.log('dragCondition1.current:', dragCondition1.current);
      // } else {
      //   dragCondition1.current = false;
      //   console.log('dragCondition1.current:', dragCondition1.current);
      // }

      api.start({
        overlayOpacity: down ? 1 : 0,
        messageOpacity: (elapsedTime > 500) & down ? 1 : 0,
        fakeOpacity: down ? 0.4 : 1,
      });
      api.start({
        translateUp:
          (elapsedTime > 500) & down
            ? 'translate3d(0,-150px,0) '
            : 'translate3d(0,0px,0) ',
        translateDown:
          (elapsedTime > 500) & down
            ? 'translate3d(0,150px,0) '
            : 'translate3d(0,0px,0) ',
        config: config.molasses,
      });
    },
    [api]
  );
  const onWheelHandler = useCallback(
    ({ active, direction: [, directionY] }) => {
      // console.log('onWheel / directionY:', directionY);
      // console.log('onWheel / active:', active);
      // if (directionY === -1) {
      //   wheelCondition1.current = true;
      //   console.log('wheelCondition1.current:', wheelCondition1.current);
      // } else {
      //   wheelCondition1.current = false;
      //   console.log('wheelCondition1.current:', wheelCondition1.current);
      // }
      api.start({
        overlayOpacity: directionY === -1 ? 0 : 1,
        messageOpacity: directionY === -1 ? 0 : 1,
        fakeOpacity: directionY === -1 ? 1 : 0.3,
      });
      api.start({
        translateUp:
          directionY === -1
            ? 'translate3d(0,0px,0) '
            : 'translate3d(0,-150px,0) ',
        translateDown:
          directionY === -1
            ? 'translate3d(0,0px,0) '
            : 'translate3d(0,150px,0) ',
        config: config.molasses,
        // translateUp:
        //   directionY === -1 ? 'translateY(0xp)' : 'translateY(100px)',
      });
    },
    [api]
  );
  /*
  ...
  */
  const initialOverlayGestListener = useGesture(
    {
      onDrag: onDragHandler,
      onWheel: onWheelHandler,
    },
    {
      enabled: canvasGlobalState.isCookiesPopUpMounted,
    }
  );

  /*
  Final returned staff
  */
  return {
    overlayOpacity,
    messageOpacity,
    translateUp,
    translateDown,
    fakeOpacity,
    initialOverlayGestListener,
  };
};

export default InitialOverlayGest;
