import React from 'react';
/*
Components
*/
import LinksToContainers from './linksToContainers/LinksToContainers';
import ContactSection from './contactSection/ContactSection';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../../states/canvasState';
/*
Spring Staff
*/
import { animated, useTransition } from '@react-spring/web';

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
          className="container-menu-body"
          /*
           */
          style={{
            opacity: animatedValue,
          }}
        >
          {/*-----Contact Button + Contact Overlay-------------------*/}
          <ContactSection />
          {/*-----Links to containers--------------------------------*/}
          <LinksToContainers />
        </animated.div>
      )
  );
};

export default ContainerMenuBody;
