import React from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../../drei/text/textVerse/TextVerse';
/*
Global state
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Accesibility staff
*/
import { A11y } from '@react-three/a11y';

/*
-----------------------------------------------------------------------
*/
const TextSlide = ({
  groupProps,
  textProps,
  font, //options: "garamont", "jost"; default "jost"
  fontSize,
  textLinePl,
  textLineEn,
  thisLetterSpacing,
  lineHeight,
  thisWhiteSpace,
  textAlign,
  /*
  both props important for counting "maxWidth"
  */
  textOrientation,
  textWidthFactor,
  textWidthValue,
  strokeWidth,
}) => {
  /*
  Global State Section
  canvasState={languageVersion: 'pl',...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useThree() Staff
  */
  const { viewport } = useThree();

  /*
  JSX
  */
  return canvasGlobalState.languageVersion === 1 ? (
    <A11y role="content" description={textLinePl}>
      <group {...groupProps}>
        <TextVerse
          textProps={textProps}
          text={textLinePl}
          font={font}
          fontResponsiveness={
            viewport.width < 3.0
              ? fontSize.fontSmall
              : viewport.width < 5.5
              ? fontSize.fontMedium
              : fontSize.fontLarge
          }
          letterSpacing={thisLetterSpacing || 0.15}
          lineHeight={lineHeight}
          whiteSpace={thisWhiteSpace} //'normal' "nowrap"
          textAlign={textAlign}
          maxWidth={
            /*
            "textWidthValue" is hardcoded valu wheras "textWidthFactor" allowes a kind of responsiveness
            */
            textWidthValue
              ? textWidthValue
              : textOrientation === 'vertical'
              ? viewport.height / textWidthFactor
              : viewport.width / textWidthFactor
          }
          strokeWidth={strokeWidth}
        />
      </group>
    </A11y>
  ) : (
    <A11y role="content" description={textLineEn}>
      <group {...groupProps}>
        <TextVerse
          textProps={{ ...textProps }}
          text={textLineEn}
          font={font}
          fontResponsiveness={
            viewport.width < 3.0
              ? fontSize.fontSmall
              : viewport.width < 5.5
              ? fontSize.fontMiddle
              : fontSize.fontLarge
          }
          letterSpacing={thisLetterSpacing || 0.15}
          lineHeight={lineHeight}
          whiteSpace={thisWhiteSpace} //'normal' "nowrap"
          maxWidth={
            textOrientation === 'vertical'
              ? viewport.height / textWidthFactor
              : viewport.width / textWidthFactor
          }
          strokeWidth={strokeWidth}
        />
      </group>
    </A11y>
  );
};

export default TextSlide;
