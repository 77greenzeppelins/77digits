import React, { useEffect, useRef } from 'react';
/*
Components
*/
import UniversalFrame from '../matcapFrames/UniversalFrame';
import UniversalCanvas from '../matcapFrames/UniversalCanvas';
import SideLabel from './SideLabel';
/*
Global State Staf
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBoxSide = ({
  index,
  sideIndex,
  groupSideProps,
  labelProps,
  canvasProps,
  frameProps,
  image,
  portrait,
  banner,
}) => {
  /*
  References
  */
  const universalCanvas = useRef();
  /*
  useEffect Section
  */
  useEffect(() => {
    index === sideIndex &&
      console.log('SpinningBoxSide / my index is:', sideIndex);
  }, [sideIndex, index]);
  /*
  JSX
  */
  return (
    <a.group
      name="GroupForSpinningBoxSides"
      /*
      this props are stored in slidesData.js; they set position and rotation parameters of each individual boxe's side; 
      */
      {...groupSideProps}
    >
      <UniversalFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        portrait={portrait}
        banner={banner}
      />
      {
        <UniversalCanvas
          ref={universalCanvas}
          meshProps={{
            /*
            if textRewers = false just rotate <UC> so that initially it's invisible;
            */
            rotation: [0, !labelProps.textRewers ? Math.PI : 0, 0],
            /*
            to avoid ... test
            */
            // visible:
            //   universalCanvas.current.rotation.y === Math.PI ? false : true,
            // visible: labelProps.textRewers ? true : true,
          }}
          portrait={portrait}
          banner={banner}
          image={image}
        />
      }
      <SideLabel labelProps={labelProps} portrait={portrait} banner={banner} />
    </a.group>
  );
};

export default SpinningBoxSide;
