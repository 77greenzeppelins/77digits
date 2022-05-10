import React, { useRef } from 'react';
// import { useThree } from '@react-three/fiber';
/*
Components
*/
// import TextSlideFromArray from '../../textSlides/textSlideFromArray/TextSlideFromArray';
import DreiText from '../../../../drei/text/dreiText/DreiText';
/*
Global State Staff
*/
// import { canvasState } from '../../../../../states/canvasState';
// import { useSnapshot } from 'valtio';
/*
Hook Staff
*/
// import useWindowSize from '../../../../../hooks/useWindowSize';
/*
Basic Data
*/
import slides from './textSectionData';

const TextSection = () => {
  /*
  Reference
  */
  const group = useRef();
  /*
  Global State Section
  canvasState={languageVersion,...}
  */
  // const canvasGlobalState = useSnapshot(canvasState);

  /*
  JSX
  */
  return (
    <>
      {slides.map(slide => (
        <group
          ref={group}
          name="groupForFrazeInTextSection"
          key={slide.id}
          {...slide.groupProps}
        >
          {slide.words.map((word, index) => {
            return <DreiText key={index} textConfig={word} />;
          })}
        </group>
      ))}
    </>
  );
};

export default TextSection;
