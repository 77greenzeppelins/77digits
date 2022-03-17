import React from 'react';
/*
Components
*/
import SlideHeader from '../slide/SlideHeader';
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
----------------------------------------------------------------------------
*/
const SectionA = () => {
  /*
  Why this hooks?
  I need to calculate height of div with "container-menu_instant-contact" class;
  Why? I want this div to covers "3D frames" that resize according to device height;
  */
  const windowSize = useWindowSize();
  /*
  JSX
  */

  return (
    <div
      className={
        windowSize.width < minForTablet
          ? 'sectionA__container-mobile'
          : 'sectionA__container-tablet'
      }
    >
      <div
        className={
          windowSize.width < minForTablet
            ? 'sectionA__slide-mobile'
            : 'sectionA__slide-tablet'
        }
      >
        {slidesData.map(({ slideId, header }) => (
          <SlideHeader key={slideId} slideId={slideId} header={header} />
        ))}
      </div>
    </div>
  );
};

export default SectionA;
