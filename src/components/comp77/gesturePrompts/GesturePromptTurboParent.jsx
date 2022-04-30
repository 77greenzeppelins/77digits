import React, { useState } from 'react';
/*
Components = Direct Children
*/
import GraphicComponentOfGPTP from './_turboParentDirectChildren/graphicComponent/GraphicComponentOfGPTP';
import TextComponentOfGPTP from './_turboParentDirectChildren/textComponent/TextComponentOfGPTP';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition, useSpring, config } from '@react-spring/web';
/*
Hook Staff
*/
import useWindowSize from '../../../hooks/useWindowSize';

/*
--------------------------------------------------------------------------
*/
const GesturePromptTurboParent = (
  {
    useTransitionCondition,
    useTransitionConfig,
    useSpringConfig,
    highFactor,
    widthFactor,
    promptWrapperStyle,
    textChildCondition,
  },
  props
) => {
  /*
  Global State Section
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Local State Section
  */
  const [state, setState] = useState(false);
  /*
  Hook Section
  */
  const windowSize = useWindowSize();

  /*
  Spring Section to mount / unmount component
  */
  const transition = useTransition(useTransitionCondition, {
    ...useTransitionConfig,
    config: config.molasses,
    onRest: () => {
      setState(true);
    },
  });

  /*
  Spring Section to animate graphic component of prompt
  */
  const spring = useSpring({
    loop: state,
    ...useSpringConfig,
  });

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <animated.div
          style={styles}
          className="gesture-prompt-turbo-parent__container"
        >
          <div
            className="gesture-prompt-turbo-parent__prompt-wrapper"
            style={{
              height: windowSize.height * highFactor,
              width: windowSize.height * widthFactor,
              top: -windowSize.height * highFactor,
              ...promptWrapperStyle,
            }}
          >
            {/*
            Text component
            */}

            <div className="gesture-prompt-turbo-parent__text-wrapper">
              <TextComponentOfGPTP textChildCondition={textChildCondition} />
            </div>

            {/*
            Graphic component
            */}
            <div className="gesture-prompt-turbo-parent__graphic-wrapper">
              <GraphicComponentOfGPTP spring={spring} />
            </div>
          </div>
        </animated.div>
      )
  );
};

export default GesturePromptTurboParent;
