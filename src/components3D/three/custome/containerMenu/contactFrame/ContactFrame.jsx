import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
/*
Drai Staff
*/
import TextVerse from '../../../../drei/text/textVerse/TextVerse';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Basic Data
*/
const [fontSmall, fontMiddle, fontLarge] = [0.09, 0.1, 0.11];

/*
---------------------------------------------------------------------------
*/
const ContactFrame = ({ groupProps, iconText, iconType }) => {
  /*
  References
  */
  const mainGroup = useRef();
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  extracting data from useThree()
  */
  const { viewport } = useThree();
  /*
  Animation in useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    /*
    Why two conditions?
    I don't want it works when user is in other containers
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
    <group ref={mainGroup} {...groupProps}>
      <UniversalFrame
        groupProps={{ name: 'groupForMediumFrame' }}
        portrait={true}
      />

      <group
        name="GroupForTextInContactFrame"
        // position={[-0.5, 0, -0.18]}
        // rotation={[-Math.PI * 0.5, -Math.PI * 0.5, -Math.PI * 0.5]}
      >
        {iconText.map(({ line, position }, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: position,
              name: 'Text_ScrollOnDesktop',
            }}
            text={line}
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSmall
                : viewport.width < 5.5
                ? fontMiddle
                : fontLarge
            }
            letterSpacing={0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            textAlign="left"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>
    </group>
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
