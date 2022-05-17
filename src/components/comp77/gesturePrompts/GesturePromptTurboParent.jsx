import React, { useState, useEffect } from 'react';
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
    simple data from "gesturePromptsData.js"
    */
    graphicComponentData,
    textComponentData,
    /*
    ...
    */
    progressValue,
    wheeledPositionZ,
    width,
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
  //   if (progressValue) {
  //     console.log('progressValue.animation.to', progressValue.animation.to);
  //   }
  // }, [progressValue, progressValue.animation.to]);

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <animated.div
          style={styles}
          className="gesture-prompt-turbo-parent__container-outher"
        >
          <div className="gesture-prompt-turbo-parent__container-inner">
            <div
              className="gesture-prompt-turbo-parent__prompt-wrapper"
              style={{
                height: windowSize.height * classPromptWrapperCSS.highFactor,
                ...classPromptWrapperCSS,
              }}
            >
              {/*
               Graphic component of <GPTP>
              */}
              <div
                className="gesture-prompt-turbo-parent__graphic-wrapper"
                // style={classGraphicWrapperCSS}
              >
                <div className="gesture-prompt-turbo-parent__symbol-wrapper">
                  <div className="gesture-prompt-turbo-parent__symbol-vertical" />
                </div>
                <GraphicComponentOfGPTP
                  spring={spring}
                  graphicComponentData={graphicComponentData}
                />
                <div className="gesture-prompt-turbo-parent__symbol-wrapper">
                  <div className="gesture-prompt-turbo-parent__symbol-vertical" />
                  <div className="gesture-prompt-turbo-parent__symbol-horizontal" />
                </div>
              </div>

              {/*
            Text component of <GPTP>
            */}
              {progressValue && (
                <div
                  className="gesture-prompt-turbo-parent__text-wrapper"
                  style={classTextWrapperCSS}
                >
                  {/* <div className="gesture-prompt-turbo-parent__text">
                    <animated.p
                      style={{ color: 'white', transform: 'rotateZ(90deg)  ' }}
                    >
                      {progressValue.to(v => v.toFixed(0))}
                    </animated.p>
                  </div>
                  <div className="gesture-prompt-turbo-parent__text">
                    <p
                      style={{ color: 'white', transform: 'rotateZ(90deg)  ' }}
                    >
                      %
                    </p>
                  </div> */}
                  <TextComponentOfGPTP progressValue={progressValue} />
                </div>
              )}
            </div>
          </div>
        </animated.div>
      )
  );
};

export default GesturePromptTurboParent;
