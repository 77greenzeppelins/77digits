import React from 'react';
/*
Components
*/

import SlideHeader from '../slide/SlideHeader';
import SlideBody from '../slide/SlideBody';
/*
Hooks
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
Basic Data
*/
import { slidesData } from '../slide/slidesData';
const minForTablet = 850;

/*
------------------------------------------------------------------
*/
const SectionB = () => {
  /*
  Hooks
  */
  const windowSize = useWindowSize();
  /*
  JSX
  */
  return (
    <div
      className={
        windowSize.width < minForTablet
          ? 'sectionB__container-mobile'
          : 'sectionB__container-tablet'
      }
    >
      {/*---Header------------------------------------------*/}
      <div
        className={
          windowSize.width < minForTablet
            ? 'sectionB__partA-slide-wrapper-mobile'
            : 'sectionB__partA-slide-wrapper-tablet'
        }
      >
        {slidesData.map(({ slideId, header }) => (
          <SlideHeader key={slideId} slideId={slideId} header={header} />
        ))}
      </div>

      {/*---Body------------------------------------------*/}
      <div
        className={
          windowSize.width < minForTablet
            ? 'sectionB__partB-slide-wrapper-mobile'
            : 'sectionB__partB-slide-wrapper-tablet'
        }
      >
        {slidesData.map(({ slideId, paragraphs }) => (
          <SlideBody key={slideId} slideId={slideId} paragraphs={paragraphs} />
        ))}
      </div>
    </div>
  );
};

export default SectionB;
