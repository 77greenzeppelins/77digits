import React from 'react';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../../matcapFrames/UniversalCanvas';
import TextSlide from '../../../textSlides/textSlide/TextSlide';
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
Accesibility staff
*/
// import { A11y } from '@react-three/a11y';
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
    tileFactor: raphaelPaintingConfig.gestureTillFactor,
  });

  /*
  JSX
  */
  return (
    <a.group
      {...raphaelPaintingConfig.groupProps}
      rotation={rotateWithMouseMove}
    >
      <UniversalFrame format={raphaelPaintingConfig.format} />
      {/* <A11y role="image" description="Raphael. The School of Athens "> */}
      <UniversalCanvas
        format={raphaelPaintingConfig.format}
        image={raphaelPaintingConfig.texture}
      />
      <DreiText textConfig={raphaelPaintingLeftTextConfig} />
    </a.group>
  );
};

export default RaphaelPainting;
