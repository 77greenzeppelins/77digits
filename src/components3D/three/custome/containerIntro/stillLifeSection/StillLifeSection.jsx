import React from 'react';
/*
Components
*/
import UniversalFrame from '../../matcapFrames/UniversalFrame';
import UniversalCanvas from '../../matcapFrames/UniversalCanvas';
/*
Hook Staff
*/
import useWindowSize from '../../../../../hooks/useWindowSize';
/*
Basic Data
*/
import { paintingData } from './stillLifeSectionData';

const StillLifeSection = () => {
  /*
  Hook section
  */
  const windowSize = useWindowSize();
  const groupProps =
    windowSize.width < 600
      ? { ...paintingData.mobileGroupProps }
      : { ...paintingData.desktopGroupProps };
  /*
  JSX
  */
  return (
    <group {...groupProps}>
      <UniversalFrame {...paintingData.frameProps} />
      <UniversalCanvas {...paintingData.canvasProps} />
    </group>
  );
};

export default StillLifeSection;
