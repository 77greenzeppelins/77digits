import React, { useCallback, useEffect } from 'react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated } from '@react-spring/web';
/*
Gesture Section
*/
import ButtonHover from '../../../../gestureHandlers/useHover/ButtonsHover';
/*
----------------------------------------------------------------------------------
*/
const CrescentArrow = React.forwardRef(
  /*
  The general concept is that arrows are parts / children of some sort of "navigationPanel"; 
  "slidesArrayNumber" => 
  "arrowDirection" => allows to assign special class; can heve the following values: "arrow-up","arrow-down", 
  "arrowOpacity" => 
  "frameSide" => left, right,
  "arrowSide" => left (right is default)
  */
  (
    { slidesArrayNumber, arrowDirection, arrowOpacity, frameSide, arrowSide },
    ref
  ) => {
    /*
    Global State Section
    canvasState = {containerAboutSlideIndex:0, containerAboutSlidingDirection: ,"none", ...}
    */
    const canvasGlobalState = useSnapshot(canvasState);
    /*
    Gesture Handler
    available staff: opacityValue, scaleValue, buttonHover
    */
    const { opacityValue, buttonHover } = ButtonHover({
      opacityEnter: 1,
      opacityLeave: 0.2,
      scaleEnter: 1.2,
      scaleLeave: 1,
    });
    /*
userExperience Section / onClick Handlers
*/
    const goForward = useCallback(() => {
      if (canvasGlobalState.containerAboutSlideIndex < slidesArrayNumber - 1) {
        canvasState.containerAboutSlideIndex += 1;
        canvasState.containerAboutSlidingDirection = 'forward';
      }
    }, [canvasGlobalState.containerAboutSlideIndex, slidesArrayNumber]);

    const goBackward = useCallback(() => {
      if (
        /*
        this condition means: "do nothing if index === 0, work only if index > 0"
        */
        canvasGlobalState.containerAboutSlideIndex > 0
      ) {
        canvasState.containerAboutSlideIndex -= 1;
        canvasState.containerAboutSlidingDirection = 'backward';
      }
    }, [canvasGlobalState.containerAboutSlideIndex]);

    /*
    ...
    */
    useEffect(() => {
      //   console.log('CrescentArrow / slidesArrayNumber:', slidesArrayNumber);
      //   console.log('CrescentArrow / arrowDirection:', arrowDirection);
      //   console.log('CrescentArrow / arrowOpacity:', arrowOpacity);
      console.log(
        'CrescentArrow / canvasGlobalState.containerAboutSlideIndex:',
        canvasGlobalState.containerAboutSlideIndex
      );
    }, [
      //   slidesArrayNumber,
      //   arrowDirection,
      //   arrowOpacity,
      canvasGlobalState.containerAboutSlideIndex,
    ]);

    /*
    JSX
    */
    return (
      <div
        className="crescent-arrow__container"
        onClick={arrowDirection === 'arrow-up' ? goForward : goBackward}
        // onClick={fakeOnClick}
      >
        {/*-----arrow section-------------------------------------------------*/}
        <div
          //   className="crescent-arrow__bolthead-container"
          className={`crescent-arrow__bolthead-container ${arrowSide}`}
          style={{
            opacity: arrowOpacity,
            // transform: 'rotate(180deg)',
            // transformOrigin: '75%',
          }}
        >
          <div className="crescent-arrow__bolthead left" />
          <div className="crescent-arrow__bolthead right" />
        </div>

        {/*-----frame section-------------------------------------------------*/}

        <animated.div
          /*
          ...
          */
          className={`crescent-arrow__frame ${frameSide}`}
          {...buttonHover()}
          /*
          this "stylisation" is triggered when user hovers over "button-frame" 
          */
          style={{
            opacity: opacityValue,
          }}
        />
      </div>
    );
  }
);

export default CrescentArrow;

/*
userExperience Section / onClick Handlers
*/
// const goForward = useCallback(() => {
//   if (canvasGlobalState.containerAboutSlideIndex < slidesArrayNumber - 1) {
//     canvasState.containerAboutSlideIndex += 1;
//     canvasState.containerAboutSlidingDirection = 'forward';
//   }
// }, [canvasGlobalState.containerAboutSlideIndex, slidesArrayNumber]);

// const goBackward = useCallback(() => {
//   if (
//     /*
//     this condition means: "do nothing if index === 0, work only if index > 0"
//     */
//     canvasGlobalState.containerAboutSlideIndex > 0
//   ) {
//     canvasState.containerAboutSlideIndex -= 1;
//     canvasState.containerAboutSlidingDirection = 'backward';
//   }
// }, [canvasGlobalState.containerAboutSlideIndex]);

/*
  useEffect for Tests
  */
// useEffect(() => {
//   if (canvasGlobalState.containerAboutSlidingDirection === 'forward') {
//     console.log(
//       'canvasGlobalState.containerAboutSlideIndex:',
//       canvasGlobalState.containerAboutSlideIndex
//     );
//     console.log(
//       'canvasGlobalState.containerAboutSlidingDirection:',
//       canvasGlobalState.containerAboutSlidingDirection
//     );
//   }
// }, [
//   canvasGlobalState.containerAboutSlidingDirection,
//   canvasGlobalState.containerAboutSlideIndex,
// ]);
