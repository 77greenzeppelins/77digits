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
  fontSize,
  textLinePl,
  textLineEn,
  thisLetterSpacing,
  whiteSpace,
}) => {
  //   const {
  //     groupProps,
  //     textProps,
  //     fontSize,
  //     textLinePl,
  //     textLineEn,
  //     thisLetterSpacing,
  //     whiteSpace,
  //   } = data.data;
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
  return canvasGlobalState.languageVersion === 'pl' ? (
    <A11y role="content" description={textLinePl}>
      <group {...groupProps}>
        <TextVerse
          key={textLinePl}
          textProps={{ ...textProps }}
          text={textLinePl}
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
      </group>
    </A11y>
  ) : (
    <A11y role="content" description={textLineEn}>
      <group {...groupProps}>
        <TextVerse
          textProps={{ ...textProps }}
          text={textLineEn}
          font="garamont"
          fontResponsiveness={
            viewport.width < 3.0
              ? fontSize.fontSmall
              : viewport.width < 5.5
              ? fontSize.fontMiddle
              : fontSize.fontLarge
          }
          letterSpacing={thisLetterSpacing || 0.15}
          whiteSpace={whiteSpace || 'normal'} //'normal' "nowrap"
          maxWidth={viewport.width / 9}
        />
      </group>
    </A11y>
  );
};

export default TextSlide;
