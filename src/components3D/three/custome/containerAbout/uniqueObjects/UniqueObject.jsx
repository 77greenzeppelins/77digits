import React, { useEffect } from 'react';
/*
Components
*/
import TechSphere from './techSphere/TechSphere';
import MusicNote from './musicNote/MusicNote';

const UniqueObject = ({ uniqueObject }) => {
  /*
  ...  
  */
  //   useEffect(() => {
  //     console.log('UniqueObject / uniqueObject', uniqueObject);
  //   }, [uniqueObject]);
  /*
    
  */
  const objectsSelector = () => {
    switch (uniqueObject) {
      case 'musicNote':
        console.log('render TechSphere');
        return <MusicNote />;
      case 'techSphere':
        console.log('render TechSphere');
        return <TechSphere />;
      default:
        console.log('render default shit');
        return null;
    }
  };
  return objectsSelector();
  // return null;
};

export default UniqueObject;
