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
        textProps={bannerFrontText.textProps}
        text={bannerFrontText.fontSize}
        font={bannerFrontText.font}
        fontSize={bannerFrontText.fontSize}
        textLinesPl={bannerFrontText.textLinesPl}
        textLinesEn={bannerFrontText.textLinesEn}
        textWidthFactor={bannerFrontText.textWidthFactor}
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
