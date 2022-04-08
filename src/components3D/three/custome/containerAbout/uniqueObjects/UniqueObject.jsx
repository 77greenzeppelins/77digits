import React from 'react';
/*
Components
*/
import TechSphere from './techSphere/TechSphere';
import MusicNote from './musicNote/MusicNote';
import InstancedQuestionMark from './instancedQuestionMark/InstancedQuestionMark';

const UniqueObject = ({ uniqueObject }) => {
  /*
  Turbo SwitchSelector
  */
  const objectsSelector = () => {
    switch (uniqueObject) {
      case 'musicNote':
        // console.log('render TechSphere');
        return <MusicNote />;
      case 'techSphere':
        // console.log('render TechSphere');
        return <TechSphere />;
      case 'unique3DText':
        // console.log('render unique3DText');
        return <InstancedQuestionMark />;
      default:
        // console.log('render default shit');
        return null;
    }
  };
  return objectsSelector();
};

export default UniqueObject;
