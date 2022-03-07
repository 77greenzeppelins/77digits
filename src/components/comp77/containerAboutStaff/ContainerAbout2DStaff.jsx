import React from 'react';
/*
Components
*/
import CrescentArrow from '../arrows/crescentArrow/CrescentArrow';
import SliderProgressIndicator from '../progressIndicators/sliderProgressIndicator/SliderProgressIndicator';
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
"topHeightFactor" & "bottomHeightFactor" defines general layout of this component; i.e. divide page into two parts; bottom part is ment to cover 3D objects, pseudo-buttons;
"slidesArrayNumber" is just a number for fakeSlider...
*/
const slidesArrayNumber = 5;
// const topHeightFactor = 0.835; //03.04
const topHeightFactor = 0.9;

const bottomHeightFactor = 0.1;
// const slidesArrayNumber = 4;

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
        <div className="container-about__content">
          {/*-----Left Bar Section-------------------------------------------- */}
          {/* <div
            className="container-about__left-bar"
            style={{ height: windowSize.height * topHeightFactor }}
          /> */}

          {/*-----Left Text Section------------------------------------------- */}
          <div className="container-about__left-text">
            <p className="container-about__text-paragraph">Jesteś</p>
            <p className="container-about__text-paragraph">Ty</p>
          </div>

          <div
            className="container-about__navigation"
            style={{
              height: windowSize.height * topHeightFactor,
              // transform: 'rotate(180deg)',
            }}
          >
            <div className="container-about__navigation-content">
              <CrescentArrow
                slidesArrayNumber={slidesArrayNumber}
                arrowDirection="arrow-up"
                /*
                if user clicks to final slide, arrow shoud be "opaque"
                */
                arrowOpacity={
                  canvasGlobalState.containerAboutSlideIndex ===
                  slidesArrayNumber - 1
                    ? 0.1
                    : 1
                }
                frameSide="left"
              />

              {/*-----*/}
              <CrescentArrow
                slidesArrayNumber={slidesArrayNumber}
                arrowDirection="arrow-down"
                /*
                initially and if user clicks to firs slide, arrow shoud be "opaque"
                */
                arrowOpacity={
                  canvasGlobalState.containerAboutSlideIndex === 0 ? 0.1 : 1
                }
                frameSide="left"
                arrowSide="left"
              />
              {/*-----*/}
              <SliderProgressIndicator slidesArrayNumber={slidesArrayNumber} />
            </div>
          </div>

          {/* <div
            className="container-about__right-bar"
            style={{
              height: windowSize.height * topHeightFactor,
            }}
          /> */}
        </div>

        {/* <div
          className="container-about__bottom"
          style={{ height: windowSize.height * bottomHeightFactor }}
        >
          <div className="container-about__bottom-content">
            <NavigationPanel slidesArrayNumber={slidesArrayNumber} />
          </div>
        </div> */}
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
