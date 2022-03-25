import React from 'react';
/*
Components
*/
import InstantContacts from './instantContacts/InstantContacts';
import ResetButton from './resetButton/ResetButton';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Hook Staff
*/
import useWindowSize from '../../../hooks/useWindowSize';

/*
----------------------------------------------------------------------
*/
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
      <InstantContacts />
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
