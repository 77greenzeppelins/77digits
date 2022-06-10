import React, { useMemo } from 'react';
/*
Components
*/
import GesturePromptTurboParent from '../../GesturePromptTurboParent';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Basic Data
*/
import { slideGesturePrompt } from '../../gesturesPromptData';
/*
------------------------------------------------------------------------
*/
const SlidesGesturePrompt = ({ opacityValue, progressValue }) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  const symbolsClassCSS = useMemo(
    () => ({ opacity: opacityValue }),
    [opacityValue]
  );

  /*
  JSX
  */
  return (
    <>
      <GesturePromptTurboParent
        /*
        taken from globalState
        */
        useTransitionCondition={canvasGlobalState.sliderIsReady}
        /*
        taken from external file
        */
        useTransitionConfig={slideGesturePrompt.transitionConfig}
        useSpringConfig={slideGesturePrompt.springConfig}
        classContainerOutherCSS={slideGesturePrompt.classContainerOutherCSS}
        classPromptWrapperCSS={slideGesturePrompt.classPromptWrapperCSS}
        classGraphicWrapperCSS={slideGesturePrompt.classGraphicWrapperCSS}
        graphicComponentData={slideGesturePrompt.graphicComponentData}
        /*
        "springValues" taken from gestureHendlers; "progressValue" for innerText that displays progress in numbers; "symbolsClassCSS" for opacity manipulations that effects "=", "-", "progress digits";
        */
        progressValue={progressValue}
        symbolsClassCSS={symbolsClassCSS}
        /*
        ...
        */
        plusAndMinus={true}
        columnReverse={
          canvasGlobalState.introContainerEventType === 'wheeling' ? 0 : 1
        }
      />
    </>
  );
};

export default SlidesGesturePrompt;
