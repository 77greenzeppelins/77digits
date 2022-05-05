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
import { spinningBoxGesturePromptData } from '../../gesturesPromptData';

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
          canvasGlobalState.currentContainer === 'aboutContainer' &&
          canvasGlobalState.isSpinningBoxGesturePromptMounted
        }
        /*
        taken from external file
        */
        useTransitionConfig={spinningBoxGesturePromptData.transitionConfig}
        useSpringConfig={spinningBoxGesturePromptData.springConfig}
        classPromptWrapperCSS={
          spinningBoxGesturePromptData.classPromptWrapperCSS
        }
        classGraphicWrapperCSS={
          spinningBoxGesturePromptData.classGraphicWrapperCSS
        }
        graphicComponentData={spinningBoxGesturePromptData.graphicComponentData}
      />
    </>
  );
};

export default SpinningBoxGesturePrompt;
