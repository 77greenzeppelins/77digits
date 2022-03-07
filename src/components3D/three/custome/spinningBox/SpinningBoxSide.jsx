import React from 'react';
/*
Components
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
import UniversalFrame from '../matcapFrames/UniversalFrame';
import UniversalCanvasWithoutMap from '../matcapFrames/UniversalCanvasWithoutMap';
/*
Global State Staf
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBoxSide = ({ groupProps }) => {
  return (
    <a.group
      name="GroupForSpinningBoxSides"
      //  {...panelFront}
      {...groupProps}
    >
      <UniversalFrame
        groupProps={{ name: 'groupForMediumFrame' }}
        portrait={true}
      />
      <UniversalCanvasWithoutMap portrait={true} bgColor={0xffe000} />
    </a.group>
  );
};

export default SpinningBoxSide;
