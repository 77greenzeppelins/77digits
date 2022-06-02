import React, { useRef } from 'react';
/*
Components
*/
import SpinningBilboard from './spinningBilboard/SpinningBilboard';

/*
Global State Staf
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../../../states/canvasState';
/*
Spring data
*/
import { a } from '@react-spring/three';
// import { springConfigs } from '../../../../../../data/reactSpring';
/*
Basic Data
*/
// const sliderEngineSpring = {
//   centralPosition: 0,
//   topPosition: 1,
//   bottomPosition: -1,
//   config: springConfigs.configBasic,
//   configDown: springConfigs.molasses,
// };

/*
----------------------------------------------------------------------
*/
const Slide0 = ({ slideId }) => {
  /*
  References
  */
  const group = useRef();
  /*
  Global State Section
  {containerAboutVisibleSlideIndex: 0,...}
  */
  // const canvasGlobalState = useSnapshot(canvasState);

  /*
  "sliderEngine"
  depending on the final valu of this statement: "slideId < canvasGlobalState.containerAboutVisibleSlideIndex" slide can be "in the center of a screen" or "just above the top frame of a screen" (or, in case of <Slide1> "just below the bottom frame of a screen")
  */
  // const { positionY } = useSpring({
  //   from: {
  //     positionY: sliderEngineSpring.centralPosition,
  //   },
  //   to: {
  //     positionY:
  //       slideId < canvasGlobalState.containerAboutVisibleSlideIndex
  //         ? sliderEngineSpring.topPosition
  //         : sliderEngineSpring.centralPosition,
  //   },
  //   config:
  //     slideId < canvasGlobalState.containerAboutVisibleSlideIndex
  //       ? sliderEngineSpring.config /* when going up */
  //       : sliderEngineSpring.configDown /* when going down (molasses) */,
  // });

  /*
  JSX
  */
  return (
    <a.group
      ref={group}
      name="GroupForSlide_0"
      //  position-y={positionY}
    >
      <SpinningBilboard />
    </a.group>
  );
};

export default Slide0;
