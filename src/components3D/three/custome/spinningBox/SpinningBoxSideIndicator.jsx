import React from 'react';
/*
Components
*/
import CustomMeshWithMatcap from '../_meshesWithMatcap/CustomMeshWithMatcap';
import TextGeometryFromFont from '../extrudedObjects/text/TextGeometryFromFont';
/*
Spring data
*/
import { a } from '@react-spring/three';

/*
----------------------------------------------------------------------------
*/
const SpinningBoxSideIndicator = ({ indicatorCongif, springValue }) => {
  /*
  JSX creator
  */
  const createJSX = () => {
    if (!indicatorCongif) {
      return;
    }
    return (
      <group {...indicatorCongif.mainGroupProps}>
        {indicatorCongif.glyphs.map(
          ({ glyphGroupProps, fontExtrudeSettings, text }, index) => (
            <a.group
              key={text}
              position={glyphGroupProps.position}
              rotation-z={index === 4 ? springValue[index] : 0}
              scale={index === 4 ? 1 : springValue[index]}
            >
              <CustomMeshWithMatcap>
                <TextGeometryFromFont
                  fontExtrudeSettings={fontExtrudeSettings}
                  text={text}
                />
              </CustomMeshWithMatcap>
            </a.group>
          )
        )}
      </group>
    );
  };
  /*
  JSX
  */
  return createJSX();
};

export default SpinningBoxSideIndicator;
