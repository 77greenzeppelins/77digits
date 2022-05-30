import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import InstantContactsSection from './instantContactsSection/InstantContactsSection';
import CustomMeshWithMatcap from '../../_meshesWithMatcap/CustomMeshWithMatcap';
import TextGeometryFromFont from '../../extrudedObjects/text/TextGeometryFromFont';
/*
Global State Section
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
/*
Spring data
*/
import { a, useSpring, useTransition } from '@react-spring/three';
/*
Basic Data
*/
import { springConfig, buttonQuestionMark, buttonX } from './endButtonsData';

/*
-----------------------------------------------------------------------------
*/
const EndButtons = React.forwardRef(({ groupProps, positionY }, ref) => {
  /*
  References
  */
  const questionMark = useRef();
  const xMark = useRef();

  /*
  Global State Section
  canvasState = {endOfContainerIntro: false, startOfContainerIntroShow: false, ...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Animation Section
  */
  const { zPosition } = useSpring({
    /*
    this animation happens when user scrolls to the end of container
    */
    zPosition: canvasGlobalState.endOfContainerIntro
      ? springConfig.zEnd
      : springConfig.zStart,
    config: springConfig.configBasic,
    delay: springConfig.delay,
  });

  const transition = useTransition(canvasGlobalState.endOfContainerIntro, {
    from: { zPosition: springConfig.zStart, yPosition: 2, scale: 0 },
    enter: { zPosition: springConfig.zEnd, yPosition: 0, scale: 1 },
    leave: { zPosition: springConfig.zStart, yPosition: 2, scale: 0 },
    config: springConfig.configBasic,
    delay: springConfig.delay,
  });

  const { springPositionY, scale } = useSpring({
    /*
    this animation happens when user clicks  "questionMark-button"; as a result whole <EB> section goes up; it's actually the very first part of "two-stage" animation where the second part take place in <RaphaelSection> when "X-button" is clicked;
    */
    // springPositionY: canvasGlobalState.isRaphaelVisible
    springPositionY: canvasGlobalState.endOfContainerIntro ? 0 : 1,
    // config: springConfig.molasses,
    scale: canvasGlobalState.endOfContainerIntro ? 1 : 0,
    config: springConfig.configBasic,
    delay: 400,
    // onRest: () => {
    // canvasState.isRaphaelVisible = true;
    // },
  });

  // useEffect(() => {
  //   console.log(
  //     'EndButtons / canvasGlobalState.startOfContainerIntroShow:',
  //     canvasGlobalState.startOfContainerIntroShow
  //   );
  // }, [canvasGlobalState.startOfContainerIntroShow]);

  /*
  useFrame Section
  */
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    /*
      Why two conditions in "if statement" ?
      I don't want any animation/rotation when user is in any other container;
      */

    if (
      canvasGlobalState.currentContainer === 'introContainer' &&
      canvasGlobalState.endOfContainerIntro &&
      !canvasGlobalState.isRaphaelVisible
    ) {
      questionMark.current.rotation.y = -Math.cos(time * 0.4) * 0.8;
      questionMark.current.rotation.z = Math.sin(time * 0.4) * 0.1;
    }
  });
  /*
  JSX
  */
  // return transition(
  //   ({ zPosition, yPosition }, condition) =>
  //     condition && (
  return (
    <a.group
      ref={ref}
      position-x={0}
      position-z={-17.64}
      position-y={springPositionY}
      scale-x={scale}
      scale-y={scale}
      scale-z={scale}
    >
      {/* <a.group position-y={springPositionY}> */}
      {/*-----Instant Contact Buttons-------------------------------*/}
      <InstantContactsSection />
      {/* </a.group> */}
      {/*-----X Button------------------------------------------*/}
      <a.group ref={xMark} {...buttonX.groupProps}>
        <CustomMeshWithMatcap meshProps={buttonX.meshProps}>
          <TextGeometryFromFont
            fontExtrudeSettings={buttonX.fontExtrudeSettings}
            text={buttonX.text}
          />
        </CustomMeshWithMatcap>
      </a.group>
      {/*-----? Button------------------------------------------*/}
      <a.group ref={questionMark} {...buttonQuestionMark.groupProps}>
        <CustomMeshWithMatcap>
          <TextGeometryFromFont
            fontExtrudeSettings={buttonQuestionMark.fontExtrudeSettings}
            text={buttonQuestionMark.text}
          />
        </CustomMeshWithMatcap>
      </a.group>
    </a.group>
  );
  //     )
  // );
});

export default EndButtons;

// return (
//   <a.group
//     position-x={0}
//     position-y={0}
//     // position-y={springPositionY}
//     // position-y={0}
//     position-z={zPosition}
//   >
//     <a.group position-y={springPositionY}>
//       {/*-----Instant Contact Buttons-------------------------------*/}
//       <InstantContactsSection />
//     </a.group>
//     {/*-----X Button------------------------------------------*/}
//     <a.group ref={xMark} {...buttonX.groupProps}>
//       <CustomMeshWithMatcap meshProps={buttonX.meshProps}>
//         <TextGeometryFromFont
//           fontExtrudeSettings={buttonX.fontExtrudeSettings}
//           text={buttonX.text}
//         />
//       </CustomMeshWithMatcap>
//     </a.group>
//     {/*-----? Button------------------------------------------*/}
//     <a.group ref={questionMark} {...buttonQuestionMark.groupProps}>
//       <CustomMeshWithMatcap>
//         <TextGeometryFromFont
//           fontExtrudeSettings={buttonQuestionMark.fontExtrudeSettings}
//           text={buttonQuestionMark.text}
//         />
//       </CustomMeshWithMatcap>
//     </a.group>
//   </a.group>
// );
