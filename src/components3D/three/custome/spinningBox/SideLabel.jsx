import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../drei/text/textVerse/TextVerse';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Basic Data
*/
const [fontSmall, fontMedium, fontLarge] = [0.07, 0.08, 0.09];

/*
----------------------------------------------------------------------------
*/
const SideLabel = ({ groupProps, labelProps }) => {
  /*
  useThree Section
  */
  const { viewport } = useThree();

  useEffect(() => {
    console.log('labelProps:', labelProps);
  }, [labelProps]);

  /*
  JSX
  */
  return (
    <group {...groupProps}>
      {/*-----Awers-------------------------------------------------*/}
      {
        /*
      What is going on here?
      If textAwers === false no <TextVerse> is produced; instead <UniversalCanvas> with map is produced in <SpinningBpx>
      */
        labelProps.textAwers !== false && (
          <TextVerse
            textProps={{ position: [0, 0, 0.01] }}
            // text={textHeader.text}
            text={labelProps.textAwers}
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
        )
      }

      {/*-----Rewers-------------------------------------------------*/}
    </group>
  );
};

export default SideLabel;

/*
<SideLabel
textProps={{ position: [0, 0, 0.365], rotation: [0, 0, 0] }}
/>
*/
