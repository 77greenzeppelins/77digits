import React from 'react';
/*
Components
*/
import TextSlideFromArray from '../../../../textSlides/textSlideFromArray/TextSlideFromArray';
import TextSlide from '../../../../textSlides/textSlide/TextSlide';
/*
BasicData
*/
import {
  bannerFrontText,
  bannerLeftText,
  bannerRightText,
} from '../../framedObjectsData';
/*
-------------------------------------------------------------------------
*/
const TextSection = () => {
  return (
    <>
      {/*-----Front Text-------------------------------------------*/}
      <TextSlideFromArray
        textLinesPl={bannerFrontText.textLinesPl}
        textPropsPl={bannerFrontText.textPropsPl}
        fontPl={bannerFrontText.fontPl}
        fontSizePl={bannerFrontText.fontSizePl}
        textWidthFactorPl={bannerFrontText.textWidthFactorPl}
        textLinesEn={bannerFrontText.textLinesEn}
        textPropsEn={bannerFrontText.textPropsEn}
        fontEn={bannerFrontText.fontEn}
        fontSizeEn={bannerFrontText.fontSizeEn}
        textWidthFactorEn={bannerFrontText.textWidthFactorEn}
      />
      {/*-----Left Text-------------------------------------------*/}
      <TextSlide
        groupProps={bannerLeftText.groupProps}
        fontSize={bannerLeftText.fontSize}
        textLinePl={bannerLeftText.textLinePl}
        textLineEn={bannerLeftText.textLineEn}
        textWidthFactor={bannerLeftText.textWidthFactor}
      />
      <TextSlide
        groupProps={bannerRightText.groupProps}
        fontSize={bannerRightText.fontSize}
        textLinePl={bannerRightText.textLinePl}
        textLineEn={bannerRightText.textLineEn}
        textWidthFactor={bannerRightText.textWidthFactor}
      />
    </>
  );
};

export default TextSection;
