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
  databaseIndex,
  //_____
  sideProps,
  canvasProps,
  frameProps,
  labelProps,
  //___
  springConfig,
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
    loop: { reverse: isSideRotating },
    from: { springValue: rotation },
    to: {
      springValue: [
        /* important for "banner"'s sides that rotate along x-axis */
        axisLimitation === 'y'
          ? databaseIndex % 2
            ? Math.PI * 0.5 + Math.PI
            : Math.PI
          : 0,
        /*
        important for "portrait"'s sides that rotate along -axis
        side front & back have even index so result is 0
        why "0.5 + Math.PI" ?
        it's a initial value (hardcoded in sliderData.js) that play role of a sort of offset;
        */
        axisLimitation === 'x'
          ? databaseIndex % 2
            ? Math.PI * 0.5 + Math.PI
            : Math.PI
          : 0,
        /*
        z-axis value
        */
        rotation[2],
      ],
    },
    // config: { mass: 20, tension: 70, friction: 30 },
    config: config,
    delay: animationDelay,
    /*
    There is an issue when user click and go to another slide...
    I've tried to solve it using souse and cancel
    Seems that cancel works in contrast to pouse; 
    */
    // pause:
    //   canvasGlobalState.currentContainer === 'aboutContainer' && isSideRotating
    //     ? false
    //     : true,
    cancel: isSideRotating ? false : true,
    /*
    this doesn't work / doesn't solve the issu of "clicking":
     // loop: true,
     // reverse: true,
     // loop: { reverse: true, delay: animationDelay },
    */
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
