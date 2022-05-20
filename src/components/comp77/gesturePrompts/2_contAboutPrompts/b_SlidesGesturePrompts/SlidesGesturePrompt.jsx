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
Gestures Section
*/
import ContAboutNavGest from '../../../../../gestureHandlers/useGesture/ContAboutNavGest';
/*
Basic Data
*/
import { slideGesturePrompt } from '../../gesturesPromptData';
/*
------------------------------------------------------------------------
*/
const SlidesGesturePrompt = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gestures Section
  */
  const { springValue, progressValue } = ContAboutNavGest();

  const symbolsClassCSS = useMemo(
    () => ({ opacity: springValue }),
    [springValue]
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
