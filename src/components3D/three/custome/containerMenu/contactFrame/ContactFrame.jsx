import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring data
*/
import { a, useSpring, config } from '@react-spring/three';

/*
---------------------------------------------------------------------------
*/
const ContactFrame = ({ groupProps, iconType, image }) => {
  /*
   */
  const { position, scale } = groupProps;
  /*
  References
  */
  const mainGroup = useRef();
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  I've faced some issues...after the very first click it behavied differently then after clicking from various contaoiner;
  solution: in <ContainerMenu> I used conditional rendering based on two condition i.e not solely on "isMobileOnly" as I did initially;
  */
  const spring = useSpring({
    from: { animatedPosition: [position[0], -2, position[2]] },
    to: {
      animatedPosition: [position[0], position[1], position[2]],
    },
    config: config.molasses,
    delay: 200,
    // pouse:
    //   canvasGlobalState.currentContainer === 'menuContainer' ? false : true,
  });
  /*
  Animation in useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    /*
    Why two conditions in "if statement" ?
    I don't want any animation/rotation when user is in any other container;
    */
    if (
      iconType === 'iconMobile' &&
      canvasGlobalState.currentContainer === 'menuContainer'
    ) {
      mainGroup.current.rotation.y = Math.cos(time * 0.4) * 0.4;
      mainGroup.current.rotation.z = Math.sin(time * 0.4) * 0.1;
    }
    if (
      iconType === 'iconEmail' &&
      canvasGlobalState.currentContainer === 'menuContainer'
    ) {
      mainGroup.current.rotation.y = -Math.cos(time * 0.4) * 0.4;
      mainGroup.current.rotation.z = -Math.sin(time * 0.4) * 0.1;
    }
  });

  /*
  JSX
  */
  return (
    <a.group
      ref={mainGroup}
      position={spring.animatedPosition}
      // position={animatedPosition}
      scale={scale}
    >
      <UniversalFrame
        groupProps={{ name: 'groupForMediumFrame' }}
        portrait={true}
        format="portrait"
      />
      <UniversalCanvas
        // meshProps={{}}
        portrait={true}
        format="portrait"
        image={image}
      />
    </a.group>
  );
};

export default ContactFrame;

/*
<ContactFrame
        groupProps={{
          name: 'GroupForLogoInFrame',
          position: [-0.2, -0.67, -0.4],
          scale: [0.5, 0.5, 0.5],
          rotation: [0, Math.PI * 0.15, 0],
          // position: [0, 0, 0],
          // scale: [1, 1, 1],
        }}
/>

*/
