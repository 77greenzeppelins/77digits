/*
used in <SideLabel>
*/
import React from 'react';
/*
Components
*/
import JestesTyText from '../../_meshesWithMatcap/collection/jestesTyText/JestesTyText';
import MusicNote from './musicNote/MusicNote';
import MedicineDatail from './clientSide/medicineDetail/MedicineDatail';
import CircledPath from '../../instancedMeshes/collection/CircledPath/CircledPath';
import AndSign from '../../_meshesWithMatcap/collection/andSign/AndSign';
/*
Global State Staff
*/
import { canvasState } from '../../../../../states/canvasState';
import { useSnapshot } from 'valtio';

/*
---------------------------------------------------------------------------
*/
const UniqueObject = ({ uniqueObject }) => {
  /*
  Global state Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Condition that triggeres animation of particular "uo"
  */
  const animationTrigger =
    canvasGlobalState.currentContainer === 'aboutContainer' &&
    canvasGlobalState.isClientSideVisible &&
    canvasGlobalState.containerAboutVisibleSlideIndex === 0;
  // console.log('animationTrigger', animationTrigger);
  /*
  Turbo SwitchSelector
  */
  const objectsSelector = () => {
    switch (uniqueObject) {
      /*
      clientSection
      */
      case 'youAre':
        return <JestesTyText trigger={animationTrigger} />;
      case 'musicNote':
        return <MusicNote />;
      case 'medicineDetail':
        return <MedicineDatail trigger={animationTrigger} />;
      /*
      77digitsSection
      */
      // case 'braveClient':
      //   return <BraveClientsPictureOnPlane />;
      case 'circledPath':
        return (
          <>
            <CircledPath trigger={animationTrigger} />
            <AndSign config="circledPath" />
          </>
        );
      default:
        return null;
    }
  };
  return objectsSelector();
};

export default UniqueObject;
