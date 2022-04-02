import React from 'react';
/*
Components
*/
// import TextVerse from '../../../drei/text/textVerse/TextVerse';
import UniversalCanvasWithoutMap from '../matcapFrames/UniversalCanvasWithoutMap';
import TextSlideFromArray from '../textSlides/textSlideFromArray/TextSlideFromArray';
/*
Hook Staff
*/
import useWindowSize from '../../../../hooks/useWindowSize';

/*
----------------------------------------------------------------------------
*/
const SideLabel = ({ labelProps }) => {
  /*
  Hook size
  */
  const windowSize = useWindowSize();
  /*
  JSX
  */
  return (
    <group rotation={[0, 0, 0]}>
      <TextSlideFromArray
        // key={labelProps.groupProps.name}
        // groupProps={labelProps.groupProps}
        /*
        Section Pl
        */
        textLinesPl={labelProps.textLinesPl}
        textPropsPl={
          /*
              How logic of "textProps" works?
              First check if "file with data" has "textProps"; if not distinguished between two options, depending on mobile width...
              */
          labelProps.textPropsPl
            ? labelProps.textPropsPl
            : windowSize.width < 600
            ? labelProps.mobilePositionPl
            : labelProps.desktopPositionPl
        }
        fontPl={labelProps.fontPl}
        fontSizePl={labelProps.fontSizePl}
        letterSpacingPl={labelProps.letterSpacingPl}
        textAlignPl={labelProps.textAlignPl}
        textWidthFactorPl={labelProps.textWidthFactorPl}
        /*
        Section En
        */
        textLinesEn={labelProps.textLinesEn}
        textPropsEn={
          /*
          How logic of "textProps" works?
          First check if "file with data" has "textProps"; if not distinguished between two options, depending on mobile width...
          */
          labelProps.textPropsEn
            ? labelProps.textPropsEn
            : windowSize.width < 600
            ? labelProps.mobilePositionEn
            : labelProps.desktopPositionEn
        }
        fontEn={labelProps.fontEn}
        fontSizeEn={labelProps.fontSizeEn}
        letterSpacingEn={labelProps.letterSpacingEn}
        textAlignEn={labelProps.textAlignEn}
        textWidthFactorEn={labelProps.textWidthFactorEn}
      />
      {/* <TextVerse
        // textProps={{ position: [0, 0, 0.015] }}
        textProps={{ position: labelProps.textPosition }}
        text={labelProps.text}
        font={labelProps.font}
        fontResponsiveness={
          viewport.width < 3.0
            ? labelProps.fontSizes.fontSmall
            : viewport.width < 5.5
            ? labelProps.fontSizes.fontMedium
            : labelProps.fontSizes.fontLarge
        }
        textAlign={labelProps.textAlign}
        whiteSpace={labelProps.whiteSpace}
        maxWidth={viewport.width * labelProps.MaxWidthFactor}
      /> */}
      <UniversalCanvasWithoutMap format={labelProps.format} />
    </group>
  );
};

export default SideLabel;

/*
<SideLabel
textProps={{ position: [0, 0, 0.365], rotation: [0, 0, 0] }}
/>
*/
