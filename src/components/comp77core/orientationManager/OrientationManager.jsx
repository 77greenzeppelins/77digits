import React, { useLayoutEffect, useState } from 'react';
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
  const [noMobileContent, setNoMobileContent] = useState(false);

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
      console.log('OrientationManager / isMobileOnly: ', isMobileOnly);
      console.log('OrientationManager / Is mobile + is horizontal');
      setOrientationManager(true);
      setMobileContent(true);
      /*
      How to do this with state in form of object????
      */
      //   setState({
      //     ...state,
      //     mountOrientationManager: true,
      //     onlyMobileContent: true,
      //   });
    } else {
      setOrientationManager(false);
      setMobileContent(false);
      /*
      How to accomplish this task with state in form of object????
      Error appears and suggest something wrong with "else section" 
      */
      //   setState({
      //     ...state,
      //     mountOrientationManager: false,
      //     onlyMobileContent: false,
      //   });
    }
    /*
    condition for mounting <OrientationManager> & displaying noMobile content
    */
    if (windowSize.width < 250 || windowSize.height < 450) {
      setOrientationManager(true);
      setNoMobileContent(true);
    } else {
      setOrientationManager(false);
      setNoMobileContent(true);
    }
  }, [windowSize]);

  //   useEffect(() => {
  //     console.log('OrientationManager / OrientationManager:', OrientationManager);
  //     console.log('OrientationManager / MobileContent:', MobileContent);
  //     console.log('OrientationManager / NoMobileContent:', NoMobileContent);
  //   }, [OrientationManager, MobileContent, NoMobileContent]);

  /*
    JSX
    */
  return (
    orientationManager && (
      <div className="orientation-manager__container">
        <div className="orientation-manager__content">
          {mobileContent ? (
            <p style={{ color: '#fff' }}>rotate your phone</p>
          ) : (
            <p style={{ color: '#fff' }}>strange size of your device</p>
          )}
        </div>
      </div>
    )
  );
};

export default OrientationManager;
