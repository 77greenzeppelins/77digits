import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import SpinningBoxSide from './SpinningBoxSide';
/*
Global State Staf
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Gesture Section
*/
import DragRotateStepByStep from '../../../../gestureHandlers/useDrag/DragRotateStepByStep';
/*
Spring Section
*/
import { a } from '@react-spring/three';

/*
----------------------------------------------------------------------
*/
const SpinningBox = ({
  /*
  props for main <group> of this component
  */
  groupProps,
  /*
  props for <SpinningBoxSide>
  */
  spinningBoxConfig,
  images,
  portrait,
  banner,
  // canvasProps,
  // frameProps,
  /*
  props for "DragRotateStepByStep"'s args;
  */
  setDragRotationX,
  setDragRotationY,
  axisLimitation,
  /*
  props for spring
  */
  animationDelay,
  /*
  props for useFrame animations
  */
  setRotationYSpeed,
  setRotationXSpeed,
}) => {
  /*
  References
  */
  const autorotatingGroup = useRef();
  /*
  Global State
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Call this gesture!!!
  returned staf includes: rotateStepByStep,gestureCounter, dragRotateStepByStep
  */
  const [rotateStepByStep, dragRotateStepByStep] = DragRotateStepByStep(
    /*
    it's a section of "custome args"; just send some settings to drag hook;
    */
    {
      /*
      set initial values for rotation 
      */
      rotationX: setDragRotationX || 0,
      rotationY: setDragRotationY || 0,
      /*
      set axis that is active
      */
      axisLimitation: axisLimitation,
    }
  );

  /*
  useEffect Section
  */
  useEffect(() => {
    console.log(
      'SpinningBox / autorotatingGroup.current.children:',
      autorotatingGroup.current.children
    );
    // autorotatingGroup.current.children.forEach(item => {
    //   console.log('item.rotation', item.rotation.z);
    //   if (portrait) {
    //     item.rotation.y += Math.PI * 0.5;
    //   }
    // });
    // if (portrait) {
    //   autorotatingGroup.current.children[0].rotation.y = Math.PI * 0.5;
    // }
  }, [portrait]);

  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // if (
    //   canvasGlobalState.currentContainer === 'aboutContainer' &&
    //   setRotationYSpeed
    // ) {
    //   autorotatingGroup.current.rotation.y = time * setRotationYSpeed || 0;
    //   // autorotatingGroup.current.rotation.y += 0.002;
    //   // autorotatingGroup.current.rotation.x = Math.sin(time * 0.1);
    //   // autorotatingGroup.current.rotation.y = Math.cos(time * 0.4) * 0.4;
    //   // autorotatingGroup.current.rotation.z = Math.sin(time * 0.4) * 0.5;
    // }

    // if (
    //   canvasGlobalState.currentContainer === 'aboutContainer' &&
    //   setRotationXSpeed
    // ) {
    //   autorotatingGroup.current.rotation.x = time * setRotationXSpeed || 0;
    // }
  });

  /*
  JSX
  */
  return (
    <a.group
      {...groupProps}
      name="GroupForGestureAnimation"
      {...dragRotateStepByStep()}
      rotation={rotateStepByStep}
    >
      <a.group ref={autorotatingGroup}>
        {spinningBoxConfig.map(({ sideProps, labelProps }, index) => (
          <SpinningBoxSide
            key={index}
            index={index}
            databaseIndex={labelProps.imagesIndex}
            groupSideProps={sideProps}
            labelProps={labelProps}
            /*
            We want to pass an image to some box's sides; to do this first check if congigObject of this particular "box side" has "textAwers"; if it hasn't i.e. the value is "false", choose some image instead text;
            "labelProps.textAwers" controls the flow of "conditional rendering"  in <SpinningBoxSide> / <UniversalCanvac> or <UniversalCanvasWithouImage>
            */
            // image={
            //   (!labelProps.textAwers || !labelProps.textRewers) &&
            //   images[labelProps.imagesIndex]
            // }
            image={images[labelProps.imagesIndex]}
            portrait={portrait}
            banner={banner}
            axisLimitation={axisLimitation}
            // frameProps={frameProps}
            // canvasProps={canvasProps}
            animationDelay={animationDelay}
          />
        ))}
      </a.group>
    </a.group>
  );
};

export default SpinningBox;
