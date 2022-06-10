import React from 'react';
/*
3D Components - Drei Staff
*/
import DraiPerspectiveCamera from '../../../components3D/drei/cameras/DraiPerspectiveCamera';
/*
3D Components - Fiber
*/
// import CanvasStateObserver from '../../../components3D/fiber/canvasStateObserver/CanvasStateObserver';
/*
3D Components - main content
*/

import ContainerAbout from '../../../components3D/three/custome/containerAbout/ContainerAbout';
import ContainerIntro from '../../../components3D/three/custome/containerIntro/ContainerIntro';
import ContainerRaphael from '../../../components3D/three/custome/containerRaphael/ContainerRaphael';
/*
-------------------------------------------------------------------------
*/

const Scene = () => {
  /*
  JSX
  */
  return (
    <>
      {/*-----Camera Control Section-------------------------------- */}
      <DraiPerspectiveCamera />

      {/*-----Intro Container----------------------------------------*/}
      <ContainerIntro />

      {/*-----About Container----------------------------------------*/}
      <ContainerAbout />

      {/*-----Raphael Container----------------------------------------*/}
      <ContainerRaphael />

      {/*-----Helpers------------------------------------------------*/}
      {/* <CanvasStateObserver /> */}
    </>
  );
};

export default Scene;
