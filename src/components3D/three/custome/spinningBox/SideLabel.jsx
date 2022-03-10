import React from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
import UniversalCanvasWithoutMap from '../matcapFrames/UniversalCanvasWithoutMap';
/*
Global State Staff
*/
// import { useSnapshot } from 'valtio';
// import { canvasState } from '../../../../states/canvasState';
/*
Basic Data
*/
const [fontSmall, fontMedium, fontLarge] = [0.07, 0.08, 0.09];

/*
----------------------------------------------------------------------------
*/
const SideLabel = ({ labelProps, portrait, banner }) => {
  /*
  useThree Section
  */
  const { viewport } = useThree();

  // useEffect(() => {
  //   console.log('labelProps:', labelProps);
  // }, [labelProps]);

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
        textProps={{ position: [0, 0, 0.015] }}
        // text={textHeader.text}
        text={
          labelProps.textAwers ? labelProps.textAwers : labelProps.textRewers
        }
        font="garamont"
        fontResponsiveness={
          viewport.width < 3.0
            ? fontSmall
            : viewport.width < 5.5
            ? fontMedium
            : fontLarge
        }
        textAlign="center"
        whiteSpace="normal" //'normal' "nowrap"
        maxWidth={viewport.width * 0.01}
      />
      <UniversalCanvasWithoutMap portrait={portrait} banner={banner} />
    </group>
  );
};

export default SideLabel;

/*
<SideLabel
textProps={{ position: [0, 0, 0.365], rotation: [0, 0, 0] }}
/>
*/
