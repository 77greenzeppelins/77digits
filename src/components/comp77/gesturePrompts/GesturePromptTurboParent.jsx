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
    /*
    Spring staff
    */
    useTransitionCondition,
    useTransitionConfig,
    useSpringConfig,
    /*
    staff for .gesture-prompt-turbo-parent__prompt-wrapper
    */
    classPromptWrapperCSS,
    classTextWrapperCSS,
    classGraphicWrapperCSS,
    /*
    condition based on canvasState.languageVersion
    */
    textChildCondition,
    graphicComponentData,
    textComponentData,
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

  // useEffect(() => {
  //   console.log('classGraphicWrapperCSS', classGraphicWrapperCSS);
  // }, []);

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
              height: windowSize.height * classPromptWrapperCSS.highFactor,
              width: windowSize.height * classPromptWrapperCSS.widthFactor,
              top: -windowSize.height * classPromptWrapperCSS.highFactor,
              ...classPromptWrapperCSS,
            }}
          >
            {/*
            Text component
            */}

            <div
              className="gesture-prompt-turbo-parent__text-wrapper"
              style={classTextWrapperCSS}
            >
              <TextComponentOfGPTP
                textComponentData={textComponentData}
                textChildCondition={textChildCondition}
              />
            </div>

            {/*
            Graphic component
            */}
            <div
              className="gesture-prompt-turbo-parent__graphic-wrapper"
              style={classGraphicWrapperCSS}
            >
              <GraphicComponentOfGPTP
                spring={spring}
                graphicComponentData={graphicComponentData}
              />
            </div>
          </div>
        </animated.div>
      )
  );
};

export default GesturePromptTurboParent;
