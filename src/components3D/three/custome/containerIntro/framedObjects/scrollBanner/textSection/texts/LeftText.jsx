import React from 'react';
import { useThree } from '@react-three/fiber';
/*
Components
*/
import TextVerse from '../../../../../../../drei/text/textVerse/TextVerse';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../../../../../states/canvasState';
/*
Accesibility staff
*/
import { A11y } from '@react-three/a11y';
/*
Basic Data
*/
import { leftTextConfiguration } from '../../scrollBannerConfiguration';

/*
---------------------------------------------------------------------------
*/
const LeftText = () => {
  /*
  Global State Section
  canvasState={languageVersion: 'pl',...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  extracting data from useThree()
  */
  const { viewport } = useThree();
  /*
  JSX
  */
  return canvasGlobalState.languageVersion === 'pl' ? (
    <A11y role="content" description={leftTextConfiguration.plLeftText}>
      <group name="GroupForLeftTextPl" {...leftTextConfiguration.groupProps}>
        <TextVerse
          text={leftTextConfiguration.plLeftText}
          fontResponsiveness={
            viewport.width < 3.0
              ? leftTextConfiguration.fontSize.fontSmall
              : viewport.width < 5.5
              ? leftTextConfiguration.fontSize.fontMiddle
              : leftTextConfiguration.fontSize.fontLarge
          }
          letterSpacing={0.15}
          whiteSpace="normal" //'normal' "nowrap"
          maxWidth={viewport.width / leftTextConfiguration.plMaxWidth}
        />
      </group>
    </A11y>
  ) : (
    <A11y role="content" description={leftTextConfiguration.enMainText}>
      <group name="GroupForLeftTextEn" {...leftTextConfiguration.groupProps}>
        <TextVerse
          text={leftTextConfiguration.enLeftText}
          fontResponsiveness={
            viewport.width < 3.0
              ? leftTextConfiguration.fontSize.fontSmall
              : viewport.width < 5.5
              ? leftTextConfiguration.fontSize.fontMiddle
              : leftTextConfiguration.fontSize.fontLarge
          }
          letterSpacing={0.15}
          whiteSpace="normal" //'normal' "nowrap"
          maxWidth={viewport.width / leftTextConfiguration.enMaxWidth}
        />
      </group>
    </A11y>
  );
};

export default LeftText;
