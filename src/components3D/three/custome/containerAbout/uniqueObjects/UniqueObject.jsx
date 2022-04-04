import React, { useEffect } from 'react';
/*
Components
*/
import TechSphere from './techSphere/TechSphere';

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
      //   case 'musicNote':
      //     console.log('render TechSphere');
      //     break;
      case 'techSphere':
        console.log('render TechSphere');
        return <TechSphere />;
      default:
        console.log('render default shit');
        return null;
    }
  };
  return objectsSelector();
};

export default UniqueObject;
