import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { BoxBufferGeometry } from 'three';
/*
Components
*/
import UniversalFrame from '../../../matcapFrames/UniversalFrame';
import TextSlide from '../../../textSlides/textSlide/TextSlide';
import ExtrudedObject from '../../../extrudedObjects/ExtrudedObject';
import BasicTextGeometry from '../../../text3D/BasicTextGeometry';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../states/canvasState';
/*
Basic Data
*/
import { auxiliaryTopButton, auxiliaryBottomButton } from '../endButtonsData';

/*
---------------------------------------------------------------------
*/
const AuxiliaryButtonSection = () => {
  /*
  References Section
  */
  const topButton = useRef();
  const bottomButton = useRef();
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);

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
      canvasGlobalState.endOfContainerIntro
    ) {
      topButton.current.rotation.y = Math.cos(time * 0.4) * 0.8;
      topButton.current.rotation.z = Math.sin(time * 0.4) * 0.02;
    }
    if (
      canvasGlobalState.currentContainer === 'introContainer' &&
      canvasGlobalState.endOfContainerIntro
    ) {
      bottomButton.current.rotation.y = -Math.cos(time * 0.4) * 0.8;
      bottomButton.current.rotation.z = -Math.sin(time * 0.4) * 0.02;
    }
  });
  return (
    <>
      {/*-----Auxiliary Top Button---------------------------------*/}
      <group ref={topButton} {...auxiliaryTopButton.groupProps}>
        {/* <UniversalFrame {...auxiliaryTopButton.frameProps} />
        <TextSlide {...auxiliaryTopButton.textSlideProps} /> */}
        <ExtrudedObject>
          <BasicTextGeometry
            textGeometryProps={{
              size: 0.7,
              height: 0.03,
              bevelEnabled: true,
              curveSegments: 2,
              bevelThickness: 0.01,
              bevelSize: 0.005,
            }}
            text="?"
          />
          {/* <boxGeometry /> */}
        </ExtrudedObject>
      </group>

      {/*-----Auxiliary Bottom Button------------------------------*/}
      <group ref={bottomButton} {...auxiliaryBottomButton.groupProps}>
        <ExtrudedObject>
          <BasicTextGeometry
            textGeometryProps={{
              size: 0.7,
              height: 0.03,
              bevelEnabled: true,
              curveSegments: 2,
              bevelThickness: 0.01,
              bevelSize: 0.005,
            }}
            text="?"
          />
        </ExtrudedObject>
        {/* <UniversalFrame {...auxiliaryBottomButton.frameProps} /> */}
      </group>
    </>
  );
};

export default AuxiliaryButtonSection;
