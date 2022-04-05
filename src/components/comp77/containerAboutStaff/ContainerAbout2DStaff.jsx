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
"slidesArrayNumber" is just a number for fakeSlider...
*/
// const minForTablet = 850;

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
      <div
        className="container-about__bottom-wrapper"
        style={{
          width: windowSize.width,
        }}
      >
        <div
          className="container-about__navigation-wrapper"
          style={{
            height: windowSize.height * 0.111,
            width: windowSize.height * 0.425,
            top: -windowSize.height * 0.111,
          }}
        >
          <NavigationPanel />
        </div>
      </div>
    )
  );
};

export default ContainerAbout2DStaff;
