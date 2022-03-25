import React from 'react';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
// import UniversalCanvas from '../../../matcapFrames/UniversalCanvas';
import TextSlide from '../../../textSlides/textSlide/TextSlide';
import BasicUseMatcapTexture from '../../../matcapMaterials/BasicUseMatcapTexture';
/*
GestureStaff
*/
import BasicMove from '../../../../../../gestureHandlers/useMove/basicMove';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
/*
Basic Data
*/
import {
  philosophersAnswers,
  philosophersAnswersGesture,
  PlatonAnswerGroup,
  PlatoAnswerFrame,
  PlatoAnswerText,
  PlatoCone,
  AristotlesAnswerGroup,
  AristotlesAnswer,
  // AristotlesAnswerText,
  AristotlesCone,
} from '../raphaelSectionData';

const PhilosophersAnswers = () => {
  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [rotateWithMouseMove] = BasicMove({
    target: window,
    tileFactor: philosophersAnswersGesture.tillFactor,
  });
  /*
  JSX
  */
  return (
    <a.group {...philosophersAnswers.groupProps} rotation={rotateWithMouseMove}>
      {/*-----Plato Answer-------------------------------------------*/}
      <group {...PlatonAnswerGroup.groupProps}>
        <UniversalFrame
          format={PlatoAnswerFrame.format}
          groupProps={PlatoAnswerFrame.groupProps}
        />
        <TextSlide
          groupProps={PlatoAnswerText.groupProps}
          fontSize={PlatoAnswerText.fontSize}
          textAlign={PlatoAnswerText.textAlign}
          textLinePl={PlatoAnswerText.textLinePl}
          textLineEn={PlatoAnswerText.textLineEn}
          textWidthFactor={PlatoAnswerText.textWidthFactor}
        />
        <mesh {...PlatoCone.meshProps}>
          <coneGeometry args={PlatoCone.args} />
          <BasicUseMatcapTexture />
        </mesh>
      </group>

      {/*-----Aristotles Answer-------------------------------------*/}
      <group {...AristotlesAnswerGroup.groupProps}>
        <UniversalFrame
          format={AristotlesAnswer.format}
          groupProps={AristotlesAnswer.groupProps}
        />
        <mesh {...AristotlesCone.meshProps}>
          <coneGeometry args={AristotlesCone.args} />
          <BasicUseMatcapTexture />
        </mesh>
      </group>
    </a.group>
  );
};

export default PhilosophersAnswers;
