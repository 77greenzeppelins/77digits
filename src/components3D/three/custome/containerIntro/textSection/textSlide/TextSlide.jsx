import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../../../drei/text/textVerse/TextVerse';
/*
Global state
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Accesibility staff
*/
import { A11y } from '@react-three/a11y';
/*
-----------------------------------------------------------------------
*/
const TextSlide = data => {
  const {
    groupProps,
    fontSize,
    linePositions,
    textLinesPl,
    textLinesEn,
    thisLetterSpacing,
  } = data.data;
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
  ...
  */
  // useEffect(() => {
  //   console.log('TextSlide / data', data);
  //   if (linePositions) {
  //     console.log('linePositions', linePositions[0]);
  //   }
  //   // console.log('textLines', textLinesPl);

  //   // console.log('textProps', textProps);

  //   // console.log('fontSize', fontSize);
  // }, [linePositions, textLinesPl, textProps, fontSize, data]);

  /*
  JSX
  */
  return canvasGlobalState.languageVersion === 'pl' ? (
    <A11y role="content" description={textLinesPl.join(' ')}>
      <group {...groupProps}>
        {textLinesPl.map((line, index) => (
          <TextVerse
            key={index}
            textProps={{ position: linePositions && linePositions[index] }}
            text={line}
            font="garamont"
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSize.fontSmall
                : viewport.width < 5.5
                ? fontSize.fontMiddle
                : fontSize.fontLarge
            }
            letterSpacing={thisLetterSpacing || 0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>
    </A11y>
  ) : (
    <A11y role="content" description={textLinesEn.join(' ')}>
      <group {...groupProps}>
        {textLinesEn.map((line, index) => (
          <TextVerse
            key={index}
            textProps={{ position: linePositions && linePositions[index] }}
            text={line}
            font="garamont"
            fontResponsiveness={
              viewport.width < 3.0
                ? fontSize.fontSmall
                : viewport.width < 5.5
                ? fontSize.fontMiddle
                : fontSize.fontLarge
            }
            letterSpacing={thisLetterSpacing || 0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>
    </A11y>
  );
};

export default TextSlide;
