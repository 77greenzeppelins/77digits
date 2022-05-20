/*
used in <SideLabel>
*/
import React from 'react';
/*
Components
*/
import Exclamation from './clientSide/exclamationMark/Exclamation';
import JestesTyText from '../../_meshesWithMatcap/collection/jestesTyText/JestesTyText';
import MusicNote from './musicNote/MusicNote';
import MedicineDatail from './clientSide/medicineDetail/MedicineDatail';
import BraveClientsPictureOnPlane from './77side/braveClientsPictureOnPlane/BraveClientsPictureOnPlane';
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
  const clientSideAnimationTrigger =
    canvasGlobalState.currentContainer === 'aboutContainer' &&
    canvasGlobalState.isClientSideVisible &&
    canvasGlobalState.containerAboutVisibleSlideIndex === 0;
  // console.log('animationTrigger', animationTrigger);

  const mySideAnimationTrigger =
    canvasGlobalState.currentContainer === 'aboutContainer' &&
    !canvasGlobalState.isClientSideVisible &&
    canvasGlobalState.containerAboutVisibleSlideIndex === 0;

  /*
  Turbo SwitchSelector
  */
  const objectsSelector = () => {
    switch (uniqueObject) {
      /*
      clientSection
      */
      case 'youAre':
        return <Exclamation trigger={clientSideAnimationTrigger} />;
      case 'musicNote':
        return <MusicNote />;
      case 'medicineDetail':
        return <MedicineDatail trigger={clientSideAnimationTrigger} />;
      /*
      77digitsSection
      */
      case 'braveClient':
        return <BraveClientsPictureOnPlane />;
      case 'circledPath':
        return (
          <>
            <CircledPath trigger={mySideAnimationTrigger} />
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
