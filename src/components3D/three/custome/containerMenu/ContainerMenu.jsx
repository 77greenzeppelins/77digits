import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useThree } from '@react-three/fiber';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import ContactFrame from './contactFrame/ContactFrame';
/*
react-device-detect Staff
*/
import { isMobileOnly } from 'react-device-detect';
/*
HOOK
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
Assets
*/
import phone from '../../../../assets/textures/containerMenu_phone_1.png';
import email from '../../../../assets/textures/containerMenu_letter_3.png';

/*
------------------------------------------------------------------------
*/
const ContainerMenu = () => {
  /*
  References
  */
  const geometry = useRef();
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useThree Section
  */
  const { viewport } = useThree();
  /*
  Basic Data
  Configuration Objects for particular contactFrames
  */
  const contactFrames = [
    {
      iconType: 'iconMobile',
      image: phone,
      groupProps: {
        name: 'GroupForLogoInFrame',
        position: [0.2, -0.55, 0.1],
        scale: [0.4, 0.4, 0.4],
      },
    },
    {
      iconType: 'iconEmail',
      image: email,
      groupProps: {
        position: [-0.2, -0.55, 0.1],
        scale: [0.4, 0.4, 0.4],
      },
    },
  ];
  /*
  useEffect Section
  */
  // useEffect(() => {
  //   setMobile(isMobileOnly);
  //   console.log('isMobileOnly:', isMobileOnly);
  //   console.log('mobile:', mobile);
  // }, [windowSize, mobile]);

  /*
 JSX
 */
  return isMobileOnly &&
    canvasGlobalState.currentContainer === 'menuContainer' ? (
    <group
      name="BasicGroupOfMenuContainerMobile"
      position={canvasGlobalState.menuContainerPosition}
    >
      {contactFrames.map(({ iconType, image, groupProps }) => (
        <Suspense fallback={null} key={image}>
          <ContactFrame
            groupProps={groupProps}
            iconType={iconType}
            image={image}
          />
        </Suspense>
      ))}

      <mesh position={[0, 0, 0]}>
        <planeGeometry
          ref={geometry}
          //  {...planeArgs}
          args={[viewport.width * 0.25, viewport.height * 0.25, 1, 1]}
          // args={[1, 1, 1, 1]}
          // args={[2, 2, 1, 1]}
          // args={[size.width * 0.002, size.height * 0.002, 1, 1]}
          // args={[size.width < 1000 ? viewport.width * desktopWidthFactor : mobileWidthFactor,
          // viewport.height * highFactor, 128, 128]}
          // args={[ viewport.width * widthFactor ,
          // viewport.height * highFactor, 128, 128]}
        />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
    </group>
  ) : // <group
  //   name="BasicGroupOfMenuContainerNoMobile"
  //   position={canvasGlobalState.menuContainerPosition}
  // ></group>
  null;
};

export default ContainerMenu;
