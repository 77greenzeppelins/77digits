import React, { useEffect, useMemo } from 'react';
/*
Components
*/
import IntroGesturePrompt from '../gesturePrompts/1_contIntroPrompts/a_FirstGesturePrompt/IntroGesturePrompt';
import EndButtons2D from './endButtonsSection/EndButtons2D';
import RaphaelSectionToggler from './raphaelSectionToggler/RaphaelSectionToggler';
/*
GlobalState Staff
*/
import { canvasState } from '../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Gestures Staff
*/
import IntroDragGesture from '../../../gestureHandlers/useGesture/IntroDragGesture';
import IntroWheelGesture from '../../../gestureHandlers/useGesture/IntroWheelGesture';
/*
----------------------------------------------------------------------
*/
const ContainerIntro2DStaff = () => {
  /*
  ...
  */
  // useEffect(() => {
  //   console.log(progressValue.to(v => v.toFixed(2)));
  // }, [progressValue]);
  /*
  GlobalState Section
  */
  const canasGlobalState = useSnapshot(canvasState);
  /*
  ...
  */
  const { dragProgressValue, dragProgressToggler } = IntroDragGesture();
  const { wheelProgressValue, wheelProgressToggler } = IntroWheelGesture();

  const progressValue = useMemo(
    () =>
      canasGlobalState.introContainerEventType === 'wheeling'
        ? wheelProgressValue
        : dragProgressValue,
    [
      canasGlobalState.introContainerEventType,
      wheelProgressValue,
      dragProgressValue,
    ]
  );
  const progressToggler = useMemo(
    () =>
      canasGlobalState.introContainerEventType === 'wheeling'
        ? wheelProgressToggler
        : dragProgressToggler,
    [
      canasGlobalState.introContainerEventType,
      wheelProgressToggler,
      dragProgressToggler,
    ]
  );
  /*
  JSX
  */
  return (
    <>
      {/*
      Gesture Prompts that suggest to scroll / drag "down" when <Containerintro> has been mounted
      */}
      <IntroGesturePrompt
        progressValue={progressValue}
        progressToggler={progressToggler}
      />
      {/*
      Components used bellow are used to map 3D "pseudo-buttons" in <Containerintro>
      */}
      <EndButtons2D />
      <RaphaelSectionToggler />
    </>
  );
};

export default ContainerIntro2DStaff;
