import React, { Suspense } from 'react';
/*
Components
*/
import Banner from './banner/Banner';
import Slider from './slider/Slider';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
BasicData
*/
// const backgroundColor = 0xc2bebb;
import { backgroundColors } from '../../../../data/colors';

/*
------------------------------------------------------------------------
 */
const ContainerAbout = () => {
  /*
  Global State Section
  canvasState = {...,aboutContainerPosition: , isContainerAboutIntroductionClosed: false,}
 */
  const canvasGlobalState = useSnapshot(canvasState);

  return (
    <group
      name="GroupForContainerAbout"
      /*
      this position is [-5,0,0]; it's required to properly position the whole container;
      */
      position={canvasGlobalState.aboutContainerPosition}
    >
      {/*-----Slider Section-----------------------------------*/}
      <Slider />

      {/*-----Bottom Section-----------------------------------*/}
      {/* <Suspense fallback={null}>
        <Banner
          groupProps={{
            name: 'GroupForLogoInFrame2',
            scale: [0.15, 0.15, 0.15],
            // position: [0, -0.485, 0.5],
            position: [0, -0.31, 0],
          }}
          backgroundColor={backgroundColors.containerAbout}
        />
      </Suspense> */}
    </group>
  );
};

export default ContainerAbout;
