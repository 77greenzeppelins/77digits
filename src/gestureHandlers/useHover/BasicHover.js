// import React from 'react';
import { useCallback } from 'react';
import { useSpring, config } from '@react-spring/three';
import { useHover } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
//_____GlobalState
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../states/canvasState';

const BasicHover = ({ initialValue }) => {
  //_____Global States for SpringValues; {sideLights: 0}
  // const canvasGlobalState = useSnapshot(canvasState);

  //_____Spring Section
  const [{ scale, val }, api] = useSpring(() => ({
    scale: [initialValue, initialValue, initialValue],
    val: 0,
    config: config.molasses,
  }));

  //_____Gesture Section
  //___1. calback
  const eventHandler = useCallback(
    ({ args: [unhovered, hovered], active }) => {
      /*
      conception: hover one element (i.g. some button) + change global state = trigger some other element (i.g. some element on background)
      */
      // canvasState.sideLights = active;
      active && console.log('BasicHover..............');
      api.start({
        scale: active
          ? [hovered, hovered, hovered]
          : [unhovered, unhovered, unhovered],
        val: active ? 1 : 0,
      });
    },
    [api]
  );
  //___2.
  const basicHover = useHover(eventHandler, { enabled: true });

  return { scale, val, basicHover };
};

export default BasicHover;

/*
_____COMMENTS ABOUT USAGE OF "BasicHover"
_____1. "BasicHover" is a function that needs to be called !!! => {...basicHover()} NOT {...basicHover}, so BRACKETS are required !!! it takes me some time to notice this detail/rule
_____2. Passin args => "basicHover(0.65, 0.55)" 
_____3. Retrieving args => in callback of useHover(), as its argument => (args: [unhovered, hovered],states)

<a.mesh
          ref={mesh}
          {...meshProps}
          // {...dragFromDocumentation}
          {...basicHover(0.65, 0.55)}
          // position={position}
          scale={scale}
          // onPointerMove={pointerMove}
          // onClick={onClick}
          // onPointerEnter={onPointerEnter}
>
*/
