import React from 'react';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
// import UniversalCanvas from '../../../matcapFrames/UniversalCanvas';
import TextSlide from '../../../textSlides/textSlide/TextSlide';
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
  PlatoAnswer,
  PlatoAnswerText,
  AristotlesAnswer,
  AristotlesAnswerText,
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
      <UniversalFrame
        format={PlatoAnswer.format}
        groupProps={PlatoAnswer.groupProps}
      />
      <TextSlide
        groupProps={PlatoAnswerText.groupProps}
        fontSize={PlatoAnswerText.fontSize}
        textAlign={PlatoAnswerText.textAlign}
        textLinePl={PlatoAnswerText.textLinePl}
        textLineEn={PlatoAnswerText.textLineEn}
        textWidthFactor={PlatoAnswerText.textWidthFactor}
      />

      {/*-----Aristotles Answer-------------------------------------*/}
      <UniversalFrame
        format={AristotlesAnswer.format}
        groupProps={AristotlesAnswer.groupProps}
      />
    </a.group>
  );
};

export default PhilosophersAnswers;
