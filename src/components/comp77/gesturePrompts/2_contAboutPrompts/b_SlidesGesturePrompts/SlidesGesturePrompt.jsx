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
import { SlideGesturePrompt } from '../../gesturesPromptData';

/*
------------------------------------------------------------------------
*/
const SlidesGesturePrompt = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Local State Section
  */
  const [state, setState] = useState(true);
  /*
  useEffect Section
  Why?
  To eliminate "gesturePrompt" after the very first slide change
  */
  useEffect(() => {
    if (canvasGlobalState.containerAboutVisibleSlideIndex > 0 && state) {
      setState(false);
    }
  }, [canvasGlobalState.containerAboutVisibleSlideIndex, state]);

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
          canvasGlobalState.sliderIsReady &&
          state
        }
        /*
        taken from external file
        */
        useTransitionConfig={SlideGesturePrompt.transitionConfig}
        useSpringConfig={SlideGesturePrompt.springConfig}
        classPromptWrapperCSS={SlideGesturePrompt.classPromptWrapperCSS}
        classGraphicWrapperCSS={SlideGesturePrompt.classGraphicWrapperCSS}
        graphicComponentData={SlideGesturePrompt.graphicComponentData}
      />
    </>
  );
};

export default SlidesGesturePrompt;
