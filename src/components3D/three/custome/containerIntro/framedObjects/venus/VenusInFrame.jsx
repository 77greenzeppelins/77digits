import React from 'react';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../../matcapFrames/UniversalCanvas';
import TextSlide from '../../../textSlides/textSlide/TextSlide';
/*
Assets
*/
import venus from '../../../../../../assets/textures/venus_2.png';
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
  venusSideLeftText,
  venusGestureConfiguration,
} from '../framedObjectsData';

/*
--------------------------------------------------------------------------
*/
const VenusInFrame = ({ groupProps, rotationX }) => {
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
    <a.group {...groupProps} {...dragRotateReturn()} rotation={orbitImitation}>
      <UniversalFrame
        groupProps={{ name: 'groupForMediumFrame' }}
        portrait={true}
        format="portrait"
      />
      {/* <A11y role="image" description="Raphael. The School of Athens "> */}

      <UniversalCanvas image={venus} portrait={true} format="portrait" />

      {/* </A11y> */}

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
