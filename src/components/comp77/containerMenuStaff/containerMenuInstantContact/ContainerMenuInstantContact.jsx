import React from 'react';
/*
Container
*/
import LinkToInstantContact from '../../links/linkToInstantContact/LinkToInstantContact';
/*
Hook
*/
import useWindowSize from '../../../../hooks/useWindowSize';
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
BasicData
*/
const businessMail = 'mailto:77greenzeppelins@gmail.com';
const businessPhone = 'tel:798-905-558';

const ContainerMenuInstantContact = () => {
  /*
  Global State Section
  canvasState = {isContainerAboutIntroductionClosed: 'none',}
  */
  const globalCanvasState = useSnapshot(canvasState);
  /*
  Why this hooks?
  I need to calculate height of div with "container-menu_instant-contact" class;
  Why? I want this div to covers "3D frames" that resize according to device height;
  */
  const windowSize = useWindowSize();
  /*
  Spring Staff
  Remarks:
  ___1. "globalCanvasState.currentContainer" can't be omitted; according to documentation this hook requires two argument; the very first is for "items"; second embraces lifecycles
  */
  const transition = useTransition(
    globalCanvasState.currentContainer === 'menuContainer',
    {
      from: { animatedValue: 0 },
      enter: { animatedValue: 1 },
      leave: { animatedValue: 0 },
      delay: 400,
    }
  );
  return transition(
    ({ animatedValue }, value) =>
      value && (
        <animated.div
          className="container-menu-instant-contact__container"
          /*
           */
          style={{
            opacity: animatedValue,
            display:
              globalCanvasState.currentContainer !== 'menuContainer' && 'none',
          }}
        >
          <div className="container-menu-instant-contact__buttons">
            {/*-----Container for button EMAIL--------------------------*/}
            <button
              className="container-menu-instant-contact__button mobile"
              style={{
                width:
                  windowSize.height > 700 && windowSize.height * 0.045 + 100,
              }}
            >
              <LinkToInstantContact
                contact={businessMail}
                style={{ width: '100%', height: '100%' }}
              />
            </button>
            {/*-----separator--------------------------------*/}
            <div
              className="container-menu-instant-contact__separator"
              style={{
                width: windowSize.height > 700 && windowSize.height * 0.02 + 50,
              }}
            />
            {/*-----Button-------------------------------------------*/}
            <button
              className="container-menu-instant-contact__button email"
              style={{
                width:
                  windowSize.height > 700 && windowSize.height * 0.045 + 100,
              }}
            >
              <LinkToInstantContact
                contact={businessPhone}
                style={{ width: '100%', height: '100%' }}
              />
            </button>
          </div>
        </animated.div>
      )
  );
};

export default ContainerMenuInstantContact;
