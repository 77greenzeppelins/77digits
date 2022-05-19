import React, { useState, useEffect } from 'react';
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
...
*/
import ContAboutNavGest from '../../../../../gestureHandlers/useGesture/ContAboutNavGest';

/*
------------------------------------------------------------------------
*/
const SlidesGesturePrompt = () => {
  /*
  ...
  */
  const { springValue, progressValue } = ContAboutNavGest();

  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  // useEffect(() => {
  //   console.log('springValue', springValue);
  // }, [springValue]);

  /*
  JSX
  */
  return (
    <>
      <GesturePromptTurboParent
        /*
        taken from globalState
        */
        useTransitionCondition={
          canvasGlobalState.currentContainer === 'aboutContainer' &&
          canvasGlobalState.sliderIsReady
        }
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
        symbolsClassCSS={springValue}
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
