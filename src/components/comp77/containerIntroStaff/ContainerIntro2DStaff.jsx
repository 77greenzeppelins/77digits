import React from 'react';
/*
Components
*/
import IntroGesturePrompt from '../gesturePrompts/1_contIntroPrompts/a_FirstGesturePrompt/IntroGesturePrompt';
import EndButtons2D from './endButtonsSection/EndButtons2D';
import RaphaelSectionToggler from './raphaelSectionToggler/RaphaelSectionToggler';
/*
GlobalState Staff
*/
// import { canvasState } from '../../../states/canvasState';
// import { useSnapshot } from 'valtio';
/*
Gestures Staff
*/
// import IntroWheelGesture from '../../../gestureHandlers/useGesture/IntroWheelGesture';
/*
...
*/
// import { animated } from '@react-spring/web';

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
  // const canvasGlobalState = useSnapshot(canvasState);

  /*
  for  T E S T  sake
  */
  // const { wheelProgressToggler, wheelProgressValue } = IntroWheelGesture();

  /*
  JSX
  */
  return (
    <>
      {/*
      Gesture Prompts that suggest to scroll / drag "down" when <Containerintro> has been mounted
      */}
      <IntroGesturePrompt />
      {/*
      Components used bellow are used to map 3D "pseudo-buttons" in <Containerintro>
      */}
      <EndButtons2D />
      <RaphaelSectionToggler />

      {/*----for  T E S T  sake-------------------------------------- */}
      {/* {canvasGlobalState.currentContainer === 'introContainer' && (
        <animated.div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '200px',
            height: `200px`,
            // backgroundColor: 'white',
            // opacity: wheelProgressToggler,
            backgroundColor: wheelProgressValue.to(x => `rgba(210, 57, ${x})`),
          }}
        >
          {wheelProgressToggler.to(x => x.toFixed(2))}
        </animated.div>
      )} */}
    </>
  );
};

export default ContainerIntro2DStaff;
