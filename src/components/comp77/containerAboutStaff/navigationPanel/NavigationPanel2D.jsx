import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
/*
Components
*/
import SliderProgressIndicator from '../../progressIndicators/sliderProgressIndicator/SliderProgressIndicator';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';
/*
BasicData
*/
import { mainGroupSpringData } from '../../../../components3D/three/custome/containerAbout/navigationPanel/navigationPanelData';
const slidesArrayNumber = 5;
let switchCondition = false;
let buttonActive;
let buttonInactive;

/*
------------------------------------------------------------------------------
*/
const NavigationPanel2D = () => {
  /*
  References
  */
  const navPanelContainer = useRef();
  /*
  Local State
  */
  const [componentExists, setComponentExists] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(true);
  /*
  Global State Section
  canvasState = {containerAboutVisibleSlideIndex:0, containerAboutSlidingDirection: ,"none", ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const transition = useTransition(
    /*
    condition
    */
    // canvasGlobalState.currentContainer === 'aboutContainer' &&
    //   canvasState.isNavPanelOpened === true,
    componentExists,
    /*
    configObj  
    */
    {
      // from: { display: 'none' },
      // enter: { display: 'flex' },
      // leave: { display: 'none' },
      from: { scale: 0 },
      enter: { scale: 1 },
      leave: { scale: 0 },
      delay: mainGroupSpringData.delay2D,
      config: mainGroupSpringData.config,
    }
  );

  /*
  userExperience Section / onClick Handlers
  */
  const goForward = debounce(() => {
    if (
      canvasGlobalState.containerAboutVisibleSlideIndex <
      slidesArrayNumber - 1
    ) {
      canvasState.containerAboutVisibleSlideIndex += 1;
      canvasState.containerAboutSlidingDirection = 'forward';
    }
  }, 200);

  const goBackward = debounce(() => {
    if (
      /*
      this condition means: "do nothing if index === 0, work only if index > 0"
      */
      canvasGlobalState.containerAboutVisibleSlideIndex > 0
    ) {
      canvasState.containerAboutVisibleSlideIndex -= 1;
      canvasState.containerAboutSlidingDirection = 'backward';
    }
  }, 200);

  /*
  Without this useEffect() and its dependency array nothing works... it seems as if changes in global state wasn't seen inside the component....
  */
  useEffect(() => {
    if (
      canvasGlobalState.currentContainer === 'aboutContainer' &&
      canvasGlobalState.isNavPanelOpened === true
    ) {
      setComponentExists(true);
      // console.log('............transition of NavigationPanel2D');
    }
    // console.log(
    //   'canvasGlobalState.containerAboutVisibleSlideIndex:',
    //   canvasGlobalState.containerAboutVisibleSlideIndex
    // );
  }, [
    canvasGlobalState.currentContainer,
    canvasGlobalState.isNavPanelOpened,
    canvasGlobalState.containerAboutVisibleSlideIndex,
  ]);
  // useEffect(() => {
  //   // console.log('navPanelContainer.current:', navPanelContainer.current);
  //   if (
  //     canvasGlobalState.containerAboutVisibleSlideIndex === 1 &&
  //     canvasGlobalState.isSlide1Debutes === true
  //   ) {
  //     console.log('............button should be blocked');
  //   }
  // }, [
  //   canvasGlobalState.containerAboutVisibleSlideIndex,
  //   canvasGlobalState.isSlide1Debutes,
  // ]);
  /*
  let ;
let buttonActive;
let buttonInactive;
  */
  // switch (switchCondition) {
  //   case canvasGlobalState.containerAboutVisibleSlideIndex === 1 &&
  //     canvasGlobalState.isSlide1Debutes === true:
  //     setButtonStatus(false);
  //     // buttonActive = 'flex';
  //     // buttonInactive = 'none';
  //     break;
  //   // case canvasGlobalState.containerAboutVisibleSlideIndex === 2 &&
  //   //   canvasGlobalState.isSlide2Debutes === true:
  //   //   setButtonStatus(false);
  //   //   // buttonActive = 'flex';
  //   //   // buttonInactive = 'none';
  //   //   break;
  //   default:
  //     break;
  // }
  useEffect(() => {
    // switch (switchCondition) {
    // case canvasGlobalState.containerAboutVisibleSlideIndex === 1 &&
    //   canvasGlobalState.isSlide1Debutes === true:
    //   // setButtonStatus(false);
    //   buttonActive = 'flex';
    //   buttonInactive = 'none';
    //   console.log('............switchCondition', switchCondition);
    //   console.log('............buttonActive', buttonActive);
    //   console.log('............buttonInactive', buttonInactive);
    //   break;
    // case true:
    //   console.log('............cASE true');
    //   break;
    // case canvasGlobalState.containerAboutVisibleSlideIndex === 2 &&
    //   canvasGlobalState.isSlide2Debutes === true:
    //   setButtonStatus(false);
    //   // buttonActive = 'flex';
    //   // buttonInactive = 'none';
    //   break;
    // default:
    //   break;
    // }
    // console.log('buttonStatus:', buttonStatus);
    // console.log('............switchCondition', switchCondition);
    // console.log('............buttonActive', buttonActive);
    // console.log('............buttonInactive', buttonInactive);
    // if (
    //   canvasGlobalState.containerAboutVisibleSlideIndex === 1 &&
    //   canvasGlobalState.isSlide1Debutes === true
    // ) {
    //   setButtonStatus(false);
    //   console.log(
    //     '............helloł from if statement / buttonStatus:',
    //     buttonStatus
    //   );
    // }
  }, [
    canvasGlobalState.containerAboutVisibleSlideIndex,
    canvasGlobalState.isSlide1Debutes,
    buttonStatus,
  ]);

  /*
  JSX
  */
  return transition(
    ({ scale }, condition) =>
      condition && (
        <animated.div
          ref={navPanelContainer}
          className="navigation-panel__container"
          style={{
            scale: scale,
            // display:
            //   canvasGlobalState.containerAboutVisibleSlideIndex === 1 &&
            //   canvasGlobalState.isSlide1Debutes === true
            //     ? 'none'
            //     : 'flex',
            display: buttonStatus ? 'flex' : 'none',
          }}
        >
          <button onClick={goBackward} className="navigation-panel__button" />
          <div className="navigation-panel__special_wrapper">
            <button className="navigation-panel__rotate-button"></button>
            <div className="navigation-panel__progress-indicator">
              <SliderProgressIndicator slidesArrayNumber={slidesArrayNumber} />
            </div>
          </div>
          <button onClick={goForward} className="navigation-panel__button" />
        </animated.div>
      )
  );
};

export default NavigationPanel2D;

// const rotateBox = debounce(() => {
//   canvasState.facetOfSpinningBoxSide = Number(
//     !canvasGlobalState.facetOfSpinningBoxSide
//   );
//   // switch (canvasGlobalState.containerAboutVisibleSlideIndex) {
//   //   case 0:
//   //     canvasState.slide0Rotation = !canvasGlobalState.slide0Rotation;
//   //     break;
//   //   // case 1:
//   //   //   canvasState.slide1Rotation = !canvasGlobalState.slide1Rotation;
//   //   //   break;
//   //   default:
//   //     canvasGlobalState.slide0Rotation = false;
//   //     canvasGlobalState.slide1Rotation = false;
//   //     break;
//   // }
// }, 400);
