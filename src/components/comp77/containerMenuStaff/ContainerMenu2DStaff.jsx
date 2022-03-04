import React from 'react';
/*
Components
*/
import ContainerMenuInstantContact from './containerMenuInstantContact/ContainerMenuInstantContact';
import ContainerMenuBody from './containerMenuBody/ContainerMenuBody';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Hooks
*/
import useWindowSize from '../../../hooks/useWindowSize';
/*
Basic Data
"topHeightFactor" & "bottomHeightFactor" defines general layout of this component; i.e. divide page into two parts; bottom part is ment to cover 3D objects, pseudo-buttons;
*/
const topHeightFactor = 0.755;
const bottomHeightFactor = 1 - topHeightFactor;

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
    <div
      className="container-menu"
      style={{
        /*
        <ContainerMenu> is displayed only when currentContainer === 'menuContainer'
        */
        display:
          canvasGlobalState.currentContainer === 'menuContainer'
            ? 'block'
            : 'none',
      }}
    >
      <div
        className="container-menu__top"
        style={{ height: windowSize.height * topHeightFactor }}
      >
        <ContainerMenuBody />
      </div>
      <div
        className="container-menu__bottom"
        style={{ height: windowSize.height * bottomHeightFactor }}
      >
        <ContainerMenuInstantContact />
      </div>
    </div>
  );
};

export default ContainerMenu2DStaff;
