import React from 'react';
/*
Components
*/
// import ContainerMenuInstantContact from './containerMenuInstantContact/ContainerMenuInstantContact';
import ContainerMenuBody from './containerMenuBody/ContainerMenuBody';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
react-device-detect Staff
*/
import { isMobileOnly } from 'react-device-detect';
/*
Hooks
*/
import useWindowSize from '../../../hooks/useWindowSize';
/*
Basic Data
"mobileTopHeight" & "mobileBottomHeight" defines general layout of this component; i.e. divide page into two parts; bottom part is ment to cover 3D objects rendered by <ContactFrame>; they look like rotating buttons, yet they don't have buttons'functionality... ;
*/
const mobileTopHeight = 0.755;
const mobileBottomHeight = 1 - mobileTopHeight;
/*
-------------------------------------------------------------------------------
*/
const ContainerMenu2DStaff = () => {
  /*
  canvasState={currentContainer: 'none'}
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Why this hooks?
  I need to calculate height of div with "container-menu_instant-contact" class;
  Why? I want this div to covers "3D frames" that resize according to device height;
  */
  const windowSize = useWindowSize();
  /*
 ...
 */
  // useEffect(() => {
  //   console.log('windowSize:', windowSize.height);
  // }, [windowSize]);
  /*
  JSX
  */
  return (
    canvasGlobalState.currentContainer === 'menuContainer' && (
      <div className="container-menu">
        <div
          className={
            isMobileOnly
              ? 'container-menu__mobile-top'
              : 'container-menu__no-mobile'
          }
          style={{
            height: isMobileOnly
              ? windowSize.height * mobileTopHeight
              : windowSize.height,
          }}
        >
          <ContainerMenuBody
            /*
            <CMB> has two section; for "mobileOnly"  we calculate height each of them taking "container-menu__mobile-top" as a base it allowes to maintain space for <ContainerMenuInstantContact> that doesn't exist in "no-mobile" version ;
            */
            bodyMainContentHeight={windowSize.height * mobileTopHeight * 0.45}
            bodyMarqueeHeight={windowSize.height * mobileTopHeight * 0.4}
            isMobileOnly={isMobileOnly}
          />
        </div>
        {isMobileOnly && (
          <div
            className="container-menu__mobile-bottom"
            style={{
              height: isMobileOnly ? windowSize.height * mobileBottomHeight : 0,
            }}
          >
            {/* <ContainerMenuInstantContact /> */}
          </div>
        )}
      </div>
    )
  );
};

export default ContainerMenu2DStaff;
