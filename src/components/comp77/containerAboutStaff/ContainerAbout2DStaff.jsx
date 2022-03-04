import React from 'react';
/*
Components
*/
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

"topHeightFactor" & "bottomHeightFactor" defines general layout of this component; i.e. divide page into two parts; bottom part is ment to cover 3D objects, pseudo-buttons;

"slidesArrayNumber" is just a number for fakeSlider...
*/
const topHeightFactor = 0.835;
const bottomHeightFactor = 1 - topHeightFactor;
const slidesArrayNumber = 4;

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
        <div
          className="container-about__top"
          style={{ height: windowSize.height * topHeightFactor }}
        ></div>

        <div
          className="container-about__bottom"
          style={{ height: windowSize.height * bottomHeightFactor }}
        >
          <div className="container-about__bottom-content">
            <NavigationPanel slidesArrayNumber={slidesArrayNumber} />
          </div>
        </div>
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
