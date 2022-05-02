import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
/*
Components
*/
import CustomMeshWithMatcap from '../../../_meshesWithMatcap/CustomMeshWithMatcap';
import TextGeometryFromFont from '../../../extrudedObjects/text/TextGeometryFromFont';
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
        <CustomMeshWithMatcap>
          <TextGeometryFromFont
            fontExtrudeSettings={auxiliaryTopButton.fontExtrudeSettings}
            text="?"
          />
          {/* <boxGeometry /> */}
        </CustomMeshWithMatcap>
      </group>

      {/*-----Auxiliary Bottom Button------------------------------*/}
      <group ref={bottomButton} {...auxiliaryBottomButton.groupProps}>
        <CustomMeshWithMatcap>
          <TextGeometryFromFont
            fontExtrudeSettings={auxiliaryTopButton.fontExtrudeSettings}
            text="?"
          />
        </CustomMeshWithMatcap>
      </group>
    </>
  );
};

export default AuxiliaryButtonSection;
