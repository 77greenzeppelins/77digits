/*
used in <SideLabel>
*/
import React from 'react';
/*
Components
*/
import FrontUO from './frontUO/FrontUO';
import MusicNote from './musicNote/MusicNote';
import MedicineDatail from './clientSide/medicineDetail/MedicineDatail';
import BraveClientsPictureOnPlane from './77side/braveClientsPictureOnPlane/BraveClientsPictureOnPlane';
import CircledPath from '../../instancedMeshes/collection/CircledPath/CircledPath';
import AndSign from '../../_meshesWithMatcap/collection/andSign/AndSign';
/*
---------------------------------------------------------------------------
*/
const UniqueObject = ({ uniqueObject }) => {
  /*
  Turbo SwitchSelector
  */
  const objectsSelector = () => {
    switch (uniqueObject) {
      /*
      clientSection
      */
      case 'frontUO':
        return <FrontUO />;
      case 'musicNote':
        return <MusicNote />;
      case 'medicineDetail':
        return <MedicineDatail />;
      /*
      77digitsSection
      */
      case 'braveClient':
        return <BraveClientsPictureOnPlane />;
      case 'circledPath':
        return (
          <>
            <CircledPath />
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
