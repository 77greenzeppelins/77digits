import React from 'react';
import * as THREE from 'three';
/*
2D Components
*/
// import TestStaff from './testStaff/TestStaff';
// import ContainerRaphael from '../../comp77/containerRaphael/ContainerRaphael';
import Header from '../../comp77core/header/Header';
import InitialOverlay from '../../comp77core/initialOverlay/InitialOverlay';
import ContainerIntro2DStaff from '../../comp77/containerIntroStaff/ContainerIntro2DStaff';
import ContainerAbout2DStaff from '../../comp77/containerAboutStaff/ContainerAbout2DStaff';
import ContainerMenu2DStaff from '../../comp77/containerMenuStaff/ContainerMenu2DStaff';
import CanvasGlobalState from './CanvasGlobalState';
import ContainersToggler from '../../comp77/containersToggler/ContainersToggler';
/*
3D Components
*/
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
/*
Global State Staff
*/
import { useSnapshot } from 'valtio';
import { canvasState } from '../../../states/canvasState';
/*
Basic Data
*/
import { colorsPalette } from '../../../data/globalData';
/*
-------------------------------------------------------------------------
*/
const PageMain = () => {
  /*
  Global State Section
  */
  const canvasGlobalState = useSnapshot(canvasState);
  /*
  Fog & background color setter
  */
  const setCanvasColors = () => {
    switch (canvasGlobalState.currentContainer) {
      case 'introContainer':
        return colorsPalette.darkHexadecimal;
      case 'menuContainer':
        return colorsPalette.linenHexadecimal;
      case 'aboutContainer':
        return colorsPalette.darkHexadecimal;
      case 'raphaelContainer':
        return colorsPalette.darkHexadecimal;
      default:
        // return colorsPalette.dark;
        return colorsPalette.venusSkyHexadecimal;
    }
  };

  // if (canvasGlobalState.currentContainer !== 'aboutContainer') {
  //   return <fog attach="fog" args={[setCanvasColors(), 2, 3]} />;
  // }

  /*
  JSX
  */
  return (
    <>
      {/* <TestStaff /> */}
      <Header />
      {/*
     To switch off <InitialOverlay> change the following global props:
     currentContainer: 'introContainer',
     isInitialOverlayMounted: false,
     isCookiesPopUpMounted: false,
     */}
      {/* <InitialOverlay /> */}

      <div className="page-main__container">
        <div className="page-main__canvas">
          <Canvas
            /*
            ... 
            */
            // sRGB={true}
            /*
            suggestion from :https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance
            */
            // frameloop="demand"
            // shadows
            /*
            https://stackoverflow.com/questions/64899716/color-differences-between-threejs-vanilla-js-and-react-three-fiber-create-re
            There was a problem with "white color" on plane's background i.e. I couldn't achieve pure white, and there was a difference batween "white" on canvas smog / backgrounde and "white" on otcher objects; 
            there is one drawback though: colors are a bit flat... aluminium doesn look as impresive as it looks withou this setting
            */
            onCreated={({ gl }) => {
              gl.toneMapping = THREE.NoToneMapping;
            }}
            /*
            What "gl-shadowMaps-type" does???
            */
            // gl-shadowMaps-type={THREE.PCFSoftShadowMap}
            dpr={[1, 2]} // doubles canvas' width and size ???
            // pixelRatio={[1, 2]} //?? syntax
            // pixelRatio={window.devicePixelRatio} //?? syntax
            // camera={{ fov: 45, position: [0, 0, 3] }}
          >
            {/*-----Canvas "attributes"--------------------------------*/}
            <color attach="background" args={[setCanvasColors()]} />
            <fog attach="fog" args={[setCanvasColors(), 2, 3]} />

            {/*-----S C E N E -----------------------------------------*/}
            <Scene />
          </Canvas>
        </div>

        {/*-----Non-3D Components -------------------------------------*/}
        <ContainerIntro2DStaff />
        <ContainerAbout2DStaff />
        <ContainerMenu2DStaff />
        <ContainersToggler />
        {/* <ContainerRaphael /> */}
        <CanvasGlobalState />
      </div>
    </>
  );
};

export default PageMain;
