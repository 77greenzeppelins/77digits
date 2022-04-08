import React from 'react';
/*
3D Components - Drei Staff
*/
import DraiPerspectiveCamera from '../../../components3D/drei/cameras/DraiPerspectiveCamera';
/*
3D Components - Fiber
*/
import CanvasStateObserver from '../../../components3D/fiber/canvasStateObserver/CanvasStateObserver';
/*
3D Components - main content
*/
import ContainerMenu from '../../../components3D/three/custome/containerMenu/ContainerMenu';
import ContainerAbout from '../../../components3D/three/custome/containerAbout/ContainerAbout';
import ContainerIntro from '../../../components3D/three/custome/containerIntro/ContainerIntro';

/*
-------------------------------------------------------------------------
*/

const Scene = ({ groupProps }) => {
  /*
  JSX
  */
  return (
    <>
      {/*-----Camera Control Section-------------------------------------- */}
      <DraiPerspectiveCamera />

      {/*-----Intro Container----------------------------------------*/}
      <ContainerIntro />

      {/*-----About Container----------------------------------------*/}
      <ContainerAbout />

      {/*-----Menu Container-----------------------------------------*/}
      <ContainerMenu />

      {/*-----Helpers------------------------------------------------*/}
      <CanvasStateObserver />
    </>
  );
};

export default Scene;
