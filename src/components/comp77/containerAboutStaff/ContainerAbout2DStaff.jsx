import React from 'react';
/*
Components
*/
import HeroSlider from './heroSlider/HeroSlider';
import NavigationPanel from './navigationPanel/NavigationPanel';
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
const [minForTablet, desktop] = [850, 100];

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
  }
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
    canvasGlobalState.currentContainer === 'aboutContainer' && (
      <div className="container-about">
        <div className="container-about__body">
          {}
          <div
            className={
              windowSize.width < minForTablet
                ? 'container-about__hero-mobile'
                : 'container-about__hero-tablet'
            }
          >
            {/* <h1 className="container-about__hero-label">Jesteś Ty</h1> */}
            <HeroSlider />
            {
              /* Why conditional rendering? Becouse this section is rendered only on devices that are at least "tablet-size"; */
              windowSize.width > minForTablet && (
                <div className="container-about__navigation-container">
                  <NavigationPanel
                    slidesArrayNumber={slidesArrayNumber}
                    orientation={true}
                  />
                </div>
              )
            }
          </div>

          {/*-----Hero Section-------------------------------------------------*/}
        </div>
        {/*-----Footer Section-----------------------------------------------*/}
        {
          /*
          Why conditional rendering?
          Becouse this section is rendered only on mobile i.e. smallert then tablet;
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
              <div className="container-about__navigator-mobile">
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
