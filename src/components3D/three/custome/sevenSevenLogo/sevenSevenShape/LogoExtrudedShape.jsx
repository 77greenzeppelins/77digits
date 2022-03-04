import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import ExtrudedSeven from '../../../native/extruded/ExtrudedSeven';
/*
Gesture Section
*/
import DragAndReturn from '../../../../../gestureHandlers/useDrag/DragAndReturn';
/*
Spring Section
*/
import { a } from '@react-spring/three';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Shaders Section
*/
import { SSShape2ShaderMaterial } from './SSShape2ShaderMaterial';
import { extend } from '@react-three/fiber';
extend({ SSShape2ShaderMaterial });

/*
---------------------------------------------------------------------------
*/
const LogoExtrudedShape = ({ groupProps, initialPosition }) => {
  /*
  References
  */
  const group = useRef();
  const topSeven = useRef();
  const topSevenMaterial = useRef();
  const bottomSeven = useRef();
  const bottomSevenMaterial = useRef();
  const shaderMaterial = useRef()
  /*
  Canvas Global State Section;
  canvasState = {isInitialOverlay: true,}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  useFrame for topSeven
  */
  useFrame(({ clock }) => {
    /*
    Mesh's Animation Section
    if "if condition === "true" mesh starts its rotation; condition is "true" only when <InitialOverlay> were unmounted
    */
    if (
      !canvasGlobalState.isInitialOverlayMounted &&
      // topSeven.current.rotation.y > 0 
      // && 
      bottomSeven.current.rotation.y > 0
    ) {
      // topSeven.current.rotation.y -= Math.PI * 0.004;
      bottomSeven.current.rotation.y -= Math.PI * 0.004;

    }
    /*
    Shader uTime for any "tAnimation" i.e. time-based animations
    */
    // if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uTime.value =
        clock.getElapsedTime() * 0.95;
    /*
    Shader uDraggedX for gesture animations
    */
      // if (group.current.position.x !== 0) {
      //   shaderMaterial.current.uniforms.uDraggedX.value =
      //     group.current.position.x * 0.5;
      //   // console.log('group.current.position.x:', group.current.position.x);
      // }
    // }
  });

  //_____useFrame for bottomSeven
  // useFrame(({ clock }) => {
  //   //_____
  //   // if (
  //   //   !canvasGlobalState.isInitialOverlay &&
  //   //   bottomSeven.current.rotation.y > 0
  //   // ) {
  //   //   bottomSeven.current.rotation.y -= Math.PI * 0.004;
  //   // }
  //   // if (bottomSeven.current.rotation.x < 0) {
  //   //   bottomSeven.current.rotation.x += Math.PI * 0.004;
  //   // }
  //   if (bottomSevenMaterial.current) {
  //     bottomSevenMaterial.current.uniforms.uTime.value =
  //       clock.getElapsedTime() * 0.95;
  //     //_____uniforms creator
  //     if (group.current.position.x !== 0) {
  //       bottomSevenMaterial.current.uniforms.uDraggedX.value =
  //         group.current.position.x * 0.5;
  //       // console.log('<SSShape> / useFrame / group.current.position.x ', group.current.position.x)
  //     }
  //   }
  // });

  /*
  Gesture Section
  BTW...you can't use position in useEffect to monitore changes...
  */
  const [orbitImitation, position, scale, dragAndReturn] = DragAndReturn({
    initialScale: 0.4,
    initialPosition: initialPosition,
  });

  /*
  JSX
  */
  return (
    <a.group
      {...groupProps}
      ref={group}
      {...dragAndReturn()}
      position={position}
      scale={scale}
      rotation={orbitImitation}
    >
      {/* <ExtrudedSeven
        ref={topSeven}
        meshProps={{
          position: [-0.2, -0.3, 0],
          rotation: [0, Math.PI * 0.52, 0],
          name: 'topSeven',
        }}
        thisShaderMaterial={<sSShape2ShaderMaterial 
        // ref={topSevenMaterial} 
        ref={ shaderMaterial} 
        />}
      /> */}

      <ExtrudedSeven
        ref={bottomSeven}
        meshProps={{
          position: [-0.5, -0.5, 0],
          rotation: [0, Math.PI * 0.52, 0],
          name: 'bottomSeven',
        }}
        thisShaderMaterial={
          <sSShape2ShaderMaterial 
          // ref={bottomSevenMaterial} 
        ref={ shaderMaterial} 
          />
        }
      />
    </a.group>
  );
};

export default LogoExtrudedShape;
