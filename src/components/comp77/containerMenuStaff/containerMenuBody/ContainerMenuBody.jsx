import React from 'react';
/*
Components
*/
import LinksToContainers from './linksToContainers/LinksToContainers';
import ContactButton from './contactButton/ContactButton';
import ContactOverlay from './contactOverlay/ContactOverlay';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';
/*
react-device-detect Staff
*/
import { isMobileOnly } from 'react-device-detect';
/*
Basic Data
*/
import { colorsPalette } from '../../../../data/colors';

/*
------------------------------------------------------------------------
*/
const ContainerMenuBody = () => {
  /*
  Global State Section
  canvasState = {canvasGlobalState.currentContainer: 'none', isContactOverlayOpened: 'false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Spring Staff
  Remarks:
  ___1. "canvasGlobalState.currentContainer" can't be omitted; according to documentation this hook requires two argument; the very firs is for "items"; second embraces lifecycles
  */
  const transition = useTransition(
    canvasGlobalState.currentContainer === 'menuContainer',
    {
      from: { animatedValue: 0 },
      enter: { animatedValue: 1 },
      leave: { animatedValue: 0 },
      delay: 400,
    }
  );

  /*
  JSX
  */
  return transition(
    ({ animatedValue }, value) =>
      value && (
        <animated.div
          className="container-menu-top-content"
          /*
           */
          style={{
            opacity: animatedValue,
          }}
        >
          {/*-----Contact Button-------------------*/}
          <ContactOverlay
            isMobileOnly={isMobileOnly}
            specialColor={colorsPalette.p4royalBlue}
            specialBgColor={colorsPalette.p4antiqueWhiteRGB}
          />
          <ContactButton
            isMobileOnly={isMobileOnly}
            specialColor={colorsPalette.p4royalBlue}
          />
          {/*-----Links to containers--------------------------------*/}
          <LinksToContainers
            isMobileOnly={isMobileOnly}
            specialColor={colorsPalette.p4royalBlue}
          />
          {}
        </animated.div>
      )
  );
};

export default ContainerMenuBody;
