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
import { mainTextConfiguration } from '../../scrollBannerConfiguration';

const FrontText = () => {
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
    <A11y
      role="content"
      description={mainTextConfiguration.plMainText.join(' ')}
    >
      <group name="GroupForScrollBanner_FrontText">
        {mainTextConfiguration.plMainText.map((line, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: [
                0,
                mainTextConfiguration.linePosition.topPositionY +
                  index * mainTextConfiguration.linePosition.reducePositionY,
                0.02,
              ],
            }}
            text={line}
            fontResponsiveness={
              viewport.width < 3.0
                ? mainTextConfiguration.fontSize.fontSmall
                : viewport.width < 5.5
                ? mainTextConfiguration.fontSize.fontMiddle
                : mainTextConfiguration.fontSize.fontLarge
            }
            letterSpacing={0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>
    </A11y>
  ) : (
    <A11y
      role="content"
      description={mainTextConfiguration.enMainText.join(' ')}
    >
      <group>
        {mainTextConfiguration.enMainText.map((line, index) => (
          <TextVerse
            key={index}
            textProps={{
              position: [
                0,
                mainTextConfiguration.linePosition.topPositionY +
                  index * mainTextConfiguration.linePosition.reducePositionY,
                0.02,
              ],
              name: 'ScrollBanner_FrontText',
            }}
            text={line}
            fontResponsiveness={
              viewport.width < 3.0
                ? mainTextConfiguration.fontSize.fontSmall
                : viewport.width < 5.5
                ? mainTextConfiguration.fontSize.fontMiddle
                : mainTextConfiguration.fontSize.fontLarge
            }
            letterSpacing={0.15}
            whiteSpace="nowrap" //'normal' "nowrap"
            maxWidth={viewport.width / 9}
          />
        ))}
      </group>
    </A11y>
  );
};

export default FrontText;
