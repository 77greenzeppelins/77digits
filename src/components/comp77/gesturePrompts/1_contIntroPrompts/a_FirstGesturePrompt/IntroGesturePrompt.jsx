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
Gestures Staff
*/
import IntroDragGesture from '../../../../../gestureHandlers/useGesture/IntroDragGesture';
import IntroWheelGesture from '../../../../../gestureHandlers/useGesture/IntroWheelGesture';
/*
Basic Data
*/
import { introGesturePromptData } from '../../gesturesPromptData';

/*
------------------------------------------------------------------------
*/
const IntroGesturePrompt = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gestures Section
  */
  const { dragProgressValue, dragProgressToggler } = IntroDragGesture();
  const { wheelProgressValue, wheelProgressToggler } = IntroWheelGesture();

  const progressValue = useMemo(
    () =>
      canvasGlobalState.introContainerEventType === 'wheeling'
        ? wheelProgressValue
        : dragProgressValue,
    [
      canvasGlobalState.introContainerEventType,
      wheelProgressValue,
      dragProgressValue,
    ]
  );

  const symbolsClassCSS = useMemo(() => {
    return {
      opacity:
        canvasGlobalState.introContainerEventType === 'wheeling'
          ? wheelProgressToggler
          : dragProgressToggler,
    };
  }, [
    canvasGlobalState.introContainerEventType,
    wheelProgressToggler,
    dragProgressToggler,
  ]);

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
          !canvasGlobalState.isInitialOverlayMounted &&
          !canvasGlobalState.endOfContainerIntro &&
          canvasGlobalState.currentContainer === 'introContainer'
        }
        /*
        taken from external file
        */
        useTransitionConfig={introGesturePromptData.transitionConfig}
        useSpringConfig={introGesturePromptData.springConfig}
        classContainerOutherCSS={introGesturePromptData.classContainerOutherCSS}
        classPromptWrapperCSS={introGesturePromptData.classPromptWrapperCSS}
        classGraphicWrapperCSS={introGesturePromptData.classGraphicWrapperCSS}
        graphicComponentData={introGesturePromptData.graphicComponentData}
        /*
        "springValues" taken from gestureHendlers; "progressValue" for innerText that displays progress in numbers; "symbolsClassCSS" for opacity manipulations that effects "=", "-", "progress digits";
        */
        progressValue={progressValue}
        symbolsClassCSS={symbolsClassCSS}
        /*
        ...
        */
        plusAndMinus={true}
      />
    </>
  );
};

export default IntroGesturePrompt;
