import React from 'react';
/*
Components
*/
import DreiText from '../../../drei/text/dreiText/DreiText';
import UniversalCanvas from '../matcapFrames/UniversalCanvas';
import UniqueObject from '../containerAbout/uniqueObjects/UniqueObject';

/*
Hook Staff
*/
// import useWindowSize from '../../../../hooks/useWindowSize';

/*
----------------------------------------------------------------------------
*/
const SideLabel = ({ labelProps }) => {
  /*
  Hook size
  */
  // const windowSize = useWindowSize();
  /*
  JSX
  */
  return (
    <group rotation={[0, 0, 0]}>
      <UniversalCanvas {...labelProps.canvasProps} />
      {labelProps.uniqueObjectName && (
        <UniqueObject uniqueObject={labelProps.uniqueObjectName} />
      )}
      {/*
       Text Section
      */}
      <DreiText textConfig={labelProps.textConfigHeader} />
      {labelProps.paragraphs &&
        labelProps.paragraphs.map(({ textConfig }, index) => (
          <DreiText key={index} textConfig={textConfig} />
        ))}
    </group>
  );
};

export default SideLabel;

/*
<SideLabel
textProps={{ position: [0, 0, 0.365], rotation: [0, 0, 0] }}
/>
*/
