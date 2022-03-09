import React from 'react';
/*
Components
*/
import UniversalFrame from '../matcapFrames/UniversalFrame';
import UniversalCanvasWithoutMap from '../matcapFrames/UniversalCanvasWithoutMap';
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
  groupSideProps,
  labelProps,
  image,
  portrait,
  banner,
}) => {
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
        /*
        Why conditional rendering?
        Becouse some sides have textures;
        */
        labelProps.textAwers ? (
          <UniversalCanvasWithoutMap
            portrait={portrait}
            banner={banner}
            bgColor={0x000000}
          />
        ) : (
          <UniversalCanvas portrait={portrait} banner={banner} image={image} />
        )
      }

      <SideLabel labelProps={labelProps} />
    </a.group>
  );
};

export default SpinningBoxSide;
