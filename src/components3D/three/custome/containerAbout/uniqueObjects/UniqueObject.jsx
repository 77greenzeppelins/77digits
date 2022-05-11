import React from 'react';
/*
Components
*/
import FrontUO from './frontUO/FrontUO';

import MusicNote from './musicNote/MusicNote';

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
      default:
        return null;
    }
  };
  return objectsSelector();
};

export default UniqueObject;
