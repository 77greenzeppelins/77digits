import React from 'react';
/*
Components
*/
import DialogCloud from '../../../_glbComponents/dialogCloud/DialogCloud';
import DreiText from '../../../../../drei/text/dreiText/DreiText';
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
  philosophersAnswersConfig,
  PlatonAnswerGroup,
  PlatoAnswerTextConfig,
  AristotlesAnswerGroup,
  AristotlesTextConfig,
} from '../raphaelSectionData';

const PhilosophersAnswers = () => {
  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [rotateWithMouseMove] = BasicMove({
    initialRotateValue: philosophersAnswersConfig.groupProps.rotation,
    target: window,
    tileFactorX: philosophersAnswersConfig.tillFactor,
    tileFactorY: philosophersAnswersConfig.tillFactor,
  });
  /*
  JSX
  */
  return (
    <a.group
      {...philosophersAnswersConfig.groupProps}
      rotation={rotateWithMouseMove}
    >
      {/*-----Plato Answer-------------------------------------------*/}
      <group {...PlatonAnswerGroup.groupProps}>
        <DialogCloud
          meshProps={{
            position: [-0, -0.1, 0],
            rotation: [0.5 * Math.PI, 0, 0],
            scale: [0.33, 0.33, 0.33],
          }}
        />
        <DreiText textConfig={PlatoAnswerTextConfig} />
      </group>

      {/*-----Aristotles Answer-------------------------------------*/}
      <group {...AristotlesAnswerGroup.groupProps}>
        <DialogCloud
          meshProps={{
            position: [-0, -0.1, 0],
            rotation: [0.5 * Math.PI, 0, 1 * Math.PI],
            scale: [0.33, 0.33, 0.33],
          }}
        />

        <DreiText textConfig={AristotlesTextConfig} />
        {/* <mesh {...AristotlesCone.meshProps}>
          <coneGeometry args={AristotlesCone.args} />
          <BasicUseMatcapTexture />
        </mesh> */}
      </group>
    </a.group>
  );
};

export default PhilosophersAnswers;
