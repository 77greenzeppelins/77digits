import React from 'react';
// import { useThree } from '@react-three/fiber';
/*
Components
*/
// import TextSlideFromArray from '../../textSlides/textSlideFromArray/TextSlideFromArray';
import DreiText from '../../../../drei/text/dreiText/DreiText';
/*
Hook Staff
*/
import useWindowSize from '../../../../../hooks/useWindowSize';
/*
Basic Data
*/
import slides from './textSectionData';

const TextSection = () => {
  /*
  Hook size
  */
  const windowSize = useWindowSize();
  /*
  useThree Section
  */
  // const { size } = useThree();
  /*
  JSX
  */
  return (
    <>
      {slides.map(slide => (
        <group key={slide.id} {...slide.groupProps}>
          {slide.words.map((word, index) => (
            <DreiText key={index} textConfig={word} />
          ))}
        </group>
      ))}
    </>
  );
};

export default TextSection;
