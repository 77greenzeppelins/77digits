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
        JSX
        */
        return (
          <TextSlideFromArray
            key={slide.groupProps.name}
            groupProps={slide.groupProps}
            /*
            How logic of "textProps" works?
            First check if "file with data" has "textProps"; if not distinguished between two options, depending on mobile width...
            */
            textProps={
              slide.textProps
                ? slide.textProps
                : windowSize.width < 600
                ? slide.mobilePosition
                : slide.desktopPosition
            }
            //_____
            // textProps={slide.textProps}
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
