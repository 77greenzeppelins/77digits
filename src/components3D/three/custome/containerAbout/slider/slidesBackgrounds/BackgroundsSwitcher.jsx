import React, { useEffect, useRef } from 'react';
/*
Components
*/
import Slide1Background from './backgroundObjects/slide1Background/Slide1Background';
import Slide2Background from './backgroundObjects/slide2Background/Slide2Background';
/*
Global State Staff
*/
import { canvasState } from '../../../../../../states/canvasState';
import { useSnapshot } from 'valtio';
/*
Gesture Staff
*/
import BasicMove from '../../../../../../gestureHandlers/useMove/basicMove';
/*
Spring Staff
*/
import { a, config, useSpring } from '@react-spring/three';
/*
Basic Data
*/
const basicData = {
  groupScale: 0.32,
  tileFactorX: 9,
  tileFactorY: 5.2,
};
let tileFactorX;
let tileFactorY;
/*
--------------------------------------------------------------------
*/
const BackgroundsSwitcher = () => {
  /*
  References
  */
  const group = useRef();
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  const switcherCondition = canvasGlobalState.containerAboutVisibleSlideIndex;
  /*
  Turbo switcher
  */
  const backgroundsSelector = () => {
    switch (switcherCondition) {
      case 1:
        // console.log('.....BackgroundsSwitcher / Slide1Background');
        // tileFactorX = 9;
        // tileFactorY = 5;
        tileFactorX = 0;
        tileFactorY = 0;
        return (
          <Slide1Background
            scale={b1Scale}
            position={b1Pos}
            bgId={1}
            switcherCondition={switcherCondition}
            apiScale={apiScale}
            apiPosition={apiPosition}
            api={api}
          />
        );
      case 2:
        // console.log('.....BackgroundsSwitcher / Slide1Background');
        tileFactorX = 0.5;
        tileFactorY = 0.5;
        return <Slide2Background scale={b2Scale} position={b2Pos} bgId={2} />;
      default:
        tileFactorX = 0;
        tileFactorY = 0;
        // console.log('.....BackgroundsSwitcher');
        break;
    }
  };
  /*
  ...
  */
  useEffect(() => {
    console.log(
      'BackgroundsSwitcher / .containerAboutVisibleSlideIndex',
      canvasGlobalState.containerAboutVisibleSlideIndex
    );
    // if (group.current.children.length > 0) {
    //   console.log(
    //     'BackgroundsSwitcher / group.current.children[0].identity',
    //     group.current.children[0].identity
    //   );
    // }
  }, [canvasGlobalState.containerAboutVisibleSlideIndex]);

  /*
    Gesture Section
    this animation response to mouse move and slightly rotates components
    */
  const [rotateWithMouseMove] = BasicMove({
    target: window,
    tileFactorX: tileFactorX,
    tileFactorY: tileFactorY,
  });

  /*
    Spring for animations that happen when slides changes
    */
  const [{ b1Scale, b1Pos, b2Pos, b2Scale }] = useSpring(
    {
      b1Scale: switcherCondition === 1 ? 0.5 : 0,
      b1Pos: switcherCondition === 1 ? 0 : 0.5,
      //__
      b2Scale: switcherCondition === 2 ? 0.3 : 0.2,
      b2Pos: switcherCondition === 2 ? 0 : 0.1,
      //___
      // config: switcherCondition ? config.molasses : { duration: 400 },
      // delay: switcherCondition ? 150 : 0,
      // config: switcherCondition ? { duration: 1200 } : { duration: 400 },
      delay: 600,
    },
    [switcherCondition]
  );

  const [{ apiScale, apiPosition }, api] = useSpring(() => ({
    apiScale: 0,
    apiPosition: 0,
  }));
  /*
  JSX
  */
  return (
    <a.group
      ref={group}
      rotation={switcherCondition > 0 && rotateWithMouseMove}
    >
      {backgroundsSelector()}
    </a.group>
  );
};

export default BackgroundsSwitcher;
