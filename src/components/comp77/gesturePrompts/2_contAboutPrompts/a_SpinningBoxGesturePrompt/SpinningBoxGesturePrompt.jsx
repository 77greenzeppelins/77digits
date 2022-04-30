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
import { introGesturePromptData } from '../../gesturePromptData';

/*
------------------------------------------------------------------------
*/
const SpinningBoxGesturePrompt = () => {
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
          canvasGlobalState.currentContainer === 'aboutContainer'
          //   &&
          //   canvasGlobalState.introContainerEventType === 'none'
        }
        textChildCondition={canvasGlobalState.languageVersion}
        /*
        taken from external file
        */
        useTransitionConfig={introGesturePromptData.transitionConfig}
        useSpringConfig={introGesturePromptData.springConfig}
        highFactor={introGesturePromptData.highFactor}
        widthFactor={introGesturePromptData.widthFactor}
        promptWrapperStyle={introGesturePromptData.promptWrapperStyle}
      />
    </>
  );
};

export default SpinningBoxGesturePrompt;
