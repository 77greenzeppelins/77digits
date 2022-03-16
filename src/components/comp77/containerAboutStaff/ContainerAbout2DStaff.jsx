import React from 'react';
/*
Components
*/
import SectionA from './sectionA/SectionA';
import NavigationPanel from './navigationPanel/NavigationPanel';
import SectionB from './sectionB/SectionB';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Hooks
*/
import useWindowSize from '../../../hooks/useWindowSize';
/*
Basic Data
"slidesArrayNumber" is just a number for fakeSlider...
*/
const slidesArrayNumber = 5;
const bottomHeightFactor = 0.12;
const minForTablet = 850;

/*
-------------------------------------------------------------------------------
*/
const ContainerAbout2DStaff = () => {
  /*
  Global State Section
  canvasState = {currentContainer: 'none',...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Reset Indicator;
  If user changes container indicator is reset to 0;
  */
  if (canvasGlobalState.currentContainer !== 'aboutContainer') {
    canvasState.containerAboutSlideIndex = 0;
    canvasState.containerAboutSlidingDirection = 'none';
  }

  console.log(
    'canvasGlobalState.containerAboutSlideIndex',
    canvasGlobalState.containerAboutSlideIndex
  );
  /*
  Hooks
  */
  const windowSize = useWindowSize();
  /*
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <div className="container-about">
        {/*-----Body Section------------------------------------------*/}
        <div className="container-about__body">
          {canvasGlobalState.containerAboutSlideIndex < 2 ? (
            <div
              className={
                windowSize.width < minForTablet
                  ? 'container-about__hero-mobile'
                  : 'container-about__hero-tablet'
              }
            >
              <SectionA />
              {
                /* Why conditional rendering? Because this section is rendered only on devices that are at least "tablet-size"; */
                windowSize.width >= minForTablet && (
                  <div className="container-about__navigation-tablet">
                    <NavigationPanel
                      slidesArrayNumber={slidesArrayNumber}
                      orientation={true}
                    />
                  </div>
                )
              }
            </div>
          ) : (
            <div
              className="container-about__sectionB-container"
              style={{
                height: windowSize.height,
              }}
            >
              <SectionB />
            </div>
          )}
        </div>
        {/*-----Footer Section------------------------------------------*/}
        {
          /*
          Why conditional rendering?
          Because this section is rendered only on mobile i.e. devices that are smallert then tablet; it works with <SectionA> & <SectionB>
          */
          windowSize.width < minForTablet && (
            <div
              className="container-about__footer"
              style={{
                height:
                  windowSize.width < minForTablet &&
                  windowSize.height * bottomHeightFactor,
              }}
            >
              <div className="container-about__navigation-mobile">
                <NavigationPanel slidesArrayNumber={slidesArrayNumber} />
              </div>
            </div>
          )
        }
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
