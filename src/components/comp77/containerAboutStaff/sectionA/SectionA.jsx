import React from 'react';
/*
Components
*/
import Slide0 from './slides/Slide0';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
/*
Hooks
*/
import useWindowSize from '../../../../hooks/useWindowSize';
/*
Basic Data
*/
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
        <Slide0 slideId={0} />
      </div>
      <div
        className={
          windowSize.width < minForTablet
            ? 'sectionA__slide-mobile'
            : 'sectionA__slide-tablet'
        }
      >
        <Slide1 slideId={1} />
      </div>

      {/* <div
        className={
          windowSize.width < minForTablet
            ? 'sectionA__slide-mobile'
            : 'sectionA__slide-tablet'
        }
      >
        <Slide2 slideId={2} windowSize={windowSize} />
      </div> */}
    </div>
  );
};

export default SectionA;
