import React from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
import UniversalCanvasWithoutMap from '../matcapFrames/UniversalCanvasWithoutMap';

/*
----------------------------------------------------------------------------
*/
const SideLabel = ({ labelProps }) => {
  /*
  useThree Section
  */
  const { viewport } = useThree();
  /*
  JSX
  */
  return (
    <group
      rotation={[
        0,
        /*
        if textAwers is false user can see the image
        */
        !labelProps.textAwers ? Math.PI : 0,
        0,
      ]}
    >
      <TextVerse
        // textProps={{ position: [0, 0, 0.015] }}
        textProps={{ position: labelProps.textPosition }}
        text={
          labelProps.textAwers ? labelProps.textAwers : labelProps.textRewers
        }
        font={labelProps.font}
        fontResponsiveness={
          viewport.width < 3.0
            ? labelProps.fontSizes.fontSmall
            : viewport.width < 5.5
            ? labelProps.fontSizes.fontMedium
            : labelProps.fontSizes.fontLarge
        }
        textAlign={labelProps.textAlign}
        whiteSpace={labelProps.whiteSpace}
        maxWidth={viewport.width * labelProps.MaxWidthFactor}
      />
      <UniversalCanvasWithoutMap format={labelProps.format} />
    </group>
  );
};

export default SideLabel;

/*
<SideLabel
textProps={{ position: [0, 0, 0.365], rotation: [0, 0, 0] }}
/>
*/
