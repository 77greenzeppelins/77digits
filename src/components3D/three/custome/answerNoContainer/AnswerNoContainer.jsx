import React from 'react';
// import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Components
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
// import Chapter1 from './Chapter1';
/*
Accesibility staff
*/
import { A11y } from '@react-three/a11y';

const AnswerNoContainer = () => {
  /*
  useThree Section
  */
  const { viewport } = useThree();
  /*
  Global State Section
  canvasState = {...,is77digitsButtonActive: 0, isCameraOverlayActive: false}
 */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  User Experience Section
  */
  const onClick = () => {
    canvasState.isTurboOverlayActive = 1;

    setTimeout(() => {
      canvasState.currentSection = 'initialSection';
      canvasState.isTurboOverlayActive = 0;
    }, 400);
  };

  /*
 JSX
 */
  return (
    // canvasGlobalState.isTurboOverlayActive === 0 && (
    <group
      name="AnswerNoSection"
      position={canvasGlobalState.answerNoContainerPosition}
    >
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color={[1, 0, 0]} />
      </mesh>

      <A11y
        role="button"
        description="Przenosi do poprzedniej sekcji"
        actionCall={() => onClick()}
      >
        <TextVerse
          textProps={{
            position: [0, 0, 0.5],
          }}
          text="powrót z AnswerNoSection"
          font="garamont"
          fontResponsiveness={
            viewport.width < 3.0 ? 0.025 : viewport.width < 5.5 ? 0.03 : 0.035
          }
          whiteSpace="normal" //'normal' "nowrap"
          materialProps={{ color: [0, 0, 1] }}
        />
      </A11y>
    </group>
    // )
  );
};

export default AnswerNoContainer;
