import React from 'react';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../../matcapFrames/UniversalCanvas';
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
Accesibility staff
*/
// import { A11y } from '@react-three/a11y';
/*
Basic Data
*/
import {
  raphaelPaintingData,
  raphaelPaintingGesture,
  raphaelPaintingLeftText,
} from '../raphaelSectionData';

const RaphaelPainting = () => {
  /*
  Gesture Section
  this animation effects group for <AnsverYes> & <AnswerNo> to imitate some mouse move
  */
  const [rotateWithMouseMove] = BasicMove({
    target: window,
    tileFactor: raphaelPaintingGesture.tillFactor,
  });

  /*
  JSX
  */
  return (
    <a.group {...raphaelPaintingData.groupProps} rotation={rotateWithMouseMove}>
      <UniversalFrame format={raphaelPaintingData.format} />
      {/* <A11y role="image" description="Raphael. The School of Athens "> */}
      <UniversalCanvas
        format={raphaelPaintingData.format}
        image={raphaelPaintingData.texture}
      />
      {/* </A11y> */}
      <TextSlide
        groupProps={raphaelPaintingLeftText.groupProps}
        fontSize={raphaelPaintingLeftText.fontSize}
        textLinePl={raphaelPaintingLeftText.textLinePl}
        textLineEn={raphaelPaintingLeftText.textLineEn}
        textOrientation={raphaelPaintingLeftText.textOrientation}
        textWidthFactor={raphaelPaintingLeftText.textWidthFactor}
        // thisLetterSpacing={venusSideLeftText}
        // thisWhiteSpace={venusSideLeftText}
      />
    </a.group>
  );
};

export default RaphaelPainting;
