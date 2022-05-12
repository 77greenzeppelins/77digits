import React from 'react';
/*
Components
*/
import CustomMeshWithMatcap from '../../CustomMeshWithMatcap';
import TextGeometryFromFont from '../../../extrudedObjects/text/TextGeometryFromFont';
/*
Basic Data
*/
import { andSignConfig, circledPathConfig } from './andSignData';
/*
"additionalConfig" is usefull in case we want to reuse "collection"

*/
let additionalConfig;
/*
-----------------------------------------------------------------------
*/
const AndSign = ({ config }) => {
  /*
  Turbo SwitchSelector
  */

  switch (config) {
    case 'circledPath':
      additionalConfig = circledPathConfig;
      break;
    default:
      return null;
  }

  return (
    <CustomMeshWithMatcap
      meshProps={{ ...andSignConfig.meshProps, ...additionalConfig.meshProps }}
    >
      <TextGeometryFromFont
        fontExtrudeSettings={andSignConfig.fontExtrudeSettings}
        text={andSignConfig.text}
      />
    </CustomMeshWithMatcap>
  );
};

export default AndSign;
