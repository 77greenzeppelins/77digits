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
            Section Pl
            */
            textLinesPl={slide.textLinesPl}
            textPropsPl={
              /*
              How logic of "textProps" works?
              First check if "file with data" has "textProps"; if not distinguished between two options, depending on mobile width...
              */
              slide.textPropsPl
                ? slide.textPropsPl
                : windowSize.width < 600
                ? slide.mobilePositionPl
                : slide.desktopPositionPl
            }
            fontPl={slide.fontPl}
            fontSizePl={slide.fontSizePl}
            letterSpacingPl={slide.letterSpacingPl}
            // textAlignPl={slide.textAlignPl}
            // textWidthFactorPl={slide.textWidthFactorPl}
            /*
            Section En
            */
            textLinesEn={slide.textLinesEn}
            textPropsEn={
              /*
              How logic of "textProps" works?
              First check if "file with data" has "textProps"; if not distinguished between two options, depending on mobile width...
              */
              slide.textPropsEn
                ? slide.textPropsEn
                : windowSize.width < 600
                ? slide.mobilePositionEn
                : slide.desktopPositionEn
            }
            //_____
            // textProps={slide.textProps}
            fontEn={slide.fontEn}
            fontSizeEn={slide.fontSizeEn}
            letterSpacingEn={slide.letterSpacingEn}
            // textAlignEn={slide.textAlignEn}
            // textWidthFactorEn={slide.textWidthFactorEn}
          />
        );
      })}
    </>
  );
};

export default TextSection;
