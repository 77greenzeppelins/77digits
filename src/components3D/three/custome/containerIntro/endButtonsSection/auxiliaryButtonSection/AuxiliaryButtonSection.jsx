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
import { auxiliaryButtonQuestionMark } from '../endButtonsData';

/*
---------------------------------------------------------------------
*/
const AuxiliaryButtonSection = () => {
  /*
  References Section
  */
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
      bottomButton.current.rotation.y = -Math.cos(time * 0.4) * 0.8;
      bottomButton.current.rotation.z = -Math.sin(time * 0.4) * 0.02;
    }
  });
  return (
    <>
      {/*-----Auxiliary Bottom Button------------------------------*/}
      <group ref={bottomButton} {...auxiliaryButtonQuestionMark.groupProps}>
        <CustomMeshWithMatcap>
          <TextGeometryFromFont
            fontExtrudeSettings={
              auxiliaryButtonQuestionMark.fontExtrudeSettings
            }
            text={auxiliaryButtonQuestionMark.text}
          />
        </CustomMeshWithMatcap>
      </group>
    </>
  );
};

export default AuxiliaryButtonSection;
