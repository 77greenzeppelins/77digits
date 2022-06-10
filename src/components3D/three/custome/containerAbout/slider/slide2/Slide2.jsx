import React from 'react';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Components
*/
import ShaderedRing from './slide2Background/ring/ShaderedRing';
import Finger1 from './slide2Background/fingers/Finger1';
/*
Spring Staff
*/
import { a, config, useSpring } from '@react-spring/three';
/*
Basic Data
*/
import { groupLayout, planeArgs } from './slide2Data';

/*
----------------------------------------------------------------------
*/

const Slide2 = ({ slideId }) => {
  /*
  Hook Section
  Why this hook?
  */
  /*
  Global State Section
  {containerAboutVisibleSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring for animations that happen when slides changes
  */
  const springCond =
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId;
  const [{ groupScale, groupPosY }] = useSpring(
    () => ({
      groupScale: springCond ? groupLayout.bgScaleFinal : 0,
      groupPosY: springCond
        ? groupLayout.bgPosYFinal
        : groupLayout.bgPosYInitial,

      //___
      config: springCond ? config.molasses : { duration: 600 },
      delay: springCond ? 150 : 0,
    }),
    [canvasGlobalState.containerAboutVisibleSlideIndex]
  );

  // useEffect(() => {
  //   console.log(
  //     'Slide1 / canvasGlobalState.containerAboutVisibleSlideIndex:',
  //     canvasGlobalState.containerAboutVisibleSlideIndex
  //   );
  //   console.log('Slide1 / slideId:', slideId);
  // }, [canvasGlobalState.containerAboutVisibleSlideIndex, slideId]);

  /*
  JSX
  */
  return (
    <a.group scale={groupScale} position-y={groupPosY}>
      <ShaderedRing />
      <Finger1 />
    </a.group>
  );
};

export default Slide2;
