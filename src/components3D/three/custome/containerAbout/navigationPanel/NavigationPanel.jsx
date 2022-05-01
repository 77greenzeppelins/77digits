import React, { useRef, Suspense, useEffect } from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
// import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
import CustomeMeshWithMatcap from '../../_meshesWithMatcap/CustomMeshWithMatcap';
import ArrowSharpHorizontalGeometry from '../../extrudedObjects/arrows/arrowSharp/ArrowSharpHorizontalGeometry';

/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/
import { a } from '@react-spring/three';

/*
Basic Data
*/
import {
  // mainGroupSpringData,
  leftButton,
  rightButton,
} from './navigationPanelData';

/*
-----------------------------------------------------------------------
*/
const NavigationPanel = ({ positionNavPanel }) => {
  /*
  References
  */
  const leftButtonRef = useRef();
  const rightButtonRef = useRef();
  const groupRef = useRef();

  /*
  Global State Section
  canvasState = {}
  */
  // const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  // const springValue = useSpring({
  //   position:
  //     canvasGlobalState.isNavPanelOpened === true
  //       ? mainGroupSpringData.endingPosition
  //       : mainGroupSpringData.startingPosition,
  //   config: mainGroupSpringData.config,
  // });

  /*
  Tests............
  */
  // useEffect(() => {
  //   console.log(
  //     'canvasGlobalState.isNavPanelOpened',
  //     canvasGlobalState.isNavPanelOpened
  //   );
  //   console.log('positionNavPanel', positionNavPanel);
  //   console.log('groupRef.current', groupRef.current);
  // }, [canvasGlobalState.isNavPanelOpened, positionNavPanel]);

  /*
  JSX
  */
  return (
    <a.group ref={groupRef} position={positionNavPanel}>
      <Suspense fallback={null}>
        {/*----- Left Button---------------------------------*/}
        <group ref={leftButtonRef} {...leftButton.groupProps}>
          <CustomeMeshWithMatcap meshProps={leftButton.customeMeshProps}>
            <ArrowSharpHorizontalGeometry />
          </CustomeMeshWithMatcap>
        </group>

        {/*----- Right Button------------------------------*/}
        <group ref={rightButtonRef} {...rightButton.groupProps}>
          <CustomeMeshWithMatcap meshProps={rightButton.customeMeshProps}>
            <ArrowSharpHorizontalGeometry />
          </CustomeMeshWithMatcap>
        </group>

        {/* <group ref={rightButtonRef} {...rightButton.groupProps}>
          <CustomeMeshWithMatcap
            meshProps={{
              scale: [0.04, 0.04, 0.04],
              rotation: [0, 0, 0.5 * Math.PI],
              position: [0, 0.045, 0],
            }}
          >
            <ArrowSharpHorizontalGeometry />
          </CustomeMeshWithMatcap>

          <CustomeMeshWithMatcap
            meshProps={{
              scale: [0.04, 0.04, 0.04],
              rotation: [0, 0, -0.5 * Math.PI],
              position: [0, -0.023, 0],
            }}
          >
            <ArrowSharpHorizontalGeometry />
          </CustomeMeshWithMatcap>
        </group> */}
      </Suspense>
    </a.group>
  );
};

export default NavigationPanel;

/*-----Rotate Button---------------------------------
  <group {...rotateButton.groupProps}>
    <UniversalFrame {...rotateButton.frameProps} />
    <TextSlide {...rotateButton.textSlideProps} />
  </group>;
*/
