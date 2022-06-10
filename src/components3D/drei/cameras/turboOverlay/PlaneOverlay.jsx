import React from 'react';
import { useGesture } from '@use-gesture/react';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Section
*/
import { a, useSpring } from '@react-spring/three';
/*

*/
import { contAboutSlidesNumber } from '../../../../data/globalData';

/*
-----------------------------------------------------------------------------
*/
const PlaneOverlay = () => {
  /*
  Global State Section
  {sliderToggler:0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const [{ togglerValue }] = useSpring(
    () => ({
      togglerValue: canvasGlobalState.sliderToggler, //no need of : "? 1 : 0"
      config: { duration: 1000 },
    }),
    [canvasGlobalState.sliderToggler]
  );

  const opacity = togglerValue.to([0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  /*
  Gesture Section
  */
  const addEventHandlers = useGesture(
    {
      onDragEnd: ({ down, movement: [, movementY] }) => {
        if (
          !down &&
          movementY < 0 &&
          canvasGlobalState.containerAboutVisibleSlideIndex <
            contAboutSlidesNumber - 1
        ) {
          canvasState.containerAboutVisibleSlideIndex =
            canvasGlobalState.containerAboutVisibleSlideIndex + 1;
          canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
          // console.log('PlaneOverlay drag gesture / goUp = progress /');
        }
        if (
          !down &&
          movementY > 0 &&
          canvasGlobalState.containerAboutVisibleSlideIndex > 0
        ) {
          canvasState.containerAboutVisibleSlideIndex =
            canvasGlobalState.containerAboutVisibleSlideIndex - 1;
          canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
          // console.log('PlaneOverlay drag gesture / goUp = progress ');
        }
      },
      onWheelEnd: ({ active, direction: [, directionY] }) => {
        if (
          !active &&
          directionY === 1 &&
          canvasGlobalState.containerAboutVisibleSlideIndex <
            contAboutSlidesNumber - 1
        ) {
          canvasState.containerAboutVisibleSlideIndex =
            canvasGlobalState.containerAboutVisibleSlideIndex + 1;
          canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
          // console.log('PlaneOverlay wheel gesture / ');
        }

        if (
          !active &&
          directionY === -1 &&
          canvasGlobalState.containerAboutVisibleSlideIndex > 0
        ) {
          canvasState.containerAboutVisibleSlideIndex =
            canvasGlobalState.containerAboutVisibleSlideIndex - 1;
          canvasState.sliderToggler = Number(!canvasGlobalState.sliderToggler);
          // console.log('PlaneOverlay wheel gesture / ');
        }
      },
    },

    {
      /*
      config section
      */
      enabled:
        canvasGlobalState.currentContainer === 'aboutContainer' &&
        canvasGlobalState.sliderIsReady,
      drag: { axis: 'y' },
      wheel: { axis: 'y' },
    }
  );

  /*
  ...
  */
  // useEffect(() => {
  //   if (canvasGlobalState.currentContainer === 'aboutContainer') {
  //     console.log('PlaneOverlay / fake', fake);
  //     console.log('PlaneOverlay / mesh.current', mesh.current);
  //   }
  // }, [canvasGlobalState.currentContainer, turboOverlayOpacity, fake]);

  /*
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <a.mesh position={[0, 0, -0.11]} scale={1} {...addEventHandlers()}>
        <planeGeometry args={[0.5, 0.5, 1, 1]} />
        <a.meshBasicMaterial color={[0, 0, 0]} transparent opacity={opacity} />
      </a.mesh>
    )
  );
};

export default PlaneOverlay;

/*
  JSX creator

const createJSX = () => {
    return (
      canvasGlobalState.currentContainer === 'aboutContainer' && (
        <mesh
          position={[0, 0, -0.11]}
          //  rotation-z={fake}
        >
          <planeGeometry args={[0.05, 0.05, 1, 1]} />
          <meshBasicMaterial
            color={[0, springValue, 0]}
            transparent
            opacity={0.7}
            // opacity={turboOverlayOpacity}
          />
        </mesh>
      )
    );
  };


  */
