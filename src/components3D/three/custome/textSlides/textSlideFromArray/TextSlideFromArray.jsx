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
Hook
*/
import useWindowSize from '../../../../../hooks/useWindowSize';
/*
Accessibility staff
*/
import { A11y } from '@react-three/a11y';

/*
-----------------------------------------------------------------------
*/
const TextSlideFromArray = ({
  groupProps,
  /*
  PL
  */
  textLinesPl,
  textPropsPl,
  fontPl, //"garamont", "jost"
  fontSizePl,
  letterSpacingPl,
  maxWidthFactorPl,
  whiteSpacePl,
  textAlignPl,
  strokeWidthPl,
  /*
  EN
  */
  textLinesEn,
  textPropsEn,
  fontEn, //"garamont", "jost"
  fontSizeEn,
  letterSpacingEn,
  maxWidthFactorEn,
  whiteSpaceEn,
  textAlignEn,
  strokeWidthEn,

  //___
  textOrientation,
  //___
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
  Hook size
  */
  const windowSize = useWindowSize();

  //___________
  // useEffect(() => {
  //   console.log('TextSlideFromArray / maxWidthFactorPl:', maxWidthFactorPl);
  //   console.log('TextSlideFromArray / fontPl:', fontPl);
  // }, [maxWidthFactorPl, fontPl]);

  //___________
  /*
  JSX
  */
  return canvasGlobalState.languageVersion === 1 ? (
    <A11y role="content" description={textLinesPl.join(' ')}>
      <group {...groupProps}>
        {textLinesPl.map((line, index) => (
          <TextVerse
            key={`${line}-${index}`}
            textProps={textPropsPl[index]}
            text={line}
            font={fontPl[index]}
            fontResponsiveness={
              windowSize.width < 300
                ? fontSizePl[index].fontSmall
                : windowSize.width < 600
                ? fontSizePl[index].fontMedium
                : fontSizePl[index].fontLarge
            }
            /*
              Why additional logic "&&" ?
              it's occasional props so first check if was sent; if wasn't sent and without logic app crushes becouse "react" looks for index' value; 
              */
            letterSpacing={(letterSpacingPl && letterSpacingPl[index]) || 0.15}
            whiteSpace={whiteSpacePl && whiteSpacePl[index]} //'normal' "nowrap"
            textAlign={textAlignPl && textAlignPl[index]}
            maxWidth={
              maxWidthFactorPl
                ? textOrientation === 'vertical'
                  ? viewport.height / maxWidthFactorPl[index]
                  : viewport.width / maxWidthFactorPl[index]
                : null
            }
            //___
            strokeWidth={strokeWidthPl && strokeWidthPl[index]}
          />
        ))}
      </group>
    </A11y>
  ) : (
    <A11y role="content" description={textLinesEn.join(' ')}>
      <group {...groupProps}>
        {textLinesEn.map((line, index) => (
          <TextVerse
            textProps={textPropsEn[index]}
            text={line}
            font={fontEn[index]}
            fontResponsiveness={
              windowSize.width < 300
                ? fontSizeEn[index].fontSmall
                : windowSize.width < 600
                ? fontSizeEn[index].fontMiddle
                : fontSizeEn[index].fontLarge
            }
            letterSpacing={(letterSpacingEn && letterSpacingEn[index]) || 0.15}
            whiteSpace={whiteSpaceEn && whiteSpaceEn[index]} //'normal' "nowrap"
            textAlign={textAlignEn && textAlignEn[index]}
            maxWidth={
              textOrientation === 'vertical'
                ? viewport.height / maxWidthFactorEn
                : viewport.width / maxWidthFactorEn
            }
            strokeWidth={strokeWidthEn}
          />
        ))}
      </group>
    </A11y>
  );
};

export default TextSlideFromArray;
