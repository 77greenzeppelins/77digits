/*
used in <SideLabel>
*/
import React from 'react';
/*
Components
*/
import FrontUO from './frontUO/FrontUO';
import MusicNote from './musicNote/MusicNote';
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
      case 'frontUO':
        return <FrontUO />;
      case 'musicNote':
        return <MusicNote />;
      case 'circledPath':
        return (
          <>
            {' '}
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
