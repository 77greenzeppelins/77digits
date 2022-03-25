import React from 'react';
/*
Components
*/
import LinkToInstantContact from '../links/linkToInstantContact/LinkToInstantContact';
import ResetButton from './resetButton/ResetButton';
import AuxiliaryButton from './auxiliaryButton/AuxiliaryButton';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Hook
*/
import useWindowSize from '../../../hooks/useWindowSize';
/*
BasicData
*/
const businessMail = 'mailto:77greenzeppelins@gmail.com';
const businessPhone = 'tel:798-905-558';

const ContainerIntro2DStaff = () => {
  /*
  Global State Section
  canvasState={endOfContainerIntro: false,...}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Hook Section
  */
  const windowSize = useWindowSize();

  /*
  JSX
  */
  return (
    <>
      {
        /*
        this first piece of JS have a logic that specify when  html-map on 3D-instantContactButtons of <EndButtons> should by rendered
        */
        canvasGlobalState.currentContainer === 'introContainer' &&
          canvasGlobalState.endOfContainerIntro &&
          !canvasGlobalState.startOfContainerIntroShow && (
            <div
              className="container-intro__wrapper"
              style={{
                width: windowSize.width,
              }}
            >
              <div
                className="container-intro__buttons-container"
                style={{
                  height: windowSize.height,
                  width: windowSize.height * 0.27,
                }}
              >
                <button
                  className="container-intro__phone-button"
                  style={{
                    height: windowSize.height * 0.35,
                    width: windowSize.height * 0.27,
                  }}
                >
                  <LinkToInstantContact
                    contact={businessPhone}
                    style={{ width: '100%', height: '100%' }}
                  />
                </button>
                <div
                  className="container-intro__reset-button"
                  style={{
                    height: windowSize.height * 0.1,
                    width: windowSize.height * 0.22,
                  }}
                >
                  <ResetButton toDo="reset" />
                </div>
                <button
                  className="container-intro__email-button"
                  style={{
                    height: windowSize.height * 0.35,
                    width: windowSize.height * 0.27,
                  }}
                >
                  <LinkToInstantContact
                    contact={businessMail}
                    style={{ width: '100%', height: '100%' }}
                  />
                </button>

                {/*-----auxiliart buttons--------------------------------*/}
                <div
                  className="container-intro__auxiliary-button-top"
                  style={{
                    height: windowSize.height * 0.35 * 0.3,
                    width: windowSize.height * 0.27 * 0.3,
                  }}
                >
                  <AuxiliaryButton id="auxiliary-button-top" />
                </div>
                <div
                  className="container-intro__auxiliary-button-bottom"
                  style={{
                    height: windowSize.height * 0.35 * 0.3,
                    width: windowSize.height * 0.27 * 0.3,
                  }}
                >
                  <AuxiliaryButton id="auxiliary-button-bottom" />
                </div>
              </div>
            </div>
          )
      }
      {
        /*
        this second piece of JS have a logic that specify when  html-map on 3D-closeButton of <RaphaelSection> should by rendered
        */
        canvasGlobalState.startOfContainerIntroShow && (
          <div
            className="container-intro-paintings__wrapper"
            style={{
              width: windowSize.width,
            }}
          >
            <div
              className="container-intro-paintings__button-wrapper"
              style={{
                height: windowSize.height * 0.1,
                width: windowSize.height * 0.2,
                top: -windowSize.height * 0.1,
              }}
            >
              <ResetButton toDo="close" />
            </div>
          </div>
        )
      }
    </>
  );
};

export default ContainerIntro2DStaff;
