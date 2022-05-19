import React, { useEffect } from 'react';
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
props / data from "gesturePromptsData.js"
*/
const GesturePromptTurboParent = (
  {
    /*
    Spring staff for <GPTP>
    */
    useTransitionCondition,
    useTransitionConfig,
    useSpringConfig,
    /*
    staff for <GPTP> classes
    */
    classContainerOutherCSS,
    classPromptWrapperCSS,
    classTextWrapperCSS,
    classGraphicWrapperCSS,
    /*
    data for <GraphicComponentOfGPTP>
    */
    graphicComponentData,
    /*
    springValue from gestures("IntroWheelGesture & IntroDragGesture")
    */
    progressValue,
    symbolsClassCSS,
    /*
    Boolean that determine wheather "+" & "-" should be rendered  
    */
    plusAndMinus,
    columnReverse,
  },
  props
) => {
  /*
  Global State Section
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Hook Section
  */
  const windowSize = useWindowSize();

  /*
  Spring Section to mount / unmount component
  */
  const transition = useTransition(useTransitionCondition, {
    ...useTransitionConfig,
    config: useTransitionCondition ? config.molasses : { duration: 0 },
    delay: useTransitionCondition ? 200 : 0,
  });
  /*
  Spring Section to animate graphic component of prompt
  */
  const spring = useSpring({
    ...useSpringConfig,
  });

  /*
  JSX
  */
  return transition(
    (styles, condition) =>
      condition && (
        <>
          <animated.div
            style={{ ...styles, ...classContainerOutherCSS }}
            className="gesture-prompt-turbo-parent__container-outher"
          >
            <div className="gesture-prompt-turbo-parent__container-inner">
              <div
                className="gesture-prompt-turbo-parent__prompt-wrapper"
                style={{
                  height:
                    classPromptWrapperCSS.highFactor &&
                    windowSize.height * classPromptWrapperCSS.highFactor,
                  width:
                    classPromptWrapperCSS.widthFactor &&
                    windowSize.height * classPromptWrapperCSS.widthFactor,
                  ...classPromptWrapperCSS,
                }}
              >
                {/*
               Graphic component of <GPTP>
              */}
                <div
                  className="gesture-prompt-turbo-parent__graphic-wrapper"
                  style={{
                    flexDirection: columnReverse ? ' column-reverse' : 'column',
                    ...classGraphicWrapperCSS,
                  }}
                >
                  {plusAndMinus && (
                    <div className="gesture-prompt-turbo-parent__symbol-wrapper">
                      <animated.div
                        className="gesture-prompt-turbo-parent__symbol-vertical"
                        style={symbolsClassCSS}
                      />
                    </div>
                  )}
                  <GraphicComponentOfGPTP
                    spring={spring}
                    graphicComponentData={graphicComponentData}
                  />

                  {plusAndMinus && (
                    <div className="gesture-prompt-turbo-parent__symbol-wrapper">
                      <animated.div
                        className="gesture-prompt-turbo-parent__symbol-vertical"
                        style={symbolsClassCSS}
                      />
                      <animated.div
                        className="gesture-prompt-turbo-parent__symbol-horizontal"
                        style={symbolsClassCSS}
                      />
                    </div>
                  )}
                </div>

                {/*
            Text component of <GPTP>
            */}
                {progressValue && (
                  <div
                    className="gesture-prompt-turbo-parent__text-wrapper"
                    style={{ ...classTextWrapperCSS }}
                  >
                    <TextComponentOfGPTP
                      progressValue={progressValue}
                      textClassCSS={symbolsClassCSS}
                    />
                  </div>
                )}
              </div>
            </div>
          </animated.div>
        </>
      )
  );
};

export default GesturePromptTurboParent;
