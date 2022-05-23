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
import {
  springConfig,
  //_____
  // resetButtonFrame,
  // resetButtonTextSlide,
  buttonQuestionMark,
  buttonX,
} from './endButtonsData';

/*
-----------------------------------------------------------------------------
*/
const EndButtons = () => {
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
  // const { springPositionZ } = useSpring({
  //   /*
  //   this animation happens when user scrolls to the end of container
  //   */
  //   springPositionZ: canvasGlobalState.endOfContainerIntro
  //     ? springConfig.positionZEnd
  //     : springConfig.positionZStart,
  //   config: springConfig.configBasic,
  //   delay: springConfig.delay,
  // });

  const transition = useTransition(canvasGlobalState.endOfContainerIntro, {
    from: { zPosition: springConfig.zStart },
    enter: { zPosition: springConfig.zEnd },
    leave: { zPosition: springConfig.zStart },
    config: springConfig.configBasic,
    delay: springConfig.delay,
  });

  const { springPositionY } = useSpring({
    /*
    this animation happens when user clicks  "questionMark-button"; as a result whole <EB> section goes up; it's actually the very first part of "two-stage" animation where the second part take place in <RaphaelSection> whwn "X-button" is clicked;
    */
    springPositionY: canvasGlobalState.isRaphaelVisible
      ? springConfig.yEnd
      : springConfig.yStart,
    // config: springConfig.molasses,
    config: springConfig.configBasic,
    delay: springConfig.delay,
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

  return transition(
    ({ zPosition }, condition) =>
      condition && (
        <a.group
          position-x={0}
          position-y={springPositionY}
          position-z={zPosition}
        >
          {/*-----Instant Contact Buttons-------------------------------*/}
          <InstantContactsSection />

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
      )
  );
};

export default EndButtons;
