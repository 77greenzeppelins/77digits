import React from 'react';
/*
Components
*/
import Frame1 from '../../../_glbComponents/frame/Frame_1';
import ImageCanvas from '../../../_imageCanvas/ImageCanvas';
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
  raphaelPaintingConfig,
  raphaelPaintingLeftTextConfig,
} from '../raphaelSectionData';

const RaphaelPainting = () => {
  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [rotateWithMouseMove] = BasicMove({
    target: window,
    tileFactorX: raphaelPaintingConfig.gestureTillFactor,
    tileFactorY: raphaelPaintingConfig.gestureTillFactor,
  });

  /*
  JSX
  */
  return (
    <a.group
      {...raphaelPaintingConfig.groupProps}
      rotation={rotateWithMouseMove}
    >
      <Frame1 meshProps={{ scale: [0.66, 1, 0.65] }} />
      <ImageCanvas
        format={raphaelPaintingConfig.format}
        image={raphaelPaintingConfig.texture}
      />
      <DreiText textConfig={raphaelPaintingLeftTextConfig} />
    </a.group>
  );
};

export default RaphaelPainting;
