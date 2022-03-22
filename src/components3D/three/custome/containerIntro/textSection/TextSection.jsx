import React from 'react';
/*
Components
*/
import TextSlide from './textSlide/TextSlide';
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
        return <TextSlide key={slide.groupProps.name} data={slide} />;
      })}
    </>
  );
};

export default TextSection;
