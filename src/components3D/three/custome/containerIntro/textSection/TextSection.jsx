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
        /*
        additional styling for second slide
        */
        if (windowSize.width < 600 && slide.id === 2) {
          // console.log('size.width < 500', size.width);
          slide.textProps[2].position = slide.mobileVersion.webPosition;
          slide.textProps[3].position = slide.mobileVersion.developerPosition;
        }
        if (windowSize.width > 600 && slide.id === 2) {
          slide.textProps[2].position = slide.desktopVersion.webPosition;
          slide.textProps[3].position = slide.desktopVersion.developerPosition;
        }
        /*
        additional styling for thirt slide
        */
        if (windowSize.width < 600 && slide.id === 3) {
          // console.log('size.width < 500', size.width);
          slide.textProps[2].position = slide.mobileVersion.wyrafiPosition;
          slide.textProps[3].position = slide.mobileVersion.nowanyPosition;
        }
        if (windowSize.width > 600 && slide.id === 3) {
          slide.textProps[2].position = slide.desktopVersion.wyrafiPosition;
          slide.textProps[3].position = slide.desktopVersion.nowanyPosition;
        }

        /*
        JSX
        */
        return (
          <TextSlideFromArray
            key={slide.groupProps.name}
            groupProps={slide.groupProps}
            textProps={slide.textProps}
            font={slide.font}
            fontSize={slide.fontSize}
            letterSpacing={slide.letterSpacing}
            textAlign={slide.textAlign}
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
