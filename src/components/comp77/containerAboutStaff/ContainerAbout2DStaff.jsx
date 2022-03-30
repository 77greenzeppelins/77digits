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
  /*
  Hook Section
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
          {
            /*
            Why conditional rendering? Because within this container we can distinguish two sections that have various layouts;
            */
            canvasGlobalState.containerAboutSlideIndex < 2 ? (
              // canvasGlobalState.containerAboutSlideIndex < 0 ? (
              <div
                className={
                  windowSize.width < minForTablet
                    ? 'container-about__sectionA-mobile'
                    : 'container-about__sectionA-tablet'
                }
              >
                <SectionA />
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
            )
          }
        </div>
        {
          /*
          Why conditional rendering? Because there are various layouts for mobile & tablet
          */
          windowSize.width < minForTablet ? (
            <div
              className="container-about__navigation-mobile"
              style={{
                height: windowSize.height * bottomHeightFactor,
              }}
            >
              <NavigationPanel slidesArrayNumber={slidesArrayNumber} />
            </div>
          ) : (
            <div className="container-about__navigation-tablet">
              <div
                style={{
                  position: 'absolute',
                  height: windowSize.height * 0.3,
                  width: '50px',
                  /*
                  "top: -windowSize.height * 0.3" allowes to overflow "height: 0px" from "parent class"...
                  */
                  top: -windowSize.height * 0.3,
                }}
              >
                <NavigationPanel
                  slidesArrayNumber={slidesArrayNumber}
                  orientation={true}
                  containerStyle={{
                    height: windowSize.height * 0.3,
                    width: '50px',
                  }}
                />
              </div>
            </div>
          )
        }
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
