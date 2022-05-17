import React from 'react';
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
import { introGesturePromptData } from '../../gesturesPromptData';

/*
------------------------------------------------------------------------
*/
const IntroGesturePrompt = ({ progressValue, wheeledPositionZ, width }) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

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
          // canvasGlobalState.introContainerEventType === 'none' &&
          canvasGlobalState.currentContainer === 'introContainer'
        }
        textChildCondition={canvasGlobalState.languageVersion}
        /*
        taken from external file
        */
        useTransitionConfig={introGesturePromptData.transitionConfig}
        useSpringConfig={introGesturePromptData.springConfig}
        classPromptWrapperCSS={introGesturePromptData.classPromptWrapperCSS}
        textComponentData={introGesturePromptData.textComponentData}
        graphicComponentData={introGesturePromptData.graphicComponentData}
        /*
        ...
        */
        progressValue={progressValue}
        wheeledPositionZ={wheeledPositionZ}
        width={width}
      />
    </>
  );
};

export default IntroGesturePrompt;
