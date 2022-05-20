import React, { useEffect } from 'react';
/*
Components
*/
import CustomMeshWithMatcap from '../../CustomMeshWithMatcap';
import TextGeometryFromFont from '../../../extrudedObjects/text/TextGeometryFromFont';
/*
Basic Data
*/
import { exclamationMarkConfig } from './exclamationMarkData';

/*
--------------------------------------------------------------------
*/
const ExclamationMark = React.forwardRef(({ meshProps }, ref) => {
  //   useEffect(() => {
  //     console.log('meshProps', meshProps);
  //   }, [meshProps]);

  /*
  JSX
  */
  return (
    <CustomMeshWithMatcap ref={ref} meshProps={meshProps}>
      <TextGeometryFromFont
        fontExtrudeSettings={exclamationMarkConfig.fontExtrudeSettings}
        text={exclamationMarkConfig.text}
      />
    </CustomMeshWithMatcap>
  );
});

export default ExclamationMark;
