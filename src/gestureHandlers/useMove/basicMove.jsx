// import React from 'react';
import { useCallback } from 'react';
import { useSpring, config } from '@react-spring/three';
import { useMove } from '@use-gesture/react';
/*
useThree Staff
*/
import { useThree } from '@react-three/fiber';
/*
GlobalState
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../states/canvasState';
/*
------------------------------------------------------------------------
*/

const BasicMove = ({ initialRotateValue, enabled, target, tileFactor }) => {
  /*
  Global States for SpringValues;
  */
  // const canvasGlobalState = useSnapshot(canvasState);

  /*
  useThree Section
  */
  const { size } = useThree();
  /*
  Spring Section
  */
  const [{ rotateWithMouseMove }, api] = useSpring(() => ({
    rotateWithMouseMove: [0, 0, 0],
    config: config.molasses,
  }));

  /*
  Main Hendler Section
  */
  // const eventHandler = useCallback(
  //   ({ active, xy: [x, y] }) => {
  //     let newX = (x / size.width) * 2 - 1;
  //     let newY = (y / size.height) * 2 - 1;
  //     api.start({
  //       rotateWithMouseMove: [
  //         newX < 0 ? newY * tileFactor : newY * tileFactor,
  //         newY < 0 ? newX * tileFactor : newX * tileFactor,
  //         0,
  //       ],
  //     });
  //   },
  //   [api, size.width, size.height, tileFactor]
  // );

  const eventHandler = useCallback(
    ({ active, xy: [x, y] }) => {
      let newX = (x / size.width) * 2 - 1;
      let newY = (y / size.height) * 2 - 1;
      // console.log('pointer positions x,y', x, y);
      // console.log('pointer positions newX,newY', newX, newY);

      api.start({
        rotateWithMouseMove: [
          newX < 0 ? newY * tileFactor : newY * tileFactor,
          newY < 0 ? newX * tileFactor : newX * tileFactor,
          0,
        ],
      });
    },
    [api, size.width, size.height, tileFactor]
  );

  //___2.
  const basicMove = useMove(eventHandler, {
    enabled: enabled,
    target: target || window,
  });

  return [rotateWithMouseMove, basicMove];
};

export default BasicMove;
