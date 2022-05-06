import React from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { useTransition, animated } from '@react-spring/web';
/*
Hook Staff
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
Basic Data
*/
import {
  layoutData,
  useTransitionConfig,
  useTransitionConfigButtons,
} from './raphaelSectionTogglerData';

/*
-----------------------------------------------------------------
*/
const RaphaelSectionToggler = () => {
  /*
  Global State Section
  canvasState={endOfContainerIntro: false,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Hook Section
  */
  const windowSize = useWindowSize();

  /*
  Spring Section
  */
  const mainTransition = useTransition(
    canvasGlobalState.currentContainer === 'introContainer' &&
      canvasGlobalState.endOfContainerIntro,
    {
      ...useTransitionConfig,
      /*
    "2000" is a time that "3DRaphaelSection" requires to move on z-axis
    */
      delay: canvasGlobalState.endOfContainerIntro ? 2000 : 0,
    }
  );

  const buttonsTransition = useTransition(canvasGlobalState.isRaphaelVisible, {
    ...useTransitionConfigButtons,
  });

  const onClickHandlerRight = () => {
    canvasState.isRaphaelVisible = true;
  };
  const onClickHandlerLeft = () => {
    canvasState.isRaphaelVisible = false;
  };
  /*
  JSX
  */
  return mainTransition(
    (styles, condition) =>
      condition && (
        <animated.div
          className="raphael-section-toggler__container-fixed"
          style={{ width: windowSize.width, ...styles }}
        >
          <div
            className="raphael-section-toggler__container"
            style={{
              height: windowSize.height,
              width: windowSize.height * layoutData.widthFactor,
            }}
          >
            {buttonsTransition(({ springValue }, condition) =>
              !condition ? (
                <animated.button
                  onClick={onClickHandlerRight}
                  className="raphael-section-toggler__fake-button"
                  style={{
                    scale: springValue.to([0, 0.01, 0.99, 1], [0, 0, 0, 1]),
                    width: windowSize.height * layoutData.widthFactor,
                    height: windowSize.height * layoutData.heightFactor,
                    transform: 'translateX(400%)',
                  }}
                />
              ) : (
                <animated.button
                  onClick={onClickHandlerLeft}
                  className="raphael-section-toggler__fake-button"
                  style={{
                    scale: springValue.to([0, 0.01, 0.99, 1], [0, 0, 0, 1]),
                    width: windowSize.height * layoutData.widthFactor,
                    height: windowSize.height * layoutData.heightFactor * 0.7,
                    // transform: 'translateX(0%)',
                  }}
                />
              )
            )}
          </div>
        </animated.div>
      )
  );
};

export default RaphaelSectionToggler;

/*
  User Experience Section
  */
//   const onClickHandler = () => {
//     if (canvasGlobalState.endOfContainerIntro) {
//       if (!canvasGlobalState.isRaphaelVisible) {
//         canvasState.isRaphaelVisible = true;
//       } else {
//         canvasState.isRaphaelVisible = false;
//       }
//     }
// canvasGlobalState.endOfContainerIntro
//   ? !canvasGlobalState.isRaphaelVisible
//     ? console.log('onClick nested ternary - first condition for .... ?')
//     : console.log('onClick nested ternary - second condition for .... X')
//   : console.log('onClick nested ternary - last option.......');
//   };
