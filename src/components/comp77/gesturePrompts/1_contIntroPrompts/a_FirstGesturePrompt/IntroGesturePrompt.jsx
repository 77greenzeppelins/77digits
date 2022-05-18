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
import { introGesturePromptData } from '../../gesturesPromptData';

/*
------------------------------------------------------------------------
*/
const IntroGesturePrompt = ({ progressValue, progressToggler }) => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  const symbolsClassCSS = useMemo(() => {
    return { opacity: progressToggler };
  }, [progressToggler]);
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
        textChildCondition={canvasGlobalState.languageVersion}
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
        data from 
        */
        progressValue={progressValue}
        progressToggler={progressToggler}
        plusAndMinus={true}
        symbolsClassCSS={symbolsClassCSS}
      />
    </>
  );
};

export default IntroGesturePrompt;
