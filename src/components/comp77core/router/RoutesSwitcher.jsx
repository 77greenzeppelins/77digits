import React from 'react';
import { Routes, Route } from 'react-router-dom';
/*
Components
*/
import PageMain from '../../pages/pageMain/PageMain';
import PageCookies from '../../pages/pageCookies/PageCookies';
import Page404 from '../../pages/page404/Page404';
/*
Basic Data
*/
const routesConfig = [
  { path: '/', name: 'Main', Component: PageMain },
  { path: '/cookies', name: 'PageCookies', Component: PageCookies },
  { path: '*', name: 'NoMatch', Component: Page404 },
];
/*
-----------------------------------------------------------------------------
*/
const RoutesSwitcher = () => {
  /*
  JSX
  */
  return (
    // <div className="routes-container">
    <Routes>
      {routesConfig.map(({ path, name, Component }) => (
        <Route key={name} path={path} element={<Component />} />
      ))}
    </Routes>
    // </div>
  );
};

export default RoutesSwitcher;
