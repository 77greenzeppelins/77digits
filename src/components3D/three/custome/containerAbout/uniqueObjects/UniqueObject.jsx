import React, { useEffect } from 'react';
/*
Components
*/
import TechSphere from './techSphere/TechSphere';
import MusicNote from './musicNote/MusicNote';
import TesselatedObject from './tesselatedObject/TesselatedObject';
import UniqueText3D from './uniqueText3D/UniqueText3D';

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
      case 'tesselateObj':
        console.log('render tesselateObj');
        return <TesselatedObject />;
      case 'unique3DText':
        console.log('render tesselateObj');
        return <UniqueText3D />;
      default:
        console.log('render default shit');
        return null;
    }
  };
  return objectsSelector();
  // return null;
};

export default UniqueObject;
