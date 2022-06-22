import React, { useLayoutEffect, useState, useEffect } from 'react';
/*
Components
*/
import RotationGraphic from './rotatedScreen/rotationGraphic/RotationGraphic';
import RotationMessage from './rotatedScreen/rotationMessage/RotationMessage';
/*
Hook
*/
import useWindowSize from '../../../hooks/useWindowSize';
/*
react-device-detect Staff
*/
import { isMobileOnly } from 'react-device-detect';

const OrientationManager = () => {
  /*
  Component State Section
  */
  //   const [state, setState] = useState({
  //     mountOrientationManager: false,
  //     onlyMobileContent: false,
  //     justSqueezdContent: false,
  //   });
  const [orientationManager, setOrientationManager] = useState(false);
  const [mobileContent, setMobileContent] = useState(false);
  /*
  useWindowSize Section
  */
  const windowSize = useWindowSize();
  /*
  useLayoutEffect Section
  */
  useLayoutEffect(() => {
    /*
    condition for mounting <OrientationManager> & displaying mobile content
    */
    if (isMobileOnly && windowSize.width > windowSize.height) {
      // console.log('OrientationManager / isMobileOnly: ', isMobileOnly);
      // console.log('OrientationManager / Is mobile + is horizontal');
      setOrientationManager(true);
      setMobileContent(true);
    } else {
      setOrientationManager(false);
      setMobileContent(false);
    }
    /*
    condition for mounting <p> & displaying message: "ciemność..."
    */
    if (windowSize.width < 250 || windowSize.height < 450) {
      setOrientationManager(true);
    } else {
      setOrientationManager(false);
    }
  }, [windowSize]);

  useEffect(() => {
    console.log('OrientationManager / orientationManager:', orientationManager);
    console.log('OrientationManager / mobileContent:', mobileContent);
  }, [orientationManager, mobileContent]);

  /*
    JSX
    */
  return (
    orientationManager && (
      <div className="orientation-manager__container">
        <div className="orientation-manager__content">
          {mobileContent ? (
            <>
              {/* <FlyingText /> */}
              <div style={{ width: '50%' }}>
                <RotationMessage />
              </div>
              <RotationGraphic mountCondition={mobileContent} />
            </>
          ) : (
            <p style={{ color: '#fff' }}>
              <span>ciemność...</span> <b /> <span>widzę ciemność!</span>
            </p>
          )}
        </div>
      </div>
    )
  );
};

export default OrientationManager;
