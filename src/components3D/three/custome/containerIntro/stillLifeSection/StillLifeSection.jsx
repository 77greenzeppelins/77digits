import React from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
import TextSlideFromArray from '../../textSlides/textSlideFromArray/TextSlideFromArray';
/*
Hook Staff
*/
import useWindowSize from '../../../../../hooks/useWindowSize';
/*
Basic Data
*/
import { paintingData, textProps } from './stillLifeSectionData';

const StillLifeSection = () => {
  /*
  Hook section
  */
  const windowSize = useWindowSize();
  const groupProps =
    windowSize.width < 600
      ? { ...paintingData.mobileGroupProps }
      : { ...paintingData.desktopGroupProps };
  /*
  JSX
  */
  return (
    <group {...groupProps}>
      {/* <UniversalFrame {...paintingData.frameProps} /> */}
      <UniversalCanvas {...paintingData.canvasProps} />

      <group>
        <TextSlideFromArray
          /*
          Props for Pl-version
          */
          textLinesPl={textProps.textLinesPl}
          textPropsPl={
            /*
              How logic of "textProps" works?
              First check if "fileWithData.js" has "textProps"; if not distinguished between two options: mobile vs desktop; 
              we actually decide which "array" pass to <TextSideFromArray>
              */
            textProps.textPropsPl
              ? textProps.textPropsPl
              : windowSize.width < 600
              ? textProps.mobilePositionPl
              : textProps.desktopPositionPl
          }
          fontPl={textProps.fontPl}
          fontSizePl={textProps.fontSizePl}
          strokeWidthPl={textProps.strokeWidthPl}
          letterSpacingPl={textProps.letterSpacingPl}
          textAlignPl={textProps.textAlignPl}
          /*
          "maxWidthFactorPl" depends on device width so a piece of logic is needed here; sililar to "textPropsPl";
          */
          maxWidthFactorPl={
            windowSize.width < 600
              ? textProps.maxWidthFactorMobilePl
              : textProps.maxWidthFactorDesktopPl
          }
          /*
          Props for En-version
          */
          textLinesEn={textProps.textLinesEn}
          textPropsEn={
            /*
            How logic of "textProps" works?
            First check if "file with data" has "textProps"; if not distinguished between two options, depending on mobile width...
            */
            textProps.textPropsEn
              ? textProps.textPropsEn
              : windowSize.width < 600
              ? textProps.mobilePositionEn
              : textProps.desktopPositionEn
          }
          fontEn={textProps.fontEn}
          fontSizeEn={textProps.fontSizeEn}
          letterSpacingEn={textProps.letterSpacingEn}
          // textAlignEn={textProps.textAlignEn}
          // maxWidthFactorEn={
          //   windowSize.width < 600
          //     ? textProps.maxWidthFactorMobileEn
          //     : textProps.maxWidthFactorDesktopEn
          // }
          strokeWidthEn={textProps.strokeWidthEn}
        />
      </group>
    </group>
  );
};

export default StillLifeSection;
