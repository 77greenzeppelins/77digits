import React from 'react';
import './sass/app.scss';

/*
Components
*/
import RoutesSwitcher from '../src/components/comp77core/router/RoutesSwitcher';
import TurboOverlay from './components/comp77core/turboOverlay/TurboOverlay';
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
    </>
  );
}

export default App;
