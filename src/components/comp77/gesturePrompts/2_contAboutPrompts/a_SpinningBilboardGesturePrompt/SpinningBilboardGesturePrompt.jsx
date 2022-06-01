/*
used in:
(1) <ContainerAbout>
(2) "GesturesPrompts" / "2_contAboutPrompts" / >
*/

import React, { useMemo, useEffect } from 'react';
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
// import ContAboutGest from '../../../../../gestureHandlers/useGesture/ContAboutGest';
import SpinningBilboardGestures from '../../../../../gestureHandlers/useGesture/SpinningBoxGest';
/*
Basic Data
*/
import { spinningBoxGesturePromptData } from '../../gesturesPromptData';

/*
------------------------------------------------------------------------
*/
const SpinningBilboardGesturePrompt = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gestures Section
  */
  const { opacitySetter } = SpinningBilboardGestures();

  const symbolsClassCSS = useMemo(() => {
    return { opacity: opacitySetter };
  }, [opacitySetter]);

  useEffect(() => {
    console.log('opacitySetter', opacitySetter);
  }, [opacitySetter]);

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
          canvasGlobalState.containerAboutVisibleSlideIndex === 0
        }
        /*
        taken from external file
        */
        useTransitionConfig={spinningBoxGesturePromptData.transitionConfig}
        useSpringConfig={spinningBoxGesturePromptData.springConfig}
        classContainerOutherCSS={
          spinningBoxGesturePromptData.classContainerOutherCSS
        }
        classPromptWrapperCSS={
          spinningBoxGesturePromptData.classPromptWrapperCSS
        }
        classGraphicWrapperCSS={
          spinningBoxGesturePromptData.classGraphicWrapperCSS
        }
        graphicComponentData={spinningBoxGesturePromptData.graphicComponentData}
        plusAndMinus={true}
        // symbolsClassCSS={symbolsClassCSS}
      />
    </>
  );
};

export default SpinningBilboardGesturePrompt;
