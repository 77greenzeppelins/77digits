import React from 'react';
import './sass/app.scss';

/*
Components
*/
import RoutesSwitcher from '../src/components/comp77core/router/RoutesSwitcher';
import TurboOverlay from './components/comp77core/turboOverlay/TurboOverlay';
import ContainerIntroPanel from './components/comp77/containerIntroStaff/ContainerIntroPanel';
import OrientationManager from './components/comp77core/orientationManager/OrientationManager';
/*
------------------------------------------------------------------------
*/
function App() {
  return (
    <>
      <RoutesSwitcher />
      <TurboOverlay />
      <OrientationManager />
      {/*-----for Canvas sake--------------------------------------------*/}
      <ContainerIntroPanel />
    </>
  );
}

export default App;
