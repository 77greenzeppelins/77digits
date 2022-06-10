import React from 'react';
/*
Components
*/
import ImageAsFlag from '../../../imageAsFlag/ImageAsFlag';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Spring Staff
*/
import { a, config, useSpring } from '@react-spring/three';
/*
Basic Data
*/
import { layout } from './slide1Data';

/*
----------------------------------------------------------------------
*/

const Slide1 = ({ slideId }) => {
  /*
  Global State Section
  {containerAboutVisibleSlideIndex: 0,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring for animations that happen when slides changes
  */
  const containerCondition =
    canvasGlobalState.currentContainer === 'aboutContainer';
  const springCond =
    canvasGlobalState.containerAboutVisibleSlideIndex === slideId;
  const [{ bgScale, bgPosY }] = useSpring(
    () => ({
      //___
      bgScale: springCond ? layout.bgScaleFinal : 0,
      bgPosY: springCond ? layout.bgPosYFinal : layout.bgPosYInitial,
      //___
      config: springCond ? config.molasses : { duration: 600 },
      delay: springCond ? 150 : 0,
      /*
      This onRest must be in each slide! Either on 3D side or 2D side; in cese of <Slide1> there is only 3D side though...
      */
      // onRest: () => {
      //   canvasState.isSlideComplete = true;
      // },
    }),
    [canvasGlobalState.containerAboutVisibleSlideIndex]
  );

  /*
  JSX
  */
  return (
    <>
      <a.group scale={bgScale} position-x={layout.bgPosX} position-y={bgPosY}>
        <ImageAsFlag
          uAlpha={0.1}
          uTimeCondition={containerCondition && springCond ? 1 : 0}
          meshProps={{ scale: 0.7 }}
          geometryArgs={[1, 1, 16, 16]}
        />
      </a.group>
    </>
  );
};

export default Slide1;
