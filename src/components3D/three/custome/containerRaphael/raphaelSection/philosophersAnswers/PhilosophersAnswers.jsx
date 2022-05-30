import React from 'react';
/*
Components
*/
import DialogCloud from '../../../_glbComponents/dialogCloud/DialogCloud';
// import UniversalFrame from '../../../matcapFrames/UniversalFrame';
// import BasicUseMatcapTexture from '../../../matcapMaterials/BasicUseMatcapTexture';
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
  // PlatoAnswerFrame,
  PlatoAnswerTextConfig,
  // PlatoCone,
  AristotlesAnswerGroup,
  // AristotlesAnswer,
  AristotlesTextConfig,
  // AristotlesCone,
} from '../raphaelSectionData';

const PhilosophersAnswers = () => {
  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [rotateWithMouseMove] = BasicMove({
    initialRotateValue: philosophersAnswersConfig.groupProps.rotation,
    target: window,
    tileFactor: philosophersAnswersConfig.tillFactor,
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
        {/* <UniversalFrame
          format={PlatoAnswerFrame.format}
          groupProps={PlatoAnswerFrame.groupProps}
        /> */}
        <DreiText textConfig={PlatoAnswerTextConfig} />
        {/* <mesh {...PlatoCone.meshProps}>
          <coneGeometry args={PlatoCone.args} />
          <BasicUseMatcapTexture />
        </mesh> */}
      </group>

      {/*-----Aristotles Answer-------------------------------------*/}
      <group {...AristotlesAnswerGroup.groupProps}>
        {/* <UniversalFrame
          format={AristotlesAnswer.format}
          groupProps={AristotlesAnswer.groupProps}
        /> */}
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
