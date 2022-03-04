import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
/*
Drei Staff
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
/*
Three Staff
*/
import AnswerFrame from './AnswerFrame';
/*
Spring Staff
*/
import { useSpring, a } from '@react-spring/three';
/*
Global State Staff
*/
import { canvasState } from '../../../../states/canvasState';
// import { useSnapshot } from 'valtio';
/*
Accesibility staff
*/
// import { A11y } from '@react-three/a11y';
/*
Basic variables
*/
const [text1, topPositionY, reducePositionY] = [
  ['I want', 'to', 'take-off!'],
  0.06,
  0.06,
];

/*
------------------------------------------------------------------------------
*/
const AnswerYes = ({ groupProps, thisMatcapMaterial }) => {
  /*
  extracting data from useThree()
  */
  const { viewport } = useThree();
  /*
  Global State Section;
  canvasState = {..., isRaphaelMoving: 0, isPlatoAnswer: false,}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  Concept: animate scale of text to mimic "pulse"
  */
  const { scale } = useSpring({
    loop: { reverse: true },
    from: { scale: [1, 1, 1] },
    to: { scale: [0.7, 0.7, 0.7] },
    config: { duration: 5000 },
  });
  /*
  User Experience Section
  */
  const onClick = e => {
    /*
    opens TurboOverlay
    */
    canvasState.isTurboOverlayActive = 1;
    /*
    within setTimeout we want to set the camera
    */
    setTimeout(() => {
      canvasState.currentContainer = 'answerYesContainer';
      canvasState.isTurboOverlayActive = 0;
    }, 400);
  };

  /*
  JSX
  */
  return (
    <group {...groupProps} onClick={onClick}>
      <AnswerFrame
        coneMeshProps={{ position: [0.08, -0.1415, 0] }}
        thisMatcapMaterial={thisMatcapMaterial}
      />

      {/* <A11y
        role={canvasGlobalState.isYesNoButtonClickable ? 'button' : 'content'}
        description="Przenosi do nowej sekcji"
        actionCall={() => fakeOnClick()}
      > */}

      {/*-----Main Text: I want...----------------------------------*/}
      <a.group
        name="GroupForPlatoAnswerText"
        scale={scale}
        position={[0, 0, 0]}
        // scale={[0.9, 0.9, 0.9]}
      >
        {text1.map((line, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: [0, topPositionY - index * reducePositionY, 0],
              name: 'Text_IWantToTakeOff',
            }}
            text={line}
            fontResponsiveness={
              viewport.width < 3.0 ? 0.26 : viewport.width < 5.5 ? 0.038 : 0.048
            }
            whiteSpace="normal" //'normal' "nowrap
            maxWidth={viewport.width / 9}
          />
        ))}
      </a.group>
      {/* </A11y> */}

      {/*-----Side Text: click!----------------------------------*/}
      <TextVerse
        textProps={{
          position: [-0.125, 0, -0.11],
          rotation: [-Math.PI * 0.5, -Math.PI * 0.5, -Math.PI * 0.5],
          name: 'Text_Click!OnPlaton',
        }}
        text="click!"
        fontResponsiveness={
          viewport.width < 3.0 ? 0.28 : viewport.width < 5.5 ? 0.038 : 0.048
        }
        whiteSpace="normal"
        letterSpacing={0.1}
        maxWidth={viewport.width / 9}
      />
    </group>
  );
};

export default AnswerYes;

// const [{ scale }, api] = useSpring(() => ({
//   scale: [1, 1, 1],
//   // opacity: 1,
//   config: { duration: 5000 },
// }));
/*
  ...
  */
// useEffect(() => {
//   let timeout;
//   let pouse = false;
//   const bounce = () => {
//     api.start({
//       scale: [pouse ? 0.95 : 0.7, pouse ? 0.95 : 0.7, pouse ? 0.95 : 0.7],
//     });
//     pouse = !pouse;
//     timeout = setTimeout(bounce, 4000);
//   };
//   bounce();
//   return () => clearTimeout(timeout);
// }, [api]);
