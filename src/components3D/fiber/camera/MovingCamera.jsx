import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
/*
Animation Staff
*/
import { a, useSpring, config } from '@react-spring/three';
/*
Gesture Staff
*/
import { useGesture } from '@use-gesture/react';

/*
----------------------------------------------------------------------------
*/
const MovingCamera = ({ rollSpeed, frontLimit, endLimit }) => {
  /*
  Component State Section
  */
  // const [dragOriginShift, setOriginShift] = useState(0);
  /*
  Spring Section
  */
  const [spring, api] = useSpring(() => ({
    positionZ: 0,
    config: config.molasses,
  }));
  /*
  useThree Section
  */
  const { viewport } = useThree();
  const factor = viewport.factor;
  /*
  Gesture Section
  Function from useCallback is going to replace function that handles gesture state, so the name should be simillar 
  */
  const gestureHandler = useCallback(
    /*
    It starts with set of "state attributes"; then in functin body we work with that state
     */
    ({ event, movement: [, movementY], memo = spring.positionZ.get() }) => {
      if (event.type === 'wheel') {
        const offsetTo = memo - (movementY * rollSpeed) / 200;
        const newPosition =
          offsetTo > frontLimit
            ? frontLimit
            : offsetTo < endLimit
            ? endLimit
            : offsetTo;
        api.start({ positionZ: newPosition });
        return newPosition;
      } else {
        const offsetTo = memo + movementY * rollSpeed;
        // const newPosition =
        //   offsetTo > frontLimit
        //     ? frontLimit
        //     : offsetTo < endLimit
        //     ? endLimit
        //     : offsetTo;
        api.start({ positionZ: offsetTo });
        return memo;
      }
    },
    [spring.positionZ, rollSpeed, frontLimit, endLimit, api]
  );

  // const bind = useGesture(
  //   {
  //     onWheel: gestureHandler,
  //     onDrag: gestureHandler,
  //   },
  //   {
  //     target: window,
  //     rubberband: true,
  //     transform: ([x, y]) => [x / factor, y / factor],
  //     drag: {
  //       // top: frontLimit - dragOriginShift,
  //       // bottom: endLimit - dragOriginShift,
  //       top: frontLimit,
  //       bottom: endLimit,
  //     },
  //   }
  // );

  /*
  Now just setting up the custom camera:
  */
  const cameraRef = useRef();
  const set = useThree(({ set }) => set);
  const size = useThree(({ size }) => size);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size]);

  useLayoutEffect(() => {
    set({ camera: cameraRef.current });
  }, [set]);
  /*
  JSX
  */
  return (
    <a.group position-z={spring.positionZ}>
      <perspectiveCamera ref={cameraRef} position-z={2} />
    </a.group>
  );
};

export default MovingCamera;

/*
return (
    <a.group ref={group} position-y={spring.pos}>
      <perspectiveCamera ref={cameraRef} {...props} />
    </a.group>
  );
*/
