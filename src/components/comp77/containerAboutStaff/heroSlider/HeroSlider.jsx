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
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Basic Data
*/
const minForTablet = 850;

/*
----------------------------------------------------------------------------
*/
const HeroSlider = () => {
  /*
  Global State Section
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Why this hooks?
  I need to calculate height of div with "container-menu_instant-contact" class;
  Why? I want this div to covers "3D frames" that resize according to device height;
  */
  const windowSize = useWindowSize();
  /*
  JSX
  */

  // return (
  //   <div
  //     className={
  //       windowSize.width < minForTablet
  //         ? 'hero-slider__container-mobile'
  //         : 'hero-slider__container-tablet'
  //     }
  //   >
  //     <div
  //       className={
  //         windowSize.width < minForTablet
  //           ? 'hero-slider__slide-mobile'
  //           : 'hero-slider__slide-tablet'
  //       }
  //     >

  //     </div>
  //     <div
  //       className={
  //         windowSize.width < minForTablet
  //           ? 'hero-slider__slide-mobile'
  //           : 'hero-slider__slide-tablet'
  //       }
  //     >

  //     </div>
  //     <div
  //       className={
  //         windowSize.width < minForTablet
  //           ? 'hero-slider__slide-mobile'
  //           : 'hero-slider__slide-tablet'
  //       }
  //     >

  //     </div>
  //   </div>
  // );

  return (
    <div
      className={
        windowSize.width < minForTablet
          ? 'hero-slider__container-mobile'
          : 'hero-slider__container-tablet'
      }
    >
      <div
        className={
          windowSize.width < minForTablet
            ? 'hero-slider__slide-mobile'
            : 'hero-slider__slide-tablet'
        }
      >
        <Slide0 slideId={0} />
      </div>
      <div
        className={
          windowSize.width < minForTablet
            ? 'hero-slider__slide-mobile'
            : 'hero-slider__slide-tablet'
        }
      >
        <Slide1 slideId={1} />
      </div>
      <div
        className={
          windowSize.width < minForTablet
            ? 'hero-slider__slide-mobile'
            : 'hero-slider__slide-tablet'
        }
      >
        <Slide2 slideId={2} />
      </div>
    </div>
  );
};

export default HeroSlider;
