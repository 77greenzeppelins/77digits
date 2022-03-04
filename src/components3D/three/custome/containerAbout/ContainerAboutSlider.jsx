import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
/*
Components
*/
// import ContainerAboutSlide from './ContainerAboutSlide';
import ContainerAboutSlide1 from './ContainerAboutSlide_1';
import ContainerAboutSlide2 from './ContainerAboutSlide_2';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Stuff
*/
import { a, useSpring } from '@react-spring/three';
/*
Basic Data
Each Slide has its own position on z-axis and is "still" i.e. doesn't move
It is "Slider" that move on z-axis forward / backward
iF 
*/
const factorPositionZ = 2;
/*
Important: within slider individual <ContainerAboutSlider> have to be position from 0 to -8 i.e we create "depth" of slider; then we  re-position slider itself in "positive" direction from 0 to 8 i.e. it goes towards user eyes / face !!!
*/
// const slidesArray = [
//   {
//     id: 0,
//     text: [
//       'Zacznijmy od prostego równania',
//       'Twój',
//       'potencjał',
//       'Mój',
//       'potencjał',
//       'Synergia',
//     ],
//     position: [0, 0, 0],
//   },
// { id: 1, text: 'slide 2', position: [0, 0, -factorPositionZ * 1] },
// { id: 2, text: 'slide 3', position: [0, 0, -factorPositionZ * 2] },
// { id: 3, text: 'slide 4', position: [0, 0, -factorPositionZ * 3] },
// { id: 4, text: 'slide 5', position: [0, 0, -factorPositionZ * 4] },
// ];
/*
These factors allowes to mimic html/css responsiveness
*/
const [paragrafMobile, paragraphDesktop] = [0.17, 1.5];

/*
------------------------------------------------------------------------
*/
const ContainerAboutSlider = ({ groupProps }) => {
  /*
  Global State Section
  canvasState = {...,containerAboutSlideIndex: 0, containerAboutSlidingDirection:'none}
 */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
useThree Section
*/
  const { viewport, size } = useThree();
  /*
  Spring Section
  This spring moves slider on z-axis so that user have an experience of text that that glides towards his/hes face;  
  */
  const { positionZ } = useSpring({
    /*
    value of "from" is 0; 
    */
    from: {
      positionZ: 0,
    },
    to: {
      positionZ:
        canvasGlobalState.containerAboutSlidingDirection === 'forward'
          ? canvasGlobalState.containerAboutSlideIndex * factorPositionZ
          : canvasGlobalState.containerAboutSlideIndex * factorPositionZ,
    },
    config: {
      duration: 1000,
      // easing: easings.easeInOutQuart,
    },
  });
  /*
    Reusable 3D Staff
    It should be used in place we execute array.map()
    */
  const geometry = useMemo(
    () =>
      new THREE.PlaneGeometry(
        size.width < 1000 ? viewport.width * paragrafMobile : paragraphDesktop,
        viewport.height * 0.15
      ),
    [size.width, viewport.width, viewport.height]
  );
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        // color: new THREE.Color().setHSL(0.1, 0.5, 0.3 * 0.5),
        // color: new THREE.Color(0x222222),
        color: 0x222255,
        wireframe: true,
      }),
    []
  );
  const thisMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: 0x0a0a0a,
        wireframe: true,
      }),
    []
  );

  /*
  useEffect Tests Section
  */
  // useEffect(() => {
  //   console.log(
  //     '<ContainerAboutSlider> / canvasGlobalState.containerAboutSlideIndex:',
  //     canvasGlobalState.containerAboutSlideIndex
  //   );
  //   console.log(
  //     '<ContainerAboutSlider> / canvasGlobalState.containerAboutSlidingDirection:',
  //     canvasGlobalState.containerAboutSlidingDirection
  //   );
  // }, [
  //   canvasGlobalState.containerAboutSlideIndex,
  //   canvasGlobalState.containerAboutSlidingDirection,
  // ]);

  /*
  JSX
  */
  return (
    <a.group
      // {...groupProps}
      position-z={
        canvasGlobalState.containerAboutSlidingDirection === 'none'
          ? 0
          : positionZ
      }
      name="GroupForContainerAboutSlider"
    >
      <ContainerAboutSlide1
        groupProps={{
          position: [0, 0, 0],
          name: 'GroupForContainerAboutSlide_1',
        }}
        geometry={geometry}
        // thisMaterial={thisMaterial}
        thisMaterial={material}
      />
      <ContainerAboutSlide2
        groupProps={{
          position: [0, 0, -2],
          name: 'GroupForContainerAboutSlide_2',
        }}
        geometry={geometry}
        // thisMaterial={thisMaterial}
        thisMaterial={material}
      />
    </a.group>
  );
};

export default ContainerAboutSlider;
