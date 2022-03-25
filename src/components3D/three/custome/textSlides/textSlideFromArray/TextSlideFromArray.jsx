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
const TextSlideFromArray = ({
  groupProps,
  textProps,
  font, //options: "garamont", "jost"; default "jost"
  fontSize,
  textLinesPl,
  textLinesEn,
  thisLetterSpacing,
  thisWhiteSpace,
  textAlign,
  /*
  both props are important for counting "maxWidth" if text is vertical
  */
  textOrientation,
  textWidthFactor,
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

  return canvasGlobalState.languageVersion === 'pl' ? (
    <A11y role="content" description={textLinesPl.join(' ')}>
      <group {...groupProps}>
        {textLinesPl.map((line, index) => (
          <TextVerse
            key={`${line}-${index}`}
            textProps={textProps[index]}
            text={line}
            font={font && font[index]}
            // font={font}
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSize[index].fontSmall
                : viewport.width < 5.5
                ? fontSize[index].fontMiddle
                : fontSize[index].fontLarge
            }
            /*
            why "first check if thisLetterSpacing is true"?
            because if we dont specify "letterSpacing" JS is looking for "thisLetterSpacing[index]" and throws an error if doesn't find
            */
            letterSpacing={
              (thisLetterSpacing && thisLetterSpacing[index]) || 0.15
            }
            whiteSpace={thisWhiteSpace} //'normal' "nowrap"
            textAlign={textAlign && textAlign[index]}
            maxWidth={
              textOrientation === 'vertical'
                ? viewport.height / textWidthFactor
                : viewport.width / textWidthFactor
            }
          />
        ))}
      </group>
    </A11y>
  ) : (
    <A11y role="content" description={textLinesEn.join(' ')}>
      <group {...groupProps}>
        {textLinesEn.map((line, index) => (
          <TextVerse
            textProps={{ ...textProps[index] }}
            text={line}
            font={font[index]}
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSize.fontSmall
                : viewport.width < 5.5
                ? fontSize.fontMiddle
                : fontSize.fontLarge
            }
            letterSpacing={thisLetterSpacing || 0.15}
            whiteSpace={thisWhiteSpace} //'normal' "nowrap"
            maxWidth={
              textOrientation === 'vertical'
                ? viewport.height / textWidthFactor
                : viewport.width / textWidthFactor
            }
          />
        ))}
      </group>
    </A11y>
  );
};

export default TextSlideFromArray;
