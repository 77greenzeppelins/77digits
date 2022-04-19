import React, { useRef, Suspense } from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../states/canvasState';
/*
Spring Staff
*/
import { a, useTransition } from '@react-spring/three';

/*
Basic Data
*/
import {
  mainGroupSpringData,
  leftButton,
  rightButton,
} from './navigationPanelData';

const NavigationPanel = () => {
  /*
  References
  */
  const leftButtonRef = useRef();
  const rightButtonRef = useRef();
  /*
  Global State Section
  canvasState = {}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Section
  */
  const transition = useTransition(
    /*
    condition
    */
    canvasGlobalState.currentContainer === 'aboutContainer' &&
      canvasGlobalState.isNavPanelOpened === true,
    /*
    configObj  
    */
    {
      from: { position: mainGroupSpringData.startingPosition },
      enter: { position: mainGroupSpringData.endingPosition },
      leave: { position: mainGroupSpringData.startingPosition },
      // delay: 200,
      config: mainGroupSpringData.config,
    }
  );
  /*
  JSX
  */
  return transition(
    ({ position }, condition) =>
      condition && (
        <a.group position={position}>
          <Suspense fallback={null}>
            {/*-----Auxiliary Left Button---------------------------------*/}
            <group ref={leftButtonRef} {...leftButton.groupProps}>
              <UniversalFrame {...leftButton.frameProps} />
              <UniversalCanvas {...leftButton.canvasProps} />
            </group>

            {/*-----Auxiliary Right Button------------------------------*/}
            <group ref={rightButtonRef} {...rightButton.groupProps}>
              <UniversalFrame {...rightButton.frameProps} />
              <UniversalCanvas {...rightButton.canvasProps} />
            </group>
          </Suspense>
        </a.group>
      )
  );
};

export default NavigationPanel;

/*-----Rotate Button---------------------------------
  <group {...rotateButton.groupProps}>
    <UniversalFrame {...rotateButton.frameProps} />
    <TextSlide {...rotateButton.textSlideProps} />
  </group>;
*/
