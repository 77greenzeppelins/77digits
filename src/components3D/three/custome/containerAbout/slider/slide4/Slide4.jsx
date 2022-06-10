import React, { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Spring Staff
*/
import { a, config, useSpring } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/

const Slide4 = ({ slideId }) => {
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
  const springCondition =
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId;
  const [{ groupScale, groupPosition }] = useSpring(
    () => ({
      groupScale: springCondition ? 1 : 0,
      groupPosition: springCondition ? 0 : 0.1,

      //___
      config: springCondition ? config.molasses : { duration: 400 },
      delay: springCondition ? 150 : 0,
    }),
    [canvasGlobalState.containerAboutVisibleSlideIndex]
  );

  /*
  ...
  */
  const state = useThree();
  const someValueX = state.size.width * 0.0001;

  useEffect(() => {
    // console.log(
    //   'Slide1 / canvasGlobalState.containerAboutVisibleSlideIndex:',
    //   canvasGlobalState.containerAboutVisibleSlideIndex
    // );
    console.log('Slide4 / state.size.width:', state.size.width);
    console.log('Slide4 / someValueX:', someValueX);
  }, [state, someValueX]);

  /*
  JSX
  */
  return (
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId && (
      <a.group
      //    scale={groupScale} position-y={groupPosition}
      >
        <mesh
          //   position={[state.size.width * 0.0001, state.size.height * 0.0001, 0]}
          position={[0 - someValueX / 4, 0, 0.89999]}
        >
          <planeGeometry
            args={[0.01, 0.01, 2, 2]}
            // args={[0.25, 0.25, 2, 2]}
          />
          <meshBasicMaterial color={'#1A1A40'} />
        </mesh>
      </a.group>
    )
  );
};

export default Slide4;
