import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import InstantContactButton from '../../instantContactButton/InstantContactButton';
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
Basic Data
*/
import {
  springData,
  InstantContactButtonPhone,
  InstantContactButtonEmail,
} from './instantContactsSectionData';

/*
---------------------------------------------------------------------------
*/
const InstantContactsSection = () => {
  /*
  References
  */
  const phoneButton = useRef();
  const emailButton = useRef();

  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

  /*
  Spring Section
  */
  const spring = useSpring({
    from: { position: springData.startingPosition },
    to: { position: springData.endingPosition },
    config: config.molasses,
    delay: springData.delay,
  });
  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (canvasGlobalState.currentContainer === 'menuContainer') {
      phoneButton.current.rotation.y = Math.cos(time * 0.4) * 0.4;
      phoneButton.current.rotation.z = Math.sin(time * 0.4) * 0.1;
      emailButton.current.rotation.y = -Math.cos(time * 0.4) * 0.4;
      emailButton.current.rotation.z = -Math.sin(time * 0.4) * 0.1;
    }
  });
  /*
  JSX
  */
  return (
    <a.group position={spring.position}>
      {/*-----Phone Button------------------------------------------*/}
      <InstantContactButton
        ref={phoneButton}
        groupProps={InstantContactButtonPhone.groupProps}
        canvasProps={InstantContactButtonPhone.canvasProps}
        frameProps={InstantContactButtonPhone.frameProps}
      />
      {/*-----Email Button------------------------------------------*/}
      <InstantContactButton
        ref={emailButton}
        groupProps={InstantContactButtonEmail.groupProps}
        canvasProps={InstantContactButtonEmail.canvasProps}
        frameProps={InstantContactButtonEmail.frameProps}
      />
    </a.group>
  );
};

export default InstantContactsSection;
