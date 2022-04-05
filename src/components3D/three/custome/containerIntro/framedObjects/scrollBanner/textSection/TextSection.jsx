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
        maxWidthFactorPl={bannerFrontText.maxWidthFactorPl}
        strokeWidthPl={bannerFrontText.strokeWidthPl}
        textLinesEn={bannerFrontText.textLinesEn}
        textPropsEn={bannerFrontText.textPropsEn}
        fontEn={bannerFrontText.fontEn}
        fontSizeEn={bannerFrontText.fontSizeEn}
        maxWidthFactorEn={bannerFrontText.maxWidthFactorEn}
        strokeWidthEn={bannerFrontText.strokeWidthEn}
      />
      {/*-----Left Text-------------------------------------------*/}
      <TextSlide
        groupProps={bannerLeftText.groupProps}
        fontSize={bannerLeftText.fontSize}
        textLinePl={bannerLeftText.textLinePl}
        textLineEn={bannerLeftText.textLineEn}
        textWidthFactor={bannerLeftText.textWidthFactor}
        strokeWidth={bannerLeftText.strokeWidth}
      />
      <TextSlide
        groupProps={bannerRightText.groupProps}
        fontSize={bannerRightText.fontSize}
        textLinePl={bannerRightText.textLinePl}
        textLineEn={bannerRightText.textLineEn}
        textWidthFactor={bannerRightText.textWidthFactor}
        strokeWidth={bannerRightText.strokeWidth}
      />
    </>
  );
};

export default TextSection;
