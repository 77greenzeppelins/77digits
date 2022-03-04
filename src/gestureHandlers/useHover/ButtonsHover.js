// import React from 'react';
import { useCallback } from 'react';
import { useSpring, config } from '@react-spring/three';
import { useHover } from '@use-gesture/react';

const ButtonHover = ({
  opacityEnter,
  opacityLeave,
  scaleEnter,
  scaleLeave,
  thisConfig,
}) => {
  /*
  Spring Section
  */
  const [{ opacityValue, scaleValue }, api] = useSpring(() => ({
    opacityValue: opacityLeave || 1,
    scaleValue: scaleLeave || 1,
    colorValue: '#ffffff',
    config: thisConfig || config.molasses,
  }));
  /*
  Gesture Section
  */
  const eventHandler = useCallback(
    ({ active }) => {
      /*
      conception: hover one element (i.g. some button) + change global state = trigger some other element (i.g. some element on background)
      */
      // canvasState.sideLights = active;
      // active && console.log('BasicHover..............');
      api.start({
        opacityValue: active ? opacityEnter : opacityLeave,
        scaleValue: active ? scaleEnter : scaleLeave,

        // hoverAnimatedValue: active ? destinationValue : 1,
        // hoverAnimatedValue: active ? 1 : 0.2,
      });
    },
    [api, opacityEnter, opacityLeave, scaleEnter, scaleLeave]
  );
  /*
  Here "useHover" hook returns a function
  Then we will put this function as return value of ButtonHover()
  When we call&spread ButtonHover() within "destination component" we actually add "onMouseEnter" & "onMouseLeave"  event handlers;
  */
  const buttonHover = useHover(eventHandler);
  /*
  ButtonHover's return
  */
  return { opacityValue, scaleValue, buttonHover };
};

export default ButtonHover;
