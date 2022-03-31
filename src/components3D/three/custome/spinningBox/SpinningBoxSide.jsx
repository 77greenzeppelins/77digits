import React from 'react';
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
import { a, useSpring } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBoxSide = ({
  //_____
  sideProps,
  canvasProps,
  frameProps,
  labelProps,
  //___
  springConfig,
  isSlideVisible,
  isSideRotating,
}) => {
  /*
  Props destructuring
  */
  const { position, rotation } = sideProps;
  const { axisLimitation, animationDelay, config } = springConfig;

  /*
  SpringSection
  */
  const { springValue } = useSpring({
    // loop: { reverse: isSlideVisible },
    from: { springValue: rotation },
    to: {
      springValue: [
        /* important for "banner"'s sides that rotate along x-axis */
        axisLimitation === 'y' && isSlideVisible && isSideRotating
          ? labelProps.imagesIndex % 2
            ? rotation[0] + Math.PI
            : Math.PI
          : rotation[0],
        /*
        important for "portrait"'s sides that rotate along y-axis;
        side front & back have even index so result is 0;
        */
        axisLimitation === 'x' && isSlideVisible && isSideRotating
          ? labelProps.imagesIndex % 2
            ? rotation[1] + Math.PI
            : Math.PI
          : rotation[1],
        /*
        z-axis value
        */
        rotation[2],
      ],
    },
    config: config,
    delay: animationDelay,
    cancel: isSlideVisible ? false : true,
  });

  /*
  JSX
  */
  return (
    <a.group
      name="GroupForSpinningBoxSides"
      position={position}
      rotation={springValue}
    >
      <UniversalFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        {...frameProps}
      />
      <UniversalCanvas
        meshProps={{
          /*
            if textRewers = false just rotate <UC> so that initially it's invisible;
            */
          rotation: [
            0,
            /*
              important for "portrait"
              */
            !labelProps.textRewers ? Math.PI : 0,
            /*
              importan for "banner" because image must be "upside down";
              */
            axisLimitation === 'y' ? Math.PI : 0,
          ],
        }}
        {...canvasProps}
      />
      {/* } */}
      <SideLabel labelProps={labelProps} />
    </a.group>
  );
};

export default SpinningBoxSide;
