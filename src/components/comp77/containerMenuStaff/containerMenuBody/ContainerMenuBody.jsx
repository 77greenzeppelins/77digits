import React, { useState } from 'react';
/*
Components
*/
// import MarqueeSection from './marqueeSection/MarqueeSection';
import MenuLinksAndContacts from './menuLinksAndContactsSection/MenuLinksAndContacts';
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
------------------------------------------------------------------------
*/
const ContainerMenuBody = ({
  bodyMainContentHeight,
  bodyMarqueeHeight,
  isMobileOnly,
}) => {
  /*
  Global State Section
  canvasState = {canvasGlobalState.currentContainer: 'none', isContactOverlayOpened: 'false}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Local Sate Section
  "1" means: "contact" + <LinkToContainers>;
  "0" means: x / contact data / <Marquee>
  */
  const [buttonState, setButtonState] = useState(1);
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
          className={
            /*
            shortly: if isMobileOnly width is limited to 500px
            */
            isMobileOnly
              ? 'container-menu-body__mobile'
              : 'container-menu-body__no-mobile'
          }
          style={{
            opacity: animatedValue,
          }}
        >
          <div
            className={
              isMobileOnly
                ? 'container-menu-body__mobile-marquee-section'
                : 'container-menu-body__no-mobile-marquee-section'
            }
            style={{ height: isMobileOnly && bodyMarqueeHeight }}
          >
            {/* <MarqueeSection /> */}
          </div>

          <div
            className={
              isMobileOnly
                ? 'container-menu-body__mobile-main-section'
                : 'container-menu-body__no-mobile-main-section'
            }
            style={{ height: isMobileOnly && bodyMainContentHeight }}
          >
            <MenuLinksAndContacts
              /*
              staff for button <TurboToggler> to switch between <1,0>
              */
              buttonState={buttonState}
              setButtonState={setButtonState}
            />
          </div>
        </animated.div>
      )
  );
};
export default ContainerMenuBody;
