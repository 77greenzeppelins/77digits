import React from 'react';
// import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextSlideFromArray from '../../textSlides/textSlideFromArray/TextSlideFromArray';
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
      {slides.map((slide, index) => {
        // if (slide.id === 1) {
        //   slide.font = 'jost';
        // }
        if (windowSize.width < 600 && slide.id === 2) {
          // console.log('size.width < 500', size.width);
          slide.textProps[2].position = slide.mobileVersion.webPosition;
          slide.textProps[3].position = slide.mobileVersion.developerPosition;
        }
        if (windowSize.width > 600 && slide.id === 2) {
          slide.textProps[2].position = [-0.5, -0.2, 0];
          slide.textProps[3].position = [0.15, -0.64, -0.65];
        }
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
