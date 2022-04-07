import React, { useEffect } from 'react';
/*
Components
*/
import TechSphere from './techSphere/TechSphere';
import MusicNote from './musicNote/MusicNote';
import TesselatedObject from './tesselatedObject/TesselatedObject';
import InstancedQuestionMark from './instancedQuestionMark/InstancedQuestionMark';

const UniqueObject = ({ uniqueObject }) => {
  /*
  Turbo SwitchSelector
  */
  const objectsSelector = () => {
    switch (uniqueObject) {
      case 'musicNote':
        console.log('render TechSphere');
        return <MusicNote />;
      case 'techSphere':
        console.log('render TechSphere');
        return <TechSphere />;
      case 'tesselateObj':
        console.log('render tesselateObj');
        return <TesselatedObject />;
      case 'unique3DText':
        console.log('render tesselateObj');
        return <InstancedQuestionMark />;
      default:
        console.log('render default shit');
        return null;
    }
  };
  return objectsSelector();
};

export default UniqueObject;
