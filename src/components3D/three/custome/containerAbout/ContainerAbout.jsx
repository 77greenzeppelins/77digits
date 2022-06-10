import React, { Suspense, useRef } from 'react';
/*
Components
*/
import Slider from './slider/Slider';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';

/*
Spring Staff
*/
import { a, config, useSpring } from '@react-spring/three';

/*
Basic Data
*/
// import { contAboutSlidesNumber } from '../../../../data/globalData';
/*
------------------------------------------------------------------------
 */
const ContainerAbout = () => {
  /*
  References
  */
  const group = useRef();
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);

  // const [{ bilboardScale, bilboardPosition, indicatorsPosition }] = useSpring(
  //   {
  //     bilboardScale:
  //       canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 1 : 0,
  //     bilboardPosition:
  //       canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 1 : 0,
  //     indicatorsPosition:
  //       canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 0 : -0.1,
  //     //___
  //     config: { duration: 1000 },
  //     // canvasGlobalState.containerAboutVisibleSlideIndex === 0
  //     //   ? config.molasses
  //     //   : { duration: 1000 },
  //     delay: canvasGlobalState.containerAboutVisibleSlideIndex === 0 ? 150 : 0,
  //   },
  //   [canvasGlobalState.containerAboutVisibleSlideIndex]
  // );

  //___test 2
  // const [{ togglerValue }] = useSpring(
  //   () => ({
  //     togglerValue: canvasGlobalState.sliderToggler ? 1 : 0,
  //     config: { duration: 2000 },
  //     // config: canvasGlobalState.sliderToggler
  //     //   ? config.molasses
  //     //   : config.molasses,
  //   }),
  //   [canvasGlobalState.sliderToggler]
  // );

  // const opacity = togglerValue.to([0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  /*
  JSX 
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <group
        ref={group}
        scale={[1, 1, 1]}
        name="GroupForContainerAbout"
        position={canvasGlobalState.aboutContainerPosition}
      >
        <Suspense fallback={null}>
          <Slider />
        </Suspense>

        {/* <a.mesh
          // ref={mesh}
          // position={[-0.4, 0, -0.4]}
          position-x={-0.4}
          position-z={-0.4}
          position-y={0}
          // scale={opacity}
          scale={1}

          // {...basicMove()} //doesn't work
        >
          <planeGeometry args={[0.5, 0.5, 1, 1]} />
          <a.meshBasicMaterial
            color={[1, 0.5, 0.5]}
            transparent
            opacity={opacity}
          />
        </a.mesh> */}
      </group>
    )
  );
};

export default ContainerAbout;
