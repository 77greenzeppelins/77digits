import React, { useState } from 'react';
/*
Global State Section
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
import TextSlide from '../../textSlides/textSlide/TextSlide';
import CustomMeshWithMatcap from '../../_meshesWithMatcap/CustomMeshWithMatcap';
import LogoGeometry from '../../extrudedObjects/logo/LogoGeometry';
/*
Gesture Staff
*/
import BasicMove from '../../../../../gestureHandlers/useMove/basicMove';
import DragRotateReturn from '../../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a, useSpring } from '@react-spring/three';
/*
Basic Data
"tillFactor" for sake of "BasicMove"
*/
import {
  springConfig,
  basicMoveConfig,
  venusPaintingData,
  venusSideLeftText,
  venusGestureConfiguration,
} from './botticelliSectionData';

/*
---------------------------------------------------------------------
*/
const BotticelliSection = ({ groupProps }) => {
  /*
  Component State
  */
  const [isDebiut, setIsDebiut] = useState(true);
  /*
  Global State Section
  canvasState = { canvasGlobalState.currentContainer === 'none', ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Gesture Section
  this animation response to mouse move and slightly rotates components
  */
  const [rotateWithMouseMove] = BasicMove({
    target: basicMoveConfig.target,
    tileFactor: basicMoveConfig.tillFactor,
  });
  /*
  Gesture Section
  this animation allowes semi-rotation animation of venus painting
  */
  const [orbitImitation, dragRotateReturn] = DragRotateReturn(
    /*
    it's a section of "custome args"
    */
    {
      /*
      set behaviour along x-axis i.e. should frame lean to top or to bottom or mix top & bottom;
      */
      rightDragLimitX: venusGestureConfiguration.rightDragLimitX,
      leftDragLimitX: venusGestureConfiguration.leftDragLimitX,

      /*
      set behaviour along y-axis i.e. should frame lean to left or to right or mix left & right;
      */
      rightDragLimitY: venusGestureConfiguration.rightDragLimitY,
      leftDragLimitY: venusGestureConfiguration.leftDragLimitY,
    }
  );
  /*
  Spring Animation Section
  */
  const { springPositionZ } = useSpring({
    springPositionZ:
      canvasGlobalState.currentContainer === 'introContainer'
        ? springConfig.positionEnd
        : springConfig.positionStart,
    config: springConfig.configBasic,
    delay: springConfig.delay,
    /*
    What does onRest() do?
    Changing state we prevent a sort of odd behaviour; condition besed on ".currentCondition" triggered s-axis animation every time user changes continer; but we want only one such animation;
    */
    onRest: () => {
      setIsDebiut(false);
    },
  });
  /*
  JSX
  */
  return (
    <a.group
      {...groupProps}
      position={isDebiut ? springPositionZ : springConfig.positionEnd}
    >
      <a.group rotation={rotateWithMouseMove}>
        <a.group
          {...venusPaintingData.groupProps}
          {...dragRotateReturn()}
          rotation={orbitImitation}
        >
          {/*-----Boticelli Painting------------------------------*/}
          <UniversalFrame {...venusPaintingData.frameProps} />
          <UniversalCanvas {...venusPaintingData.canvasProps} />

          {/*-----77 Logo-----------------------------------------*/}
          <CustomMeshWithMatcap
            meshProps={{
              position: [0.25, -0.1, 0.11],
              rotation: [0, -0.15 * Math.PI, -0.05 * Math.PI],
              scale: [0.4, 0.4, 0.4],
            }}
          >
            <LogoGeometry />
          </CustomMeshWithMatcap>

          {/*----------Funny Text Thanks for Sandro---------------*/}
          <TextSlide
            groupProps={venusSideLeftText.groupProps}
            fontSize={venusSideLeftText.fontSize}
            textLinePl={venusSideLeftText.textLinePl}
            textLineEn={venusSideLeftText.textLineEn}
            textOrientation={venusSideLeftText.textOrientation}
            textWidthFactor={venusSideLeftText.textWidthFactor}
            // thisLetterSpacing={venusSideLeftText}
            // thisWhiteSpace={venusSideLeftText}
          />
        </a.group>
      </a.group>
    </a.group>
  );
};

export default BotticelliSection;
