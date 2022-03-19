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
import { a, useSpring, config } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBoxSide = ({
  databaseIndex,
  groupSideProps,
  labelProps,
  // canvasProps,
  // frameProps,
  image,
  portrait,
  banner,
  format,
  //_____
  axisLimitation,
  animationDelay,
  isSideRotating,
}) => {
  /*
  Props destructuring
  */
  const { position, rotation } = groupSideProps;
  /*
  Global State
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Component State
  */
  // const [val, setVal] = useState(null);

  /*
  useEffect Section
  */
  // useEffect(() => {
  // console.log('SpinningBox / isSideRotating:', isSideRotating);
  // autorotatingGroup.current.children.forEach(item => {
  //   console.log('item.rotation', item.rotation.z);
  //   if (portrait) {
  //     item.rotation.y += Math.PI * 0.5;
  //   }
  // });
  // if (portrait) {
  //   autorotatingGroup.current.children[0].rotation.y = Math.PI * 0.5;
  // }
  // }, [isSideRotating]);

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
    config: config.molasses,
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
      /*
      this props are stored in slidesData.js; they set position and rotation parameters of each individual boxe's side; 
      */
      // {...groupSideProps}
      position={position}
      rotation={springValue}
      // rotation={rotation}
    >
      <UniversalFrame
        groupProps={{ name: 'groupForFrameInSpiningBoxSide' }}
        portrait={portrait}
        banner={banner}
        format={format}
      />
      {/* { */}
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
          /*
            to avoid ... test
            */
          // visible:
          //   universalCanvas.current.rotation.y === Math.PI ? false : true,
          // visible: labelProps.textRewers ? true : true,
        }}
        portrait={portrait}
        banner={banner}
        format={format}
        image={image}
      />
      {/* } */}
      <SideLabel
        labelProps={labelProps}
        portrait={portrait}
        banner={banner}
        format={format}
      />
    </a.group>
  );
};

export default SpinningBoxSide;
