import React from 'react';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../../matcapFrames/UniversalCanvas';
import TextSlide from '../../../textSlides/textSlide/TextSlide';
import CustomMeshWithMatcap from '../../../_meshesWithMatcap/CustomMeshWithMatcap';
import LogoGeometry from '../../../extrudedObjects/logo/LogoGeometry';
/*
Gesture Staff
"DragRotateReturn" works as pseudoOrbitController; it just rotate obiect along with defined axis;
*/
import DragRotateReturn from '../../../../../../gestureHandlers/useDrag/DragRotateReturn';
/*
Spring Staff
*/
import { a } from '@react-spring/three';
/*
Accesibility staff
*/
// import { A11y } from '@react-three/a11y';
/*
Basic Data
*/
import {
  venusInFrameData,
  venusSideLeftText,
  venusGestureConfiguration,
} from '../framedObjectsData';

/*
--------------------------------------------------------------------------
*/
const VenusInFrame = () => {
  /*
  Gesture Section
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
  JSX
  */
  return (
    <a.group
      {...venusInFrameData.groupProps}
      {...dragRotateReturn()}
      rotation={orbitImitation}
    >
      {/*-----Boticelli Painting------------------------------*/}
      <UniversalFrame {...venusInFrameData.frameProps} />
      <UniversalCanvas {...venusInFrameData.canvasProps} />
      {/*-----77 Logo-----------------------------------------*/}
      {/* <Logo
        meshProps={{ position: [-0.2, -0.28, -0.01], scale: [0.5, 0.5, 0.5] }}
        materialProps={{ color: [1, 0, 0] }}
      /> */}

      <CustomMeshWithMatcap
        meshProps={{
          position: [-0.2, -0.28, -0.01],
          scale: [0.5, 0.5, 0.5],
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
  );
};

export default VenusInFrame;
