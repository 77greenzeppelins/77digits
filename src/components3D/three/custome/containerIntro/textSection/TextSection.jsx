import React from 'react';
/*
Components
*/
import TextSlideFromArray from '../../textSlides/textSlideFromArray/TextSlideFromArray';
/*
Basic Data
*/
import slides from './textSectionData';

const TextSection = () => {
  /*
  JSX
  */
  return (
    <>
      {slides.map(slide => {
        return (
          <TextSlideFromArray
            key={slide.groupProps.name}
            groupProps={slide.groupProps}
            textProps={slide.textProps}
            font={slide.font}
            fontSize={slide.fontSize}
            textLinesPl={slide.textLinesPl}
            textLinesEn={slide.textLinesEn}
            textWidthFactor={slide.textWidthFactor}
          />
        );
      })}
    </>
  );
};

export default TextSection;
