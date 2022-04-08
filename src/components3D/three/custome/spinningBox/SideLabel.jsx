import React from 'react';
/*
Components
*/
// import TextVerse from '../../../drei/text/textVerse/TextVerse';
import UniversalCanvasWithoutMap from '../matcapFrames/UniversalCanvasWithoutMap';
import UniversalCanvas from '../matcapFrames/UniversalCanvas';
import TextSlideFromArray from '../textSlides/textSlideFromArray/TextSlideFromArray';
import UniqueObject from '../containerAbout/uniqueObjects/UniqueObject';
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
        /*
        Props for Pl-version
        */
        textLinesPl={labelProps.textLinesPl}
        textPropsPl={
          /*
              How logic of "textProps" works?
              First check if "fileWithData.js" has "textProps"; if not distinguished between two options: mobile vs desktop; 
              we actually decide which "array" pass to <TextSideFromArray>
              */
          labelProps.textPropsPl
            ? labelProps.textPropsPl
            : windowSize.width < 600
            ? labelProps.mobilePositionPl
            : labelProps.desktopPositionPl
        }
        fontPl={labelProps.fontPl}
        fontSizePl={labelProps.fontSizePl}
        strokeWidthPl={labelProps.strokeWidthPl}
        letterSpacingPl={labelProps.letterSpacingPl}
        textAlignPl={labelProps.textAlignPl}
        /*
        "maxWidthFactorPl" depends on device width so a piece of logic is needed here; sililar to "textPropsPl";
        */
        maxWidthFactorPl={
          windowSize.width < 600
            ? labelProps.maxWidthFactorMobilePl
            : labelProps.maxWidthFactorDesktopPl
        }
        /*
        Props for En-version
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
        maxWidthFactorEn={
          windowSize.width < 600
            ? labelProps.maxWidthFactorMobileEn
            : labelProps.maxWidthFactorDesktopEn
        }
        strokeWidthEn={labelProps.strokeWidthEn}
      />
      {/*
    ..............
    */}
      {labelProps.canvasProps.image ? (
        <UniversalCanvas {...labelProps.canvasProps} />
      ) : (
        <UniversalCanvasWithoutMap format={labelProps.canvasProps.format} />
      )}

      {labelProps.uniqueObjectName && (
        <UniqueObject uniqueObject={labelProps.uniqueObjectName} />
      )}
    </group>
  );
};

export default SideLabel;

/*
<SideLabel
textProps={{ position: [0, 0, 0.365], rotation: [0, 0, 0] }}
/>
*/
